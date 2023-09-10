/* eslint-disable tailwindcss/no-custom-classname */
"use client";
import Link from "next/link";
import Image from "next/image";
import PropTypes from "prop-types";
import { useRouter } from "next/navigation";
import { differenceInHours } from "date-fns";
import Card from "../shared/card";
import Button from "../shared/button";
import useCountDown from "@/hooks/useCountDown";
import notes from "@/public/assets/icons/notes.svg";

export default function UpcomingSession({ details, eventHandler }) {
  const router = useRouter();
  const sessionTime = details?.start_time;
  const timeDiff = differenceInHours(new Date(sessionTime), new Date());
  const now = new Date().getTime();
  const future = new Date(sessionTime).getTime();
  const hoursDiff = differenceInHours(future, now);
  const [days, hours, minutes] = useCountDown(future);

  const joinNow = () => {
    // becomes primary within 10m of start time
    if (days + hours + minutes <= 0) {
      return (
        <Button
          id="joinNow"
          text="Join now"
          onClick={eventHandler}
          className="mt-2 bg-red !font-semibold hover:bg-red focus:ring-red sm:ml-2 sm:mt-0"
        />
      );
    }

    // disabled state between 59 minutes to 10 minutes
    if (days + hours <= 0 && minutes <= 59) {
      return (
        <Button
          id="joinNow"
          onClick={eventHandler}
          disabled={minutes > 10}
          className="mt-2 !font-semibold sm:ml-2 sm:mt-0"
          text={`Call starts in ${minutes} minutes`}
        />
      );
    }

    if (hoursDiff && hoursDiff <= 48) {
      return (
        <Button
          disabled
          id="joinNow"
          onClick={eventHandler}
          className="mt-2 !font-semibold sm:ml-2 sm:mt-0"
          text={`Call starts in ${hours} hours`}
        />
      );
    }

    if (days && days >= 2) {
      return (
        <Button
          disabled
          id="joinNow"
          onClick={eventHandler}
          className="mt-2 !font-semibold sm:ml-2 sm:mt-0"
          text={`Call starts in ${days} days`}
        />
      );
    }

    return null;
  };

  return (
    <Card type="recommended" className="mb-4 w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <div className="order-2 xs:col-span-full sm:order-1 sm:col-span-1">
          <p className="h4 mb-1 font-normal uppercase">
            Session {details?.session_number} of {details?.total_sessions}
          </p>
          <p className="h4 font-bold capitalize">
            {details?.time_slot} {details?.user_timezone_shorthand}
          </p>
        </div>
        <div className="order-1 mb-4 text-right xs:col-span-full sm:order-2 sm:col-span-1 sm:!mb-0">
          <Link
            className="link inline-flex items-center"
            href={`/client/${details?.client?.id}/notes`}
            id={details?.has_session_notes ? "viewNotes" : "addNotes"}
          >
            {details?.has_session_notes ? "View notes" : "Add notes"}
            <Image src={notes} alt="" className="order-2 ml-1" />
          </Link>
        </div>
      </div>
      <div className="">
        <p className="body my-4 !font-bold !text-blue-light">
          {details?.client?.name}, {details?.client?.company_name}
        </p>
        <p className="body mb-4">
          Coaching End Date: {details?.coaching_end_date}
        </p>
        <div className="flex flex-col items-stretch sm:flex-row">
          <Button
            id="chat"
            text="Chat"
            variant="secondary"
            onClick={() => router.push("/messages")}
            className="mb-2 !font-semibold sm:mb-0 sm:mr-2"
          />
          {details?.has_agenda && (
            <Button
              id="viewAgenda"
              text="View agenda"
              onClick={eventHandler}
              className="my-2 !font-semibold sm:mx-2 sm:my-0"
              variant={
                timeDiff >= 48 || (timeDiff < 1 && minutes <= 10)
                  ? "secondary"
                  : "primary"
              }
            />
          )}
          {joinNow()}
        </div>
      </div>
    </Card>
  );
}

UpcomingSession.propTypes = {
  details: PropTypes.exact({
    id: PropTypes.any,
    client: PropTypes.exact({
      id: PropTypes.any,
      name: PropTypes.string,
      company_name: PropTypes.string,
    }),
    time_slot: PropTypes.string,
    coaching_end_date: PropTypes.string,
    user_timezone_shorthand: PropTypes.string,
    utc_time_slot: PropTypes.string,
    has_agenda: PropTypes.bool,
    start_time: PropTypes.string,
    end_time: PropTypes.string,
    utc_start_time: PropTypes.string,
    utc_end_time: PropTypes.string,
    session_number: PropTypes.number,
    total_sessions: PropTypes.string,
    has_session_notes: PropTypes.string,
  }),
  eventHandler: PropTypes.func.isRequired,
};
