import React from "react";
import { Switch } from "@headlessui/react";
import { cn } from "@/lib/utils";

const NotificationSwitch = (props) => {
  const { enabled, setEnabled } = props;
  return (
    <Switch.Group>
      <div className="flex items-center">
        <Switch
          checked={enabled}
          onChange={setEnabled}
          className="relative z-0 inline-flex h-10 w-40 items-center justify-center rounded-full bg-[#ECF0F5] transition-colors"
        >
          <span
            className={cn(
              "absolute z-[-1] inline-flex h-10 items-center justify-center rounded-full bg-[#141C36] text-white transition-transform",
              {
                "left-0 w-16": !enabled,
                "right-0 w-24": enabled,
              }
            )}
          ></span>
          <span
            className={cn("w-16 font-semibold text-white", {
              "text-gray-veryDark": enabled,
            })}
          >
            All
          </span>
          <span
            className={cn("w-24 font-semibold text-white", {
              "text-gray-veryDark": !enabled,
            })}
          >
            Unread
          </span>
        </Switch>
      </div>
    </Switch.Group>
  );
};

export default NotificationSwitch;
