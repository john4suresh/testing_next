import * as React from "react";

const ArrowDownIcon = ({ color = "#707070", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill={color}
      fillRule="evenodd"
      d="m12 16.41-6-6L7.41 9 12 13.58 16.59 9 18 10.41l-6 6Z"
      clipRule="evenodd"
    />
  </svg>
);
export default ArrowDownIcon;
