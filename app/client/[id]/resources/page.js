"use client";
import { useState } from "react";
import Link from "next/link";
import { Tab } from "@headlessui/react";
import { useRouter, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";
import SharedResources from "./shared-resources";
import SuggestedResources from "./suggested-resources";
import SpecializedCoaching from "./specialized-coaching";

export default function Resources() {
  const selectedIndex = useSearchParams()?.get("tab") ?? 0;
  const router = useRouter();
  const tabs = [
    "Shared resources",
    "Suggested resources",
    "Women in leadership",
    "My resource library",
  ];

  return (
    <div className="mr-6">
      <div className="mb-10 text-center">
        <h1 className="mb-4">Resources for Holly Kulkarni</h1>
        <p>
          We suggest sharing at least 2 resources following each session based
          on your client&apos;s selected Focus Areas.
        </p>
      </div>
      <div className="rounded-md border border-gray-medium bg-white p-7">
        <h2>All client resources</h2>
        <Tab.Group
          selectedIndex={selectedIndex}
          onChange={() => {
            router.replace(`?tab=${selectedIndex}`);
          }}
        >
          <Tab.List className="my-4 flex w-3/4 rounded-lg bg-grayLight">
            {tabs.map((t, index) => (
              <Tab
                key={t}
                className={({ selected }) =>
                  cn(
                    "flex-1 rounded-lg px-6 py-3 text-center outline-none",
                    selected
                      ? "bg-blue-dark text-white"
                      : "text-gray-veryDark hover:text-blue-dark"
                  )
                }
                as={Link}
                href={`?tab=${index}`}
              >
                {t}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>
              <SharedResources />
            </Tab.Panel>
            <Tab.Panel>
              <SuggestedResources />
            </Tab.Panel>
            <Tab.Panel>
              <SpecializedCoaching />
            </Tab.Panel>
            <Tab.Panel>Content 4</Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
}
