"use client";
import React from "react";
import useSWR from "swr";
import Skeleton from "react-loading-skeleton";
import { ExternalExportIcon } from "@/components/icons";
import Link from "next/link";
import Card from "@/components/shared/card";
import { clientDashboard } from "@/lib/apiUrls";
import { useParams } from "next/navigation";

const CompanyDocuments = () => {
  const params = useParams();
  const { id: clientId } = params;
  const { data, error, isLoading } = useSWR(
    clientDashboard.companyDocuments(clientId)
  );
  if (isLoading) {
    return (
      <Card className="mb-8 pb-2">
        <p className="h3 mb-4 text-center !font-semibold">Company documents</p>
        <div className="link mb-4 block">
          <span>
            <Skeleton />
          </span>
        </div>
        <div className="link mb-4 block">
          <span>
            <Skeleton />
          </span>
        </div>
      </Card>
    );
  }
  return (
    <>
      {data?.length > 0 ? (
        <Card className="mb-8 pb-2">
          <p className="h3 mb-4 text-center !font-semibold">
            Company documents
          </p>
          {data?.map((item) => (
            <Link
              key={item?.display_name}
              href={item.doc_url}
              target="_blank"
              className="link mb-4 block"
            >
              <span className="inline-flex">
                {item?.display_name}
                <span className="ml-1">
                  <ExternalExportIcon />
                </span>
              </span>
            </Link>
          ))}
        </Card>
      ) : null}
    </>
  );
};

export default CompanyDocuments;
