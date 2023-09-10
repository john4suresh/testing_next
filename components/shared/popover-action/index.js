"use client";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Button from "../button";
import { Popover, Transition } from "@headlessui/react";
import MenuKabob from "@/public/assets/icons/menu-kabob.svg";

export default function PopoverAction({
  icon,
  className,
  iconClassName,
  title,
  onClick = () => {},
}) {
  return (
    <Popover className={cn("relative", className)}>
      {({ open }) => (
        <>
          <Popover.Button
            className={cn({
              "focus:outline-none focus-visible:!ring-transparent": open,
            })}
          >
            {icon || (
              <Image
                src={MenuKabob}
                alt=""
                width={24}
                height={24}
                className={iconClassName}
              />
            )}
          </Popover.Button>
          <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Popover.Panel className="absolute left-1/2 top-1/4 z-10 mt-3 w-screen max-w-xs -translate-x-1/2 -translate-y-1/4">
              {title && (
                <Button
                  id="popover-action-button"
                  text={title}
                  variant="secondary"
                  onClick={onClick}
                  className="body rounded-xs border border-blue-light py-4 pl-4 pr-12 text-gray-veryDark hover:text-gray-veryDark"
                />
              )}
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}
