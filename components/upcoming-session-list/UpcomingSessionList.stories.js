import React from "react";
import UpcomingSessionListComponent from "./index";

const mock = [
  {
    id: 1588,
    time_slot: "Aug 23, 2023 | 10:30 am EST",
  },
  {
    id: 1587,
    time_slot: "Aug 29, 2023 | 11:30 am PST",
  },
  {
    id: 1586,
    time_slot: "Sep 6, 2023 | 12:30 am IST",
  },
  {
    id: 1586,
    time_slot: "Sep 12, 2023 | 01:30 pm IST",
  },
  {
    id: 1585,
    time_slot: "Sep 21, 2023 | 12:30 am IST",
  },
  {
    id: 1584,
    time_slot: "Sep 28, 2023 | 01:30 pm IST",
  },
];

export default {
  title: "UpcomingSessionList",
  component: UpcomingSessionListComponent,
  tags: ["autodocs"],
};

export const UpcomingSessionList = {
  render: () => <UpcomingSessionListComponent data={mock} />,
};
