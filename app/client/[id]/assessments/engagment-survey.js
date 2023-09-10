"use client";

import React from "react";
import engagmentSurvey from "@/mocks/client/engagmentSurvey.json";
import ProgressBar from "@/components/shared/progress-bar";
import { cn } from "@/lib/utils";
import { ENGAGMENT_SURVEY_LABEL } from "@/lib/constant/assessment";
import useSWR from "swr";
import Alert from "@/components/shared/alert";
import Skeleton from "react-loading-skeleton";
import { useParams } from "next/navigation";
import { client } from "@/lib/apiUrls";

const EngagmentSurvey = () => {
  const params = useParams();
  const { id: clientId } = params;
  const { data, error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}${client.viewEngagementSurveyResults(
      clientId
    )}`
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
      <div className="my-4 ml-8 grid grid-cols-2 lg:flex lg:flex-wrap lg:gap-10">
        {ENGAGMENT_SURVEY_LABEL.map(({ key, color }) => (
          <div key={key} className="inline-flex items-center justify-center">
            <div
              className={cn("borde mr-1 h-[16px] w-[16px] rounded-2xl", color)}
            />
            <p className="flex-1">{key}</p>
          </div>
        ))}
      </div>
      <div className="m-auto w-3/4 pt-3 text-center">
        <p className="text-base font-semibold text-gray-veryDark">
          Engagement survey
        </p>
        <p className="mt-1 text-base font-normal text-gray-veryDark">
          The engagement survey provides data on how your client feels in their
          role and about their organization. Progress is measured on this during
          remeasurement by finding the difference between the initial self
          ratings and comparing these with the values provided during
          remeasurement.
        </p>
        <div className="mt-4 flex">
          <p className="mb-2 ml-6 mt-5 text-base font-normal text-gray-veryDark">
            Strongly disagree: 0
          </p>
          <p className="mb-2 ml-6 mt-5 text-base font-normal text-gray-veryDark">
            Strongly agree: 10
          </p>
        </div>
      </div>
      <div className="p-8">
        {isLoading ? (
          <div className="mr-4">
            <Skeleton count={12} className="mt-5" />
          </div>
        ) : (
          <>
            {data?.map((survey) => (
              <>
                <h6>
                  <span className="mb-2 text-base font-bold text-gray-veryDark">
                    {survey?.question_name}
                  </span>
                </h6>
                <div className="mb-12 mt-5 grid grid-cols-12 items-center">
                  <div className="col-span-3">
                    <p className="mb-2 text-base text-gray-veryDark">
                      Pre score
                    </p>
                    <p className="text-base text-gray-veryDark">Post score</p>
                  </div>
                  <div className="col-span-6 flex flex-col">
                    <div className="mb-2 flex flex-1 items-center">
                      <p className="mr-4">{survey.pre_score}</p>
                      <ProgressBar
                        data={survey.pre_score}
                        index={survey.pre_score}
                        color="bg-blue-light"
                      />
                    </div>
                    <div className="flex flex-1 items-center">
                      <p className="mr-4">{survey.post_score}</p>
                      <ProgressBar
                        data={survey.post_score}
                        index={survey.post_score}
                        color="bg-aqua"
                      />
                    </div>
                  </div>
                  <div className="col-span-3 ml-6 text-xl font-normal">
                    {survey.difference}
                  </div>
                </div>
              </>
            ))}
          </>
        )}
      </div>
    </>
  );
};

export default EngagmentSurvey;
