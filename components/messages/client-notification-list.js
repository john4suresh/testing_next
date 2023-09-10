"use client";
import React, { useState } from "react";
import Image from "next/image";
import useSWR from "swr";
import { format } from "date-fns";
import Skeleton from "react-loading-skeleton";
import { cn } from "@/lib/utils";
import { notification } from "@/lib/apiUrls";
import Avatar from "@/components/shared/avatar";
import PopoverAction from "@/components/shared/popover-action";
import { toast } from "@/components/shared/toast/use-toast";
import NotificationDot from "@/public/assets/icons/notificationDot.svg";
import api from "@/lib/api";

const ClientNotificationList = ({ selectedClient }) => {
  const { data, error, isLoading, mutate } = useSWR(
    notification.coachClientIndividualNotificationList(selectedClient?.id),
    {
      refreshInterval: 6000,
    }
  );

  const handleMarkAsRead = async (id) => {
    try {
      let response = await api.post(
        notification.markAsReadNotification(selectedClient?.id),
        { notification_id: id }
      );
      mutate();
      return toast({
        title: "Submitted Successful",
        variant: "destructive",
      });
    } catch (e) {
      return toast({
        title: "Something went wrong",
        variant: "destructive",
      });
    }
  };

  return (
    <ul className="bg-white">
      {data?.results?.map((item) => (
        <li key={item?.id} className="border-b border-gray-medium p-4">
          <span className="grid grid-cols-4 gap-6">
            <span className="col-span-3 inline-flex">
              <span className="mr-2">
                <Avatar name={item?.name} size="small" />
              </span>
              <span>
                <p className="h3 mb-2 !font-semibold">{item?.name}</p>
                <p className="body">{item?.text}</p>
              </span>
            </span>
            <span className="col-span-1 flex flex-col items-end justify-between lg:flex-row lg:items-center lg:justify-end">
              <span className="inline-flex items-center">
                <p
                  className={cn(
                    "caption !font-semibold !text-gray-veryDark",
                    !item?.read_by_coach ? "mr-2 xl:mr-4" : ""
                  )}
                >
                  {format(new Date(item?.timeSent), "MMM dd")}
                </p>
                {!item?.read_by_coach && (
                  <Image
                    src={NotificationDot}
                    alt=""
                    className="my-1 ml-auto lg:mr-2 xl:mr-9"
                  />
                )}
              </span>
              {!item?.read_by_coach && (
                <span className="translate-x-1.5">
                  <PopoverAction
                    title="Mark as read"
                    iconClassName="rotate-90"
                    onClick={() => handleMarkAsRead(item?.id)}
                  />
                </span>
              )}
            </span>
          </span>
        </li>
      ))}
    </ul>
  );
};

export default ClientNotificationList;
