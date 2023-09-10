"use client";
import Image from "next/image";
import PropTypes from "prop-types";
import useSWR, { useSWRConfig } from "swr";
import { Fragment, useEffect, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import Card from "../shared/card";
import Button from "../shared/button";
import { cn } from "@/lib/utils";
import Modal from "../shared/modal";
import addIcon from "@/public/assets/icons/add.svg";
import MenuKabob from "@/public/assets/icons/menu-kabob.svg";
import { toast } from "@/components/shared/toast/use-toast";
import arrowDownSmall from "@/public/assets/icons/arrowDownSmall.svg";
import { clientDashboard } from "@/lib/apiUrls";
import { useParams } from "next/navigation";
import api from "@/lib/api";
import Skeleton from "react-loading-skeleton";

/*
    Object key should match with respective button id 
*/
const typeBasedContent = {
  cancelAllSessions: {
    title: "Cancel all sessions",
    description:
      "Confirm to cancel all sessions. Your client will be notified via email.",
  },
  reportThreeWaySession: {
    title: "Report 3 way session",
    description:
      "Confirm to cancel all sessions. Your client will be notified via email.",
  },
  scheduleSession: {
    title: "Schedule a session",
    description:
      "Confirm to cancel all sessions. Your client will be notified via email.",
  },
};

export default function UpcomingSessionList({ nextSessionMutating }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [btnVariant, setBtnVariant] = useState("");
  const [modalContent, setModalContent] = useState({});
  const [isViewAll, setIsViewAll] = useState(false);
  const [upcomingSession, setUpcomingSession] = useState([]);
  const params = useParams();
  const { mutate } = useSWRConfig();
  const { id: clientId } = params;
  const {
    data,
    error,
    isLoading,
    mutate: upcomingSessionsMutate,
    isValidating: upcomingSessionsValidating,
  } = useSWR(clientDashboard.allUpcomingSessions(clientId));

  const handleCancel = async (sessionId) => {
    try {
      let response = await api.delete(
        clientDashboard.cancelSession(clientId, sessionId)
      );
      if (response.status === 200) {
        upcomingSessionsMutate();
        mutate(clientDashboard.nextSession(clientId));
      }
    } catch (e) {
      return toast({
        title: e?.detail || "Something went wrong",
        variant: "destructive",
      });
    }
  };

  const onOpenModal = (e) => {
    setModalContent(typeBasedContent?.[e.target.id]);
    setBtnVariant(e.target.id);
    setIsModalOpen(true);
  };

  const onCloseModal = () => {
    setIsModalOpen(false);
  };

  const onHandleViewAll = () => {
    setIsViewAll(!isViewAll);
    setUpcomingSession(!isViewAll ? data : data.slice(0, 4));
  };

  const handleModalSubmit = async () => {
    if (btnVariant === "cancelAllSessions") {
      try {
        let response = await api.get(
          clientDashboard.cancelAllUpcomingSessions(clientId)
        );
        if (response.status === 200) {
          upcomingSessionsMutate();
          mutate(clientDashboard.nextSession(clientId));
          setIsModalOpen(false);
        }
      } catch (e) {
        return toast({
          title: e?.detail || "Something went wrong",
          variant: "destructive",
        });
      }
    }
  };

  useEffect(() => {
    setUpcomingSession(data?.slice(0, 4));
  }, [data]);

  if (isLoading) {
    return (
      <Card className="w-full px-4 pb-9">
        <div className="grid w-full grid-cols-2">
          <div></div>
          <div className="my-4 grid w-full grid-cols-3 justify-end gap-1">
            <Skeleton className="h-10  max-w-xs" />
            <Skeleton className="h-10  max-w-xs" />
            <Skeleton className="h-10 max-w-xs" />
          </div>
        </div>

        {Array(3)
          .fill("")
          .map((_, index) => (
            <Fragment key={index}>
              <Card className="mb-3.5 mt-0.5  w-full items-center justify-between px-4 py-6">
                <div>
                  <Skeleton />
                </div>
              </Card>
            </Fragment>
          ))}
        <div className="mt-5 w-full justify-center">
          {" "}
          <Skeleton />
        </div>
      </Card>
    );
  }

  return (
    <>
      {upcomingSession?.length === 0 ? (
        <Card className="w-full p-6">
          <p className="text-base">You have no upcoming sessions</p>
        </Card>
      ) : (
        <Card className="w-full px-4 pb-9 pt-5">
          <div className="mb-4 flex flex-col items-stretch justify-end md:flex-row">
            <Button
              id="cancelAllSessions"
              text="Cancel all sessions"
              variant="secondary"
              onClick={onOpenModal}
              className="w-full font-semibold lg:w-max"
            />
            <Button
              id="reportThreeWaySession"
              text="Report 3 way"
              variant="secondary"
              onClick={onOpenModal}
              className="my-4 w-full font-semibold md:mx-2 md:my-0 lg:my-0 lg:w-max"
            />
            <Button
              id="scheduleSession"
              text="Schedule session"
              variant="secondary"
              onClick={onOpenModal}
              className="inline-flex w-full items-center justify-center align-middle font-semibold lg:w-max"
              icon={
                <span className="mr-2.5">
                  <Image src={addIcon} alt="" width={18} height={18} />
                </span>
              }
            />
          </div>
          {upcomingSession?.map((details) => (
            <Fragment key={details?.id}>
              <Card className="mb-3.5 mt-0.5 inline-flex w-full items-center justify-between px-4 py-6">
                <div>
                  <p>{details?.time_slot}</p>
                </div>
                <Popover className="relative">
                  {({ open }) => (
                    <>
                      <Popover.Button
                        className={cn({
                          "focus:outline-none focus-visible:!ring-transparent":
                            open,
                        })}
                      >
                        <Image src={MenuKabob} alt="" width={24} height={24} />
                      </Popover.Button>
                      <Transition
                        enter="transition duration-100 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-75 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                      >
                        <Popover.Panel className="absolute left-1/2 top-1/4 z-10 mt-3 w-screen max-w-xs -translate-x-1/2 -translate-y-1/4">
                          <Button
                            id="cancelSession"
                            text="Cancel session"
                            variant="secondary"
                            onClick={() => handleCancel(details?.id)}
                            className="rounded-xs border border-blue-light py-4 pl-4 pr-12 text-gray-veryDark hover:text-gray-veryDark"
                          />
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>
              </Card>
            </Fragment>
          ))}
          {data?.length > 4 && (
            <div className="mt-5 inline-flex w-full justify-center">
              <Button
                id={isViewAll ? "viewLess" : "viewAll"}
                text={`View ${isViewAll ? "less" : "all"} upcoming sessions`}
                icon={
                  <Image
                    src={arrowDownSmall}
                    alt="expand"
                    className={cn("order-2 mx-1 mt-1", {
                      "rotate-180": isViewAll,
                    })}
                    width={18}
                    height={18}
                  />
                }
                variant="link"
                className="inline-flex font-semibold"
                onClick={onHandleViewAll}
              />
            </div>
          )}
        </Card>
      )}
      {/* Confirmation Modal */}
      <Modal
        isOpen={isModalOpen}
        onCloseModal={onCloseModal}
        title={modalContent?.title}
      >
        <div className="text-center">
          <p className="body mb-6 !text-navy">
            <span>{modalContent?.description}</span>
          </p>
          <div className="mb-3.5">
            <Button
              id="confirm"
              text="Confirm"
              onClick={handleModalSubmit}
              className="font-semibold"
            />
          </div>
        </div>
      </Modal>
    </>
  );
}

UpcomingSessionList.propTypes = {
  data: PropTypes.array,
};
