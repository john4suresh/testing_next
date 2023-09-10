"use client";
import React from "react";
import useSWR from "swr";
import Skeleton from "react-loading-skeleton";
import Link from "next/link";
import Card from "@/components/shared/card";
import { clientDashboard } from "@/lib/apiUrls";
import { useParams } from "next/navigation";

const CoachingPlan = () => {
  const params = useParams();
  const { id: clientId } = params;
  const { data, error, isLoading } = useSWR(
    clientDashboard.clientTaskStatus("coaching_plan", clientId)
  );
  const { coachingPlan } = data || {};

  if (isLoading) {
    return (
      <Card className="mb-8 text-center">
        <p className="h3 mb-4 !font-semibold">Coaching plan</p>
        <p className="my-4">
          <Skeleton />
        </p>
        <div>
          <Skeleton />
        </div>
      </Card>
    );
  }

  return (
    <Card className="mb-8 text-center">
      <p className="h3 mb-4 !font-semibold">Coaching plan</p>
      {coachingPlan?.status === "Coaching plan has not been started." ? (
        <p className="mt-4">Coaching plan has not been started.</p>
      ) : (
        <>
          <p className="my-4">{coachingPlan?.status}</p>
          <Link href={`/client/${clientId}/coaching-plan`} className="link">
            View plan
          </Link>
        </>
      )}
    </Card>
  );
};

export default CoachingPlan;
