"use client";
import React from "react";
import useSWR from "swr";
import Button from "@/components/shared/button";
import { toast } from "@/components/shared/toast/use-toast";
import api from "@/lib/api";
import { setVideoSettings } from "@/lib/apiUrls";

function VideoSettings() {
  const { data, mutate, isValidating } = useSWR(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}${setVideoSettings}`
  );
  const handleClick = async () => {
    try {
      let response = await api.put(setVideoSettings, {
        set_video_settings: true,
      });
      mutate(response?.data || {});
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
    <div className="container mx-auto max-w-5xl px-5">
      <h1 className="mb-8 text-center text-[34px] font-semibold">
        Video settings
      </h1>
      <div>
        <p className="mb-8 text-base font-normal">
          Skillsoft Coaching uses Zoom as the default service for video
          meetings. We provide the meeting link and no set up is required on
          your client&apos;s end. Some organizations may require clients to use
          their own video service. When joining sessions you will be
          automatically connected to the service your client has selected.
        </p>
        <p>
          Before your first session, please make sure to
          <span className="text-base font-bold text-blue-light">
            {" "}
            test the Zoom link.
          </span>
        </p>
      </div>
      <div className="mt-12 flex flex-col items-center">
        <Button
          variant="primary"
          text="Mark as complete"
          onClick={handleClick}
          disabled={isValidating}
        />
      </div>
    </div>
  );
}

export default VideoSettings;
