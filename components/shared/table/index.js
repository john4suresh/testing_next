"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import arrowRight from "@/public/assets/icons/arrowRight.svg";
import arrowLeft from "@/public/assets/icons/arrowLeft.svg";
import sortUnsorted from "@/public/assets/icons/sortUnsorted.svg";
import upArrowSort from "@/public/assets/icons/upArrowSort.svg";
import downArrowSort from "@/public/assets/icons/downArrowSort.svg";
import download from "@/public/assets/icons/download.svg";
import PropTypes from "prop-types";
import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  getFilteredRowModel,
} from "@tanstack/react-table";
import { rankItem } from "@tanstack/match-sorter-utils";
import SearchInput from "@/components/shared/search-input";
import Button from "@/components/shared/button";
import Papa from "papaparse";
import TableLoader from "./table-loader";
import { cn } from "@/lib/utils";
export default function Table({
  title = "",
  data,
  columns,
  customStyles = "",
  isSearchable = false,
  searchPlaceholder = "",
  isDownloadEnabled = false,
  downloadFileName = "data.csv",
  pagination = true,
  pageSize = 10,
  options = [5, 10, 15],
  loading,
  className,
}) {
  const [sorting, setSorting] = useState([]);
  const [globalFilter, setGlobalFilter] = useState("");
  const [columnFilters, setColumnFilters] = useState([]);

  const globalFilterFn = (row, columnId, value, addMeta) => {
    const itemRank = rankItem(row.getValue(columnId), value);
    addMeta({
      itemRank,
    });
    return itemRank.passed;
  };

  const tableInstance = useReactTable({
    columns,
    data,
    state: {
      sorting,
      globalFilter,
      columnFilters,
    },
    enableGlobalFilter: true,
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn: globalFilterFn,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnFiltersChange: setColumnFilters,
  });
  const { getHeaderGroups, getRowModel } = tableInstance;
  const getCurrentPageMin = () => {
    const { pageIndex, pageSize } = tableInstance.getState().pagination;
    return pageIndex * pageSize + 1;
  };
  const getCurrentPageMax = () => {
    const { pageIndex, pageSize } = tableInstance.getState().pagination;
    return (pageIndex + 1) * pageSize > data?.length
      ? data?.length
      : (pageIndex + 1) * pageSize;
  };

  useEffect(() => {
    tableInstance.setPageSize(pageSize);
  }, [tableInstance, pageSize]);

  return (
    <div
      className={cn(
        customStyles,
        "rounded-md border border-gray-medium bg-white"
      )}
    >
      {title && (
        <h2
          className="border-b-[1px] border-gray-medium p-4"
          data-automation-id="table-title"
        >
          {title}
        </h2>
      )}
      <div className={cn("w-full p-4", className)}>
        <div className="flex justify-between">
          {isSearchable && (
            <div className={isDownloadEnabled ? "w-2/3" : "w-full"}>
              <SearchInput
                placeholder={searchPlaceholder}
                value={globalFilter ?? ""}
                onChange={(value) => setGlobalFilter(String(value))}
              />
            </div>
          )}
          {isDownloadEnabled && (
            <div className="flex items-center">
              <Button
                id="download"
                text="Download CSV"
                variant="secondary"
                size="small"
                icon={
                  <Image
                    src={download}
                    alt="Download"
                    className="mr-2"
                    width={18}
                    height={18}
                  />
                }
                className="inline-flex items-center font-semibold"
                onClick={() => {
                  const csv = Papa.unparse(data);
                  const blob = new Blob([csv], {
                    type: "text/csv;charset=utf-8;",
                  });
                  const url = URL.createObjectURL(blob);
                  const link = document.createElement("a");
                  link.setAttribute("href", url);
                  link.setAttribute("download", downloadFileName);
                  link.style.display = "none";
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
              />
            </div>
          )}
        </div>
        <div className="flex gap-6">
          {getHeaderGroups().map((headerGroup) =>
            headerGroup.headers.map((header) => {
              const accessorKey = header.column.columnDef.accessorKey;
              const filterComponent = header.column.getCanFilter()
                ? header.column.columnDef?.meta?.[
                    `filterBy${accessorKey
                      .charAt(0)
                      .toUpperCase()}${accessorKey.slice(1)}Component`
                  ](header.column.setFilterValue, tableInstance)
                : null;
              return filterComponent;
            })
          )}
        </div>
        <div className="overflow-x-auto">
          <table
            className="sticky w-full table-auto border-separate border-spacing-y-4"
            data-automation-id="table"
          >
            <thead>
              {getHeaderGroups().map((headerGroup) => {
                return (
                  <tr key={headerGroup.id} className="bg-gray-light">
                    {headerGroup.headers.map((header) => (
                      <th key={header.id} className="p-4">
                        {header.isPlaceholder ? null : (
                          <div
                            {...{
                              className: header.column.getCanSort()
                                ? "cursor-pointer select-none flex items-center"
                                : "",
                              onClick:
                                header.column.columnDef.enableSorting &&
                                header.column.getToggleSortingHandler(),
                            }}
                          >
                            {flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                            {header.column.columnDef.enableSorting &&
                              (header.column.getIsSorted() === "asc" ? (
                                <Image
                                  src={upArrowSort}
                                  width={20}
                                  alt="Ascending"
                                  className="mb-1 inline-flex scale-[.4]"
                                />
                              ) : header.column.getIsSorted() === "desc" ? (
                                <Image
                                  src={downArrowSort}
                                  width={20}
                                  alt="Descending"
                                  className="mt-2 inline-flex scale-[.4]"
                                />
                              ) : (
                                <Image
                                  src={sortUnsorted}
                                  alt="Not sorted"
                                  className="inline-flex scale-[.7]"
                                />
                              ))}
                          </div>
                        )}
                      </th>
                    ))}
                  </tr>
                );
              })}
            </thead>
            <tbody>
              {getRowModel()?.rows?.length ? (
                getRowModel()?.rows?.map((row) => (
                  <tr key={row.id}>
                    {row.getVisibleCells().map((cell) => (
                      <td key={cell.id} className="my-4 border-y-[1px] p-4">
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    ))}
                  </tr>
                ))
              ) : loading && getRowModel()?.rows?.length === 0 ? (
                <TableLoader rows={5} columns={columns.length} />
              ) : (
                <tr>
                  <td className="border-y-[1px] p-4" colSpan="999">
                    No results to display
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        {pagination &&
          data?.length > tableInstance.getState().pagination?.pageSize && (
            <div
              className="flex items-center justify-center"
              data-automation-id="table-pagination"
            >
              <p className="px-4">
                <span className="px-2 text-sm font-bold">Rows per Page:</span>
                <select
                  defaultValue={
                    tableInstance.getState().pagination.pageIndex + 1
                  }
                  onChange={(e) => {
                    tableInstance.setPageSize(Number(e.target.value));
                  }}
                  // FIXME: border bottom outline on focus
                  data-automation-id="table-rows-dropdown"
                  className="form-select border-x-0 border-b-2 border-t-0 border-black/10 font-bold text-blue-light focus:outline-none focus:ring-2 focus:ring-blue-light"
                >
                  {options.map((option, index) => (
                    <option
                      key={option}
                      value={option}
                      data-automation-id={`table-rows-dropdown-option-${index}`}
                    >
                      {option}
                    </option>
                  ))}
                </select>
              </p>
              <p className="inline-flex items-center justify-center px-4">
                <button
                  className="px-2"
                  onClick={() => tableInstance.previousPage()}
                  disabled={!tableInstance.getCanPreviousPage()}
                  data-automation-id="table-pagination-prev"
                >
                  <Image
                    src={arrowLeft}
                    alt="Arrow Left"
                    className="scale-75"
                  />
                </button>
                <span className="text-sm font-bold">{`Displaying ${getCurrentPageMin()} - ${getCurrentPageMax()} of ${
                  data?.length
                }`}</span>
                <button
                  className="px-2"
                  onClick={() => tableInstance.nextPage()}
                  disabled={!tableInstance.getCanNextPage()}
                  data-automation-id="table-pagination-next"
                >
                  <Image
                    src={arrowRight}
                    alt="Arrow Right"
                    className="scale-75"
                  />
                </button>
              </p>
            </div>
          )}
      </div>
    </div>
  );
}

Table.propTypes = {
  title: PropTypes.string,
  columns: PropTypes.arrayOf(PropTypes.any),
  data: PropTypes.arrayOf(PropTypes.any),
  customStyles: PropTypes.string,
  isSearchable: PropTypes.bool,
  searchPlaceholder: PropTypes.string,
  isDownloadEnabled: PropTypes.bool,
  downloadFileName: PropTypes.string,
};
