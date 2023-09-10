import Button from "@/components/shared/button";
import MultiTextInput from "@/components/shared/multitext-input";
import React from "react";

const CoachBio = () => {
  return (
    <div className="container mx-auto max-w-5xl px-5">
      <h1 className="mb-8 text-center text-[34px] font-semibold">
        Your Skillsoft Coaching coach bio
      </h1>
      <div>
        <p className="mb-6 text-base font-normal">
          Your coach bio should highlight your business acumen, coaching
          experience and other competencies. Your answers to these questions
          will be visible to your clients upon pairing, so you want to be
          thorough and put your best foot forward. We recommend typing your
          responses in Word or Google Docs, and check for grammar, spelling, and
          punctuation before pasting your answers below.
        </p>
        <h2 className="text-base font-semibold">
          Here are some additional tips for crafting great answers:
        </h2>
        <ul className="list-disc p-6">
          <li className="mb-4">
            Write your responses in English only, even if you will be coaching
            in other language(s)
          </li>
          <li className="mb-4">
            Be concise and only include relevant information to the question.
          </li>
          <li className="mb-4">
            Avoid typos or misspellings. Clients make snap judgements easily and
            first impressions have outsized importance.
          </li>
          <li className="mb-4">
            Do not mention preferences for coaching specific audiences (women,
            tech industry, new managers, etc.) as this may alienate clients that
            fall outside those categories.
          </li>
          <li className="mb-4">
            Do not go into too much detail about coach credentialing. Clients
            are more concerned with how your background and experience will help
            you understand and support them versus the various assessments or
            certifications you have been trained in
          </li>
        </ul>
        <p className="font-semibold text-blue-light">
          Click here for an example coach bio.
        </p>
      </div>
      <div className="mt-5">
        <MultiTextInput
          name="linked-in-profile-url"
          label="Linked in profile URL"
          customeStyles="mb-4"
          labelStyles="font-normal text-sm pl-2"
          characterLength
          rows={1}
        />
        <MultiTextInput
          name="linked-in-profile-url"
          label="What makes you passionate about coaching?*"
          labelStyles="font-normal text-sm pl-2"
          customeStyles="mb-4"
          characterLength
          rows={2}
        />
        <MultiTextInput
          name="linked-in-profile-url"
          label="What is your professional background?*"
          labelStyles="font-normal text-sm pl-2"
          customeStyles="mb-4"
          characterLength
          rows={2}
        />
        <MultiTextInput
          name="linked-in-profile-url"
          label="How do you leverage this experience to help your clients?"
          labelStyles="font-normal text-sm pl-2"
          customeStyles="mb-4"
          characterLength
          rows={2}
        />
        <MultiTextInput
          name="linked-in-profile-url"
          label="List the industries or organizations you have coached at."
          labelStyles="font-normal text-sm pl-2"
          customeStyles="mb-4"
          characterLength
          rows={2}
        />
        <MultiTextInput
          name="linked-in-profile-url"
          label="What focus areas have you worked with clients on?*"
          labelStyles="font-normal text-sm pl-2"
          customeStyles="mb-4"
          characterLength
          rows={2}
        />
        <MultiTextInput
          name="linked-in-profile-url"
          label="Describe your coaching approach and communication style.*"
          labelStyles="font-normal text-sm pl-2"
          customeStyles="mb-4"
          characterLength
          rows={2}
        />
        <MultiTextInput
          name="linked-in-profile-url"
          label="What is your educational background?*"
          labelStyles="font-normal text-sm pl-2"
          customeStyles="mb-4"
          characterLength
          rows={2}
        />
        <MultiTextInput
          name="linked-in-profile-url"
          label="List your coach credentials and certifications.*"
          labelStyles="font-normal text-sm pl-2"
          customeStyles="mb-4"
          characterLength
          rows={2}
        />
        <MultiTextInput
          name="linked-in-profile-url"
          label="How do you like to spend your free time?*"
          labelStyles="font-normal text-sm pl-2"
          customeStyles="mb-4"
          characterLength
          rows={2}
        />
      </div>

      <div className="mt-12 flex flex-col items-center">
        <Button variant="primary" text="Save" />
      </div>
    </div>
  );
};

export default CoachBio;
