"use client";
import React, { useState } from "react";
import Label from "@/components/shared/label";
import { Checkbox } from "@/components/shared/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/shared/select-field";
import { mapIdToValue } from "@/lib/utils";
import profileSettings from "@/mocks/profile-page/profile-settings";
import { raceList, countryList, cityList, ageRangeList } from "./mock";

const DemographicInformation = () => {
  const { available_languages, languages } = profileSettings;
  const available_languages_options = mapIdToValue(available_languages);
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [race, setRace] = useState("");
  const [age, setAge] = useState("");

  return (
    <div className="container mx-auto max-w-5xl">
      <h1 className="mb-10 text-center">Demographic information </h1>
      <div className="px-2 text-base text-gray-veryDark">
        <div className="flex items-center justify-start gap-5">
          <div className="flex max-w-sm flex-1 flex-col">
            <Label htmlFor="email" className="text-base font-normal">
              Country *
            </Label>
            <Select onValueChange={setCountry}>
              <SelectTrigger className="mb-10 mt-2 h-12 w-full max-w-xs rounded-xs border border-gray-medium p-3 data-[placeholder]:italic">
                <SelectValue placeholder="Select your country" />
              </SelectTrigger>
              <SelectContent>
                {countryList.map((c) => (
                  <SelectItem key={c.id} value={c.country}>
                    {c.country}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex max-w-sm flex-1 flex-col">
            <Label htmlFor="email" className="text-base font-normal">
              City *
            </Label>
            <Select onValueChange={setCity}>
              <SelectTrigger className="mb-10 mt-2 h-12 w-full max-w-xs rounded-xs border border-gray-medium p-3 data-[placeholder]:italic">
                <SelectValue placeholder="Select your city" />
              </SelectTrigger>
              <SelectContent>
                {cityList.map((c) => (
                  <SelectItem key={c.id} value={c.city}>
                    {c.city}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="flex items-center justify-start gap-5">
          <div className="flex max-w-sm flex-1 flex-col">
            <Label htmlFor="email" className="text-base font-normal">
              Which race category best describes you? (Optional)
            </Label>
            <Select onValueChange={setRace}>
              <SelectTrigger className="mb-10 mt-2 h-12 w-full max-w-xs rounded-xs border border-gray-medium p-3 data-[placeholder]:italic">
                <SelectValue placeholder="Select your race" />
              </SelectTrigger>
              <SelectContent>
                {raceList.map((c) => (
                  <SelectItem key={c.id} value={c.name}>
                    {c.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex max-w-sm flex-1 flex-col">
            <Label htmlFor="email" className="text-base font-normal">
              What is your age range? (Optional)
            </Label>
            <Select onValueChange={setAge}>
              <SelectTrigger className="mb-10 mt-2 h-12 w-full max-w-xs rounded-xs border border-gray-medium p-3 data-[placeholder]:italic">
                <SelectValue placeholder="Age range" />
              </SelectTrigger>
              <SelectContent>
                {ageRangeList.map((c) => (
                  <SelectItem key={c.id} value={c.name}>
                    {c.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="">
          <Label
            htmlFor="email"
            className="mb-2 text-2xl font-normal text-gray-veryDark"
          >
            Which languages do you speak?
          </Label>
          <p className="font-nomral mb-10 text-base text-gray-veryDark">
            Please select all languages you are at fluent proficiency in and
            feel comfortable coaching clients in.
          </p>
          <div className="grid grid-cols-3 gap-y-4">
            {available_languages_options.map((a) => (
              <div className="flex items-center space-x-2" key={a.value}>
                <Checkbox
                  defaultChecked={languages.some(
                    (language) => language.id === a.value
                  )}
                  id={a.value}
                  value={a.value}
                />
                <Label
                  htmlFor={a.label}
                  className="text-base font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {a.label}
                </Label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemographicInformation;
