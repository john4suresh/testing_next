import Link from "next/link";
import { Fragment } from "react";
import { headers } from "next/headers";
import UpcomingSession from "@/components/upcoming-session";

async function getData() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_APP_URL}/api/home/?section=upcomingSession`,
      {
        headers: headers(),
      }
    );
    const data = await response.json();
    return data;
  } catch (e) {
    throw e;
  }
}

export default async function UpcomingSessions() {
  const data = await getData();
  const upcomingSessions = data?.upcoming_sessions;

  return (
    <div className="my-10">
      <p className="h2 mb-4">All upcoming sessions</p>
      {upcomingSessions?.length > 0 ? (
        <>
          {upcomingSessions?.map((details) => (
            <Fragment key={details.id}>
              <UpcomingSession details={details} />
            </Fragment>
          ))}
          <div className="text-center">
            <Link
              href="/schedule"
              className="link"
              data-automation-id="viewFullSchedule"
            >
              View full schedule
            </Link>
          </div>
        </>
      ) : (
        <p>You have no upcoming sessions</p>
      )}
    </div>
  );
}
