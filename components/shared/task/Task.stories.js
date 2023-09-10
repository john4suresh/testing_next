import React from "react";
import TaskComponent from "./index";

const mocks = {
  todo: {
    title: "Complete your profile",
    description: "Complete your profile to get stated with clients",
    taskInfo: "Recommended to complete in the next 14 days",
    suggestedTime: "1-2 hours",
    taskSlug: "profile",
    status: "to_do",
  },
  completed: {
    title: "Completed profile",
    description: "Edit anytime in your profile settings.",
    status: "to_do",
    taskSlug: "profile",
  },
  completedSession: {
    id: 3,
    conference_call_id: 44,
    conference_call_time: "June 20 at 11:58AM",
    client_id: 28,
    client_name: "User",
    help_text: "Recommended to complete before the end of the month",
    identifier: "completed_call",
    user_timezone_shorthand: "PDT",
  },
  lateCancelSession: {
    id: 4,
    conference_call_id: 45,
    conference_call_time: "August 12 at 12:00AM",
    client_id: 29,
    client_name: "User",
    help_text: "Recommended to complete before the end of the month",
    identifier: "late_cancel",
    user_timezone_shorthand: "IST",
  },
};

export default {
  component: TaskComponent,
  tags: ["autodocs"],
  args: {},
};

export const TodoTask = {
    render: () => (
      <TaskComponent type="todo" details={mocks.todo} eventHandler={() => {}} />
    ),
  },
  CompletedTask = {
    render: () => (
      <TaskComponent
        type="completed"
        details={mocks.completed}
        eventHandler={() => {}}
      />
    ),
  },
  CompletedSessionTask = {
    render: () => (
      <TaskComponent
        type="completed_call"
        details={mocks.completedSession}
        eventHandler={() => {}}
      />
    ),
  },
  LateCancelSessionTask = {
    render: () => (
      <TaskComponent
        type="late_cancel"
        details={mocks.lateCancelSession}
        eventHandler={() => {}}
      />
    ),
  };
