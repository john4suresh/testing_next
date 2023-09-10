"use client";

import React from "react";
import ProgressBar from "@/components/shared/progress-bar";
import { relationFind } from "@/lib/utils";
import assessmentScalePrint from "@/public/images/assessmentScalePrint.png";
import Image from "next/image";
import comments from "@/public/assets/icons/comments.svg";
import info from "@/public/assets/icons/info.svg";
import { cn } from "@/lib/utils";
import { CLIENT_LABEL } from "@/lib/constant/assessment";
import useSWR from "swr";
import Alert from "@/components/shared/alert";
import Skeleton from "react-loading-skeleton";
import { useParams } from "next/navigation";
import { client } from "@/lib/apiUrls";

const ClientView = () => {
  let categoryName = "";
  const params = useParams();
  const { id: clientId } = params;
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
  const renderSufficientResponses = () => (
    <>
      {data?.is_self_only_results !== null ? null : (
        <div className="text-center">
          <p className="text-center">
            {data?.client?.name} not completed the assessment yet
          </p>
        </div>
      )}
      <>
        {data?.result_360 !== null ? (
          <>
            {data?.result_360?.map((answer) => (
              <>
                {answer?.skill?.category?.categoryName !== categoryName &&
                  ((categoryName = answer?.skill?.category?.categoryName),
                  answer?.category_name === "Gap Inc." ? (
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
                    {answer?.skill?.skillName}:{" "}
                  </span>
                  {answer?.skill?.description}
                </h6>
                <div className="mb-2 mt-5 grid grid-cols-12 items-center">
                  <div className="col-span-3">
                    <p className="text-base text-gray-veryDark">Self</p>
                  </div>
                  <div className="col-span-6 flex flex-1 items-center">
                    <p className="mr-4">{answer?.answer_by_self}</p>
                    <ProgressBar
                      data={answer?.answer_by_self}
                      index={answer?.id}
                      color="bg-scampi"
                    />
                  </div>
                  <div className="col-span-3 flex flex-1 items-center">
                    {answer?.comment && (
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
                <div className="mb-2">
                  {data?.client_group_separate_manager_result_in_assessment &&
                    answer?.manager_answers.map((managerAnswer) => (
                      <>
                        <div
                          key={managerAnswer.answer}
                          className="mb-2 mt-3 grid grid-cols-12 items-center"
                        >
                          <div className="col-span-3">
                            <p className="text-base text-gray-veryDark">
                              {managerAnswer.name}
                            </p>
                          </div>
                          <div className="col-span-6 flex flex-1 items-center">
                            <p className="mr-4">{managerAnswer.answer}</p>
                            <ProgressBar
                              data={managerAnswer.answer}
                              color={relationFind(managerAnswer.name)}
                            />
                          </div>
                          <div className="col-span-3 flex flex-1 items-center">
                            {managerAnswer.comment && (
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
                <div className="mb-6">
                  {!data?.client_group_invite_manager_for_assessment_only && (
                    <>
                      <div className="mb-2 mt-3 grid grid-cols-12 items-center">
                        <div className="col-span-3">
                          <p className="text-base text-gray-veryDark">
                            Average all
                          </p>
                        </div>
                        <div className="col-span-6 flex flex-1 items-center">
                          <p className="mr-4">{answer.average}</p>
                          <ProgressBar data={answer.average} color="bg-azure" />
                        </div>
                        <div className="col-span-3 flex flex-1 items-center">
                          {answer.mapper_comments_for_skill.length ? (
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
                          ) : null}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </>
            ))}
          </>
        ) : null}
      </>
    </>
  );
  const renderInsufficientResponses = () => (
    <>
      {data?.self_result !== null ? (
        <>
          {data?.self_result?.map((answer) => (
            <>
              {answer?.skill?.category?.categoryName !== categoryName
                ? ((categoryName = answer?.skill?.category?.categoryName),
                  answer?.skill?.category?.categoryName === "Gap Inc." ? (
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
                  {answer?.skill?.skillName}:{" "}
                </span>
                {answer?.skill?.description}
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
                <div className="col-span-3 flex flex-1 items-center">
                  {answer.comment && (
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
            </>
          ))}
        </>
      ) : (
        <p> We are still waiting on your results</p>
      )}
    </>
  );
  return (
    <>
      <div className="my-4 ml-8 grid grid-cols-2 lg:flex lg:flex-wrap lg:gap-10">
        {CLIENT_LABEL.map(({ key, color }) => (
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
          Client view: This is what the client sees on their dashboard.
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
            {data?.is_self_only_results && renderInsufficientResponses()}
            {!data?.is_self_only_results && renderSufficientResponses()}
          </>
        )}
      </div>
    </>
  );
};

export default ClientView;
