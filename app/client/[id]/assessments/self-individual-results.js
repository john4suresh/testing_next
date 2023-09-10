"use client";

import React from "react";
import viewAssessmentFullResults from "@/mocks/client/viewAssessmentFullResults.json";
import Image from "next/image";
import comments from "@/public/assets/icons/comments.svg";
import ProgressBar from "@/components/shared/progress-bar";
import { relationFind } from "@/lib/utils";
import assessmentScalePrint from "@/public/images/assessmentScalePrint.png";
import info from "@/public/assets/icons/info.svg";
import { cn } from "@/lib/utils";
import { LABEL } from "@/lib/constant/assessment";
import useSWR from "swr";
import Alert from "@/components/shared/alert";
import Skeleton from "react-loading-skeleton";
import { useParams } from "next/navigation";
import { client } from "@/lib/apiUrls";

const SelfIndividualResults = () => {
  const params = useParams();
  const { id: clientId } = params;
  let categoryName = "";
  const { data, error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}${client.viewFullAssessmentResults(
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
          {data?.client?.name}&apos;s self and 360° results
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
        {isLoading ? (
          <div className="mr-4">
            <Skeleton count={12} className="mt-5" />
          </div>
        ) : (
          <>
            {data?.assessment_results?.aggregated_results?.map((results) => (
              <>
                {results.skill.category.categoryName !== categoryName &&
                  ((categoryName = results.skill.category.categoryName),
                  results.skill.category.categoryName === "Gap Inc." ? (
                    <p className="mb-2 text-lg font-semibold text-gray-veryDark">
                      Gap Inc.
                    </p>
                  ) : (
                    <p className="mb-2 text-lg font-semibold text-gray-veryDark">
                      {categoryName}
                    </p>
                  ))}
                <h6>
                  <span className="mb-2 text-base font-bold text-gray-veryDark">
                    {results.skill.skillName}:{" "}
                  </span>
                  {results.skill.description}
                </h6>
                <div className="mb-2 mt-5 grid grid-cols-12 items-center">
                  <div className="col-span-3">
                    <p className="text-base text-gray-veryDark">Self</p>
                  </div>
                  <div className="col-span-6 flex flex-1 items-center">
                    <p className="mr-4">{results.answer_for_self}</p>
                    <ProgressBar
                      data={results.answer_for_self}
                      average={results.average_for_self}
                      index={results.id}
                      color="bg-scampi"
                    />
                  </div>
                  <div className="col-span-3 flex flex-1 items-center">
                    {results.comment_by_self && (
                      <>
                        <Image
                          src={comments}
                          alt="comments"
                          height={24}
                          width={24}
                          className="ml-5"
                        />
                        <p className="ml-1 cursor-pointer items-center text-base font-semibold text-blue-light">
                          view comments
                        </p>
                      </>
                    )}
                  </div>
                </div>
                <div className="mb-6">
                  {results.client_invitee_answers.map((inviteeAnswer) => (
                    <>
                      <div
                        key={inviteeAnswer.id}
                        className="mb-2 mt-3 grid grid-cols-12 items-center"
                      >
                        <div className="col-span-3">
                          <p className="text-base text-gray-veryDark">
                            {inviteeAnswer.related_as}
                          </p>
                        </div>
                        <div className="col-span-6 flex flex-1 items-center">
                          <p className="mr-4">{inviteeAnswer.answer}</p>
                          <ProgressBar
                            data={inviteeAnswer.answer}
                            average={inviteeAnswer.average_for_invitee}
                            index={inviteeAnswer.id}
                            color={relationFind(inviteeAnswer.related_as)}
                          />
                        </div>
                        <div className="col-span-3 flex flex-1 items-center">
                          {inviteeAnswer.comment && (
                            <>
                              <Image
                                src={comments}
                                alt="comments"
                                height={24}
                                width={24}
                                className="ml-5"
                              />
                              <p className="ml-1 cursor-pointer items-center text-base font-semibold text-blue-light">
                                view comments
                              </p>
                            </>
                          )}
                        </div>
                      </div>
                      <></>
                    </>
                  ))}
                </div>
              </>
            ))}
          </>
        )}
      </div>
    </>
  );
};

export default SelfIndividualResults;
