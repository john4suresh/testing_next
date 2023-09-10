"use client";
import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import PropTypes from "prop-types";
import Image from "next/image";
import { cn } from "@/lib/utils";

const MenuDropdown = (props) => {
  const { icon, children, customClassName = "" } = props;
  return (
    <Menu
      as="div"
      className={cn(
        "relative mr-8 inline-flex w-6 origin-bottom-right cursor-pointer items-center justify-center",
        customClassName
      )}
    >
      <Menu.Button>
        <Image src={icon} alt="profile" className="cursor-pointer" />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="menu-box-shadow absolute right-0 top-[60px] w-40 divide-y divide-gray-veryLight bg-white">
          {children}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default MenuDropdown;

MenuDropdown.propTypes = {
  icon: PropTypes.object.isRequired,
  customClassName: PropTypes.string,
};
