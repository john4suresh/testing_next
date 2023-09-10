/* eslint-disable @next/next/no-img-element */
"use client";
import * as React from "react";
import { DayPicker } from "react-day-picker";

import { cn } from "@/lib/utils";

function Calendar({
  className,
  classNames,
  showOutsideDays = false,
  ...props
}) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-6", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-between pt-1 relative items-center",
        caption_label: "text-lg font-bold",
        nav: "space-x-1 flex items-center",
        nav_button:
          "bg-transparent p-0 opacity-50 hover:opacity-100 bg-white hover:bg-gray-200 hover:text-gray-900",
        nav_button_previous: "border-none w-6 h-6",
        nav_button_next: "border-none w-6 h-6",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell: "text-gray-dark rounded w-9 font-normal text-sm",
        row: "flex w-full mt-2",
        cell: "w-[36px] text-center text-sm p-0 relative first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day: "hover:bg-gray-200 hover:text-gray-900 h-8 w-8 p-0 text-sm font-normal aria-selected:opacity-100 rounded-full",
        day_selected:
          "bg-navy text-white hover:bg-navy hover:text-white focus:bg-navy focus:text-white",
        day_today: "bg-gray-100 text-gray-900",
        day_outside: "text-gray-500 opacity-50",
        day_disabled: "text-gray-500 opacity-50",
        day_range_middle:
          "aria-selected:bg-gray-100 aria-selected:text-gray-900",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ ...props }) => (
          <img
            src="/static/arrow-left.svg"
            alt="change previous month"
            width={24}
            height={24}
          />
        ),
        IconRight: ({ ...props }) => (
          <img
            src="/static/arrow-right.svg"
            alt="change previous month"
            width={24}
            height={24}
          />
        ),
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
