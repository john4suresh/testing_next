import * as React from "react";

const FocusAreas = ({ active }, props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <g stroke={active ? "#0073C4" : "#141C36"} strokeWidth={2}>
      <path
        strokeLinecap="round"
        d="M7.75 1S5.5 1 3.25 3.25 1 7.75 1 7.75M12.25 19s2.25 0 4.5-2.25 2.25-4.5 2.25-4.5M19 7.75s0-2.25-2.25-4.5S12.25 1 12.25 1M1 12.25s0 2.25 2.25 4.5S7.75 19 7.75 19"
      />
      <circle cx={10} cy={10} r={3.5} />
    </g>
  </svg>
);
export default FocusAreas;
