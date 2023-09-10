import { useMemo, useState } from "react";
import { createColumnHelper } from "@tanstack/react-table";
import Image from "next/image";
import MenuKabobVertical from "@/public/assets/icons/menu-kabob-vertical.svg";
import Table, { SelectColumnFilter } from "@/components/shared/table";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/shared/popover";
import Modal from "@/components/shared/modal";
import Button from "@/components/shared/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/shared/select-field";

const mockData = [
  {
    category: "Women in leadership",
    resource_title:
      "Let Your Customers Segment Themselves by What They're Willing to Pay",
    shared_date: "Jul. 5, 2023",
    status: "Viewed",
    helpful: "No",
  },
  {
    category: "Coaching",
    resource_title: "Let Your Themselves by What They're Willing to Pay",
    shared_date: "Jul. 5, 2023",
    status: "Viewed",
    helpful: "No",
  },
  {
    category: "Coaching",
    resource_title: "Let Your Customers Segment Themselves by What T",
    shared_date: "Jul. 5, 2023",
    status: "Viewed",
    helpful: "No",
  },
];

export default function SharedResources() {
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isReportOpen, setIsReportOpen] = useState(false);
  const columnHelper = createColumnHelper();
  const columns = useMemo(
    () => [
      columnHelper.accessor("category", {
        header: () => <span>Category</span>,
        enableSorting: true,
        enableColumnFilter: true,
        meta: {
          filterByCategoryComponent: (setFilterValue) => {
            return (
              <Select onValueChange={setFilterValue}>
                <SelectTrigger className="my-4 h-12 w-full max-w-xs rounded-xs border border-gray-medium p-3 data-[placeholder]:italic">
                  <SelectValue placeholder="Filter by category" />
                </SelectTrigger>
                <SelectContent>
                  {["Coaching", "Women in leadership"].map((c) => (
                    <SelectItem key={c} value={c}>
                      {c}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            );
          },
        },
      }),
      columnHelper.accessor("resource_title", {
        header: () => <span>Resource Title</span>,
        enableSorting: true,
      }),
      columnHelper.accessor("shared_date", {
        header: () => <span>Shared Date</span>,
        enableSorting: true,
      }),
      columnHelper.accessor("status", {
        header: () => <span>Status</span>,
        enableSorting: true,
      }),
      columnHelper.accessor("helpful", {
        header: () => <span>Helpful</span>,
        enableSorting: true,
      }),
      columnHelper.accessor("actions", {
        header: () => <span>Actions</span>,
        cell: () => (
          <div>
            <Popover>
              <PopoverTrigger asChild>
                <button>
                  <Image
                    src={MenuKabobVertical}
                    alt="actions"
                    width={24}
                    height={24}
                    className="mx-auto"
                  />
                </button>
              </PopoverTrigger>
              <PopoverContent
                className="flex flex-col gap-4 rounded-xs border border-gray-medium"
                align="start"
              >
                <button>View</button>
                <button onClick={() => setIsDeleteOpen(true)}>Delete</button>
                <button onClick={() => setIsReportOpen(true)}>Report</button>
              </PopoverContent>
            </Popover>
          </div>
        ),
      }),
    ],
    [columnHelper]
  );

  return (
    <>
      <p className="mb-4">
        Shared resources populate on your client&apos;s dashboard under “To
        Dos”.
      </p>
      <Table
        data={mockData || []}
        columns={columns}
        searchPlaceholder="Search resources"
        isSearchable
        customStyles="p-0 border-none"
        className="p-0"
      />
      <Modal
        isOpen={isDeleteOpen}
        onCloseModal={() => setIsDeleteOpen(false)}
        title="Are you sure you want to delete this resource?"
      >
        <div className="text-center">
          <p>
            Deleteing this will remove this from your client&apos;s resources.
          </p>
          <div className="flex justify-center gap-4 py-6">
            <Button
              variant="secondary"
              text="Cancel"
              onClick={() => setIsDeleteOpen(false)}
              id="cancel"
            />
            <Button text="Yes, delete resource" id="delete-resource" />
          </div>
        </div>
      </Modal>
      <Modal
        isOpen={isReportOpen}
        onCloseModal={() => setIsReportOpen(false)}
        title="Report this resource"
      >
        <div className="text-center">
          <p>
            Reporting this resource helps to let us know that the resource is
            not available. We will have it flagged for our internal review.
            Thanks for your feedback.
          </p>
          <div className="flex justify-center gap-4 py-6">
            <Button
              variant="secondary"
              text="Cancel"
              onClick={() => setIsReportOpen(false)}
              id="cancel"
            />
            <Button text="Yes, report resource" id="report-resource" />
          </div>
        </div>
      </Modal>
    </>
  );
}
