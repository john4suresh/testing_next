"use client";

import React from "react";
import blindspot from "@/mocks/client/blindspot.json";
import Image from "next/image";
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

const BlindspotHiddenStrength = () => {
  const params = useParams();
  const { id: clientId } = params;
  const { data, error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}${client.viewSuggestedDeltas(
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
          Blindspots and hidden strengths results
        </p>
        <p className="p-7 text-base font-normal text-gray-veryDark">
          Blindspots are behaviors where clients rate themselves higher than
          their colleagues have rated them. Hidden strengths are the inverse,
          where clients have rated themselves lower than their colleagues.
          Blindspots and hidden strengths are important to review with your
          client as they can have significant implications in the workplace. The
          client has access to this screen.
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
      <div className="mt-10 p-8">
        {isLoading ? (
          <div className="mr-4">
            <Skeleton count={12} className="mt-5" />
          </div>
        ) : (
          <>
            {data?.blind_spots.length > 0 ? (
              <>
                <p className="mb-2 text-lg font-semibold text-gray-veryDark">
                  Blindspots
                </p>
                {data?.blind_spots.map((results) => (
                  <>
                    <h6>
                      <span className="mb-2 text-base font-bold text-gray-veryDark">
                        {results?.skill?.skillName}:{" "}
                      </span>
                      {results?.skill?.description}
                    </h6>
                    <div className="mb-2 mt-5 grid grid-cols-12 items-center">
                      <div className="col-span-3">
                        <p className="text-base text-gray-veryDark">Self</p>
                      </div>
                      <div className="col-span-6 flex flex-1 items-center">
                        <p className="mr-4">{results?.answer_for_self}</p>
                        <ProgressBar
                          data={results?.answer_for_self}
                          index={results?.id}
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
                          <p className="mr-4">{results?.average_for_360}</p>
                          <ProgressBar
                            data={results?.average_for_360}
                            index={results?.id}
                            color="bg-silverTree"
                          />
                        </div>
                        <div className="col-span-3" />
                      </div>
                    </div>
                  </>
                ))}
              </>
            ) : null}
            {data?.unrecognized_strengths?.length > 0 ? (
              <>
                {" "}
                <p className="mb-2 mt-8 text-lg font-semibold text-gray-veryDark">
                  Hidden strengths
                </p>
                <>
                  {" "}
                  {data?.unrecognized_strengths?.map((hiddenStrength) => (
                    <>
                      <h6>
                        <span className="mb-2 text-base font-bold text-gray-veryDark">
                          {hiddenStrength?.skill?.skillName}:{" "}
                        </span>
                        {hiddenStrength?.skill?.description}
                      </h6>
                      <div className="mb-2 mt-5 grid grid-cols-12 items-center">
                        <div className="col-span-3">
                          <p className="text-base text-gray-veryDark">Self</p>
                        </div>
                        <div className="col-span-6 flex flex-1 items-center">
                          <p className="mr-4">
                            {hiddenStrength?.answer_for_self}
                          </p>
                          <ProgressBar
                            data={hiddenStrength?.answer_for_self}
                            index={hiddenStrength?.id}
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
                            <p className="mr-4">
                              {hiddenStrength?.average_for_360}
                            </p>
                            <ProgressBar
                              data={hiddenStrength?.average_for_360}
                              index={hiddenStrength?.id}
                              color="bg-silverTree"
                            />
                          </div>
                          <div className="col-span-3" />
                        </div>
                      </div>
                    </>
                  ))}
                </>
              </>
            ) : null}
          </>
        )}
      </div>
    </>
  );
};

export default BlindspotHiddenStrength;
