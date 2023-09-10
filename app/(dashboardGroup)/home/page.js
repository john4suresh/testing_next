import { Suspense } from "react";
import CompletedTask from "./_components/completed-task";
import CompletedLoading from "./_loading/completed-loading";
import EngagementBanner from "./_components/engagement-banner";
import EngagementLoading from "./_loading/engagement-loading";
import UpcomingSessions from "./_components/upcoming-sessions";
import UpcomingLoading from "./_loading/upcoming-loading";
import SessionReporting from "./_components/session-reporting";

export default function CoachHomePage() {
  return (
    <div className="grid grid-cols-12 pb-6 pr-6">
      <div className="col-span-12 xl:col-span-11">
        <Suspense fallback={<EngagementLoading />}>
          <EngagementBanner />
        </Suspense>
        <div className="grid gap-6 lg:grid-cols-12">
          <div className="xs:col-span-12 lg:col-span-8 xl:col-span-9">
            <SessionReporting />
            <Suspense fallback={<UpcomingLoading />}>
              <UpcomingSessions />
            </Suspense>
            <Suspense fallback={<CompletedLoading />}>
              <CompletedTask />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}
