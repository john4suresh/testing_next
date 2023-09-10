import NextSession from "@/components/next-session";
import UpcomingSessionList from "@/components/upcoming-session-list";
import NotificationsList from "@/components/notifications-list";
import EngagementBanner from "./engagement-banner";
import ClientDetails from "./client-details";
import CompanyDocuments from "./company-documents";
import FocusAreas from "./focus-areas";
import CoachingPlan from "./coaching-plan";
import RemeasurementProgress from "./remeasurement-progress";
import ImpactReport from "./impact-report";

export default function ClientDashboard() {
  return (
    <div className="grid grid-cols-12 pb-6 pr-6">
      <div className="col-span-full xl:col-span-11">
        {/* Engagement Banner */}
        <EngagementBanner />
        {/* Center Part */}
        <div className="grid gap-6 lg:grid-cols-12">
          <div className="xs:col-span-12 lg:col-span-8 xl:col-span-9">
            <div>
              {/* Next Session */}
              <h2 className="mb-4">Next Session</h2>
              <NextSession />
              {}
            </div>
            <div className="my-10">
              {/* All upcoming sessions */}
              <h2 className="mb-4">All upcoming sessions</h2>
              <UpcomingSessionList />
            </div>
            <div className="mb-10">
              {/* Notifications */}
              <h2 className="mb-4">Notifications</h2>
              <NotificationsList />
            </div>
            {/* Remeasurement progress */}
            <RemeasurementProgress />
          </div>
          <div className="xs:col-span-12 lg:col-span-4 lg:mt-11 xl:col-span-3">
            {/* Client details */}
            <ClientDetails />
            {/* Company document */}
            <CompanyDocuments />
            {/* Focus areas */}
            <FocusAreas />
            {/* Coaching plan */}
            <CoachingPlan />
            {/* Impact Report */}
            <ImpactReport />
          </div>
        </div>
      </div>
    </div>
  );
}
