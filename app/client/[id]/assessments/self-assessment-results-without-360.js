"use client";

import React from "react";
import ProgressBar from "@/components/shared/progress-bar";
import assessmentScalePrint from "@/public/images/assessmentScalePrint.png";
import Image from "next/image";
import { CLIENT_LABEL } from "@/lib/constant/assessment";
import { cn } from "@/lib/utils";
import useSWR from "swr";
import Alert from "@/components/shared/alert";
import Skeleton from "react-loading-skeleton";
import { useParams } from "next/navigation";
import { client } from "@/lib/apiUrls";

const SelfAssessmentResults = () => {
  const params = useParams();
  const { id: clientId } = params;
  let categoryName = "";
  const { data, error, isLoading } = useSWR(
    `${
      process.env.NEXT_PUBLIC_BACKEND_URL
    }${client.viewAssessmentAverageResults(clientId)}`
  );
  if (error) {
    return (
      <div className="mx-auto w-1/4 px-4 py-2">
        <Alert type="error">{error}</Alert>
      </div>
    );
  }
  return (
    <>
      {isLoading ? (
        <div className="mr-4">
          <Skeleton count={12} className="mt-5" />
        </div>
      ) : (
        <>
          {data?.client_group_coaching_without_360 ? (
            <>
              <div className="my-4 ml-8 grid grid-cols-2 lg:flex lg:flex-wrap lg:gap-10">
                {CLIENT_LABEL.map(({ key, color }) => (
                  <div
                    key={key}
                    className="inline-flex items-center justify-center"
                  >
                    <div
                      className={cn(
                        "borde mr-1 h-[16px] w-[16px] rounded-2xl",
                        color
                      )}
                    />
                    <p className="flex-1">{key}</p>
                  </div>
                ))}
              </div>
              <div className="pt-3 text-center">
                <p className="text-base font-semibold text-gray-veryDark">
                  {data?.client?.name}&apos;s self-assessment
                </p>
                <p className="mt-1 text-base font-normal text-gray-veryDark">
                  Skills are assessed according to the following scale:
                </p>
                <Image
                  src={assessmentScalePrint}
                  alt="assessmentScalePrint"
                  className="mt-6 inline"
                />
              </div>
              <div className="mt-10 p-8">
                {data?.self_result !== null ? (
                  <>
                    {data?.self_result.map((answer) => (
                      <>
                        {answer.skill.category.categoryName !== categoryName
                          ? ((categoryName =
                              answer.skill.category.categoryName),
                            answer.skill.category.categoryName ===
                            "Gap Inc." ? (
                              <p className="mb-2 text-lg font-semibold text-gray-veryDark">
                                Gap Inc.
                              </p>
                            ) : (
                              <p className="mb-2 text-lg font-semibold text-gray-veryDark">
                                {categoryName}
                              </p>
                            ))
                          : null}
                        <h6>
                          <span className="mb-2 text-base font-bold text-gray-veryDark">
                            {answer.skill.skillName}:{" "}
                          </span>
                          {answer.skill.description}
                        </h6>
                        <div className="mb-2 mt-5 grid grid-cols-12 items-center">
                          <div className="col-span-3">
                            <p className="text-base text-gray-veryDark">Self</p>
                          </div>
                          <div className="col-span-6 flex flex-1 items-center">
                            <p className="mr-4">{answer?.value}</p>
                            <ProgressBar
                              data={answer?.value}
                              index={answer?.id}
                              color="bg-scampi"
                            />
                          </div>
                          <div className="col-span-3" />
                        </div>
                      </>
                    ))}
                  </>
                ) : null}
              </div>
            </>
          ) : (
            "No Data"
          )}
        </>
      )}
    </>
  );
};

export default SelfAssessmentResults;
