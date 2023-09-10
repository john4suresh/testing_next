/* eslint-disable tailwindcss/no-custom-classname */
import { Fragment } from "react";
import Image from "next/image";
import ArrowLeft from "/public/static/arrow-left.svg";
import ArrowRight from "/public/static/arrow-right.svg";
import { WORKING_HOURS, WEEK_DAYS, getStartDay } from "@/lib/constant/calendar";
import { formattedWeek } from "@/lib/date";
import { weeklyEvents } from "./mock";
import { AppointmentEvent, AvailableEvent, BufferEvent } from "./events";
import { calculateGridRow } from "@/lib/utils";

export default function Weekly() {
  let topValue = 92;

  const eventElements = weeklyEvents.map((event) => {
    const gridRow = calculateGridRow(event.start, event.duration);
    const colStart = `col-start-${getStartDay(event.day)}`; // col start based on the event day

    return (
      <li
        key={event.id}
        className={`relative flex ${colStart}`}
        style={{ gridRow }}
      >
        {event.type === "appointment" && <AppointmentEvent event={event} />}
        {event.type === "available" && <AvailableEvent />}
        {event.type === "buffer" && <BufferEvent />}
      </li>
    );
  });

  return (
    <div className="mx-auto mb-6 max-w-7xl">
      <div className="mb-5 flex items-center">
        <button
          type="button"
          className="flex flex-none items-center justify-center  text-gray-400 hover:text-gray-500"
        >
          <span className="sr-only">Previous week</span>
          <Image
            src={ArrowLeft}
            alt="change previous week"
            width={24}
            height={24}
          />
        </button>
        <h2 className="mx-2 font-bold">{formattedWeek}</h2>
        <button
          type="button"
          className="flex flex-none items-center justify-center  text-gray-400 hover:text-gray-500"
        >
          <span className="sr-only">Next week</span>
          <Image
            src={ArrowRight}
            alt="change next week"
            width={24}
            height={24}
          />
        </button>
      </div>
      <div className="relative h-0 min-h-[768px] rounded border-2 border-gray-medium">
        <div className="flex h-full flex-col">
          <div className="isolate flex flex-auto flex-col overflow-auto bg-white">
            <div className="flex flex-none flex-col sm:max-w-none md:max-w-full ">
              <div className="sticky top-0 z-30 flex-none border-b border-gray-medium bg-neutrals5">
                <div className="grid grid-cols-7 divide-x divide-neutrals20 leading-normal">
                  <div className="col-end-1 w-12 lg:w-36"></div>
                  {WEEK_DAYS.map((day) => (
                    <div
                      key={day}
                      className="flex items-center justify-start border-gray-dark px-1 py-2"
                    >
                      <span className="font-display text-sm font-bold text-neutrals">
                        {day}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-auto">
                <div className="sticky left-0 z-10 w-12 flex-none border-r border-gray-medium bg-neutrals5 lg:w-36"></div>
                <div className="grid flex-auto grid-cols-1 grid-rows-1 ">
                  <div
                    className="col-start-1 col-end-2 row-start-1 grid "
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
                  <div className="col-start-1 col-end-2 row-start-1 grid grid-cols-7 grid-rows-1 divide-x divide-neutrals20">
                    {[...Array(7)].map((_, index) => (
                      <Fragment key={index}>
                        {/* // FIXME: tailwind warning */}
                        <div
                          className={`col-start-${index + 1} row-span-full`}
                        ></div>
                      </Fragment>
                    ))}
                  </div>
                  <ol
                    className="col-start-1 col-end-2 row-start-1 grid grid-cols-7 "
                    style={{
                      gridTemplateRows: "repeat(288, minmax(0px, 1fr)) auto",
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
  );
}
