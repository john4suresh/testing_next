"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import useSWR from "swr";
import { toast } from "@/components/shared/toast/use-toast";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/shared/popover";
import chatBubbleRight from "@/public/assets/icons/chatBubbleRight.svg";
import chatBubbleLeft from "@/public/assets/icons/chatBubbleLeft.svg";
import sendAttachment from "@/public/assets/icons/sendAttachment.svg";
import actionMenu from "@/public/assets/icons/profileEdit.svg";
import { message } from "@/lib/apiUrls";
import Button from "../shared/button";
import api from "@/lib/api";
import { cn, getFormData } from "@/lib/utils";
import Input from "../shared/input";
import Skeleton from "react-loading-skeleton";

const MessageBubble = ({
  id,
  sent_by_coach = false,
  text,
  timeSent,
  handleDelete,
}) => {
  return (
    <div
      className={cn("relative mt-6 max-w-[600px]", {
        "mr-auto": !sent_by_coach,
        "ml-auto": sent_by_coach,
      })}
    >
      <p
        className={cn("pb-2 text-base text-gray-dark", {
          "text-left": !sent_by_coach,
          "text-right": sent_by_coach,
        })}
      >
        {timeSent}
      </p>
      <p
        className={cn("flex rounded-xl p-4", {
          "bg-neutrals10": !sent_by_coach,
          "bg-grayLight": sent_by_coach,
        })}
      >
        <span className="flex-1">{text}</span>
        {sent_by_coach && (
          <Popover>
            <PopoverTrigger asChild>
              <span>
                <Image
                  src={actionMenu}
                  alt="Action Menu"
                  className="cursor-pointer"
                />
              </span>
            </PopoverTrigger>
            <PopoverContent className="w-auto px-4 py-2" align="end">
              <button onClick={() => handleDelete(id)}>Delete</button>
            </PopoverContent>
          </Popover>
        )}
      </p>
      {!sent_by_coach ? (
        <Image
          src={chatBubbleLeft}
          alt="bubble"
          className="absolute left-6 -mt-1"
        />
      ) : (
        <Image
          src={chatBubbleRight}
          alt="bubble"
          className="absolute right-6 -mt-1"
        />
      )}
    </div>
  );
};

const ClientChatListItems = ({ selectedClient }) => {
  const { data, error, isLoading, isValidating, mutate } = useSWR(
    message.coachClientChatMessages(selectedClient?.id || null),
    {
      refreshInterval: 6000,
    }
  );
  const messagesEndRef = useRef(null);
  const fileUpload = useRef(null);
  const [inputMessage, setInputMessage] = useState("");
  const handleSendMessage = async () => {
    try {
      let response = await api.post(
        message.coachClientSendMessage(selectedClient?.id || null),
        {
          message: inputMessage,
        }
      );
      if (response?.status === 200) {
        mutate();
        setInputMessage("");
        return toast({
          title: "Submitted Successful",
          variant: "destructive",
        });
      }
    } catch (e) {
      return toast({
        title: "Something went wrong",
        variant: "destructive",
      });
    }
  };
  const handleFileUpload = async (event) => {
    try {
      let response = await api.post(
        message.coachClientSendMessage(selectedClient?.id || null),
        getFormData({ file: event.target.files[0] })
      );
      if (response?.status === 200) {
        mutate();
        setInputMessage("");
        return toast({
          title: "Submitted Successful",
          variant: "destructive",
        });
      }
    } catch (e) {
      return toast({
        title: "Something went wrong",
        variant: "destructive",
      });
    }
  };
  const handleDelete = async (id) => {
    try {
      let response = await api.delete(message.deleteMessage(id || null));
      if (response?.status === 200) {
        mutate();
        return toast({
          title: "Deleted Successful",
          variant: "destructive",
        });
      }
    } catch (e) {
      return toast({
        title: "Something went wrong",
        variant: "destructive",
      });
    }
  };
  const scrollToBottom = () => {
    if (messagesEndRef?.current) {
      messagesEndRef.current.scrollTop = messagesEndRef?.current?.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [data]);

  if (isLoading) {
    return (
      <>
        <div className="custom-message-chat-list overflow-y-auto px-3">
          {Array(9)
            .fill("")
            .map((_, index) => (
              <div
                className={cn("max-w-lg", {
                  "ml-auto": index % 2 === 0,
                  "mr-auto": index % 2 !== 0,
                })}
              >
                <Skeleton key={index} className=" h-9 w-full " />
              </div>
            ))}
        </div>
        <div className="mt-3 flex gap-4 px-3">
          <div className="flex-1">
            <Skeleton className="h-9 w-full " />
          </div>

          <div className="basis-48">
            <Skeleton className="h-9 w-full " />
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div
        className="custom-message-chat-list overflow-y-auto px-3"
        ref={messagesEndRef}
      >
        {(data?.results || [])?.map((message) => (
          <MessageBubble
            key={message.id}
            {...message}
            handleDelete={handleDelete}
          />
        ))}
      </div>
      <div className="mt-3 flex gap-4 px-3">
        <Input
          className="flex-1 rounded-sm border border-gray-medium"
          placeholder="Answer..."
          value={inputMessage}
          onChange={(event) => setInputMessage(event.target.value)}
        />
        <Input
          type="file"
          name="file"
          onChange={handleFileUpload}
          ref={fileUpload}
          className="hidden"
          accept=".pdf, .rtf, .xlsx, .xls, .doc, .docx, image/*, audio/mpeg, audio/x-m4a"
        />
        <Image
          src={sendAttachment}
          alt="send attachment"
          onClick={() => fileUpload?.current?.click()}
          className="cursor-pointer"
        />
        <Button
          variant="primary"
          text={"Send"}
          className="px-6 py-3 font-semibold"
          onClick={handleSendMessage}
          disabled={isValidating}
        />
      </div>
    </>
  );
};

export default ClientChatListItems;
