"use client";
import React from "react";
import useSWR from "swr";
import Skeleton from "react-loading-skeleton";
import Link from "next/link";
import Card from "@/components/shared/card";
import { clientDashboard } from "@/lib/apiUrls";
import { useParams } from "next/navigation";

const FocusAreas = () => {
  const params = useParams();
  const { id: clientId } = params;
  const { data, error, isLoading } = useSWR(
    clientDashboard.clientTaskStatus("focus_area", clientId)
  );
  const { focusAreas } = data || {};

  if (isLoading) {
    return (
      <Card className="mb-8 text-center">
        <p className="h3 mb-4 !font-semibold">Focus areas</p>
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
      <p className="h3 mb-4 !font-semibold">Focus areas</p>
      {focusAreas?.status === "Focus Area has not been started." ? (
        <p className="my-4">Focus areas have not been started.</p>
      ) : (
        <>
          <p className="my-4">{focusAreas?.selected_modules?.join(", ")}</p>
          <Link href={`/client/${clientId}/focus-areas`} className="link">
            View focus areas
          </Link>
        </>
      )}
    </Card>
  );
};

export default FocusAreas;
