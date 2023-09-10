import Link from "next/link";

export default function CoachVideoTips() {
  return (
    <div className="container mx-auto max-w-6xl">
      <h1 className="mt-12 text-center text-[34px] text-navy">
        Conducting a video session
      </h1>
      <div className="flex flex-col p-8">
        <p className="mb-4 text-base text-gray-veryDark">
          For client convenience, Skillsoft Coaching has instituted two options
          for clients to conduct their sessions with you. One is the default
          Skillsoft Coaching powered by Zoom meeting system and the other is
          through the client`&apos;`s preferred conferencing app as an
          alternative to using the Skillsoft Coaching default system.
        </p>
        <h3 className="my-4 text-xl">
          Option 1 - Preferred Video Conferencing App:
        </h3>
        <p className="text-base text-gray-veryDark">
          Clients may opt to use their preferred video conferencing for
          Skillsoft Coaching video sessions. They may do so within their
          dashboard by selecting the Start Session icon in their left navigation
          bar and pasting their unique meeting URL under Option 1. Coaches will
          automatically be notified when this happens and receive a message from
          their Skillsoft Coaching Guide confirming the client`&apos;`s
          preferred conferencing details.
        </p>
        <div className="my-8">
          <video controls>
            <source
              src="https://pluma-cdn.s3.amazonaws.com/coach/video/Chat_enhancements.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <h3 className="mb-4 text-xl">
          How to Download Video Conferencing Apps
        </h3>
        <p className="mb-4 text-base text-gray-veryDark">
          For client convenience, Skillsoft Coaching has instituted the option
          for clients to attend coaching sessions via their company’s preferred
          video conferencing platform as an alternative to using the Skillsoft
          Coaching video system. For privacy and security purposes, all other
          communications (messaging, scheduling, resource sharing, etc. MUST
          continue to take place in the Skillsoft Coaching system).
        </p>
        <p className="mb-4 text-base text-gray-veryDark">
          Please use this guide to help you download the conferencing platforms
          that you will potentially need in order to connect with your client
          using the meeting URL that they’ve provided. This URL will be
          displayed under the calendar icon where you normally go to initiate
          video sessions, so once you have the platforms installed on your
          device, you will not need to do anything differently to access the
          session.
        </p>
        <p className="mb-4 text-base text-gray-veryDark">
          These downloads are all free, and should be installed prior to your
          first session with a client. For the easiest process, we recommend
          downloading and installing all options on your desktop now so you are
          prepared for all systems in advance. If you have any difficulties,
          please ping your Skillsoft Coaching CSM.
        </p>
        <h3 className="mt-4 text-base">Zoom:</h3>
        <div className="mb-6 text-base text-gray-veryDark">
          <ul className="ml-4 list-disc">
            <li>
              <Link
                href="https://zoom.us/download"
                target="_blank"
                rel="noreferrer noopener"
                className="text-blue-light"
              >
                follow this link
              </Link>
            </li>
            <li>
              Choose the download that says &quot;Zoom Client for Meetings&quot;
            </li>
          </ul>
        </div>
        <h3 className="text-base">Webex:</h3>
        <div className="mb-6 text-base text-gray-veryDark">
          <ul className="ml-4 list-disc">
            <li>
              <Link
                href="https://www.webex.com/downloads.html"
                target="_blank"
                rel="noreferrer noopener"
                className="text-blue-light"
              >
                follow this link
              </Link>
            </li>
            <li>Choose the download that says &quot;Webex Meetings&quot;</li>
          </ul>
        </div>
        <h3 className="text-base">Bluejeans:</h3>
        <div className="mb-6 text-base text-gray-veryDark">
          <ul className="ml-4 list-disc">
            <li>
              <Link
                href="https://www.bluejeans.com/downloads"
                target="_blank"
                rel="noreferrer noopener"
                className="text-blue-light"
              >
                follow this link
              </Link>
            </li>
            <li>
              Choose the download that correlates with your device (Mac or
              Windows)
            </li>
          </ul>
        </div>
        <h3 className="text-base">Skype for Business:</h3>
        <div className="mb-6 text-base text-gray-veryDark">
          <ul className="ml-4 list-disc">
            <li>
              <Link
                href="https://products.office.com/en-us/skype-for-business/download-app"
                target="_blank"
                rel="noreferrer noopener"
                className="text-blue-light"
              >
                follow this link
              </Link>
            </li>
            <li>
              Choose the download that correlates with your device (Mac or
              Windows)
            </li>
          </ul>
        </div>
        <h3 className="text-base">GoToMeeting:</h3>
        <p className="mb-4 text-base text-gray-veryDark">
          To download desktop app (available on paid plans only): Choose the
          download that correlates with your device
        </p>
        <div className="mb-6 text-base text-gray-veryDark">
          <ul className="ml-4 list-disc">
            <li>
              For Mac,{" "}
              <Link
                href="https://support.goto.com/meeting/help/steps-for-installing-on-macs-g2m050005?c_prod=g2m&amp;c_name=mktg"
                target="_blank"
                rel="noreferrer noopener"
                className="text-blue-light"
              >
                follow this link
              </Link>
            </li>
            <li>
              For Windows,{" "}
              <Link
                href="https://support.goto.com/meeting/help/steps-for-installing-on-windows-g2m050019?c_prod=g2m&amp;c_name=mktg"
                target="_blank"
                rel="noreferrer noopener"
                className="text-blue-light"
              >
                follow this link
              </Link>
            </li>
          </ul>
        </div>
        <h3 className="my-4 text-xl">
          Option 2 - Skillsoft Coaching Video (default video):
        </h3>
        <p className="text-base text-gray-veryDark">
          Skillsoft Coaching Video is the default video session built into the
          platform. Clients are not required to add their preferred conferencing
          URL in Option 1 and instead opt to connect for sessions by joining
          Skillsoft Coaching Video.
        </p>
        <Link
          href="coach-faq-video-conferencing-apps/troubleshooting-steps"
          className="text-blue-light"
        >
          <p className="my-6 text-base">
            Please review this one page guide for common FAQs and
            troubleshooting steps for Skillsoft Coaching Video.{" "}
          </p>
        </Link>
        <h3 className="text-xl">Joining a Skillsoft Coaching session:</h3>
        <p>
          Regardless of which video option is chosen by the client, they will
          join their coaching session directly from their Skillsoft Coaching
          dashboard by selecting &quot;Start Session&quot;. Coaches will also
          join the session as normal in the Skillsoft Coaching platform.
        </p>
        <div className="my-6 text-base text-gray-veryDark">
          <ul className="ml-4 list-disc">
            <li>Select the client name from your dashboard.</li>
            <li>Navigate to their profile.</li>
            <li>Click on the video icon at the top to start the meeting.</li>
            <li>
              If the client has added a conferencing URL using Option 1, you
              will automatically be redirected to the application and the call
              will begin.
            </li>
            <li>
              If the client is using Skillsoft Coaching Video Option 2, you will
              be prompted to check your video settings (camera and microphone)
              and then directed into the video call.
            </li>
          </ul>
        </div>
        <h3 className="text-xl">Confidentiality:</h3>
        <p>
          For privacy and security purposes, all client communications
          (messaging, scheduling, resource sharing, conducting sessions, etc.)
          MUST continue to take place in the Skillsoft Coaching system.
        </p>
        <h3 className="mt-6 text-xl">Questions?</h3>
        <p>
          If your client is having trouble adding their meeting link, please ask
          them to review the FAQ link at the top right corner of their dashboard
          or contact their Coaching Guide for assistance.{" "}
        </p>
      </div>
    </div>
  );
}
