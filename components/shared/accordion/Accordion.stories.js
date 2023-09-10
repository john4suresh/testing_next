import React from "react";
import AccordionComponent from "./index";

const args = {
  title: "Title",
  children: <p>Content</p>,
};

export default {
  title: "Accordion",
  component: AccordionComponent,
  tags: ["autodocs"],
  args: args,
};

export const Accordion = {
  args: {},
};
