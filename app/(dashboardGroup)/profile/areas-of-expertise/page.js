"use client";
import React, { useEffect, useState } from "react";
import useSWR from "swr";
import Skeleton from "react-loading-skeleton";
import Button from "@/components/shared/button";
import Label from "@/components/shared/label";
import { Checkbox } from "@/components/shared/checkbox";
import { toast } from "@/components/shared/toast/use-toast";
import api from "@/lib/api";
import { areaOfExpertise } from "@/lib/apiUrls";

function AreaOfExpertise() {
  const { data, error, isLoading, mutate, isValidating } = useSWR(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}${areaOfExpertise}`
  );
  const { expertise_choices, max_limit } = data || {};
  const [selectedChoices, setSelectedChoices] = useState([]);

  const handleClick = async () => {
    if (selectedChoices.length > max_limit) {
      return toast({
        title: "Selection Max Limit Exceeded",
        variant: "destructive",
      });
    }
    try {
      let response = await api.put(areaOfExpertise, {
        expertise: selectedChoices,
      });
      mutate(response?.data || {});
      return toast({
        title: "Submitted Successful",
        variant: "destructive",
      });
    } catch (e) {
      return toast({
        title: "Something went wrong",
        variant: "destructive",
      });
    }
  };

  const handleCheckedChange = (value, id) => {
    if (value) {
      setSelectedChoices((prevState) => [...prevState, id]);
    } else {
      let newState = selectedChoices.filter((ele) => ele !== id);
      setSelectedChoices(newState);
    }
  };

  useEffect(() => {
    const selectChoices = expertise_choices
      ?.filter((expertise_choice) => expertise_choice?.is_selected)
      ?.map((expertise_choice) => expertise_choice?.id);
    setSelectedChoices(selectChoices);
  }, [expertise_choices]);

  if (isLoading) {
    return (
      <div className="container mx-auto max-w-5xl px-5 text-center">
        <Skeleton className="mx-auto mb-5 max-w-sm text-center text-[34px]" />
        <Skeleton count={3} />
        <div className="mt-5 grid grid-cols-3 gap-y-8">
          {Array(20)
            .fill(0)
            .map((ele, index) => (
              <Skeleton key={index} className="max-w-xs" />
            ))}
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto max-w-5xl px-5">
      <h1 className="mb-8 text-center text-[34px] font-semibold">
        Select your areas of coaching expertise
      </h1>
      <div>
        <Label className="items-center text-base font-normal">
          Please select among the topics below in which you have subject matter
          expertise. Subject matter expertise may be based on any experience
          that you have with the subject, including, without limitation,
          academic study, informal self-directed study, volunteer experience,
          work experience, mentoring or any other experience.
        </Label>
        <div className="mt-5 grid grid-cols-3 gap-y-8">
          {expertise_choices?.map((a) => (
            <div className="flex items-center space-x-3" key={a.id}>
              <Checkbox
                defaultChecked={a.is_selected}
                id={a.id}
                value={a.id}
                onCheckedChange={(value) => handleCheckedChange(value, a.id)}
              />
              <Label
                htmlFor={a.display_name}
                className="text-base font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {a.display_name}
              </Label>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-12 flex flex-col items-center">
        <Button
          variant="primary"
          text="Save"
          onClick={handleClick}
          disabled={isValidating}
        />
      </div>
    </div>
  );
}

export default AreaOfExpertise;
