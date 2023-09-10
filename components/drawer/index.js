"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname, useParams } from "next/navigation";
import Link from "next/link";
import useMediaQuery from "hooks/useMediaQuery";
import {
  HomeIcon,
  ClientsIcon,
  DashboardIcon,
  FAQIcon,
  PaymentIcon,
  ProfileSettingsIcon,
  ScheduleIcon,
  AllSessionsIcon,
  Assessment,
  CoachingPlan,
  Exercises,
  FocusAreas,
  MeetingLink,
  Resources,
  Users,
} from "../icons";
import arrowDoubleLeft from "@/public/assets/icons/arrowDoubleLeft.svg";
import arrowDoubleRight from "@/public/assets/icons/arrowDoubleRight.svg";
import { cn } from "@/lib/utils";

const navLinks = [
  {
    title: "Home",
    icon: HomeIcon,
    pathName: "/home",
  },
  {
    title: "Clients",
    icon: ClientsIcon,
    pathName: "/clients",
    subMenus: [
      {
        title: "Client details",
        icon: Users,
        pathName: "",
      },
      {
        title: "Focus areas",
        icon: FocusAreas,
        pathName: "focus-areas",
      },
      {
        title: "Coaching plan",
        icon: CoachingPlan,
        pathName: "coaching-plan",
      },
      {
        title: "Resources",
        icon: Resources,
        pathName: "resources",
      },
      {
        title: "Assessment",
        icon: Assessment,
        pathName: "assessments",
      },
      {
        title: "Exercises",
        icon: Exercises,
        pathName: "exercise",
      },
      {
        title: "Meeting link",
        icon: MeetingLink,
        pathName: "join-meeting",
      },
    ],
  },
  {
    title: "Schedule",
    icon: ScheduleIcon,
    pathName: "/schedule",
  },
  {
    title: "All Sessions",
    icon: AllSessionsIcon,
    pathName: "/all-sessions",
  },
  {
    title: "FAQ",
    icon: FAQIcon,
    pathName: "/faq",
  },
  {
    title: "Dashboard",
    icon: DashboardIcon,
    pathName: "/dashboard",
  },
  {
    title: "Payments",
    icon: PaymentIcon,
    pathName: "/payments",
  },
  {
    title: "Profile settings",
    icon: ProfileSettingsIcon,
    pathName: "/profile",
  },
];

const PATHS = ["/faq/", "/profile/"];

const Drawer = () => {
  const pathname = usePathname();
  const [expanded, setExpanded] = useState(true);
  const { isDesktop } = useMediaQuery();
  const isDrawer = PATHS.some((item) => pathname.includes(item));

  useEffect(() => {
    setExpanded(isDesktop);
  }, [isDesktop]);

  if (isDrawer) {
    return null;
  }

  return (
    <nav
      className={cn(
        "drawer-transition sticky left-0 top-[152px] self-start rounded-r-md border-[0.75px] border-gray-medium bg-gray-light py-6 pr-4 transition-[width] delay-0",
        {
          "duration-[225ms] w-[240px]": expanded,
          "duration-[195ms] w-[76px]": !expanded,
        }
      )}
    >
      <aside className="flex h-full flex-col gap-4">
        {isDesktop && (
          <div className="inline-flex items-center justify-end">
            {expanded ? (
              <Image
                src={arrowDoubleLeft}
                alt={"arrow-double"}
                onClick={() => {
                  setExpanded(false);
                }}
                className="cursor-pointer"
              />
            ) : (
              <Image
                src={arrowDoubleRight}
                alt={"arrow-double"}
                onClick={() => {
                  setExpanded(true);
                }}
                className="cursor-pointer"
              />
            )}
          </div>
        )}
        {navLinks.map((item) => (
          <ListItem
            key={item.title}
            {...item}
            active={pathname.includes(item.pathName)}
            expanded={expanded}
            currentPath={pathname}
          />
        ))}
      </aside>
    </nav>
  );
};

export default Drawer;

const ListItem = (props) => {
  const {
    title,
    icon: Icon,
    active = false,
    pathName,
    expanded,
    subMenus,
    currentPath,
  } = props;
  const isClientDashboard = currentPath.startsWith("/client/");
  const params = useParams();

  return (
    <>
      <Link
        href={pathName}
        className={cn("relative border-l-8 border-blue-light", {
          "border-transparent": !active,
          "before:absolute before:-left-2 before:top-[-5px] before:w-2 before:rounded-tr-[8px] before:border-t-8 before:border-blue-light before:content-['']":
            active,
          "after:absolute after:-left-2 after:bottom-[-5px] after:w-2 after:rounded-br-[8px] after:border-b-8 after:border-blue-light after:content-['']":
            active,
        })}
      >
        <div className="inline-flex py-2.5">
          <span
            className={cn(
              "drawer-transition mr-2 transition-[margin] delay-0",
              {
                "ml-8": expanded,
                "ml-4": !expanded,
              }
            )}
          >
            {<Icon active={active} />}
          </span>
          {expanded && (
            <div>
              <p
                className={cn(
                  "drawer-transition text-base transition-[opacity] delay-0",
                  {
                    "font-semibold text-blue-light": active,
                    "font-normal": !active,
                    "duration-225 opacity-100": expanded,
                    "duration-195  opacity-0": !expanded,
                  }
                )}
              >
                {title}
              </p>
            </div>
          )}
        </div>
      </Link>
      {subMenus?.length > 0 && isClientDashboard && expanded ? (
        <div className="flex h-full flex-col gap-2">
          <p className="ml-16 font-bold">Holly Kulkarni</p>
          {subMenus?.map((sub) => {
            const SubIcons = sub.icon;
            const isSubMenuActive =
              currentPath?.split("/")?.slice(3)?.join("/") === sub.pathName;
            return (
              <Link
                key={sub.title}
                href={`/client/${params?.id}/${sub?.pathName}`}
                className="relative flex h-full items-center border-blue-light"
              >
                <div className="inline-flex py-2.5">
                  <span className="drawer-transition ml-16 mr-2 transition-[margin] delay-0">
                    {<SubIcons active={isSubMenuActive} />}
                  </span>
                  <div>
                    <p
                      className={cn(
                        "drawer-transition duration-225 text-base opacity-100 transition-[opacity] delay-0",
                        {
                          "font-semibold text-blue-light": isSubMenuActive,
                          "font-normal": !isSubMenuActive,
                        }
                      )}
                    >
                      {sub.title}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      ) : null}
    </>
  );
};
