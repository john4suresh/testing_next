import Image from "next/image";

export default function KeyCoachingComponents() {
  return (
    <div className="container mx-auto max-w-6xl">
      <h1 className="my-12 text-center text-[34px]">
        Getting Started on Skillsoft Coaching
      </h1>
      <div className="flex flex-col items-center justify-center">
        <Image
          src="/images/keyCoaching.svg"
          width={1500}
          height={1000}
          alt="getting-started-img"
          className="mb-8"
        />
      </div>
      <div className="flex flex-col p-8">
        <h3 className="text-xl">Unlimited messaging:</h3>
        <p className="mb-4 text-base text-gray-veryDark">
          Respond to any client messages within 24 hours. Message clients at
          least once per week to check in on items you discussed or events.
          Check-out our digital coaching tips here. You can learn more about the
          chat functionality via this video here:
        </p>
        <div className="my-6">
          <video controls>
            <source
              src="https://pluma-cdn.s3.amazonaws.com/coach/video/Chat_enhancements.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <h3 className="text-xl">Video sessions:</h3>
        <p className="mb-4 text-base text-gray-veryDark">
          The core component of your interactions with clients will be during
          your 1:1 video sessions with them. Clients have a choice of using
          Pluma’s proprietary video system OR linking their organization’s video
          conferencing platform within Pluma. Either way, you will click on the
          video camera icon to launch a video session with a client. In order to
          be prepared in any instance, please download the relevant video
          conferencing clients found here. Typically, we recommend a cadence of
          one video session every other week (biweekly) during the course of the
          coaching engagement. However, you and your client should find a
          cadence that works best for them, and you are welcome to double-up (do
          sessions back to back) as needed. This can be especially helpful when
          clients are doing 30-minute sessions and some extra time is needed at
          first. You can find more best practices for 30-minute sessions here.
        </p>
        <h3 className="text-xl">Scheduling:</h3>
        <p className="mb-4 text-base text-gray-veryDark">
          You MUST schedule sessions with your clients via the Pluma scheduling
          feature. This feature enables us to know when sessions are completed
          for feedback and payment purposes. Best practice is to schedule
          recurring sessions in advance and amend as needed. Both clients and
          coaches can suggest times using our scheduling application. Once a
          time is accepted, you can add it to your calendar by clicking the plus
          sign in the Pluma system. You can learn more about our scheduling tool
          via this video.
        </p>
        <h3 className="text-xl">Client Progress:</h3>
        <p className="mb-4 text-base text-gray-veryDark">
          When logging into the dashboard coaches can see a list of their
          clients and where they are in the process. You can learn more via this
          video here:
        </p>
        <div className="my-6">
          <video controls>
            <source
              src="https://pluma-cdn.s3.amazonaws.com/coach/video/Chat_enhancements.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <h3 className="text-xl">Assessment and 360°:</h3>
        <p className="mb-4 text-base text-gray-veryDark">
          The customizability of the Pluma self-assessment and 360° process is a
          strong value proposition for our partners. Organizations are
          encouraged to define their own behavior categories and behaviors that
          are most important for successful leadership and management within
          their cultures. These behaviors often come from existing competency
          frameworks that the organization uses during performance reviews and
          in other HR efforts. By focusing on the same behaviors and language in
          the coaching, Pluma is able to emphasize organizational fit and
          continuity even within a bespoke 1:1 coaching experience.
        </p>
        <p className="mb-4 text-base text-gray-veryDark">
          If an organization prefers, they can choose to use the Pluma
          Leadership Assessment (PLA) instead of customizing their own. To learn
          more about the PLA, click here.
        </p>
        <p className="mb-4 text-base text-gray-veryDark">
          Regardless of the behaviors in the assessment/360°, clients and
          reviewers assess using a Likert scale basis of 1 (extreme area for
          improvement) to 100 (extreme strength) in increments of 5. They are
          also always encouraged to add any relevant comments on each behavior.
          The 360° mimics the self-assessment exactly in terms of behaviors and
          scale, but often also includes additional open-ended questions
          customized by the organization.
        </p>
        <p className="mb-4 text-base text-gray-veryDark">
          Clients can invite an unlimited number of colleagues to assess them.
          Clients mark whether the colleagues are managers, direct reports,
          cross-functional colleagues or peer team members. You as the coach can
          view all assessments (and the role of the reviewer) and comments.
        </p>
        <p className="mb-4 text-base text-gray-veryDark">
          Clients can see their own self-assessments and an average of their
          360° feedback, sometimes with manager feedback separated out,
          depending on organizational preferences. In the coach’s view of
          assessments, you will always see a copy of the client’s view to ensure
          you know what they are able to see. All reviewers and clients are told
          ahead of time what the reporting format will be to ensure security and
          trust.
        </p>
        <p className="mb-4 text-base text-gray-veryDark">
          Upon being paired with your client you will see their self-assessment
          and all of their 360° feedback as well. You should review their
          assessment information thoroughly prior to your first video session.
          When discussing 360° feedback you should protect the anonymity of the
          reviewers (including their roles), and discuss the results with the
          client in terms of general learnings and trends. If you have any
          questions about how to do this or come across any particular
          challenges, do not hesitate to reach out to your Pluma Guide.
        </p>
        <p className="mb-4 text-base text-gray-veryDark">
          You can learn more about the Coach’s view of the assessment via this
          video here:
        </p>
        <div className="my-6">
          <video controls>
            <source
              src="https://pluma-cdn.s3.amazonaws.com/coach/video/Chat_enhancements.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <h3 className="text-xl">Focus Areas & Coaching Plan:</h3>
        <p className="mb-4 text-base text-gray-veryDark">
          You and your client will discuss the elements of Focus Area setting
          and Coaching Plan development during or after your introductory
          session. After reviewing their assessment and 360° results during the
          first session, you should ask clients to select the Focus Area
          behaviors that most align with the topics they would like to work on
          with you during the coaching engagement. It is REQUIRED that clients
          choose at least three Focus Areas. These Focus Areas are essential for
          the creation of the syllabus and our impact measurement process.
          Pluma’s proprietary algorithm will typically recommend 8 potential
          behaviors for a client to focus on during the engagement, and request
          that they choose up to four. If they would like to choose behaviors
          that are in their assessment but were not suggested in their 8, that
          is no problem and they should simply reach out to their Pluma Guide to
          request the addition of choices.
        </p>
        <p className="mb-4 text-base text-gray-veryDark">
          In this discussion you should also ask the clients to draft two to
          three specific goals with defined outcomes and specific tactics.
          Getting these goals SMART is important as they are a key piece of how
          we measure if the client is succeeding on the platform. Ideally
          clients will draft goals in between the first and second coaching
          sessions, and finalize the articulation of the goals and outcomes
          during the second session. When we do the remeasurement required to
          generate the Impact Report, we will be asking clients if they achieved
          the goals they identified in their Coaching Plan.
        </p>
        <p className="mb-4 text-base text-gray-veryDark">
          We encourage clients to share their Coaching Plan with their manager
          for comments by clicking the button at the bottom of the form. We
          recommend that they share the Plan with their manager for sign-off and
          engagement on their goals and development efforts. Clients who engage
          their managers in the Pluma process are more likely to achieve their
          goals, but of course there may be discretionary reasons that the
          client prefers to keep the Coaching Plan private from their manager.
          The decision to share the Coaching Plan is solely theirs and their
          goals are kept private unless they opt to share them.
        </p>
        <p className="mb-4 text-base text-gray-veryDark">
          Check out the &apos;Coaching Plan&apos; demo video here:
        </p>
        <div className="my-6">
          <video controls>
            <source
              src="https://pluma-cdn.s3.amazonaws.com/coach/video/Chat_enhancements.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="my-6">
          <video controls>
            <source
              src="https://pluma-cdn.s3.amazonaws.com/coach/video/Chat_enhancements.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <h3 className="text-xl">Syllabus & Practice Resources:</h3>
        <p className="mb-4 text-base text-gray-veryDark">
          Our system generates a syllabus of content recommendations for you
          based on the Focus Areas that a client chooses as part of finalizing
          their Coaching Plan. Many of our resources come via our learning
          partnership with Harvard Business Publishing, and all coaches receive
          access to these resources. To review an item you can click on the
          envelope, and to share it with your client you will click on the paper
          airplane. We recommend sharing one to two items with a client each
          week that you think are particularly relevant to their experiences.
          The syllabus also includes exercises that a client can complete, upon
          completion these will be visible to you in the syllabus as well. We
          also highly encourage coaches to share their own resources with
          clients via the syllabus. Sharing items via the syllabus is a MUST as
          this enables us to track completion rates and ratings clients are
          providing for resources. Any resource you upload to the system will
          only be shared with the client you share it with, and will not be
          visible to other clients or Pluma coaches.
        </p>
        <p className="mb-4 text-base text-gray-veryDark">
          Check out the &apos;Using the Syllabus&apos; demo video here:
        </p>
        <div className="my-6">
          <video controls>
            <source
              src="https://pluma-cdn.s3.amazonaws.com/coach/video/Chat_enhancements.mp4"
              type="video/mp4"
            />
          </video>
        </div>

        <h3 className="text-xl">Remeasurement & Impact Report:</h3>
        <p className="mb-4 text-base text-gray-veryDark">
          A key component to understanding your client’s success as a result of
          their coaching engagement work with you comes in the form of the
          results in their Impact Report. Towards the end of their engagement
          with you (typically after 80% of the planned sessions have been
          completed), clients will see a remeasurement section open on their
          Dashboard. You will also receive an alert that this has opened for
          them. It is of UTMOST importance that clients complete this section in
          a timely manger to ensure we can generate their Impact Report in time
          for your final session with them. This remeasurement and resulting
          report will focus on a number of key indicators:
        </p>
        <div className="mb-4 text-base text-gray-veryDark">
          <ul className="ml-6 list-disc">
            <li>
              Behavior Change: This is a shortened version of the initial
              self-assessment and 360° wherein we ask clients and their feedback
              providers to reevaluate them on the behaviors they selected as
              Focus Areas rather than completing the full assessment again.
            </li>
            <li>
              Sentiment Change: Clients complete the same sentiment survey they
              completed initially, customized by their organization to ask
              questions related to how they feel about their role and the
              organization as a whole.
            </li>
            <li>
              Goal Achievement: Clients let us know if they completed the goals
              they identified in their Coaching Plan goal area.
            </li>
            <li>
              Quotes and Observations: Clients and 360° respondents provide
              quotes and observations about changes they’ve noted as a result of
              the coaching experience.
            </li>
            <li>
              NPS and Feedback: Clients provide feedback on the Pluma platform
              and their coaching experience.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
