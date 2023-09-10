"use client";
import useSWR from "swr";
import Image from "next/image";
import useSWRMutation from "swr/mutation";
import { Fragment, useEffect, useState, useRef } from "react";
import Task from "@/components/shared/task";
import Modal from "@/components/shared/modal";
import Button from "@/components/shared/button";
import { cn } from "@/lib/utils";
import api from "@/lib/api";
import { coachHome } from "@/lib/apiUrls";
import error from "@/public/assets/icons/error.svg";
import complete from "@/public/assets/icons/complete.svg";
import arrowDownSmall from "@/public/assets/icons/arrowDownSmall.svg";
import { toast } from "@/components/shared/toast/use-toast";
import SessionLoading from "../_loading/session-loading";

const requestPayload = {
  yes: 0,
  lateCancel: 2,
  giveSessionBack: 5,
};

const toastType = (type) => {
  const list = {
    success: {
      icon: complete,
      title: "Success!",
    },
    error: {
      icon: error,
      title: "Error!",
    },
  };
  return (
    <p className="inline-flex items-center">
      <Image
        alt=""
        width={24}
        height={24}
        src={list[type]?.icon}
        className="mr-3"
      />
      {list[type]?.title}
    </p>
  );
};

async function updateSessionReporting(url, { arg }) {
  try {
    const response = await api.post(
      `${url}${arg?.client_id}/${arg?.conference_call_id}/`,
      {
        coach_feedback_choice: arg?.requestPayload,
      }
    );

    toast({
      variant: "destructive",
      title: toastType("success"),
      className: "bg-green-light text-gray-veryDark",
      description: "Your request submitted successfully.",
    });

    return response?.data;
  } catch (e) {
    toast({
      variant: "destructive",
      title: toastType("error"),
      className: "bg-redLight text-gray-veryDark",
      description: e?.response?.data?.detail || "Please try again.",
    });

    throw e;
  }
}

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function SessionReporting() {
  const { data, isLoading, mutate } = useSWR(
    "/api/home/?section=sessionReporting",
    fetcher
  );
  const {
    trigger,
    isMutating,
    data: postData,
  } = useSWRMutation(coachHome?.sessionFeedback, updateSessionReporting);

  const currentModalData = useRef(null);
  const [isViewAll, setIsViewAll] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sessionReporting, setSessionReporting] = useState([]);

  const onOpenModal = () => {
    setIsModalOpen(true);
  };

  const onCloseModal = () => {
    setIsModalOpen(false);
    currentModalData.current = null;
  };

  const onHandleViewAllSessionReports = () => {
    const mock = [...data?.results];
    setIsViewAll(!isViewAll);
    setSessionReporting(!isViewAll ? mock : mock.slice(0, 2));
  };
  /* 
    target id is required.
    supported id's => yes, no, lateCancel, giveSessionBack
    */
  const onHandleSessionReporting = async (e, details) => {
    const { id } = e.target;
    const filteredData = data?.results?.filter(
      (item) => item?.id !== details?.id || currentModalData.current
    );
    const { client_id, conference_call_id } =
      details || currentModalData.current;

    if (["yes", "lateCancel", "giveSessionBack"].indexOf(id) >= 0) {
      try {
        await trigger(
          {
            client_id,
            conference_call_id,
            requestPayload: requestPayload[id],
          },
          {
            rollbackOnError: true,
          }
        );
        await mutate({
          results: [...filteredData],
          count: filteredData.length,
        });
        if (isModalOpen) {
          onCloseModal();
        }
      } catch (e) {
        if (isModalOpen) {
          onCloseModal();
        }
        throw e;
      }
    } else {
      // if target id "no"
      currentModalData.current = details;
      onOpenModal();
    }
  };

  useEffect(() => {
    if (data?.results?.length > 0 && !postData) {
      setSessionReporting(data?.results.slice(0, 2));
    }
  }, [data, postData]);

  if (isLoading) {
    return <SessionLoading />;
  }

  return (
    <>
      <h2 className="mb-4">Complete your session reporting ({data?.count})</h2>
      {sessionReporting?.map((details) => (
        <Fragment key={details.id}>
          <Task
            type={details?.identifier}
            details={details}
            loading={isMutating}
            eventHandler={(e) => onHandleSessionReporting(e, details)}
          />
        </Fragment>
      ))}
      <div className="inline-flex w-full justify-center">
        <Button
          id={isViewAll ? "viewLess" : "viewAll"}
          text={isViewAll ? "View less" : "View all"}
          icon={
            sessionReporting?.length >= 2 && (
              <Image
                src={arrowDownSmall}
                alt="expand"
                className={cn("order-2 mx-1 mt-1", {
                  "rotate-180": isViewAll,
                })}
                width={18}
                height={18}
              />
            )
          }
          variant="link"
          className="inline-flex font-semibold"
          onClick={onHandleViewAllSessionReports}
        />
      </div>
      {/* Session Reporting Modal: Completed session and late cancel session */}
      <Modal
        isOpen={isModalOpen}
        onCloseModal={onCloseModal}
        title="Session reporting"
      >
        <div className="text-center">
          <p className="body mb-4 !text-navy">
            <span className="block">Please tell us more about the session</span>
            <span>
              Please reach out to your coaching guide if you need help selecting
              a response.
            </span>
          </p>
          <div className="mb-4">
            <Button
              id="lateCancel"
              text="Report this session as a late cancel"
              variant="secondary"
              className="mb-4"
              disabled={isMutating}
              onClick={onHandleSessionReporting}
            />
            <Button
              id="giveSessionBack"
              text="This was a late cancel or didn't take place, give the session back to the client"
              variant="secondary"
              disabled={isMutating}
              onClick={onHandleSessionReporting}
            />
          </div>
        </div>
      </Modal>
    </>
  );
}
