import React from "react";
import Image from "next/image";
import SkillsoftLogo from "@/public/assets/icons/skillsoftLogo.svg";
import NotificationDot from "@/public/assets/icons/notificationDot.svg";
import Avatar from "@/components/shared/avatar";
import { cn } from "@/lib/utils";

const ClientListItem = (props) => {
  const {
    name,
    recent_msg_date,
    has_unread,
    is_online,
    unread_count,
    id,
    handleClick = () => {},
    selectedClient,
  } = props;
  return (
    <>
      <div
        className={cn(
          "flex cursor-pointer items-center justify-center gap-2 border-b border-gray-medium p-4",
          {
            "bg-blue-active":
              !Object.is(selectedClient, null) && selectedClient?.id === id,
          }
        )}
        onClick={handleClick}
      >
        <div className="self-start">
          {name === "Skillsoft Coaching Guide" ? (
            <Image src={SkillsoftLogo} alt="Logo" className="h-10 w-10" />
          ) : (
            <Avatar name={name} isOnline={is_online} size="small" />
          )}
        </div>
        <div className="flex-1">
          <p className="pb-2 text-xl font-semibold leading-6">{name}</p>
          <p className="text-sm">{recent_msg_date}</p>
        </div>
        {has_unread && (
          <div className="text-center">
            <Image
              src={NotificationDot}
              alt="Notification Dot"
              className="mx-auto pb-2"
            />
            <p>({unread_count})</p>
          </div>
        )}
      </div>
    </>
  );
};

export default ClientListItem;
