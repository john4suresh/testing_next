"use client";
import { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import SearchIcon from "/public/static/search.svg";
import Image from "next/image";

const people = [
  { id: 1, name: "Wade Cooper" },
  { id: 2, name: "Arlene Mccoy" },
  { id: 3, name: "Devon Webb" },
  { id: 4, name: "Tom Cook" },
  { id: 5, name: "Tanya Fox" },
  { id: 6, name: "Hellen Schmidt" },
  { id: 7, name: "Holly Kulkarni" },
  { id: 8, name: "Holly Smith" },
];

export default function AutoComplete() {
  const [selected, setSelected] = useState("");
  const [query, setQuery] = useState("");

  const filteredPeople =
    query === ""
      ? people
      : people.filter((person) => {
          const lowercaseName = person.name.toLowerCase().replace(/\s+/g, "");
          const lowercaseQuery = query.toLowerCase().replace(/\s+/g, "");
          return lowercaseName.includes(lowercaseQuery);
        });

  return (
    <div className="w-2/3">
      <Combobox value={selected} onChange={setSelected}>
        <div className="flex w-full items-center justify-between rounded-xl border border-gray-medium text-left">
          <div className="relative flex-1">
            <Combobox.Input
              className="w-full rounded-xl border-none border-gray-medium p-3 text-base leading-5 text-gray-veryDark placeholder:text-gray-dark focus:border-blue-light focus:ring-2 focus:ring-blue-light"
              displayValue={(person) => person.name}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search clients"
            />
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
              afterLeave={() => setQuery("")}
            >
              <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md border border-blue-light bg-white py-1 text-base shadow-lg sm:text-sm">
                {filteredPeople.length === 0 && query !== "" ? (
                  <div className="relative px-4 py-2 text-gray-veryDark">
                    No Client found
                  </div>
                ) : (
                  filteredPeople.map((person) => (
                    <Combobox.Option
                      key={person.id}
                      className={({ active }) =>
                        `relative cursor-default select-none px-4 py-2 text-gray-veryDark ${
                          active ? "rounded-sm bg-gray-thin" : ""
                        }`
                      }
                      value={person}
                    >
                      {({ selected, active }) => (
                        <span
                          className={`block text-base leading-6 ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {person.name}
                        </span>
                      )}
                    </Combobox.Option>
                  ))
                )}
              </Combobox.Options>
            </Transition>
          </div>
          <Combobox.Button className="flex flex-[0_0_60px] items-center justify-center px-3">
            <Image src={SearchIcon} alt="search-icon" />
          </Combobox.Button>
        </div>
      </Combobox>
    </div>
  );
}
