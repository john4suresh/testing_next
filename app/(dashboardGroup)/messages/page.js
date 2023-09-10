"use client";
import React, { useState, useEffect } from "react";
import useSWR from "swr";
import Link from "next/link";
import { Tab } from "@headlessui/react";
import { useRouter, useSearchParams } from "next/navigation";
import { MessageIcon, NotificationIcon } from "@/components/icons";
import Message from "@/components/messages/message";
import Notification from "@/components/messages/notification";
import { cn } from "@/lib/utils";
import { message } from "@/lib/apiUrls";

const Messages = () => {
  const { data, error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}${message.unreadNotification}`,
    {
      refreshInterval: 6000,
    }
  );
  const [tabs, setTabs] = useState({
    chat: {
      title: "Chats",
      icon: MessageIcon,
      content: <Message />,
      isActive: false,
    },
    notifications: {
      title: "Notifications",
      icon: NotificationIcon,
      content: <Notification />,
      isActive: false,
    },
  });
  const router = useRouter();
  const selectedIndex = useSearchParams()?.get("tab") ?? 0;

  useEffect(() => {
    setTabs((prevState) => ({
      chat: {
        ...prevState.chat,
        isActive: data?.has_unread_chat || false,
      },
      notifications: {
        ...prevState.notifications,
        isActive: data?.has_unread_notifications || false,
      },
    }));
  }, [data]);

  useEffect(() => {
    router.push(`/messages?tab=${selectedIndex}`);
  }, [router, selectedIndex]);

  return (
    <div className="h-full w-full">
      <h1 className="pb-4 text-center text-[34px] font-semibold">
        Message Center
      </h1>
      <div className="w-full px-2 pt-6 sm:px-0">
        <Tab.Group
          selectedIndex={selectedIndex}
          onChange={() => {
            router.replace(`/messages?tab=${selectedIndex}`);
          }}
        >
          <Tab.List className="mx-auto flex max-w-md items-center justify-center p-1 transition-all">
            {Object.keys(tabs).map((tab, index) => (
              <Tab
                key={tab}
                className={({ selected }) =>
                  cn(
                    "w-full border-b border-gray-medium py-2.5 text-base font-normal leading-5 hover:text-blue-light",
                    "outline-none",
                    selected
                      ? "border-b-[3px] border-blue-light font-bold text-blue-light"
                      : "text-gray-veryDark hover:text-blue-dark"
                  )
                }
                as={Link}
                href={`/messages?tab=${index}`}
              >
                <TabItem
                  title={tabs[tab]?.title}
                  icon={tabs[tab]?.icon}
                  active={tabs[tab]?.isActive}
                />
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-8">
            {Object.values(tabs).map((tab, idx) => (
              <Tab.Panel key={idx}>{tab.content}</Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
};

export default Messages;

const TabItem = (props) => {
  const { title, icon: Icon, active } = props;
  return (
    <p className="inline-flex w-full items-center justify-center">
      <span className="mr-3">
        <Icon active={active} />
      </span>
      <span>{title}</span>
    </p>
  );
};
