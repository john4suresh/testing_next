"use client";
import useSWR from "swr";
import Link from "next/link";
import React, { useMemo, useEffect } from "react";
import { Tab } from "@headlessui/react";
import Table from "@/components/shared/table";
import ClientsTranslations from "./translations";
import { cn } from "@/lib/utils";
import { ClientCoachCount } from "./client-coach-count";
import { createColumnHelper } from "@tanstack/react-table";
import { useRouter, useSearchParams } from "next/navigation";
import Skeleton from "react-loading-skeleton";
import Alert from "@/components/shared/alert";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const tabs = [
  "CLIENTS WITH SCHEDULED SESSIONS",
  "CLIENTS WITHOUT ANY FUTURE SESSIONS SCHEDULED",
];

const Clients = () => {
  const router = useRouter();
  const selectedIndex = useSearchParams()?.get("tab") ?? 0;
  const { data, error, isLoading } = useSWR(
    `/api/clients?tab=${selectedIndex}`,
    fetcher
  );

  const {
    headerTitle,
    description1,
    description2,
    description3,
    progressTableHeader,
    needToScheduleHeader,
  } = ClientsTranslations;

  const columnHelper = createColumnHelper();
  const clientProgressColumns = useMemo(
    () => [
      columnHelper.accessor("name", {
        header: () => <span>Client</span>,
        enableSorting: true,
        cell: ({ getValue, row: { original } }) => (
          <Link href={`client/${original?.id}`} className="text-blue-light">
            {getValue()}
          </Link>
        ),
      }),
      columnHelper.accessor("company_name", {
        header: () => <span>Organization</span>,
        enableSorting: true,
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("first_session_date", {
        header: () => <span>First session date</span>,
        enableSorting: true,
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("next_session_date", {
        header: () => <span>Next session</span>,
        enableSorting: true,
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("engagement_end_date", {
        header: () => <span>Engagement end date</span>,
        enableSorting: true,
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("re_assessment", {
        header: () => <span>Remeasurement</span>,
        enableSorting: true,
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("session_info.completed_sessions_num", {
        header: () => <span>Sessions completed</span>,
        enableSorting: true,
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("session_info.remaining_sessions_num", {
        header: () => <span>Sessions remaining</span>,
        enableSorting: true,
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("focus_areas", {
        header: () => <span>Focus areas</span>,
        enableSorting: true,
        cell: (info) => info.getValue(),
      }),
    ],
    [columnHelper]
  );
  const clientWithoutFutureSessionsColumns = useMemo(
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
      columnHelper.accessor("company_name", {
        header: () => <span>Organization</span>,
        enableSorting: true,
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("last_session_date", {
        header: () => <span>Last session date</span>,
        enableSorting: true,
        cell: (info) => info.getValue(),
      }),
    ],
    [columnHelper]
  );
  useEffect(() => {
    router.push(`/clients?tab=${selectedIndex}`);
  }, [router, selectedIndex]);

  if (error) {
    return (
      <div className="mx-auto w-1/4 px-4 py-2">
        <Alert type="error">{error}</Alert>
      </div>
    );
  }
  if (isLoading) {
    return (
      <div className="mr-4">
        <Skeleton count={12} className="mt-5" />
      </div>
    );
  }

  return (
    <div>
      <h1 className="mb-10 text-center">{headerTitle}</h1>
      <Tab.Group
        selectedIndex={selectedIndex}
        onChange={() => {
          router.replace(`/clients?tab=${selectedIndex}`);
        }}
      >
        <Tab.List className="mx-auto flex max-w-5xl items-center justify-center space-x-1 p-1">
          {tabs.map((tab, index) => (
            <Tab
              key={tab}
              className={({ selected }) =>
                cn(
                  "hover:text-blue- w-full py-2.5 text-center text-base font-medium uppercase leading-5",
                  "outline-none",
                  selected
                    ? "border-b-[3px] border-blue-light text-blue-light"
                    : "text-gray-veryDark hover:text-blue-dark"
                )
              }
              as={Link}
              href={`/clients?tab=${index}`}
            >
              {tab}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-[62px]">
          <Tab.Panel>
            <ClientCoachCount />
            <Table
              title={progressTableHeader}
              columns={clientProgressColumns}
              data={data?.results}
              searchPlaceholder="Search by name or organization"
              isSearchable
              customStyles="mr-4 mt-6"
            />
          </Tab.Panel>
          <Tab.Panel>
            <ClientCoachCount />
            <Table
              title={needToScheduleHeader}
              columns={clientWithoutFutureSessionsColumns}
              data={data?.results}
              customStyles="mr-4 mt-8"
            />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default Clients;
