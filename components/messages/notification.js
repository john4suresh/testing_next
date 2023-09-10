"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import useSWR from "swr";
import { format } from "date-fns";
import Skeleton from "react-loading-skeleton";
import api from "@/lib/api";
import { cn } from "@/lib/utils";
import { notification } from "@/lib/apiUrls";
import NotificationSwitch from "@/components/notifications-list/switch";
import Button from "@/components/shared/button";
import Pagination from "@/components/notifications-list/pagination";
import Avatar from "@/components/shared/avatar";
import PopoverAction from "@/components/shared/popover-action";
import { toast } from "@/components/shared/toast/use-toast";
import NotificationDot from "@/public/assets/icons/notificationDot.svg";
import ClientListItem from "./client-list-item";
import ClientNotificationList from "./client-notification-list";

const Notification = () => {
  const {
    data: allClientList,
    error,
    isLoading,
  } = useSWR(notification.coachNotificationClientList, {
    refreshInterval: 6000,
  });
  const {
    data: notifications,
    error: notificationError,
    isLoading: notificationLoding,
    mutate,
  } = useSWR(notification.coachAllNotificationList(), {
    refreshInterval: 6000,
  });
  const {
    data: unReadnotifications,
    error: unReadnotificationError,
    isLoading: unReadnotificationLoding,
  } = useSWR(notification.coachAllUnreadNotificationList(), {
    refreshInterval: 6000,
  });
  const [selectedClient, setSelectedClient] = useState(null);
  const [displayNotifications, setDisplayNotifications] = useState([]);
  const [enabled, setEnabled] = useState(false);
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

  useEffect(() => {
    if (enabled) {
      setDisplayNotifications(unReadnotifications);
    } else {
      setDisplayNotifications(notifications);
    }
  }, [enabled, notifications, unReadnotifications]);

  if (isLoading) {
    return (
      <div className="grid h-full w-full grid-cols-12">
        <div className="col-span-9">
          <div className="rounded-md border border-gray-medium bg-white p-5 text-left">
            <Skeleton className="mb-2 text-[34px]" />
            <Skeleton className="text-base" count={2} />
            <Skeleton className="mt-5 text-base" count={1} />
          </div>
        </div>
        <div className="col-span-3 mx-4 bg-white">
          {Array(10)
            .fill("")
            .map((_, index) => (
              <div
                key={index}
                className="h-20 w-full border-b border-gray-medium p-4"
              >
                <Skeleton className="h-full" />
              </div>
            ))}
        </div>
      </div>
    );
  }

  return (
    <div className="grid h-full w-full grid-cols-12 pr-6">
      <div className="col-span-full md:col-span-9">
        <div className="rounded-md border border-gray-medium bg-white p-5 text-left">
          <p className="pb-2 text-[34px] font-semibold">All notifications</p>
          <p className="pb-5 text-base">
            You will receive a daily email digest of all your new notifications.
          </p>
          <p className="h-6 text-base">You currently have no notifications.</p>
        </div>
        <div className="mt-6 flex items-center gap-5 bg-white p-4">
          <NotificationSwitch enabled={enabled} setEnabled={setEnabled} />
          <Button
            variant="secondary"
            text={"Mark all as read"}
            className="px-4 py-2 font-semibold"
          />
        </div>
        <div>
          {selectedClient?.id ? (
            <ClientNotificationList selectedClient={selectedClient} />
          ) : (
            <ul className="bg-white">
              {displayNotifications?.results?.map((item) => (
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
          )}
        </div>
        <Pagination />
      </div>
      <div className="col-span-full bg-white md:col-span-3 md:mx-4">
        {(allClientList || []).map((ele) => (
          <ClientListItem
            key={ele?.id}
            {...ele}
            handleClick={() => {
              setSelectedClient(ele);
            }}
            selectedClient={selectedClient}
          />
        ))}
      </div>
    </div>
  );
};

export default Notification;
