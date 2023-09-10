"use client";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/shared/select-field";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/shared/popover";
import { RadioGroup, RadioGroupItem } from "@/components/shared/radio-group";
import { ArrowDownIcon } from "@/components/icons";
import { Calendar } from "@/components/shared/calendar";
import { cn } from "@/lib/utils";
import Label from "@/components/shared/label";
import { numberOfClientList } from "./mock";
import Button from "@/components/shared/button";
import Breadcrumbs from "@/components/breadcrumbs";

const SetNumberOfClients = () => {
  const [numberOfClients, setNumberOfClients] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  return (
    <div className="container mx-auto flex h-full max-w-5xl flex-col">
      <h1 className="mb-5 text-center">Maximum number of clients</h1>
      <div className="px-2 text-base text-gray-veryDark">
        <p className="mb-10 text-center text-base">
          How many Skillsoft clients do you have capacity to coach? We recommend
          a minimum of 10 clients at a given time.
        </p>
        <Select onValueChange={setNumberOfClients}>
          <SelectTrigger className="mx-auto mb-10 mt-2 h-12 w-full max-w-xs rounded-xs border border-gray-medium p-3">
            <SelectValue placeholder="Select number of clients" />
          </SelectTrigger>
          <SelectContent>
            {numberOfClientList.map((c) => (
              <SelectItem key={c.id} value={c.name}>
                {c.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <div>
          <RadioGroup defaultValue="option-one">
            <div className="mb-10 flex flex-row items-start gap-2">
              <RadioGroupItem
                value="option-one"
                id="option-one"
                className="shrink-0 cursor-pointer"
              />
              <div className="flex flex-col justify-start">
                <Label htmlFor="option-one" className="cursor-pointer">
                  Active
                </Label>
                <p className="mt-2">
                  You are active and available to be paired with new clients.
                </p>
              </div>
            </div>
            <div className="mb-10 flex flex-row items-start gap-2">
              <RadioGroupItem
                value="option-two"
                id="option-two"
                className="shrink-0 cursor-pointer"
              />
              <div className="flex min-w-0 flex-col justify-start">
                <Label htmlFor="option-two" className="cursor-pointer">
                  Paused
                </Label>
                <p className="mb-5 mt-2">
                  Select paused when you will be unavailable for an extended
                  period. You are required to complete the remaining sessions
                  with your active clients, but will not be paired with any new
                  clients until after your Pause End Date.
                </p>
                <div className="flex flex-row gap-10">
                  <Popover>
                    <PopoverTrigger asChild>
                      <button className="flex h-14 w-full max-w-xs items-center justify-between rounded border border-gray-medium bg-transparent p-4 text-base font-normal leading-[22px] ring-offset-white focus:border-blue-light focus:outline-none focus:ring-1 focus:ring-blue-light disabled:cursor-not-allowed disabled:opacity-50">
                        <span
                          className={cn(
                            startDate ? "text-gray-veryDark" : "text-gray-dark"
                          )}
                        >
                          {(startDate && format(startDate, "MMMM dd, yyyy")) ||
                            "Select a start date"}
                        </span>
                        <ArrowDownIcon />
                      </button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={startDate}
                        onSelect={setStartDate}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <Popover>
                    <PopoverTrigger asChild>
                      <button className="flex h-14 w-full max-w-xs items-center justify-between rounded border border-gray-medium bg-transparent p-4 text-base font-normal leading-[22px] ring-offset-white focus:border-blue-light focus:outline-none focus:ring-1 focus:ring-blue-light disabled:cursor-not-allowed disabled:opacity-50">
                        <span
                          className={cn(
                            endDate ? "text-gray-veryDark" : "text-gray-dark"
                          )}
                        >
                          {(endDate && format(endDate, "MMMM dd, yyyy")) ||
                            "Select a end date"}
                        </span>
                        <ArrowDownIcon />
                      </button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={endDate}
                        onSelect={setEndDate}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
            </div>
          </RadioGroup>
        </div>
      </div>
      <div className="mt-auto text-center">
        <Button text={"Save"} className="font-bold" />
      </div>
    </div>
  );
};

export default SetNumberOfClients;
