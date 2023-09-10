import React from "react";
import { headers } from "next/headers";
import { mapIdentifierToUrl } from "@/lib/utils";
import ProfileItem from "./items";

async function getData() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_APP_URL}/api/profile`,
      {
        method: "GET",
        headers: headers(),
      }
    );
    const data = await response.json();
    return data;
  } catch (e) {
    console.log("eeee", e);
  }
}

export default async function Profile() {
  const data = await getData();

  if (data?.length === 0) {
    return <div>Loding...</div>;
  }

  return (
    <div className="grid h-full w-full grid-cols-12">
      <div className="col-span-12 px-4 xl:col-span-11 xl:px-0">
        <h1 className="pb-10 text-center text-[34px] font-semibold">
          Profile Settings
        </h1>
        <div className="divide-y divide-solid divide-gray-medium rounded-sm border border-gray-medium">
          {(data || [])?.map((profileSettingItem) => (
            <ProfileItem
              key={profileSettingItem.taskSlug}
              title={profileSettingItem.title}
              isCompleted={profileSettingItem.is_completed}
              href={`/profile/${mapIdentifierToUrl(
                profileSettingItem.taskSlug
              )}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
