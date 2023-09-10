"use client";
import React from "react";
import useSWR from "swr";
import Button from "@/components/shared/button";
import { toast } from "@/components/shared/toast/use-toast";
import api from "@/lib/api";
import { backgroundCheck } from "@/lib/apiUrls";

function BackGroundCheck() {
  const { mutate, isValidating } = useSWR(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}${backgroundCheck}`
  );
  const handleClick = async () => {
    try {
      let response = await api.put(backgroundCheck, {
        background_check_complete: true,
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
  return (
    <div className="container mx-auto max-w-5xl px-5">
      <h1 className="mb-8 text-center text-[34px] font-semibold">
        Background check
      </h1>
      <div>
        <p className="text-base font-normal">
          Coaches are required to complete a basic background check which is
          issued by Skillsoft using an external vendor, Sterling Checks. The
          checks include:
        </p>
        <ul className="list-disc p-6">
          <li>SSN Trace</li>
          <li>County Court Search</li>
          <li>State Search</li>
          <li>Federal Court Search</li>
          <li>Education Verification Technology</li>
          <li>Office of Foreign Assets Control</li>
          <li>DOJ Sex Offender Search</li>
          <li>
            International Coaching Federation certification/accreditation
            verification
          </li>
        </ul>
        <p className="mb-4 text-lg font-semibold">Process:</p>
        <div className="text-base font-normal">
          <p className="mb-4">
            You will receive an invitation from Sterling that will be sent
            closer to the date of your coach training session or shortly
            thereafter. Please look out for an email from Sterling and submit
            the required information as soon as possible.
          </p>
          <p className="mb-4">
            Typical processing time is 10 business days. If additional
            information is required, Sterling will reach out to you directly.
          </p>
          <p>
            Once you have submitted the necessary information to Sterling,
            please proceed to mark this step complete below. You may complete
            this step even if Sterling is still processing the check.{" "}
          </p>
        </div>
      </div>
      <div className="mt-12 flex flex-col items-center">
        <Button
          variant="primary"
          text="Mark as complete"
          onClick={handleClick}
          disabled={isValidating}
        />
      </div>
    </div>
  );
}

export default BackGroundCheck;
