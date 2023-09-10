"use client";
import React, { Fragment, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn, mapUrlToBreadcrumbs } from "@/lib/utils";
import BreadcrumbArrow from "@/public/static/breadcrumb-arrow.svg";

const Breadcrumbs = () => {
  const pathname = usePathname();
  const [breadcrumbs, setBreadcrumbs] = useState([]);

  useEffect(() => {
    if (pathname) {
      const linkPath = pathname.split("/");
      linkPath.shift();
      const pathArray = linkPath.map((path, i) => {
        return {
          breadcrumb: path,
          href: "/" + linkPath.slice(0, i + 1).join("/"),
        };
      });
      setBreadcrumbs([{ breadcrumb: "home", href: "/home" }, ...pathArray]);
    }
  }, [pathname]);

  if (!breadcrumbs || pathname === "/profile" || pathname === "/faq") {
    return null;
  }

  return (
    <div className="mb-5 inline-flex items-center justify-center gap-1 pl-6">
      {breadcrumbs.map((item, idx, self) => (
        <Fragment key={item.href}>
          <Link
            href={item.href}
            className={cn("text-sm leading-6", {
              "text-gray-dark": idx !== self.length - 1,
              "text-gray-veryDark": idx === self.length - 1,
            })}
          >
            {mapUrlToBreadcrumbs(item.breadcrumb)}
          </Link>
          {idx !== self.length - 1 ? (
            <span>
              <Image src={BreadcrumbArrow} alt="arrow" className="h-3 w-2" />
            </span>
          ) : null}
        </Fragment>
      ))}
    </div>
  );
};

export default Breadcrumbs;
