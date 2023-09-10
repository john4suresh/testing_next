import Button from "./index";

const buttonArgs = {
  variant: "primary",
  text: "Button",
  size: "small",
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Buttons/Button",
  component: Button,
  tags: ["autodocs"],
  args: buttonArgs,
  argTypes: {
    variant: {
      options: ["primary", "secondary"],
      control: { type: "radio" },
    },
    size: {
      options: ["small", "medium"],
      control: { type: "radio" },
    },
  },
};

export const ButtonKinds = {
  Primary: {
    args: {
      variant: "primary",
      text: buttonArgs.text,
    },
  },
  Secondary: {
    args: {
      variant: "secondary",
      text: buttonArgs.text,
    },
  },
};

export const Sizes = {
  Small: {
    args: {
      size: "small",
      text: buttonArgs.text,
    },
  },
  Medium: {
    args: {
      size: "medium",
      text: buttonArgs.text,
    },
  },
};
