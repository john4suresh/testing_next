import React from "react";
import NotificationsListComponent from "./index";

const mock = [
  {
    id: 1,
    sendDate: "Feb. 14, 2023",
    message: "Holly Kulkarni has updated her coaching plan.",
  },
  {
    id: 1587,
    sendDate: "Feb. 15, 2023",
    message: "Holly Kulkarni has updated her agenda questions for session 8.",
  },
];

export default {
  title: "NotificationsList",
  component: NotificationsListComponent,
  tags: ["autodocs"],
};

export const NotificationsList = {
  render: () => <NotificationsListComponent data={mock} />,
};
