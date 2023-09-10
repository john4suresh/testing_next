import * as React from "react";

const ArrowUpIcon = ({ color = "#707070", ...props }) => (
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
      d="m12 7-6 6 1.41 1.41L12 9.83l4.59 4.58L18 13l-6-6Z"
      clipRule="evenodd"
    />
  </svg>
);

export default ArrowUpIcon;
