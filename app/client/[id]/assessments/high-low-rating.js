"use client";

import React from "react";
import Image from "next/image";
import trendingUp from "@/public/assets/icons/trendingUp.svg";
import trendingDown from "@/public/assets/icons/trendingDown.svg";
import ProgressBar from "@/components/shared/progress-bar";
import assessmentScalePrint from "@/public/images/assessmentScalePrint.png";
import info from "@/public/assets/icons/info.svg";
import { cn } from "@/lib/utils";
import { LABEL } from "@/lib/constant/assessment";
import useSWR from "swr";
import Alert from "@/components/shared/alert";
import Skeleton from "react-loading-skeleton";
import { useParams } from "next/navigation";
import { client } from "@/lib/apiUrls";

function HightLowRating() {
  const params = useParams();
  const { id: clientId } = params;
  const { data, error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}${client.viewTopBottomSkills(
      clientId
    )}`
  );
  const source = data?.is_self_only_results
    ? data?.self_result
    : data?.result_360;
  if (error) {
    return (
      <div className="mx-auto w-1/4 px-4 py-2">
        <Alert type="error">{error}</Alert>
      </div>
    );
  }
  return (
    <>
      <div className="my-4 ml-8 grid grid-cols-2 lg:flex lg:flex-wrap lg:gap-10">
        {LABEL.map(({ key, color }) => (
          <div key={key} className="inline-flex items-center justify-center">
            <div
              className={cn("borde mr-1 h-[16px] w-[16px] rounded-2xl", color)}
            />
            <p className="flex-1">{key}</p>
          </div>
        ))}
        <div className="inline-flex cursor-pointer items-center justify-center">
          <Image src={info} alt="info" height={24} width={24} />
        </div>
      </div>
      <div className="pt-3 text-center">
        <p className="text-base font-semibold text-gray-veryDark">
          High and low ratings
        </p>
        <p className="p-4 text-base font-normal text-gray-veryDark">
          These are the highest and lowest rated behaviors based on an average
          of all responses (self-evaluation and 360).
        </p>
        <p className="mt-4 text-base font-normal text-gray-veryDark">
          Skills are assessed according to the following scale:
        </p>
        <Image
          src={assessmentScalePrint}
          alt="assessmentScalePrint"
          className="mt-6 inline"
        />
      </div>
      {data?.is_self_only_results === null ? (
        <div className="my-4 text-center font-semibold">
          <p>We are still waiting on your results.</p>
        </div>
      ) : (
        <>
          <div className="mt-5 p-0">
            <div className="flex">
              <Image
                src={trendingUp}
                alt="trendingUp"
                height={24}
                width={24}
                className="ml-5"
              />
              <div className="flex-row">
                <p className="mb-2 ml-6 mt-5 text-lg font-semibold text-gray-veryDark">
                  Highest rated behaviors:
                </p>
                <p className="pl-6">
                  Managing stress, measuring performance, improving processes
                </p>
              </div>
            </div>
            <div className="mt-5 flex">
              <Image
                src={trendingDown}
                alt="trendingDown"
                height={24}
                width={24}
                className="ml-5"
              />
              <div className="flex-row">
                <p className="mb-2 ml-6 mt-5 text-lg font-semibold text-gray-veryDark">
                  Lowest rated behaviors:
                </p>
                <p className="pl-6">Managing your career, setting goals</p>
              </div>
            </div>
          </div>
          <div className="mt-10 p-8">
            {isLoading ? (
              <div className="mr-4">
                <Skeleton count={12} className="mt-5" />
              </div>
            ) : (
              <>
                <>
                  <p className="mb-2 text-lg font-semibold text-gray-veryDark">
                    Highest rated behaviors
                  </p>
                  {source?.top_3_skills.map((topSkill) => (
                    <>
                      <h6>
                        <span className="mb-2 text-base font-bold text-gray-veryDark">
                          {topSkill.skill.skillName}:{" "}
                        </span>
                        {topSkill.skill.description}
                      </h6>
                      <div className="mb-2 mt-5 grid grid-cols-12 items-center">
                        <div className="col-span-3">
                          <p className="text-base text-gray-veryDark">Self</p>
                        </div>
                        <div className="col-span-6 flex flex-1 items-center">
                          <p className="mr-4">{topSkill.answer_for_self}</p>
                          <ProgressBar
                            data={topSkill.answer_for_self}
                            index={topSkill.id}
                            color="bg-scampi"
                          />
                        </div>
                        <div className="col-span-3" />
                      </div>
                      <div className="mb-6">
                        <div className="mb-2 mt-3 grid grid-cols-12 items-center">
                          <div className="col-span-3">
                            <p className="text-base text-gray-veryDark">
                              Average without self
                            </p>
                          </div>
                          <div className="col-span-6 flex flex-1 items-center">
                            <p className="mr-4">{topSkill.average_for_360}</p>
                            <ProgressBar
                              data={topSkill.average_for_360}
                              index={topSkill.id}
                              color="bg-silverTree"
                            />
                          </div>
                          <div className="col-span-3" />
                        </div>
                      </div>
                    </>
                  ))}
                </>
                <p className="mb-2 mt-8 text-lg font-semibold text-gray-veryDark">
                  Lowest rated behaviors
                </p>
                {source?.bottom_3_skills.map((bottomSkill) => (
                  <>
                    <h6>
                      <span className="mb-2 text-base font-bold text-gray-veryDark">
                        {bottomSkill.skill.skillName}:{" "}
                      </span>
                      {bottomSkill.skill.description}
                    </h6>
                    <div className="mb-2 mt-5 grid grid-cols-12 items-center">
                      <div className="col-span-3">
                        <p className="text-base text-gray-veryDark">Self</p>
                      </div>
                      <div className="col-span-6 flex flex-1 items-center">
                        <p className="mr-4">{bottomSkill.answer_for_self}</p>
                        <ProgressBar
                          data={bottomSkill.answer_for_self}
                          index={bottomSkill.id}
                          color="bg-scampi"
                        />
                      </div>
                      <div className="col-span-3" />
                    </div>
                    <div className="mb-6">
                      <div className="mb-2 mt-3 grid grid-cols-12 items-center">
                        <div className="col-span-3">
                          <p className="text-base text-gray-veryDark">
                            Average without self
                          </p>
                        </div>
                        <div className="col-span-6 flex flex-1 items-center">
                          <p className="mr-4">{bottomSkill.average_for_360}</p>
                          <ProgressBar
                            data={bottomSkill.average_for_360}
                            index={bottomSkill.id}
                            color="bg-silverTree"
                          />
                        </div>
                        <div className="col-span-3" />
                      </div>
                    </div>
                  </>
                ))}
              </>
            )}
          </div>
        </>
      )}
    </>
  );
}

export default HightLowRating;
