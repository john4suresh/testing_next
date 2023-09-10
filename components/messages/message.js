"use client";
import React, { useState } from "react";
import Image from "next/image";
import useSWR from "swr";
import Skeleton from "react-loading-skeleton";
import { useDropzone } from "react-dropzone";
import Avatar from "@/components/shared/avatar";
import Button from "@/components/shared/button";
import Modal from "@/components/shared/modal";
import Input from "@/components/shared/input";
import Label from "@/components/shared/label";
import Select from "@/components/shared/select";
import AddIcon from "@/public/assets/icons/addIcon.svg";
import DropIcon from "@/public/assets/icons/dropIcon.svg";
import ClientChatListItems from "./client-chat-list-item";
import ClientListItem from "./client-list-item";
import CoachCsmChatList from "./coach-csm-list-item";
import { message } from "@/lib/apiUrls";
import ResourceModal from "./resource-modal";

const Message = () => {
  const {
    data: clientsChatList,
    error,
    isLoading,
  } = useSWR(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}${message.coachChatClientList}`,
    {
      refreshInterval: 6000,
    }
  );
  const { clients_chat_list, coaching_guide_chat } = clientsChatList || {};
  const allClientsChatList = [
    coaching_guide_chat,
    ...(clients_chat_list || []),
  ];
  const [selectedClient, setSelectedClient] = useState(null);
  const [sharedModal, setSharedModal] = useState(false);
  const onOpenModal = () => {
    setSharedModal(true);
  };
  const onCloseModal = () => {
    setSharedModal(false);
  };

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
    <div className="grid h-full w-full grid-cols-12">
      <div className="col-span-9">
        {selectedClient ? (
          <>
            <div className="flex gap-8 rounded-md border border-gray-medium bg-white p-5 text-left">
              <Avatar name={selectedClient?.name} size="large" />
              <div>
                <p className="text-[34px] font-semibold leading-10">
                  {selectedClient?.name}
                </p>
                <p className="pt-2 text-base">Pay Pal, Director of Marketing</p>
                <div className="flex gap-4 pt-6">
                  <Button
                    variant="secondary"
                    text={"View client details"}
                    className="font-semibold"
                  />
                  <Button
                    variant="secondary"
                    text={"Share resource"}
                    className="inline-flex items-center gap-2 font-semibold"
                    icon={<Image src={AddIcon} alt="add" />}
                    onClick={onOpenModal}
                  />
                </div>
              </div>
            </div>
            {selectedClient.name === "Skillsoft Coaching Guide" ? (
              <CoachCsmChatList />
            ) : (
              <ClientChatListItems selectedClient={selectedClient} />
            )}
          </>
        ) : (
          <>
            <div className="rounded-md border border-gray-medium bg-white p-5 text-left">
              <p className="pb-2 text-[34px] font-semibold">
                Welcome to the message center
              </p>
              <p className="pb-5 text-base">
                Select a client name or the Skillsoft Coaching Guide to send a
                chat message. Clients will be notified by email 10 minutes after
                a message is sent if unread.
              </p>
              <p className="text-base">
                If a client is online the icon with their initials next to their
                name will turn green.
              </p>
            </div>
          </>
        )}
      </div>
      <div className="col-span-3">
        <div className="mx-4 bg-white">
          {(allClientsChatList || []).map((ele) => (
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
      <ResourceModal
        sharedModal={sharedModal}
        onCloseModal={onCloseModal}
        selectedClient={selectedClient}
      />
    </div>
  );
};

export default Message;
