"use client";
import useSWR from "swr";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import api from "@/lib/api.js";
import Header from "@/components/header";
import Button from "@/components/shared/button";
import { jobApplication } from "@/lib/apiUrls.js";
import Alert from "@/components/shared/alert/index.js";
import arrowLeft from "@/public/assets/icons/arrow-left.svg";
// page sections
import Completed from "./completed";
import Introduction from "./introduction";
import BasicInformation from "./basic-information";
import ProfessionalInformation from "./professional-information";

export default function JobApplication() {
  const { data, error } = useSWR(jobApplication?.countryAndIcfList);
  const [renderedSection, setRenderedSection] = useState(0);
  const [icfDate, setIcfDate] = useState("");
  const [icfFile, setIcfFile] = useState("");
  const [apiState, setApiState] = useState({
    isLoading: false,
    data: {},
    error: null,
  });

  const onHandlePrevSections = () => {
    setRenderedSection((prevSection) =>
      prevSection === 0 ? 0 : prevSection - 1
    );
  };

  const onHandleNextSections = (customSection) => {
    setRenderedSection(
      (nextSection) => Number(customSection) || nextSection + 1
    );
  };

  const onHandleSubmitBasicInfo = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const jsonFormData = Object.fromEntries(formData.entries());

    for (var key in jsonFormData) {
      if (jsonFormData.hasOwnProperty(key)) {
        var value = jsonFormData[key];
        if (value === null || value === undefined || value === "") {
          delete jsonFormData[key];
        }
      }
    }

    setApiState((prevState) => ({
      ...prevState,
      isLoading: true,
      error: null,
    }));
    try {
      const response = await api.post(
        jobApplication?.coachInformation,
        jsonFormData
      );

      setApiState((prevState) => ({
        ...prevState,
        isLoading: false,
        data: response?.data,
      }));

      return response?.data?.application_completed
        ? onHandleNextSections(3)
        : onHandleNextSections();
    } catch (e) {
      setApiState((prevState) => ({
        ...prevState,
        isLoading: false,
        error: e?.response?.data?.detail || e?.message,
      }));
    }
  };

  const onHandleSubmitProfessionalInfo = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    formData.append("id", apiState?.data?.data?.id);
    formData.append("email", apiState?.data?.data?.email);

    if (icfFile?.length > 0) {
      formData.append("icf_certificate", icfFile[0]);
    }

    if (icfDate !== "") {
      formData.append(
        "icf_certificate_expiry_date",
        format(icfDate, "yyyy-MM-dd")
      );
    }

    if (icfFile?.length === 0 || icfDate === "") {
      formData.delete("icf_certificate_type");
    }

    setApiState((prevState) => ({
      ...prevState,
      isLoading: true,
      error: null,
    }));
    try {
      const response = await api.put(
        jobApplication?.coachInformation,
        formData
      );

      setApiState((prevState) => ({
        ...prevState,
        isLoading: false,
        data: response?.data,
      }));

      return onHandleNextSections();
    } catch (e) {
      setApiState((prevState) => ({
        ...prevState,
        isLoading: false,
        error: e?.response?.data?.detail || e?.message,
      }));
    }
  };

  const sections = [
    <Introduction onHandleNextSections={onHandleNextSections} />,
    <BasicInformation
      isLoading={apiState?.isLoading}
      countryList={data?.country_list}
      handleSubmit={onHandleSubmitBasicInfo}
    />,
    <ProfessionalInformation
      icfDate={icfDate}
      setIcfDate={setIcfDate}
      setIcfFile={setIcfFile}
      icfList={data?.icf_type_list}
      isLoading={apiState?.isLoading}
      handleSubmit={onHandleSubmitProfessionalInfo}
    />,
    <Completed onHandleNextSections={onHandleNextSections} />,
  ];

  return (
    <div>
      <span className="fixed inset-x-0 z-50">
        <Header isPrivate={false} />
        {renderedSection <= 1 && (
          <div className="mx-0 bg-white pl-6 pt-6">
            <Link href={renderedSection === 0 ? "/login" : ""}>
              <Button
                id="back"
                text="Back"
                variant="link"
                onClick={onHandlePrevSections}
                className="inline-flex px-6 py-3 text-2xl font-semibold"
                icon={<Image src={arrowLeft} alt="" width={24} height={24} />}
              />
            </Link>
          </div>
        )}
      </span>
      <main className="mt-36 px-4 pb-10 sm:mt-28 md:mt-32">
        <div className="min-w-lg mx-auto mt-6 max-w-7xl">
          <h1 className="text-center !font-semibold">
            Apply to become a Skillsoft Coach
          </h1>
          <p className="h4 mb-10 mt-5 !font-semibold md:text-center">
            Gain new clients effortlessly. Work on your own time, from anywhere.
            Make a difference.
          </p>

          <div
            className={cn(
              renderedSection !== 0 ? "min-w-md mx-auto max-w-2xl" : ""
            )}
          >
            {apiState?.error ||
              (error?.message && (
                <div className="mb-10">
                  <Alert type="error">
                    {apiState?.error || error?.message}
                  </Alert>
                </div>
              ))}
            {sections[renderedSection]}
          </div>
        </div>
      </main>
    </div>
  );
}
