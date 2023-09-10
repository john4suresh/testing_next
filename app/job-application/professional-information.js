import Link from "next/link";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/shared/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/shared/select-field";
import Button from "@/components/shared/button";
import { ArrowDownIcon } from "@/components/icons";
import Textarea from "@/components/shared/textarea";
import { ExternalExportIcon } from "@/components/icons";
import { Calendar } from "@/components/shared/calendar";
import Dropzone from "@/components/shared/drag-and-drop";
import InputField from "@/components/shared/input-field";

export default function ProfessionalInformation({
  icfDate,
  setIcfDate,
  setIcfFile,
  icfList,
  handleSubmit,
  isLoading,
}) {
  return (
    <form onSubmit={handleSubmit}>
      <p className="h4 mb-2 mt-8 !font-semibold">
        Please include your LinkedIn profile URL.
      </p>
      <p className="sm:inline-flex">
        <Link
          target="_blank"
          rel="noreferrer noopener"
          data-automation-id="linkedin"
          className="link inline-flex items-center pr-1 !font-normal"
          href="https://www.linkedin.com/help/linkedin/answer/49315/finding-your-linkedin-public-profile-url?lang=en"
        >
          <ExternalExportIcon className="h-6 w-6 !fill-blue-light" />
          <span className="">Instructions</span>
        </Link>
        <span className="block sm:inline">
          on how to find your LinkedIn profile URL
        </span>
      </p>
      <InputField
        name="linkedin_public_profile_url"
        label="Linked in profile URL"
        required
      />
      <div className="my-20">
        <p className="h4 !font-semibold">Do you have a web site?</p>
        <InputField name="website" label="Web site URL" />
      </div>
      <p className="h4 mb-2 !font-semibold">Certification</p>
      <p>
        Please select the highest certification level you have achieved and
        upload your certificate.
      </p>
      <div className="flex min-w-full flex-1 flex-col pt-6">
        <Select name="icf_certificate_type" required>
          <SelectTrigger className="mb-10 mt-2 min-w-full max-w-xs rounded-[4px] border border-gray-medium p-3 data-[placeholder]:italic">
            <SelectValue placeholder="Select certification level" />
          </SelectTrigger>
          <SelectContent className="min-w-full">
            {icfList?.map((item) => (
              <SelectItem key={item} value={item}>
                {item}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="flex flex-row gap-10 pb-7 pt-3">
        <Popover>
          <PopoverTrigger asChild>
            <button className="flex h-14 min-w-full max-w-xs items-center justify-between rounded border border-gray-medium bg-transparent p-4 text-base font-normal leading-[22px] ring-offset-white focus:border-blue-light focus:outline-none focus:ring-1 focus:ring-blue-light disabled:cursor-not-allowed disabled:opacity-50">
              <span
                className={cn(
                  icfDate ? "text-gray-veryDark" : "text-gray-dark"
                )}
              >
                {(icfDate && format(icfDate, "MMMM dd, yyyy")) ||
                  "Select your certificate expiration date"}
              </span>
              <ArrowDownIcon />
            </button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              initialFocus
              mode="single"
              selected={icfDate}
              onSelect={setIcfDate}
              name="icf_certificate_expiry_date"
            />
          </PopoverContent>
        </Popover>
      </div>
      <Dropzone setFilesData={setIcfFile} />
      <div className="my-20">
        <p className="h4 mb-4 mt-8 !font-semibold">
          Why are you interested in being a Skillsoft Coach?
        </p>
        <Textarea
          maxLength={3000}
          name="why_skillsoft"
          info="Please limit your question to 3000 characters (remaining: 3000)"
        />
      </div>
      <p className="h4 mb-4 mt-8 !font-semibold">
        Is there anything else you would like to share with us?
      </p>
      <Textarea
        maxLength={3000}
        name="additional_comments"
        info="Please limit your question to 3000 characters (remaining: 3000)"
      />
      <div className="pt-16 text-center">
        <Button
          type="submit"
          loading={isLoading}
          id="submit-application"
          text="Submit application"
          className="px-6 py-3 text-2xl font-semibold"
        />
      </div>
    </form>
  );
}
