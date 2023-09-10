import React from "react";
import PropTypes from "prop-types";
import { cn } from "@/lib/utils";

export default function AddIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="19"
      viewBox="0 0 18 19"
      fill="none"
    >
      <path
        d="M9 17.75C13.5563 17.75 17.25 14.0563 17.25 9.5C17.25 4.94365 13.5563 1.25 9 1.25C4.44365 1.25 0.75 4.94365 0.75 9.5C0.75 14.0563 4.44365 17.75 9 17.75Z"
        stroke="#0073C4"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        className={cn(className, "stroke-blue-light")}
      />
      <path
        d="M9 5.90002V13.1"
        stroke="#0073C4"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        className={cn(className, "stroke-blue-light")}
      />
      <path
        d="M5.40039 9.5H12.6004"
        stroke="#0073C4"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        className={cn(className, "stroke-blue-light")}
      />
    </svg>
  );
}

AddIcon.propTypes = {
  className: PropTypes.string,
};