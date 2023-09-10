import React, { useState } from "react";
import ModalComponent from "./index";
import Button from "../button";

const args = {
  isOpen: true,
  title: "Modal Title",
  children: <p className="mb-2 mt-4">Modal Content</p>,
};

export default {
  component: ModalComponent,
  tags: ["autodocs"],
  args: args,
};

export const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onToggleModal = () => setIsOpen(!isOpen);

  return (
    <>
      <Button text="Open Modal" onClick={onToggleModal} />
      <ModalComponent
        isOpen={isOpen}
        title={args.title}
        onCloseModal={onToggleModal}
      >
        {args.children}
      </ModalComponent>
    </>
  );
};
