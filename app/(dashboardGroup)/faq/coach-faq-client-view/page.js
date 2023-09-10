export default function ClientView() {
  return (
    <div className="container mx-auto max-w-6xl">
      <h1 className="mt-12 text-center text-[34px] text-navy">Client view</h1>
      <div className="flex flex-col p-8">
        <p className="mb-4 text-base text-gray-veryDark">
          The Pluma client dashboard is oriented around the 1:1 video sessions
          you all will be doing together. You can find a video overview below.
        </p>
        <h3 className="text-xl">Onboarding:</h3>
        <p className="mb-4 text-base text-gray-veryDark">
          Clients complete their profile including: self assessment, 360°, and
          extended profile questions. These items are all completed prior to
          being paired with a coach and are visible to you immediately upon
          being paired with a client.
        </p>
        <h3 className="text-xl">Focus Areas and Coaching Plan:</h3>
        <p className="mb-4 text-base text-gray-veryDark">
          These tasks are automatically associated as preparatory work for your
          client&apos;s second coaching session. They are asked to draft their
          Focus Area selection and goals for their coaching work with you.
        </p>
        <h3 className="text-xl">Ongoing Coaching:</h3>
        <p className="mb-4 text-base text-gray-veryDark">
          Agenda questions are automatically created as preparatory work for an
          upcoming session. Any resources that you assign via the syllabus will
          also show up as tasks to be completed prior to the next upcoming
          session. You will be notified when clients complete these tasks.
        </p>
        <h3 className="text-xl">Remeasurement:</h3>
        <p className="mb-4 text-base text-gray-veryDark">
          Remeasurement items will automatically be created as preparatory work
          to the upcoming session after a client has completed 2/3 of their
          sessions with you. The steps of remeasurement include brief self
          assessment (only on the focus areas they chose) and 360°, marking
          whether or not they have completed the goals they identified in their
          Coaching Plan, repeating a brief engagement survey regarding how they
          feel about their role and organization, and providing us with feedback
          on Pluma and the coaching experience.
        </p>
        <h3 className="text-xl">Impact Report:</h3>
        <p className="mb-4 text-base text-gray-veryDark">
          Once clients have completed the remeasurement tasks their Impact
          Report will automatically be generated and made available to you and
          them for review during your final session together. The Impact Report
          includes valuable information and &apos;preparing for after
          coaching&apos; questions that you all should review together
        </p>
        <div className="my-6">
          <video controls>
            <source
              src="https://pluma-cdn.s3.amazonaws.com/coach/video/Chat_enhancements.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </div>
  );
}
