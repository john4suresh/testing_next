"use client";
import React from "react";
import useSWR from "swr";
import { clientDashboard } from "@/lib/apiUrls";
import { useParams } from "next/navigation";
import Skeleton from "react-loading-skeleton";
import Link from "next/link";
import Card from "@/components/shared/card";
import { ExternalExportIcon } from "@/components/icons";

const ImpactReport = () => {
  const params = useParams();
  const { id: clientId } = params;
  const { data, error, isLoading } = useSWR(
    clientDashboard.impactReport(clientId)
  );
  const { impact_report_info } = data || {};

  if (isLoading) {
    return (
      <Card className="mb-8 text-center">
        <p className="h3 mb-4 !font-semibold">Impact Report</p>
        <p className="my-4">
          <Skeleton />
        </p>
        <p className="my-4">
          <Skeleton />
        </p>
      </Card>
    );
  }
  return (
    <>
      {impact_report_info?.status && (
        <Card className="mb-8 text-center">
          <p className="h3 mb-4 !font-semibold">Impact Report</p>
          {impact_report_info?.impact_report_url ? (
            <>
              <p className="my-4">Impact report is now available.</p>
              <Link
                href={impact_report_info?.impact_report_url}
                target="_blank"
                className="link block"
              >
                <span className="inline-flex">
                  View report
                  <span className="ml-1">
                    <ExternalExportIcon className="!fill-blue-light" />
                  </span>
                </span>
              </Link>
            </>
          ) : (
            <p className="mt-4">
              Impact report is not available because remeasurement hasn’t been
              completed.
            </p>
          )}
        </Card>
      )}
    </>
  );
};

export default ImpactReport;
