"use client";

import React from "react";
import Accordion from "@/components/shared/accordion";
import useSWR from "swr";
import Alert from "@/components/shared/alert";
import Skeleton from "react-loading-skeleton";
import { useParams } from "next/navigation";
import { client } from "@/lib/apiUrls";
import Agenda from "./agendaQuestions";
import PostExperienceExercise from "./post-experience-exercise";

const Exercise = () => {
  const params = useParams();
  const { id: clientId } = params;
  const { data, error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}${client.clientCompletedExercise(
      clientId
    )}`
  );
  return (
    <div className="container mx-auto">
      <div className="container mx-auto grid grid-cols-12">
        <h1 className="col-span-11 mb-10 text-center text-[34px]">Exercises</h1>
        <>
          {error ? (
            <div className="col-span-11 mb-10 text-center">
              <Alert type="error">{error?.response?.data?.detail}</Alert>
            </div>
          ) : (
            <>
              {isLoading ? (
                <div className="col-span-11 mb-10 grid grid-flow-row">
                  <Skeleton
                    count={3}
                    className="mt-5 h-24 divide-y divide-gray-medium rounded-xs border border-gray-medium"
                  />
                </div>
              ) : (
                <>
                  {Object.keys(data.exerciseDetails).length !== 0 ? (
                    <>
                      {data?.exerciseDetails.map((list) => (
                        <div className="col-span-11 mb-10 grid grid-flow-row divide-y divide-gray-medium rounded-xs border border-gray-medium">
                          <div key={list.name} className="p-4">
                            <Accordion title={list.name}>
                              {list.name.includes("Agenda") ? (
                                <div className="container mx-auto mt-10 w-11/12">
                                  <Agenda {...list} />
                                </div>
                              ) : (
                                <PostExperienceExercise {...list} />
                              )}
                            </Accordion>
                          </div>
                        </div>
                      ))}
                    </>
                  ) : (
                    <div className="col-span-11 mb-10 grid grid-flow-row">
                      <p className="my-5 text-center">
                        This is where you will find exercises that your client
                        completes over the course of their engagement. Look out
                        for automatic notifications alerting you to completed
                        exercises when they become available.
                      </p>
                    </div>
                  )}
                </>
              )}
            </>
          )}
        </>
      </div>
    </div>
  );
};

export default Exercise;
