import React from "react";
import PropTypes from "prop-types";
import { cn } from "@/lib/utils";

export default function ExternalExportIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      className={cn(className, "fill-gray-dark")}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.25 14.25H3.75V3.75H9V2.25H3.75C2.9175 2.25 2.25 2.925 2.25 3.75V14.25C2.25 15.075 2.9175 15.75 3.75 15.75H14.25C15.075 15.75 15.75 15.075 15.75 14.25V9H14.25V14.25ZM11.25 1.5V3H13.9425L6.57 10.3725L7.6275 11.43L15 4.0575V6.75H16.5V1.5H11.25Z"
      />
    </svg>
  );
}

ExternalExportIcon.propTypes = {
  className: PropTypes.string,
};
