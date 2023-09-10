import React from "react";
import Image from "next/image";
import Breadcrumbs from "@/components/breadcrumbs";
import Button from "@/components/shared/button";
import download from "@/public/assets/icons/download.svg";

const SetPayment = () => {
  return (
    <div className="container mx-auto max-w-5xl">
      <h1 className="mb-4 text-center">Payment setup</h1>
      <div className="px-2 text-base text-gray-veryDark">
        <h2 className="mb-5 text-base font-semibold">
          Complete new supplier form
        </h2>
        <p>Please send us your banking details:</p>
        <ol className="mb-5 list-decimal pl-6">
          <li>Download, complete, and save as a PDF.</li>
          <li>
            Email the file to both{" "}
            <span className="underline underline-offset-4">
              newsupplier@skillsoft.com
            </span>{" "}
            and
            <span className="underline underline-offset-4">
              accounts.payable@skillsoft.com
            </span>{" "}
          </li>
          <li>List your name in the subject line. Example: Jules Verne.</li>
          <li>
            {
              "Select 'complete' below to finish this step after you send the email."
            }
          </li>
        </ol>
        <h2 className="text-base font-semibold">Process</h2>
        <p className="mb-5">
          Coaching payments are issued from Skillsoft directly to your bank
          account. We begin processing these on the 1st of each month and it may
          take up to 72 hours after this to disperse to your account. Please
          chat with your Coaching Guide if you have not received payment by the
          5th of the month.
        </p>
        <h2 className="text-base font-semibold">Session Tracking</h2>
        <p className="mb-5">
          A summary of your completed calls is visible under Payment Reports at
          the top of your dashboard. These are organized by month and year and
          available for download as a CSV.
        </p>
        <h2 className="text-base font-semibold">Questions?</h2>
        <p className="mb-5">
          For questions on this form, please contact the Accounts Payable team
          at{" "}
          <span className="underline underline-offset-4">
            accounts.payable@skillsoft.com
          </span>
          .
        </p>
      </div>
      <div className="mt-10 flex flex-col items-center justify-center">
        <Button
          text={"Download new supplier form"}
          variant="secondary"
          className="mb-10 inline-flex items-center font-semibold"
          icon={
            <Image
              src={download}
              alt="Download"
              className="mr-1"
              width={18}
              height={18}
            />
          }
        />
        <Button text={"Mark as complete"} className="font-bold" />
      </div>
    </div>
  );
};

export default SetPayment;
