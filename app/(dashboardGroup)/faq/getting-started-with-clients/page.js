import Image from "next/image";

export default function GettingStartedWithClients() {
  return (
    <div className="container mx-auto max-w-6xl">
      <h1 className="my-12 text-center text-[34px]">
        Getting Started with Clients
      </h1>
      <div className="flex flex-col items-center justify-center">
        <Image
          src="/images/gettingStarted.svg"
          width={1000}
          height={1000}
          alt="getting-started-img"
          className="mb-8"
        />
      </div>
      <div className="flex flex-col p-8">
        <h3 className="text-xl">Pairing & Notification:</h3>
        <p className="mb-4 text-base text-gray-veryDark">
          Pluma will pair you with clients based on the information you provided
          in your coach profile. This includes industry and coaching experience
          as well as the number of clients you can support. Your client support
          number must be greater than 10, but can be updated at any time via
          your profile. Each time you are paired with a new client you will
          receive an email notification from Pluma.
        </p>
        <h3 className="text-xl">Client information:</h3>
        <p className="mb-4 text-base text-gray-veryDark">
          You will receive information about your client from two sources. The
          first is on your Dashboard under the various icons. The second is via
          your Coach Guide.
        </p>
        <h3 className="text-xl">Building rapport:</h3>
        <p className="mb-4 text-base text-gray-veryDark">
          Clients will have reviewed this document.
        </p>
        <h3 className="text-xl">Introductory session:</h3>
        <div className="mb-4 text-base text-gray-veryDark">
          <ul className="ml-6 list-disc">
            <li>During the first session establish a personal rapport.</li>
          </ul>
          <ul className="ml-11 list-disc">
            <li>
              Introduce yourself and get to know the client to build trust.
            </li>
            <li>
              Ask questions to establish an understanding of their role and
              company.
            </li>
            <li>
              Feel free to make notes in the notes section of their profile on
              your dashboard.
            </li>
          </ul>
          <ul className="ml-6 mt-6 list-disc">
            <li>
              Review their assessment feedback together with them. Suggested
              questions include:
            </li>
          </ul>
          <ul className="ml-11 list-disc">
            <li>What are your key takeaways from reviewing your assessment?</li>
            <li>What surprised you most about your results?</li>
            <li>What do you wish you had more information about?</li>
            <li>
              How does this feedback influence what you might want to work on
              together during our coaching engagement?
            </li>
          </ul>
          <ul className="ml-6 mt-6 list-disc">
            <li>
              Set the terms of the engagement -- review what they can expect
              from you/Pluma, and what you expect from them during the
              engagement. Items to cover include:
            </li>
          </ul>
          <ul className="ml-11 list-disc">
            <li>
              Video sessions scheduled via the Pluma dashboard of either 30, 45,
              or 60 minutes depending on their plan. A client’s plan is visible
              in their profile. Our recommendation is to do sessions biweekly,
              but remember that sessions can be scheduled back-to-back (2 x 30
              for 1 60-minute session). Please find here some best practice
              recommendations for doing 30-minute sessions with clients.
            </li>
            <li>What surprised you most about your results?</li>
            <li>
              Before each session they will be asked to fill out some
              agenda-setting questions 48 hours in advance to help make sure the
              sessions are targeted and useful. These will be shared with you
              under exercises. Clients will see agenda questions in their
              Dashboard Practice area. Note to them that filling out these
              questions in advance of sessions is important preparatory work..
            </li>
            <li>
              Ask about the time commitment they can make to this process (hours
              per week for readings, exercises, etc.). You should target to
              reach out to them 1-2x a week and should include deadlines for the
              exercises and readings you request of them, but you want to make
              sure you move at an appropriate pace.
            </li>
            <li>
              You will be sharing materials and readings from Harvard Business
              Publishing and other sources, they should let you know if they
              find the content helpful and relevant. This is all done via the
              Syllabus.
            </li>
            <li>
              If they have any technical issues with receiving notifications or
              their Dashboard, they can ask their Guide for help at any time.
            </li>
          </ul>
          <ul className="ml-6 mt-6 list-disc">
            <li>Identify next steps.</li>
          </ul>
          <ul className="ml-11 list-disc">
            <li>
              Ask them to select their Focus Areas and draft their Coaching Plan
              goals prior to the second session where you will discuss them
              together.
            </li>
            <li>
              Encourage them to share their Coaching Plan draft with their
              manager for feedback if appropriate.
            </li>
            <li>
              The objective is to have their Coaching Plan and Focus Areas
              finalized by the end of the second session.
            </li>
          </ul>
          <p className="my-4 text-base">
            These items are especially important as they lay the foundation for
            the coaching engagement and help the client understand how to best
            leverage the coaching engagement.
          </p>
          <h3 className="text-xl">Finalizing:</h3>
          <p className="mb-4 text-base text-gray-veryDark">
            After the second session make sure they revise/complete their
            Coaching Plan to reflect your discussion. It is essential that
            clients have chosen Focus Areas and articulated clear goals in the
            Pluma system.
          </p>
        </div>
      </div>
    </div>
  );
}
