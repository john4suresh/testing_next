import { useMemo, useState, Fragment } from "react";
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
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/shared/dropdown-menu";
import TableFacetedFilter from "@/components/shared/table/table-faceted-filter";

const mockData = [
  {
    category: "Women in leadership",
    resource_title:
      "Let Your Customers Segment Themselves by What They're Willing to Pay",
    source: "Company",
    type: "Link",
  },
  {
    category: "Coaching",
    resource_title: "3 Useful Metrics to Gauge Your SEM Success",
    source: "Company",
    type: "Link",
  },
  {
    category: "Coaching",
    resource_title: "The Data Mining Business Case: Here's What to Include",
    source: "Company",
    type: "Article",
  },
  {
    category: "Coaching",
    resource_title: "The Data Mining Business Case: Here's What to Include",
    source: "Company",
    type: "Audio book",
  },
  {
    category: "Coaching",
    resource_title: "The Data Mining Business Case: Here's What to Include",
    source: "Company",
    type: "Book",
  },
  {
    category: "Coaching",
    resource_title: "The Data Mining Business Case: Here's What to Include",
    source: "Percipio",
    type: "Book",
  },
  {
    category: "Coaching",
    resource_title: "The Data Mining Business Case: Here's What to Include",
    source: "HBR (Premium)",
    type: "Book",
  },
];

const source = ["Company", "HBR (Premium)", "Percipio"];
const type = ["Link", "Case", "Book", "Audio Book"];

export default function SuggestedResources() {
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
                <SelectTrigger className="mx-0 my-4 h-12 w-full max-w-xs rounded-xs border border-gray-medium p-3 data-[placeholder]:italic">
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
      columnHelper.accessor("source", {
        header: () => <span>Source</span>,
        enableSorting: true,
        enableColumnFilter: true,
        filterFn: (rows, id, value) => {
          return value.includes(rows.getValue(id));
        },
        meta: {
          filterBySourceComponent: (setFilterValue, table) => {
            return (
              <TableFacetedFilter
                options={source}
                column={table?.getColumn("source")}
                onFilter={setFilterValue}
                placeholder="Filter by source"
              />
            );
          },
        },
      }),
      columnHelper.accessor("resource_title", {
        header: () => <span>Resource Title</span>,
        enableSorting: true,
      }),
      columnHelper.accessor("type", {
        header: () => <span>Type</span>,
        enableSorting: true,
        enableColumnFilter: true,
        filterFn: (row, id, value, asdsad, asdsaddd) => {
          return value.includes(row.getValue(id));
        },
        meta: {
          filterByTypeComponent: (setFilterValue, table) => {
            return (
              <TableFacetedFilter
                options={type}
                column={table?.getColumn("type")}
                onFilter={setFilterValue}
                placeholder="Filter by type"
              />
            );
          },
        },
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
        We suggest sharing at least 2 resources following each session from your
        client&apos;s selected Focus Areas. Use the search to look for specific
        titles or keywords. Shared resources will populate on your client&apos;s
        dashboard under the “To Dos” for their next session. Group resources are
        documents the organization has provided for you to share with your
        client.
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
