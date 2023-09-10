"use client";
import React from "react";
import useSWR from "swr";
import Skeleton from "react-loading-skeleton";
import TaskStatusList from "@/components/shared/task-status-list";
import Card from "@/components/shared/card";
import { clientDashboard } from "@/lib/apiUrls";
import { useParams } from "next/navigation";

const RemeasurementProgress = () => {
  const params = useParams();
  const { id: clientId } = params;
  const { data, error, isLoading } = useSWR(
    `${
      process.env.NEXT_PUBLIC_BACKEND_URL
    }${clientDashboard.remeasurementProgres(clientId)}`
  );
  const { remeasurement_progress_info } = data || {};
  if (isLoading) {
    return (
      <div className="mb-10">
        <h2 className="mb-2">Remeasurement progress</h2>
        <p className="mb-4">
          <Skeleton />
        </p>
        <Card className="!p-0">
          <ul>
            {Array(6)
              .fill("")
              .map((_, index) => (
                <li key={index} className="h4 border-b border-gray-medium p-4 ">
                  <p>
                    <Skeleton />
                  </p>
                </li>
              ))}
          </ul>
        </Card>
      </div>
    );
  }

  return (
    <>
      {remeasurement_progress_info.length === 0 ? null : (
        <div className="mb-10">
          <h2 className="mb-2">Remeasurement progress</h2>
          <p className="mb-4">
            Your client will be able to start the remeasurement process 2/3rd’s
            through their sessions or 45 days before their engagement end date.
          </p>
          <TaskStatusList data={remeasurement_progress_info} />
        </div>
      )}
    </>
  );
};

export default RemeasurementProgress;
