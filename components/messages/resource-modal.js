"use client";
import React, { useState } from "react";
import Image from "next/image";
import useSWR from "swr";
import { useDropzone } from "react-dropzone";
import { message } from "@/lib/apiUrls";
import { getFormData, mapNametoLabel } from "@/lib/utils";
import Button from "@/components/shared/button";
import Modal from "@/components/shared/modal";
import Input from "@/components/shared/input";
import Label from "@/components/shared/label";
import Select from "@/components/shared/select";
import { toast } from "@/components/shared/toast/use-toast";
import DropIcon from "@/public/assets/icons/dropIcon.svg";
import close from "@/public/assets/icons/close.svg";
import api from "@/lib/api";

const ResourceModal = ({ sharedModal, onCloseModal, selectedClient }) => {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [resourceType, setResourceType] = useState("");
  const [foucsArea, setFocusArea] = useState("");
  const { acceptedFiles, getRootProps, getInputProps, open } = useDropzone({
    noClick: true,
    noKeyboard: true,
    maxFiles: 1,
  });
  const {
    data: focusAreaListData,
    error,
    isLoading,
  } = useSWR(message.focusAreaList);

  const handleClick = async (event) => {
    try {
      let response = await api.post(
        message.addShareResource(selectedClient?.id || null),
        getFormData({ file: acceptedFiles[0] })
      );
      if (response?.status === 200) {
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

  return (
    <Modal
      isOpen={sharedModal}
      onCloseModal={onCloseModal}
      title="Share resources"
    >
      <div className="text-center">
        <p className="body mb-4 !text-navy">
          Upload custom resource or share a link with your client. You may
          either add a URL or file. These will appear in the resources section
          of their platform. They will be notified via email.
        </p>
        <div className="mb-4">
          <div className="mb-7 mt-9 flex w-full flex-col items-start gap-y-2">
            <Label className="text-base font-normal">Title*</Label>
            <Input
              className="border border-gray-medium placeholder:italic"
              placeholder="Enter title"
              value={title}
              onChange={(event) => {
                setTitle(event.target.value);
              }}
            />
          </div>
          <div className="mb-7 mt-9 flex w-full flex-col items-start gap-y-2 rounded-sm text-gray-veryDark">
            <Label className="text-base font-normal">URL</Label>
            <Input
              className="border border-gray-medium placeholder:italic"
              placeholder="Add Link"
              value={url}
              onChange={(event) => {
                setUrl(event.target.value);
              }}
            />
          </div>
          <p className="mb-5 text-left font-normal text-black">Or</p>
          <div
            {...getRootProps({
              className:
                "py-2 border border-dashed border-gray-dark mb-10 flex items-center justify-center",
            })}
          >
            <Input {...getInputProps()} />
            <span className="mr-3">
              <Image src={DropIcon} alt="drop" />
            </span>
            <p className="text-base text-gray-dark">
              Drag and drop some files here, or{" "}
              <span
                className="cursor-pointer text-blue-light underline"
                onClick={open}
              >
                browser
              </span>
            </p>
          </div>
          {acceptedFiles.length > 0 && (
            <div className="mb-2 text-left">
              <p className="text-base">Uploaded files </p>
              <p className="flex items-center rounded-sm border border-gray-medium px-4 py-1">
                <span className="flex-1 text-base leading-6">
                  {acceptedFiles[0].name}
                </span>
                <span className="cursor-pointer">
                  <Image
                    src={close}
                    alt="close modal"
                    className="h-3.5 w-3.5"
                    onClick={() => (acceptedFiles.length = 0)}
                  />
                </span>
              </p>
            </div>
          )}
          <Select
            options={[
              {
                label: "Option 1",
                value: "option1",
              },
              {
                label: "Option 2",
                value: "option2",
              },
            ]}
            className="mb-10 w-full rounded-sm border border-gray-medium"
            placeholder="Select resource type"
            value={resourceType}
            onChange={(e) => {
              setResourceType(e.target.value);
            }}
          />
          <Select
            options={mapNametoLabel(focusAreaListData || [])}
            className="mb-12 w-full rounded-sm border border-gray-medium"
            placeholder="Select the focus area this aligns to"
            value={foucsArea}
            nChange={(e) => {
              setFocusArea(e.target.value);
            }}
          />
          <Button
            className="mt-6"
            text="Share resource"
            variant="primary"
            onClick={handleClick}
          />
        </div>
      </div>
    </Modal>
  );
};

export default ResourceModal;
