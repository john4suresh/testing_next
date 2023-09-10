"use client";
import PropTypes from "prop-types";
import Card from "../shared/card";
import Button from "../shared/button";
import { useRouter } from "next/navigation";
import useSWR from "swr";
import { clientDashboard } from "@/lib/apiUrls";
import { useParams } from "next/navigation";
import Skeleton from "react-loading-skeleton";

export default function NotificationsList() {
  const params = useParams();
  const { id: clientId } = params;
  const router = useRouter();
  const { data, error, isLoading } = useSWR(
    clientDashboard.coachClientNotifications(clientId)
  );

  if (isLoading) {
    return (
      <Card className="!p-0">
        <ul>
          {Array(3)
            .fill("")
            .map((_, index) => (
              <li
                key={index}
                className="border-b border-gray-medium px-5 pb-4 pt-5 lg:pr-14"
              >
                <span>
                  <Skeleton />
                </span>
              </li>
            ))}
        </ul>
        <span className="mx-4 block pb-4 pt-5 text-center">
          <div className="mb-0.5 mt-1.5 font-semibold">
            {" "}
            <Skeleton />
          </div>
        </span>
      </Card>
    );
  }
  return (
    <>
      {data?.results?.length === 0 ? (
        <Card className="w-full p-6">
          <p className="text-base">You have no notifications </p>
        </Card>
      ) : (
        data?.results?.length > 0 && (
          <Card className="!p-0">
            <ul>
              {data?.results?.map((item) => (
                <li
                  key={item?.id}
                  className="border-b border-gray-medium px-5 pb-4 pt-5 lg:pr-14"
                >
                  <span className="flex justify-between">
                    <p className="body mr-3">{item?.timeSent}</p>
                    <p className="body ml-3 flex-1 break-words">{item?.text}</p>
                  </span>
                </li>
              ))}
            </ul>
            <span className="mx-4 block pb-4 pt-5 text-center">
              <Button
                variant="secondary"
                id="viewAllNotifications"
                onClick={() => router.push("/messages")}
                className="mb-0.5 mt-1.5 font-semibold"
                text="View all notifications in message center"
              />
            </span>
          </Card>
        )
      )}
    </>
  );
}

NotificationsList.propTypes = {
  data: PropTypes.array,
};
