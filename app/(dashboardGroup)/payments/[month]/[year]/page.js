"use client";
import React, { useMemo } from "react";
import useSWR from "swr";
import { useParams } from "next/navigation";
import Table from "@/components/shared/table";
import { MONTHS } from "@/lib/constant/calendar";
import { createColumnHelper } from "@tanstack/react-table";
import Link from "next/link";
import { payments } from "@/lib/apiUrls";

const PaymentDetailsPage = () => {
  const params = useParams();
  const { month, year } = params;
  const { data, isLoading, error } = useSWR(
    payments.getPaymentDetail({ month, year })
  );
  const columnHelper = createColumnHelper();
  const columns = useMemo(
    () => [
      columnHelper.accessor("client", {
        header: () => <span>Client Name</span>,
        enableSorting: true,
      }),
      columnHelper.accessor("session_date", {
        header: () => <span>Session Date</span>,
        enableSorting: true,
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("completed_calls_num", {
        header: () => <span>Calls Completed</span>,
        enableSorting: true,
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("coaching_for_client", {
        header: () => <span>$ Coaching Owed</span>,
        enableSorting: true,
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("manager_3_way_calls", {
        header: () => <span>$ 3 Way Calls Owed</span>,
        enableSorting: true,
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("coach_other_amount", {
        header: () => <span>$ Other Amount</span>,
        enableSorting: true,
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("month_total_for_client", {
        header: () => <span>$ Total Owed</span>,
        enableSorting: true,
        cell: (info) => info.getValue(),
      }),
    ],
    [columnHelper]
  );

  const diffDataColumns = useMemo(
    () => [
      columnHelper.accessor("client", {
        header: () => <span>Client Name</span>,
        enableSorting: true,
      }),
      columnHelper.accessor("start_date", {
        header: () => <span>Start Date</span>,
        enableSorting: true,
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("first_month_pay_v1", {
        header: () => <span>1st Month V1 amount</span>,
        enableSorting: true,
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("calls_completed", {
        header: () => <span>Calls Completed</span>,
        enableSorting: true,
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("first_month_pay_v2", {
        header: () => <span>1st Month V2 amount</span>,
        enableSorting: true,
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("diff", {
        header: () => <span>Difference</span>,
        enableSorting: true,
        cell: (info) => info.getValue(),
      }),
    ],
    [columnHelper]
  );

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-11 mb-4 w-full">
        <Table
          data={data?.rows || []}
          columns={columns}
          title={`Compensation Report Detail for ${MONTHS[month]} ${year}`}
          isSearchable
          searchPlaceholder="Search by client name"
          loading={isLoading}
        />
      </div>
      {data?.total_owed && (
        <div className="col-span-11 mb-4 w-full">
          <p className="text-base font-bold">{`Total owed is $${data?.total_owed}`}</p>
        </div>
      )}
      {data?.diff_data?.length > 0 ? (
        <div className="col-span-11 w-full">
          <Table
            data={data?.diff_data || []}
            columns={diffDataColumns}
            title={`Difference`}
            isSearchable
            searchPlaceholder="Search by client name"
            loading={isLoading}
          />
        </div>
      ) : null}
    </div>
  );
};

export default PaymentDetailsPage;
