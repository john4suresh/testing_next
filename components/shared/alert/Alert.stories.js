import React from "react";
import AlertComponent from "./index";

const args = {
  type: "warning",
  children: <p>Alert</p>,
};

export default {
  title: "Alert",
  component: AlertComponent,
  tags: ["autodocs"],
  args: args,
};

export const Warning = {
  args: {},
};
