"use client";
import React from "react";
import useSWR from "swr";
import Skeleton from "react-loading-skeleton";
import Link from "next/link";
import Card from "@/components/shared/card";
import { clientDashboard } from "@/lib/apiUrls";
import { useParams } from "next/navigation";

const ClientDetails = () => {
  const params = useParams();
  const { id: clientId } = params;
  const { data, error, isLoading } = useSWR(
    clientDashboard.clientDetails(clientId)
  );

  if (isLoading) {
    return (
      <Card className="mb-8 text-center">
        <p className="h3 mb-4 text-center !font-semibold">Client details</p>
        <p className="body mb-1">
          <Skeleton />
        </p>
        <p className="body mb-1">
          <Skeleton />
        </p>
        <p className="body mb-1">
          <Skeleton />
        </p>
        <p className="body mb-1">
          <Skeleton />
        </p>
        <p className="body mb-1">
          <Skeleton />
        </p>
        <p className="body mb-4">
          <Skeleton />
        </p>
        <Link href="" className="link">
          <Skeleton />
        </Link>
      </Card>
    );
  }
  return (
    <Card className="mb-8 text-center">
      <p className="h3 mb-4 text-center !font-semibold">Client details</p>
      <p className="body mb-1">Language: {data?.language}</p>
      <p className="body mb-1">Location: {data?.location?.country}</p>
      <p className="body mb-1">Time zone: {data?.timezone}</p>
      <p className="body mb-1">Type of plan: {data?.coaching_plan}</p>
      <p className="body mb-1">
        Number of 3 way calls: {data?.total_three_way_sessions}
      </p>
      <p className="body mb-4">
        Specialized Coaching: {data?.specialised_coaching || "-"}
      </p>
      <Link href="" className="link">
        View all
      </Link>
    </Card>
  );
};

export default ClientDetails;
