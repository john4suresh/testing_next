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
import TableFacetedFilter from "@/components/shared/table/table-faceted-filter";

const mockData = [
  {
    source: "Percipio",
    resource_title:
      "Let Your Customers Segment Themselves by What They're Willing to Pay",
    type: "Course",
  },
  {
    source: "Percipio",
    resource_title: "Decisions Don't wait",
    type: "Link",
  },
];

const type = ["Course", "Link"];

export default function SpecializedCoaching() {
  const columnHelper = createColumnHelper();
  const columns = useMemo(
    () => [
      columnHelper.accessor("source", {
        header: () => <span>Source</span>,
        enableSorting: true,
      }),
      columnHelper.accessor("resource_title", {
        header: () => <span>Resource Title</span>,
        enableSorting: true,
      }),
      columnHelper.accessor("type", {
        header: () => <span>Type</span>,
        enableSorting: true,
        enableColumnFilter: true,
        filterFn: (row, id, value) => value.includes(row.getValue(id)),
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
                <button>Share</button>
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
        We suggest sharing at least 2 resources following each session. These
        resources were curated for the Specialized Topic. Use the search to look
        for specific titles or keywords. Shared resources will populate on your
        client&apos;s dashboard under the “To Dos” for their next session.
      </p>
      <Table
        data={mockData || []}
        columns={columns}
        searchPlaceholder="Search resources"
        isSearchable
        customStyles="p-0 border-none"
        className="p-0"
      />
    </>
  );
}
