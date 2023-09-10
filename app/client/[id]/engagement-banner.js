"use client";

import React from "react";
import useSWR from "swr";
import Image from "next/image";
import Link from "next/link";
import Card from "@/components/shared/card";
import Avatar from "@/components/shared/Avatar";
import videoOn from "@/public/assets/icons/videoOn.svg";
import message from "@/public/assets/icons/message.svg";
import { AddNotesIcon } from "@/components/icons";
import { clientDashboard } from "@/lib/apiUrls";
import { useParams } from "next/navigation";
import Skeleton from "react-loading-skeleton";

const EngagementBanner = () => {
  const params = useParams();
  const { id: clientId } = params;
  const { data, error, isLoading } = useSWR(
    clientDashboard.engagementBanner(clientId)
  );
  if (isLoading) {
    return (
      <Card className="mb-9" type="banner">
        <div className="grid grid-cols-12 items-center gap-4 text-center">
          <div className="col-span-full mx-auto md:h-full lg:col-span-1">
            <div className="h-[72px] w-[72px]">
              <Skeleton circle className="h-full w-full" />
            </div>
          </div>
          <div className="col-span-full mx-auto lg:col-span-5 lg:mx-6 lg:text-left xl:col-span-6 xl:mx-0">
            <h1 className="break-words">
              <Skeleton className="h-full w-full" />
            </h1>
            <p className="my-3">
              <Skeleton />
            </p>
            <div className="inline-flex gap-3.5 md:flex md:justify-center lg:inline-flex">
              <div className=" h-12 w-12  p-0.5">
                <Skeleton circle className="h-full w-full" />
              </div>
              <div className=" h-12 w-12  p-0.5">
                <Skeleton circle className="h-full w-full" />
              </div>
              <div className=" h-12 w-12  p-0.5">
                <Skeleton circle className="h-full w-full" />
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6 xl:col-span-5">
            <div className="flex justify-end gap-1 sm:gap-4">
              <div className="h-20 w-20 max-w-[80px]">
                <Skeleton className="h-full w-full" />
                <p className="caption h-10 ">
                  <Skeleton />
                </p>
              </div>
              <div className="h-20 w-20 max-w-[80px]">
                <Skeleton className="h-full w-full" />
                <p className="caption h-10 ">
                  <Skeleton />
                </p>
              </div>
              <div className="h-20 w-20 max-w-[80px]">
                <Skeleton className="h-full w-full" />
                <p className="caption h-10 ">
                  <Skeleton />
                </p>
              </div>
            </div>
          </div>
        </div>
      </Card>
    );
  }
  return (
    <Card className="mb-9" type="banner">
      <div className="grid grid-cols-12 items-center gap-4 text-center">
        <div className="col-span-full mx-auto md:h-full lg:col-span-1">
          <Avatar name={data?.client_name} size="medium" />
        </div>
        <div className="col-span-full mx-auto lg:col-span-5 lg:mx-6 lg:text-left xl:col-span-6 xl:mx-0">
          <h1 className="break-words">{data?.client_name}</h1>
          <p className="my-3">
            {data?.company_name}, {data?.job_role}
          </p>
          <div className="inline-flex gap-3.5 md:flex md:justify-center lg:inline-flex">
            <Link href="/messages">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-neutrals10 p-0.5">
                <Image src={message} alt="message icon" />
              </div>
            </Link>
            <Link href="">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-neutrals10 p-0.5">
                <Image src={videoOn} alt="video icon" />
              </div>
            </Link>
            <Link href={`/client/${clientId}/notes`}>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-neutrals10 p-0.5">
                <AddNotesIcon />
              </div>
            </Link>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-6 xl:col-span-5">
          <div className="flex justify-end gap-1 sm:gap-4">
            <div className="max-w-[80px]">
              <p className="pb-2 text-2xl text-green-dark">
                {data?.completed_sessions}
              </p>
              <p className="caption h-10 !text-navy">Completed sessions</p>
            </div>
            {!data?.is_subscription_coaching && (
              <div className="max-w-[80px]">
                <p className="pb-2 text-2xl text-purple">
                  {data?.remaining_session}
                </p>
                <p className="caption h-10 !text-navy">Remaining sessions</p>
              </div>
            )}
            {data?.is_three_way_enabled && (
              <>
                <div className="max-w-[80px]">
                  <p className="pb-2 text-2xl text-green-dark">
                    {data?.completed_three_way_session}
                  </p>
                  <p className="caption h-10 !text-navy">
                    Completed 3-way sessions
                  </p>
                </div>
                {!data?.is_subscription_coaching && (
                  <div className="max-w-[80px]">
                    <p className="pb-2 text-2xl text-purple">
                      {data?.remaining_three_way_session}
                    </p>
                    <p className="caption h-10 !text-navy">
                      Remaining 3-way sessions
                    </p>
                  </div>
                )}
              </>
            )}

            <div className="max-w-[80px]">
              <p className="pb-2 text-2xl text-green-dark">
                {data?.remaining_engagement_days}
              </p>
              <p className="caption h-10 !text-navy">Days left to complete</p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default EngagementBanner;
