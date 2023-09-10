import Link from "next/link";

export default function TroubleShootingSteps() {
  return (
    <div className="container mx-auto max-w-6xl">
      <h1 className="mt-12  text-center text-[34px]">
        TroubleShooting Skillsoft Coaching video
      </h1>
      <div className="flex flex-col items-center justify-center"></div>
      <div className="flex flex-col p-8">
        <p className="mb-4 text-base text-gray-veryDark">
          Use this guide to troubleshoot Skillsoft Coaching Video. Here are some
          common reasons for experiencing technical difficulties when using
          Skillsoft Coaching Video during your sessions:
        </p>
        <div className="mb-4 text-base text-gray-veryDark">
          <ul className="ml-6 list-disc">
            <li>
              <b>Out of date browser:</b> Please download the latest version of{" "}
              <Link
                href="https://www.google.com/chrome/?brand=CHBD&gclid=CjwKCAjw8-78BRA0EiwAFUw8LOXceIz3ajSvSFBErijnOYyp2lN2dCOuU1pWTpjR1g0FGirxiBc0nRoCp7AQAvD_BwE&gclsrc=aw.ds"
                target="_blank"
                rel="noreferrer noopener"
                className="text-blue-light"
              >
                Chrome
              </Link>{" "}
              or{" "}
              <Link
                href="https://www.mozilla.org/en-US/firefox/new/"
                target="_blank"
                rel="noreferrer noopener"
                className="text-blue-light"
              >
                Firefox
              </Link>{" "}
              to your device and use one of these browsers to log into Skillsoft
              Coaching. You may{" "}
              <Link
                href="https://www.whatsmybrowser.org/"
                target="_blank"
                rel="noreferrer noopener"
                className="text-blue-light"
              >
                click on this link
              </Link>{" "}
              to verify the current browser version.
            </li>

            <li className="mt-4">
              <b>Docking and undocking the computer:</b> Docking or undocking
              your computer from a docking station will lead to video and/or
              audio failure.Please undock this, then restart your computer
              before logging back into Skillsoft Coaching. Docking and undocking
              changes settings on your device that the restart will solve.
            </li>
            <li className="mt-4">
              <b>Video-conferencing interference:</b> Some video conferencing
              apps like Skype, Zoom, etc. may be running in the background of
              your device. Since these programs may log a user in automatically
              upon startup, this could lead to the Skillsoft Coaching Video
              failure because one or more applicationsare blocking access to
              your system. Please close out all applications and re-open the
              video in a private or incognito browser
            </li>
            <li className="mt-4">
              <b>Low bandwidth:</b> Unstable or insufficient Wi-Fi will lead to
              Skillsoft Coaching Video connection issues. Test your bandwidth{" "}
              <Link
                href="https://www.speedtest.net/"
                target="_blank"
                rel="noreferrer noopener"
                className="text-blue-light"
              >
                here
              </Link>{" "}
              by selecting &quot;Go&quot; and confirm internet speeds are a
              minimum of 40 Mbps Download and 20 Mbps Upload
            </li>
          </ul>
        </div>
        <h3 className="text-xl">General Troubleshooting Tips:</h3>
        <div className="mb-6 text-base text-gray-veryDark">
          <ul className="ml-4 list-disc">
            <li>First, close out any open applications.</li>
            <li>Clear your browser history and cache.</li>
            <li>
              Then log into Skillsoft Coaching using a private or incognito
              window.
            </li>
            <li>
              You will be prompted within the browser to &quot;allow
              access&quot; to your camera and microphone. Please select
              &quot;Yes&quot; to allow access.
            </li>
            <li>
              Click on the video icon in Skillsoft Coaching to join the meeting
              and confirm your device settings are working as expected.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
