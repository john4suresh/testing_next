"use client";
import React from "react";
import complete from "@/public/assets/icons/complete.svg";
import Image from "next/image";
import clsx from "clsx";
import Alert from "@/components/shared/alert";
import AssessmentResults from "./assessment-results";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  TooltipArrow,
} from "@/components/shared/tooltip";
import Download from "@/public/assets/icons/download-black.svg";
import Card from "@/components/shared/card";
import useSWR from "swr";
import Skeleton from "react-loading-skeleton";
import { useParams } from "next/navigation";
import { client } from "@/lib/apiUrls";

const Assessment = () => {
  const params = useParams();
  const { id: clientId } = params;
  const { data, error, isLoading } = useSWR(
    `${client.client360Settings(clientId)}`
  );
  const { data: clientUploadData, isLoading: clientUploadLoading } = useSWR(
    client.clientUploads(clientId)
  );
  if (error) {
    return (
      <div className="mx-auto w-1/4 px-4 py-2">
        <Alert type="error">{error?.response?.data?.detail}</Alert>
      </div>
    );
  }
  return (
    <>
      <div className="mt-2 grid grid-cols-12 pr-6">
        <div className={clsx("col-span-12 xl:col-span-7", { "-mt-2": true })}>
          <div className="-mt-16">
            <Alert type="warning">
              Note: Please do not share this information with your client until
              all 360&apos;s have been recieved.
            </Alert>
          </div>
        </div>
      </div>
      <div className="mb-10 mr-6">
        <div className="rounded-sm border border-gray-medium bg-white p-6 lg:p-0">
          <div className="p-8">
            <h2 className="text-gray-veryDark">
              Holly Kullkarni&apos;s Assessments
            </h2>
            <p className="mt-2 text-base text-gray-veryDark">
              View custom documents shared with you by your client and review
              them during your sessions along with your client&apos;s assessment
              results.
            </p>
            <h3 className="mt-8 text-xl font-semibold text-gray-veryDark">
              Client uploads
            </h3>
            {clientUploadLoading ? (
              <div className="mr-4">
                <Skeleton
                  count={1}
                  className="mt-2 inline-flex w-full items-center justify-between px-4 py-6"
                />
              </div>
            ) : (
              <>
                {clientUploadData?.length === 0 ? (
                  <Card className="mt-2 inline-flex w-full items-center justify-between px-4 py-6">
                    <div>
                      <p>Your client has not shared any files yet</p>
                    </div>
                  </Card>
                ) : (
                  <>
                    {clientUploadData?.map((assessmentUpload) => (
                      <Card className="mt-2 inline-flex w-full items-center justify-between px-4 py-6">
                        <div>
                          <p className="text-lg font-semibold text-gray-veryDark">
                            {assessmentUpload?.title}
                          </p>
                          <span className="text-base font-normal text-gray-veryDark">
                            {assessmentUpload?.uploaded_on}
                          </span>
                        </div>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>
                              <a
                                href={assessmentUpload.assessment}
                                target="_blank"
                              >
                                <button className="focus:outline-none focus-visible:!ring-transparent">
                                  <Image
                                    src={Download}
                                    alt=""
                                    width={24}
                                    height={24}
                                  />
                                </button>
                              </a>
                            </TooltipTrigger>
                            <TooltipContent className="right-6">
                              Download Client uploads
                              <TooltipArrow className="fill-white" />
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </Card>
                    ))}
                  </>
                )}
              </>
            )}

            <h2 className="mt-8 text-gray-veryDark">360° Settings</h2>
            {isLoading ? (
              <div className="mt-8 flex w-full flex-col">
                {Array(4)
                  .fill("")
                  .map((_, key) => (
                    <div className="flex w-full gap-5">
                      <div className="flex-1 ">
                        <Skeleton className="h-10 w-48 flex-1" />
                      </div>
                      <div className="flex-1">
                        <Skeleton className="h-10 w-48 flex-1" />
                      </div>
                    </div>
                  ))}
              </div>
            ) : (
              <div className="mt-5 grid grid-cols-1 items-start gap-x-3 sm:rounded-sm sm:border lg:grid-cols-2 lg:rounded-none lg:border-none">
                {data?.map((item, index, self) => {
                  const isTop = index === 0 || index === 1;
                  const isBottom =
                    index === self.length - 1 || index === self.length - 2;
                  const borderClasses = clsx(
                    "border-b border-gray-medium lg:border-x",
                    {
                      "lg:rounded-t-sm lg:border-t": isTop,
                      "lg:rounded-b-sm": isBottom,
                    }
                  );
                  return (
                    <div key={index} className={borderClasses}>
                      <div className="flex p-4">
                        <p className="flex-1">{item.display_name}</p>
                        {item.is_checked && (
                          <p>
                            <Image
                              src={complete}
                              width="24"
                              height="24"
                              alt="Complete"
                            />
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
            <AssessmentResults />
          </div>
        </div>
      </div>
    </>
  );
};

export default Assessment;
