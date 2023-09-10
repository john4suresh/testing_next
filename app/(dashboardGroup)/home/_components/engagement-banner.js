import { format } from "date-fns";
import { headers } from "next/headers";
import Card from "@/components/shared/card";
import Initial from "@/components/shared/avatar";

async function getData() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_APP_URL}/api/home/?section=engagementBanner`,
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

// ToDo: Image url end-up with 400 status
export default async function EngagementBanner() {
  const data = await getData();
  return (
    <Card className="mb-9" type="banner">
      <div className="flex flex-col items-center justify-between lg:flex-row">
        <div className="flex flex-col items-center justify-center lg:flex-row">
          <Initial name={data?.firstName} src={data?.profileURL} size="large" />
          <div className="pb-6 pt-4 text-center lg:py-0 lg:pl-3 lg:text-left">
            <h1 className="break-words">Welcome back, {data?.firstName}!</h1>
            <p>{format(new Date(), "eeee, MMMM dd, yyyy")}</p>
          </div>
        </div>
        <div className="flex px-16 text-center">
          <div className="w-16">
            <p className="h3 pb-2 text-green-dark">{data?.sessionsThisWeek}</p>
            <p className="caption !text-navy">Session this week</p>
          </div>
          <div className="mx-6 w-16">
            <p className="h3 pb-2 text-green-dark">{data?.activeClients}</p>
            <p className="caption !text-navy">Active clients</p>
          </div>
          <div className="w-16">
            <p className="h3 pb-2 text-gray-dark">{data?.completedSessions}</p>
            <p className="caption !text-navy">Completed Sessions</p>
          </div>
        </div>
      </div>
    </Card>
  );
}
