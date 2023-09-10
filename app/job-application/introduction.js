import Image from "next/image";
import Card from "@/components/shared/card";
import Button from "@/components/shared/button";
import email from "@/public/assets/icons/email.svg";

export default function Introduction({ onHandleNextSections }) {
  return (
    <>
      <p className="body">
        Skillsoft Coaching is a digital coaching and professional development
        platform for individuals and businesses. As a Skillsoft coach you will
        be able to reach a broad audience of clients looking to improve their
        lives and careers. You will help clients build leadership and managerial
        skills, developing themselves and others as they drive their businesses
        forward. With your help, your clients will become better leaders,
        managers and colleagues. Skillsoft Coaching takes care of business
        development and implementation and allows coaches to focus on what
        really matters - helping clients identify and achieve goals to become
        their best selves.
      </p>
      <p className="h4 mb-2 mt-8 !font-semibold">How it works</p>
      <p className="body">
        Your application will be reviewed by the Skillsoft Coaching team. You
        should receive an acknowledgement that your application was received. If
        your background, experience and credentials meet our minimum requirement
        and we are looking to add additional coaches, we will get back to you
        with a request for an interview. Please note that the application is
        relatively short and must be completed in one setting as there is no
        ‘save and submit’ later feature.
      </p>
      <p className="h4 mb-2 mt-8 !font-semibold">
        Our minimum requirements to be a Skillsoft Leadership Coach:
      </p>
      <ul className="body mb-12 ml-4 list-disc">
        <li>Accreditation with the ICF at the ACC level or higher</li>
        <li>250+ hours of individual paid coaching experience</li>
        <li>
          10+ years working in a corporate setting with at least 5+ years in a
          people management and leadership role
        </li>
        <li>Excellent communication skills</li>
        <li>High comfort with technology and digital communication</li>
        <li>
          Ability to be build rapport quickly and be responsive to clients
        </li>
      </ul>
      <div className="mx-auto mt-0.5 w-max text-center">
        <Button
          id="apply-now"
          text="Apply now"
          className="px-6 py-3 text-2xl font-semibold"
          onClick={onHandleNextSections}
        />
        <Card
          type="recommended"
          className="mt-11 min-w-fit py-6 pl-6 pr-20 text-left"
        >
          <p className="h4 mb-4 !font-semibold">Questions? Email us at:</p>
          <p className="mt-0.5 inline-flex">
            <Image src={email} alt="" width={24} height={24} />
            <span className="ml-2">Coaches@skillsoft.com</span>
          </p>
        </Card>
      </div>
    </>
  );
}
