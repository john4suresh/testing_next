"use client";

import { useState, useEffect, Fragment } from "react";
import clsx from "clsx";
import { Tab } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import Button from "@/components/shared/button";
import Modal from "@/components/shared/modal";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/shared/select-field";
import Input from "@/components/shared/input";
import { cn } from "@/lib/utils";
import info from "@/public/assets/icons/info.svg";
import user from "@/public/assets/icons/picker-user.svg";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  TooltipArrow,
} from "@/components/shared/tooltip";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/shared/popover";
import { Calendar } from "@/components/shared/calendar";
import { ArrowDownIcon } from "@/components/icons";
import DailyCalendar from "./daily-calendar";
import WeeklyCalendar from "./weekly-calendar";
import { clients, times } from "./mock";

export default function Schedule() {
  let [tabs] = useState({
    Daily: <DailyCalendar />,
    Weekly: <WeeklyCalendar />,
  });
  const [showScheduleModal, setShowScheduleModal] = useState(false);
  const [user, setUser] = useState();
  const [date, setDate] = useState();
  const [time, setTime] = useState();

  return (
    <>
      <div className="mr-6">
        <div className="rounded-sm border border-gray-medium bg-white p-6 lg:p-0">
          <h1 className="relative pt-10 text-center">
            Schedule{" "}
            <span className="absolute top-7 pl-2">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Image
                      src={info}
                      width={24}
                      height={24}
                      alt="schedule info"
                    />
                  </TooltipTrigger>
                  <TooltipContent>
                    <Link
                      className="text-blue-light"
                      href="/edit-working-hours"
                    >
                      Edit your working hours
                    </Link>{" "}
                    or{" "}
                    <Link className="text-blue-light" href="/calendars">
                      calendars
                    </Link>{" "}
                    in your Coach profile.
                    <TooltipArrow className="fill-white" />
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </span>
          </h1>
          <div className="w-full px-2 pt-6 sm:px-0">
            <Tab.Group>
              <Tab.List className="mx-auto flex max-w-md items-center justify-center space-x-1 p-1">
                {Object.keys(tabs).map((tab) => (
                  <Tab
                    key={tab}
                    className={({ selected }) =>
                      cn(
                        "w-full py-2.5 text-base font-medium uppercase leading-5 hover:text-blue-light",
                        "outline-none",
                        selected
                          ? "border-b-[3px] border-blue-light text-blue-light"
                          : "text-gray-veryDark hover:text-blue-dark"
                      )
                    }
                  >
                    {tab}
                  </Tab>
                ))}
              </Tab.List>
              <Tab.Panels className="mt-8">
                <div className="mx-auto w-full max-w-screen-xl">
                  <div className="mb-2 flex flex-row justify-end">
                    <Button
                      text="Schedule session"
                      variant="secondary"
                      onClick={() => setShowScheduleModal(true)}
                    />
                  </div>
                </div>
                {Object.values(tabs).map((tab, idx) => (
                  <Tab.Panel key={idx}>{tab}</Tab.Panel>
                ))}
              </Tab.Panels>
            </Tab.Group>
          </div>
        </div>
      </div>
      <Modal
        isOpen={showScheduleModal}
        onCloseModal={() => setShowScheduleModal(false)}
        title="Schedule session"
      >
        <div className="flex flex-col items-center">
          <p>
            You must have the client’s written approval before scheduling a
            session. Once a session is scheduled, it will be added to your
            upcoming session list. Only future sessions may be scheduled. Reach
            out to your Coaching Guide to log any prior sessions.
          </p>
          <div className="my-[60px] grid w-8/12 grid-rows-3 gap-10">
            <Select onValueChange={setUser}>
              <SelectTrigger>
                <SelectValue placeholder="Select a client" />
              </SelectTrigger>
              <SelectContent>
                {clients.map((c) => (
                  <SelectItem key={c.id} value={c.name}>
                    {c.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Popover>
              <PopoverTrigger asChild>
                <button className="flex h-14 w-full items-center justify-between rounded border border-gray-medium bg-transparent p-4 text-base font-normal leading-[22px] ring-offset-white focus:border-blue-light focus:outline-none focus:ring-1 focus:ring-blue-light disabled:cursor-not-allowed disabled:opacity-50">
                  <span
                    className={cn(
                      date ? "text-gray-veryDark" : "text-gray-dark"
                    )}
                  >
                    {(date && format(date, "MMMM dd, yyyy")) || "Select a date"}
                  </span>
                  <ArrowDownIcon />
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
            <Select onValueChange={setTime}>
              <SelectTrigger>
                <SelectValue placeholder="Select a time" />
              </SelectTrigger>
              <SelectContent>
                {times.map((t) => (
                  <SelectItem key={t} value={t}>
                    {t}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button
              text="Schedule session"
              variant="primary"
              onClick={() => {}}
              className="mx-auto w-1/2"
            />
          </div>
        </div>
      </Modal>
    </>
  );
}
