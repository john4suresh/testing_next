"use client";

import { Fragment } from "react";
import Card from "../shared/card";
import { useRouter } from "next/navigation";
import useSWR from "swr";
import { clientDashboard } from "@/lib/apiUrls";
import { useParams } from "next/navigation";
import Button from "../shared/button";
import { AddNotesIcon } from "../icons";
import Skeleton from "react-loading-skeleton";

export default function NextSession({ eventHandler }) {
  const params = useParams();
  const { id: clientId } = params;
  const router = useRouter();
  const { data, error, isLoading } = useSWR(
    clientDashboard.nextSession(clientId)
  );

  if (isLoading) {
    return (
      <Card type="recommended" className="mb-4 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <div className="order-2 xs:col-span-full sm:order-1 sm:col-span-1">
            <Skeleton className="h4 mb-1 font-normal uppercase !text-gray-veryDark" />
          </div>
        </div>
        <div>
          <Skeleton className="my-2" count={3} />
        </div>
      </Card>
    );
  }
  return (
    <>
      {data?.length === 0 ? (
        <Card className="w-full p-6">
          <p className="text-base">You have no upcoming session</p>
        </Card>
      ) : (
        data?.map((details) => (
          <Fragment key={details.id}>
            <Card type="recommended" className="mb-4 w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2">
                <div className="order-2 xs:col-span-full sm:order-1 sm:col-span-1">
                  <p className="h4 mb-1 font-normal uppercase !text-gray-veryDark">
                    Session {details?.session_number}{" "}
                    {!details?.is_subscription_coaching &&
                      ` of ${details?.total_sessions}`}
                  </p>
                </div>
                <div className="order-1 mb-4 text-right xs:col-span-full sm:order-2 sm:col-span-1 sm:!mb-0">
                  <Button
                    variant="link"
                    onClick={() => router.push(`/client/${clientId}/notes`)}
                    className="inline-flex font-semibold"
                    id={details?.has_session_notes ? "addNotes" : "viewNotes"}
                    icon={
                      <span className="order-2 ml-1">
                        <AddNotesIcon className="!fill-blue-light" />
                      </span>
                    }
                    text={
                      details?.has_session_notes ? "Add notes" : "View notes"
                    }
                  />
                </div>
              </div>
              <div>
                <p className="my-4">
                  Your next session with{" "}
                  <span className="capitalize">{details?.client_name}</span> is
                </p>
                <p className="h4 mb-4 !font-bold">
                  {details?.session_info?.time_slot}{" "}
                  {details?.session_info?.user_timezone_shorthand}
                </p>
                <div className="flex flex-col items-stretch sm:flex-row">
                  {details?.session_info?.has_agenda && (
                    <Button
                      id="viewAgenda"
                      text="View agenda"
                      variant="secondary"
                      onClick={eventHandler}
                      className="mb-2 font-semibold sm:mb-0 sm:mr-2"
                    />
                  )}
                  <Button
                    id="joinSession"
                    text="Join Session"
                    onClick={eventHandler}
                    className="my-2 font-semibold sm:mx-2 sm:my-0"
                  />
                </div>
              </div>
            </Card>
          </Fragment>
        ))
      )}
    </>
  );
}
