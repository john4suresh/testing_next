import React from "react";
import CardComponent from "./index";

const args = {
  type: "recommended",
  className: "bg-gray w-full",
  children: <p>Card</p>,
};

export default {
  title: "Card",
  component: CardComponent,
  tags: ["autodocs"],
  args: args,
};

export const Card = {
  args: {},
};
