"use client";
import useSWR from "swr";
import useSWRMutation from "swr/mutation";
import Link from "next/link";
import Image from "next/image";
import { Tab } from "@headlessui/react";
import { createColumnHelper } from "@tanstack/react-table";
import React, { useState, useMemo, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import Loading from "./loading";
import { cn } from "@/lib/utils";
import Table from "@/components/shared/table";
import Modal from "@/components/shared/modal";
import Select from "@/components/shared/select";
import Button from "@/components/shared/button";
import AllSessionsStrings from "./translations";
import calendar from "@/public/assets/icons/calendar.svg";
import Alert from "@/components/shared/alert";
import { allSessions } from "@/lib/apiUrls";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import api from "@/lib/api";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

async function updateUser(url, { arg }) {
  try {
    const result = await api.post(`${url}${arg?.postId}/`, arg.payload);
    return result?.data;
  } catch (e) {
    throw e?.response?.data?.detail || e?.message;
  }
}

const schema = yup
  .object({
    sessionStatus: yup.string().required("session status is a required field"),
  })
  .required();

const AllSessions = () => {
  const router = useRouter();
  const selectedIndex = useSearchParams()?.get("tab") ?? 0;
  const { data, error, isLoading } = useSWR(
    `/api/all-sessions?tab=${selectedIndex}`,
    fetcher
  );
  const {
    handleSubmit,
    control,
    reset,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      sessionStatus: "",
    },
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  const { headerTitle, headerDescription } = AllSessionsStrings;
  const tabs = ["UPCOMING SESSIONS", "PAST SESSIONS"];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [apiError, setApiError] = useState(null);
  const { isMutating, trigger } = useSWRMutation(
    allSessions?.updateCallStatus,
    updateUser
  );

  const onOpenModal = (value) => {
    setSelectedItem(value);
    setIsModalOpen(true);
  };

  const onCloseModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
    reset({
      sessionStatus: "",
    });
    setApiError(null);
  };

  const onSubmitCallStatus = async (data) => {
    const payload = {
      previous_state: selectedItem?.status,
      [data?.sessionStatus]: true,
    };
    try {
      await trigger({
        payload,
        postId: selectedItem?.id,
      });
    } catch (e) {
      setApiError(e);
    }
  };

  const columnHelper = createColumnHelper();
  const upcomingSessionsColumns = useMemo(
    () => [
      columnHelper.accessor("client_name", {
        header: () => <span>Client</span>,
        enableSorting: true,
        cell: ({ getValue, row: { original } }) => (
          <Link
            href={`client/${original?.client_id}`}
            className="text-blue-light"
          >
            {getValue()}
          </Link>
        ),
      }),
      columnHelper.accessor("organization", {
        header: () => <span>Organization</span>,
        enableSorting: true,
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("time_stamp", {
        header: () => <span>Timestamp</span>,
        enableSorting: true,
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("scheduled_by", {
        header: () => <span>Scheduled by</span>,
        enableSorting: true,
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("status", {
        header: () => <span>Status</span>,
        enableSorting: true,
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("engagement_end_date", {
        header: () => <span>Engagement Date</span>,
        enableSorting: true,
        cell: (info) => info.getValue(),
      }),
    ],
    [columnHelper]
  );

  const previousSessionsColumns = useMemo(
    () => [
      columnHelper.accessor("client_name", {
        header: () => <span>Client</span>,
        enableSorting: true,
        cell: ({ getValue, row: { original } }) => (
          <Link
            href={`client/${original?.client_id}`}
            className="text-blue-light"
          >
            {getValue()}
          </Link>
        ),
      }),
      columnHelper.accessor("organization", {
        header: () => <span>Organization</span>,
        enableSorting: true,
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("time_stamp", {
        header: () => <span>Timestamp</span>,
        enableSorting: true,
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("scheduled_by", {
        header: () => <span>Scheduled by</span>,
        enableSorting: true,
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("status", {
        header: () => <span>Status</span>,
        enableSorting: true,
        cell: ({ getValue, row: { original } }) => {
          const value = getValue();
          if (value === "Completed" || value === "Late Cancel") {
            return (
              <Button
                text={value}
                variant="link"
                onClick={() => {
                  onOpenModal(original);
                }}
              />
            );
          }
          return value;
        },
      }),
      columnHelper.accessor("engagement_end_date", {
        header: () => <span>Engagement Date</span>,
        enableSorting: true,
        cell: (info) => info.getValue(),
      }),
    ],
    [columnHelper]
  );

  useEffect(() => {
    router.push(`/all-sessions?tab=${selectedIndex}`);
  }, [router, selectedIndex]);

  if (error) {
    return (
      <div className="mx-auto w-1/4 px-4 py-2">
        <Alert type="error">{error}</Alert>
      </div>
    );
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="mr-4 rounded-md border border-gray-medium bg-white pt-12">
      <h1 className="mb-4 text-center">{headerTitle}</h1>
      <p className="text-center">{headerDescription}</p>
      <div className="w-full px-2 pt-6 sm:px-0">
        <Tab.Group
          selectedIndex={selectedIndex}
          onChange={() => {
            router.replace(`/all-sessions?tab=${selectedIndex}`);
          }}
        >
          <Tab.List className="mx-auto flex max-w-md items-center justify-center space-x-1 p-1">
            {tabs.map((tab, index) => (
              <Tab
                key={tab}
                className={({ selected }) =>
                  cn(
                    "w-full py-2.5 text-center text-base font-medium uppercase leading-5 hover:text-blue-light",
                    "outline-none",
                    selected
                      ? "border-b-[3px] border-blue-light text-blue-light"
                      : "text-gray-veryDark hover:text-blue-dark"
                  )
                }
                as={Link}
                href={`/all-sessions?tab=${index}`}
              >
                {tab}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-8">
            <Tab.Panel>
              <Table
                columns={upcomingSessionsColumns}
                data={data?.results}
                searchPlaceholder="Search clients"
                isSearchable
                customStyles="mr-4 mt-6 border-none"
                isDownloadEnabled
                downloadFileName="upcoming_sessions.csv"
              />
            </Tab.Panel>
            <Tab.Panel>
              <Table
                columns={previousSessionsColumns}
                data={data?.results}
                searchPlaceholder="Search clients"
                isSearchable
                customStyles="mr-4 mt-6 border-none"
                isDownloadEnabled
                downloadFileName="previous_sessions.csv"
              />
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
        <Modal
          isOpen={isModalOpen}
          onCloseModal={onCloseModal}
          title="Adjust Session Status"
        >
          {apiError && (
            <div className="mx-auto w-10/12 px-4 py-2">
              <Alert type="error">{apiError}</Alert>
            </div>
          )}
          <div className="mx-6 flex flex-col items-center">
            <Image
              src={calendar}
              width={24}
              height={24}
              alt="Ascending"
              className="mb-2"
            />
            <div className="mb-5 text-center">
              <p className="font-bold text-blue-light">
                {selectedItem?.client_name}, {selectedItem?.organization}
              </p>
              <p>{selectedItem?.time_slot_formatted}</p>
            </div>
            <p className="mb-9 text-center">
              You previously marked this session as a &lt;&lt;
              <span className="font-semibold">{selectedItem?.status}</span>
              &gt;&gt;. If you are changing the status to give the session back
              to your client and have already been reimbursed, then this session
              will be deducted from your next month&apos;s payment to credit it
              back for rescheduling. You will see an adjustment for this in your
              next Payment Report.
            </p>
            <form
              onSubmit={handleSubmit(onSubmitCallStatus)}
              className="w-1/2 text-center"
            >
              <Controller
                name="sessionStatus"
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    name="sessionStatus"
                    options={[
                      selectedItem?.status === "Completed"
                        ? {
                            label: "Late cancel",
                            value: "late_cancel",
                          }
                        : {
                            label: "Completed",
                            value: "completed",
                          },
                      {
                        label: "Cancelled",
                        value: "cancelled",
                      },
                    ]}
                    placeholder="Change session status"
                    isError={errors?.sessionStatus?.message}
                    errorMessage={errors?.sessionStatus?.message}
                    className="mb-2 w-full rounded-sm border border-gray-medium"
                  />
                )}
              />
              <div className="mt-12">
                <Button text="Submit" type="submit" loading={isMutating} />
              </div>
            </form>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default AllSessions;
