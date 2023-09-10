"use client";

import React, { useState } from "react";
import { Tab } from "@headlessui/react";
import invitee360Data from "@/mocks/client/invitee360Data.json";
import plane from "@/public/assets/icons/plane.svg";
import mail from "@/public/assets/icons/mail.svg";
import wait from "@/public/assets/icons/wait.svg";
import Image from "next/image";
import Button from "@/components/shared/button";
import download from "@/public/assets/icons/download.svg";
import { cn } from "@/lib/utils";
import SelfAssessmentResults from "./self-assessment-results-without-360";
import SelfIndividualResults from "./self-individual-results";
import SelfResultsByRole from "./self-results-by-role";
import ClientView from "./client-view";
import BlindspotHiddenStrength from "./blindspot-hidden-strength";
import HightLowRating from "./high-low-rating";
import CommentsAndFeedback from "./comments-feedback";
import EngagmentSurvey from "./engagment-survey";
import Skeleton from "react-loading-skeleton";
import useSWR from "swr";
import { client } from "@/lib/apiUrls";
import { useParams } from "next/navigation";

const AssessmentResults = () => {
  let [tabs] = useState({
    self_assessment_results: <SelfAssessmentResults />,
    self_individual_360_results: <SelfIndividualResults />,
    self_360_results_by_role: <SelfResultsByRole />,
    client_view: <ClientView />,
    blindspots_hidden_strengths: <BlindspotHiddenStrength />,
    high_low_ratings: <HightLowRating />,
    comments_additional_feedback: <CommentsAndFeedback />,
    engagement_survey: <EngagmentSurvey />,
  });
  const params = useParams();
  const { id: clientId } = params;
  const { data, isLoading, error } = useSWR(client.assessment(clientId));
  const { data: invitee360Data, isLoading: invitee360Loading } = useSWR(
    client.invitee360Data(clientId)
  );

  return (
    <>
      <div>
        <h2 className="mt-8 text-gray-veryDark">
          Client self and 360 assessment results
        </h2>
        {invitee360Loading ? (
          <div className="mt-8 flex w-full flex-col">
            {Array(1)
              .fill("")
              .map((_, key) => (
                <div className="flex w-full gap-5">
                  <div className="flex-1 ">
                    <Skeleton className="h-10 w-48 flex-1" />
                  </div>
                  <div className="flex-1">
                    <Skeleton className="h-10 w-48 flex-1" />
                  </div>
                  <div className="flex-1">
                    <Skeleton className="h-10 w-48 flex-1" />
                  </div>
                </div>
              ))}
          </div>
        ) : (
          <div className="mt-5 flex flex-col items-start gap-x-3 xl:flex-row">
            <div className="flex flex-1 p-4">
              <Image src={plane} alt="plane" height={24} width={24} />
              <p className="flex-1 text-xl font-normal text-gray-veryDark">
                360° invites sent:{" "}
                {invitee360Data?.invitee_360_data?.count_of_invites}
              </p>
            </div>
            <div className="flex flex-1 p-4">
              <Image src={mail} alt="mail" height={24} width={24} />
              <p className="flex-1 text-xl font-normal text-gray-veryDark">
                360° responses recieved:{" "}
                {invitee360Data?.invitee_360_data?.count_of_answered}
              </p>
            </div>
            <div className="flex flex-1 p-4">
              <Image src={wait} alt="wait" height={24} width={24} />
              <p className="flex-1 text-xl font-normal text-gray-veryDark">
                360° responses not yet recieved:{" "}
                {invitee360Data?.invitee_360_data?.count_of_unanswered}
              </p>
            </div>
          </div>
        )}
      </div>
      <div className="mt-10 flex items-center justify-end">
        <Button
          id="download_client_view"
          text="Download client view"
          variant="secondary"
          size="small"
          icon={
            <Image
              src={download}
              alt="Download"
              className="mr-1"
              width={18}
              height={18}
            />
          }
          className="inline-flex items-center font-semibold"
        />
      </div>
      <div className="mr-6 mt-5">
        <div className="rounded-sm border border-gray-medium bg-white p-6 lg:p-0">
          <div className="w-full px-2 sm:px-0">
            <Tab.Group as="div" className="overflow-hidden">
              <div className="w-full">
                {isLoading ? (
                  <div className="my-10 grid w-full grid-cols-4">
                    <Skeleton className="h-10 max-w-xs" />
                    <Skeleton className="h-10 max-w-xs" />
                    <Skeleton className="h-10 max-w-xs" />
                    <Skeleton className="h-10 max-w-xs" />
                  </div>
                ) : (
                  <Tab.List className="mx-auto flex flex-wrap items-center justify-center space-x-1 p-8 lg:flex-nowrap">
                    {data?.assessment_tabs.map((tab) => (
                      <Tab
                        key={tab}
                        className={({ selected }) =>
                          cn(
                            "w-full py-2.5 text-base font-semibold leading-5 hover:text-blue-light",
                            "outline-none",
                            selected
                              ? "border-b-[3px] border-blue-light text-blue-light"
                              : "text-gray-veryDark hover:text-blue-dark"
                          )
                        }
                      >
                        {tab.value}
                      </Tab>
                    ))}
                  </Tab.List>
                )}
              </div>
              <Tab.Panels className="border-t border-gray-medium px-2">
                <div>
                  {data?.assessment_tabs.map((tab) => (
                    <Tab.Panel key={tab}>{tabs[tab.key]}</Tab.Panel>
                  ))}
                </div>
              </Tab.Panels>
            </Tab.Group>
          </div>
        </div>
      </div>
    </>
  );
};

export default AssessmentResults;
