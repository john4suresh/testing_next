import { Fragment, useState } from "react";
import Image from "next/image";
import ArrowLeft from "/public/static/arrow-left.svg";
import ArrowRight from "/public/static/arrow-right.svg";
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  isEqual,
  isSameDay,
  isSameMonth,
  isToday,
  parse,
  parseISO,
  startOfToday,
  startOfWeek,
} from "date-fns";
import Button from "@/components/shared/button";
import { meetings } from "./mock";
import { cn, calculateGridRow } from "@/lib/utils";
import { WORKING_HOURS, WEEK_DAYS } from "@/lib/constant/calendar";
import { currentDate } from "@/lib/date";
import { dailyEvents, availableHours } from "./mock";
import { AppointmentEvent, AvailableEvent, BufferEvent } from "./events";

export default function Daily() {
  let topValue = 84;
  let today = startOfToday();
  let [selectedDay, setSelectedDay] = useState(today);
  let [currentMonth, setCurrentMonth] = useState(format(today, "MMM-yyyy"));
  let firstDayCurrentMonth = parse(currentMonth, "MMM-yyyy", new Date());

  let days = eachDayOfInterval({
    start: firstDayCurrentMonth,
    end: endOfMonth(firstDayCurrentMonth),
  });

  function previousMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  }

  function nextMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  }

  function previousDay() {
    setSelectedDay(add(selectedDay, { days: -1 }));
  }

  function nextDay() {
    setSelectedDay(add(selectedDay, { days: 1 }));
  }

  const eventElements = dailyEvents.map((event, index) => {
    const gridRow = calculateGridRow(event.start, event.duration);
    return (
      <li key={index} className="relative flex" style={{ gridRow }}>
        {event.type === "appointment" && <AppointmentEvent event={event} />}
        {event.type === "available" && <AvailableEvent />}
        {event.type === "buffer" && <BufferEvent />}
      </li>
    );
  });

  return (
    <>
      <div className="mx-5 my-3">
        <p className="text-4xl font-bold leading-normal text-gray-veryDark">
          {currentDate}
        </p>
        <p className="text-4xl font-normal leading-normal text-gray-veryDark">
          Thursday
        </p>
      </div>
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
        <div className=" lg:col-span-7">
          <div className="relative h-0 min-h-[768px] border-2 border-gray-medium">
            <div className="flex h-full flex-col">
              <div className="isolate flex flex-auto flex-col overflow-auto bg-white">
                <div className="flex flex-none flex-col sm:max-w-none md:max-w-full ">
                  <div className="sticky top-0 z-30 h-7 flex-none border-b border-gray-medium bg-neutrals5"></div>
                  <div className="flex flex-auto flex-col overflow-auto">
                    <div className="flex w-full flex-auto">
                      <div className="w-14 flex-none border-r border-gray-medium bg-neutrals5 lg:w-36">
                        {/* <div className="grid flex-auto">
                          <ol
                            className="grid"
                            style={{
                              gridTemplateRows:
                                "repeat(18, minmax(3.5rem, 1fr))",
                            }}
                          >
                            {availableHours.map((ah, index) => {
                              const gridRow = (ah - 9) * 2 + 1;
                              return (
                                <li
                                  key={ah}
                                  className="relative flex"
                                  style={{ gridRow }}
                                >
                                  <span className="absolute inset-1 flex bg-green-light"></span>
                                </li>
                              );
                            })}
                          </ol>
                        </div> */}
                      </div>
                      <div className="grid flex-auto grid-cols-1 grid-rows-1">
                        <div
                          className="col-start-1 col-end-2 row-start-1 grid"
                          style={{
                            gridTemplateRows: "repeat(48, minmax(3.5rem, 1fr))",
                          }}
                        >
                          <div className="row-end-1"></div>
                          {WORKING_HOURS.map((timeSlot, index) => {
                            const topStyle = { top: `${topValue}px` };
                            topValue += 112; // Increase topValue by 55px (which is the each grid height) on each iteration

                            return (
                              <Fragment key={index}>
                                <div className="border-b border-dashed border-neutrals20">
                                  <div className="sticky left-0 z-20 ml-[-56px] w-14 pr-2 text-right leading-tight">
                                    <span className="font-display text-sm font-bold text-neutrals">
                                      {timeSlot}
                                    </span>
                                  </div>
                                </div>
                                {/* <div
                                  className="styled-border absolute left-0 z-50 hidden h-14 w-36 lg:block"
                                  style={topStyle}
                                ></div> */}
                                <div className="border-b border-neutrals20"></div>
                              </Fragment>
                            );
                          })}
                        </div>
                        <ol
                          className="col-start-1 col-end-2 row-start-1 grid grid-cols-1"
                          style={{
                            gridTemplateRows:
                              "repeat(288, minmax(0px, 1fr)) auto",
                          }}
                        >
                          {eventElements}
                        </ol>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-4">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between rounded-md border border-gray-medium bg-white p-4">
              <button
                type="button"
                onClick={previousMonth}
                className="flex flex-none items-center justify-center text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Previous month</span>
                <Image
                  src={ArrowLeft}
                  alt="change previous month"
                  width={24}
                  height={24}
                />
              </button>
              <p className="font-bold text-gray-veryDark">
                {format(selectedDay, "MMMM dd, yyyy")}
              </p>
              <button
                onClick={nextMonth}
                type="button"
                className="flex flex-none items-center justify-center  text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Next month</span>
                <Image
                  src={ArrowRight}
                  alt="change next month"
                  width={24}
                  height={24}
                />
              </button>
            </div>
            <div className="rounded-md border border-gray-medium p-4">
              <div className="grid grid-cols-7 text-center text-base leading-6 text-gray-veryDark">
                {WEEK_DAYS.map((day) => (
                  <div className="uppercase" key={day}>
                    {day}
                  </div>
                ))}
              </div>
              <div className="mt-2 grid grid-cols-7 text-sm">
                {days.map((day, dayIdx) => (
                  <div
                    key={day.toString()}
                    className={cn(
                      dayIdx === 0 &&
                        colStartClasses[
                          getDay(startOfWeek(day, { weekStartsOn: 1 }))
                        ],
                      "py-1.5"
                    )}
                  >
                    <button
                      type="button"
                      onClick={() => setSelectedDay(day)}
                      className={cn(
                        isEqual(day, selectedDay) && "text-white",
                        !isEqual(day, selectedDay) &&
                          isToday(day) &&
                          "text-navy",
                        !isEqual(day, selectedDay) &&
                          isSameMonth(day, firstDayCurrentMonth) &&
                          "text-gray-900",
                        !isEqual(day, selectedDay) &&
                          !isToday(day) &&
                          !isSameMonth(day, firstDayCurrentMonth) &&
                          "text-gray-400",
                        isEqual(day, selectedDay) && isToday(day) && "bg-navy",
                        isEqual(day, selectedDay) && !isToday(day) && "bg-navy",
                        !isEqual(day, selectedDay) && "hover:bg-gray-200",
                        (isEqual(day, selectedDay) || isToday(day)) &&
                          "font-semibold",
                        "mx-auto flex h-8 w-8 items-center justify-center rounded-full"
                      )}
                    >
                      <time dateTime={format(day, "yyyy-MM-dd")}>
                        {format(day, "d")}
                      </time>
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-between rounded-md border border-gray-medium bg-white p-4">
              <button
                type="button"
                onClick={previousDay}
                className="flex flex-none items-center justify-center text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Previous day</span>
                <Image
                  src={ArrowLeft}
                  alt="change previous day"
                  width={24}
                  height={24}
                />
              </button>
              <p className="font-bold text-gray-veryDark">
                {isToday(selectedDay)
                  ? "Today"
                  : format(selectedDay, "MMMM dd, yyyy")}
              </p>
              <button
                onClick={nextDay}
                type="button"
                className="flex flex-none items-center justify-center  text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Next day</span>
                <Image
                  src={ArrowRight}
                  alt="change next day"
                  width={24}
                  height={24}
                />
              </button>
            </div>
          </div>
          <div className="mt-10 flex justify-center rounded-md border border-gray-medium bg-white p-4">
            <div className="flex flex-col items-center justify-between gap-10">
              <p className="text-xl font-bold">Session details</p>
              <div className="text-center">
                <p className="font-bold text-blue-light">
                  Holly Kulkarni, PayPal
                </p>
                <p>April 23, 10:00-11:00 am EST</p>
              </div>
              <div className="flex gap-5">
                <Button variant="secondary" text="Cancel session" />
                <Button variant="primary" text="Start session" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

let colStartClasses = [
  "",
  "col-start-2",
  "col-start-3",
  "col-start-4",
  "col-start-5",
  "col-start-6",
  "col-start-7",
];
