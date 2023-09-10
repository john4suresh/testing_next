import * as React from "react";

const MeetingLink = ({ active }, props) => (
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
      <path d="m23 7-7 5 7 5V7ZM14 5H3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z" />
    </g>
  </svg>
);
export default MeetingLink;
