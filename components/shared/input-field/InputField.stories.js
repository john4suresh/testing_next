import React from "react";
import InputFieldComponent from "./index";

export default {
  component: InputFieldComponent,
  tags: ["autodocs"],
  args: {},
};

export const Disabled = {
    render: () => (
      <InputFieldComponent name="disabled" label="Disabled" disabled={true} />
    ),
  },
  Active = {
    render: () => (
      <InputFieldComponent name="active" label="Active" autoFocus={true} />
    ),
  },
  Completed = {
    render: () => (
      <InputFieldComponent
        name="completed"
        label="Completed"
        value="Completed"
      />
    ),
  },
  Error = {
    render: () => (
      <InputFieldComponent name="error" label="Error" isError={true} />
    ),
  },
  Required = {
    render: () => (
      <InputFieldComponent
        name="required"
        label="Required"
        required
        autoFocus
      />
    ),
  };
