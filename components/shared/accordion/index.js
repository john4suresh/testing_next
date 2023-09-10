"use client";
import Image from "next/image";
import PropTypes from "prop-types";
import { Disclosure, Transition } from "@headlessui/react";
import arrowUp from "@/public/assets/icons/arrowUp.svg";
import arrowDown from "@/public/assets/icons/arrowDown.svg";
import { cn, camelize } from "@/lib/utils";

export default function Accordion({ title = "", children, className }) {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button
            data-automation-id={
              open ? `${camelize(title)}Collapse` : `${camelize(title)}Expand`
            }
            className={cn(
              "h2 mb-3 inline-flex w-full items-center justify-between border-b border-gray-medium py-3 text-left",
              className
            )}
          >
            {title}
            <Image
              src={open ? arrowUp : arrowDown}
              alt={open ? "collapse" : "expand"}
              className="-mb-1"
            />
          </Disclosure.Button>
          <Transition
            enter="transition-all duration-200 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-100 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Disclosure.Panel>{children}</Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
}

Accordion.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
