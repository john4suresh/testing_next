"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { signOut } from "next-auth/react";
import SkillsoftLogo from "/public/static/skillsoft-logo.svg";
import ProfileIcon from "/public/static/profile.svg";
import MessageIcon from "/public/static/messages-new.svg";
import SwitcherIcon from "/public/static/switcher-top-nav.svg";
import AutoComplete from "@/components/auto-complete";
import MenuDropdown from "../dropdown-menu";
import MenuItem from "../dropdown-menu/menu-item";

const Header = ({ isPrivate = true }) => {
  return (
    <header className="sticky inset-x-0 top-0 z-20 flex shrink-0 justify-between gap-6 border-b border-y-gray-medium bg-white px-4 py-3 xs:px-8 xs:pl-0">
      <div className="min-w-fit py-2 pl-4 xs:pl-8 sm:min-w-[240px]">
        <Image src={SkillsoftLogo} alt="logo" />
      </div>
      {isPrivate && (
        <>
          <div className="hidden grow items-center sm:flex">
            <AutoComplete />
          </div>
          <div className="flex items-center justify-center">
            <Link href={"/messages"}>
              <Image
                src={MessageIcon}
                alt="message"
                className="mr-8 cursor-pointer"
              />
            </Link>
            <MenuDropdown
              icon={SwitcherIcon}
              options={[
                {
                  title: "Coaching EU",
                  isExternal: true,
                },
                {
                  title: "Percipio",
                  isExternal: true,
                },
              ]}
            />
            <MenuDropdown icon={ProfileIcon}>
              <MenuItem title="Edit Email">Edit Email</MenuItem>
              <MenuItem title="Edit Name">Edit Name</MenuItem>
              <MenuItem title="Logout" onClick={() => signOut()}>
                Logout
              </MenuItem>
            </MenuDropdown>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
