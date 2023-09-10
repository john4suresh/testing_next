import * as React from "react";

const Assessment = ({ active }, props) => (
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
      <path d="M16.803 22.5V9.375M8.963 22.5v-21M1.125 22.5v-7.875" />
    </g>
  </svg>
);
export default Assessment;
