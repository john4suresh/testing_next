import React from "react";
import Image from "next/image";
import Button from "@/components/shared/button";
import Breadcrumbs from "@/components/breadcrumbs";
import download from "@/public/assets/icons/download.svg";

const TaxForm = () => {
  return (
    <div className="container mx-auto max-w-5xl">
      <h1 className="mb-4 text-center">Tax form</h1>
      <div className="px-2 text-base text-gray-veryDark">
        <p className="mb-5 text-base">
          Please email us one of the forms below, U.S. citizens need to complete
          the W-9, all others choose a W-8 that applies.
        </p>
        <h2 className="text-base font-semibold">Please note:</h2>
        <ul className="mb-5 list-disc pl-5">
          <li>
            <span className="text-blue-light">
              <a
                href="https://www.irs.gov/pub/irs-pdf/iw8ben.pdf"
                target="_blank"
              >
                W-8BEN
              </a>
            </span>{" "}
            is used by foreign individuals who receive nonbusiness income in the
            U.S., individuals, LLC, etc.
          </li>
          <li>
            <span className="text-blue-light">
              <a
                href="https://www.irs.gov/pub/irs-pdf/iw8bene.pdf"
                target="_blank"
              >
                W-8BEN-E
              </a>
            </span>{" "}
            is used by foreign entities who receive this type of income -
            Corporations.
          </li>
          <li>
            <span className="text-blue-light">
              <a href="https://www.irs.gov/pub/irs-pdf/iw9.pdf" target="_blank">
                W-9
              </a>
            </span>{" "}
            is used for U.S. citizens.
          </li>
        </ul>

        <ul className="mb-5 list-decimal pl-5">
          <li>Select the correct form</li>
          <li>
            Review instructions on how to complete the forms in the hyperlink
            above
          </li>
          <li>Download, complete, and save as a PDF.</li>
          <li>
            Email the file to both newsupplier@skillsoft.com and
            accounts.payable@skillsoft.com
          </li>
          <li>
            Add your name and form type in the subject line. Example: W8 - Jules
            Verne.
          </li>
          <li>
            {
              "Select 'Mark as complete' to finish this step after you send the email."
            }
          </li>
        </ul>
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
        <div className="mb-10 flex gap-8">
          <Button
            text={"Download W-9"}
            variant="secondary"
            className="inline-flex items-center font-semibold"
            icon={
              <Image
                src={download}
                alt="Download"
                className="mr-2"
                width={18}
                height={18}
              />
            }
          />
          <Button
            text={"Download W-8BEN"}
            variant="secondary"
            className="inline-flex items-center font-semibold"
            icon={
              <Image
                src={download}
                alt="Download"
                className="mr-2"
                width={18}
                height={18}
              />
            }
          />
          <Button
            text={"Download W-8BEN-E"}
            variant="secondary"
            className="inline-flex items-center font-semibold"
            icon={
              <Image
                src={download}
                alt="Download"
                className="mr-2"
                width={18}
                height={18}
              />
            }
          />
        </div>
        <Button text={"Mark as complete"} className="font-bold" />
      </div>
    </div>
  );
};

export default TaxForm;
