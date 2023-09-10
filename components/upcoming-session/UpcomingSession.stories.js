import React from "react";
import UpcomingSessionComponent from "./index";

const mock = {
  id: 2023,
  client: {
    id: 1,
    name: "User",
    company_name: "Skillsoft",
  },
  time_slot: "Thursday, July 6th, 2023 @ 05:00am",
  coaching_end_date: "July. 6th, 2023",
  user_timezone_shorthand: "PDT",
  utc_time_slot: "2023-07-06T12:00:00Z",
  has_agenda: true,
  start_time: "2023-07-16T16:00:00",
  end_time: "2023-07-06T06:00:00",
  utc_start_time: "2023-07-06T12:00:00Z",
  utc_end_time: "2023-07-06T13:00:00Z",
  session_number: 1,
  total_sessions: "4",
  has_session_notes: "test note",
};

export default {
  title: "UpcomingSession",
  component: UpcomingSessionComponent,
  tags: ["autodocs"],
  args: {},
};

export const UpcomingSession = {
  render: () => (
    <UpcomingSessionComponent details={mock} eventHandler={() => {}} />
  ),
};
