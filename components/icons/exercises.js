import * as React from "react";

const Exercise = ({ active }, props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <g
      stroke={active ? "#0073C4" : "#141C36"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <path d="m23 6-9.5 9.5-5-5L1 18" />
      <path d="M17 6h6v6" />
    </g>
  </svg>
);
export default Exercise;
