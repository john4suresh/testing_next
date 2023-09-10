import * as React from "react";

const CoachingPlan = ({ active }, props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill={active ? "#0073C4" : "#141C36"}
      fillRule="evenodd"
      d="M6.04 3.166c.253-.283.57-.416.872-.416h11.347v13.375H6.912c-.452 0-.888.1-1.287.284V4.313c0-.45.16-.86.416-1.147ZM5.626 19.71c.005.44.164.842.416 1.124.252.282.568.416.87.416H18.26v-3.125H6.912c-.302 0-.618.134-.87.416a1.729 1.729 0 0 0-.417 1.169Zm14.634-2.558v5.098a1 1 0 0 1-1 1H6.91c-.91 0-1.757-.407-2.362-1.085a3.727 3.727 0 0 1-.924-2.477V4.313c0-.91.322-1.804.924-2.478C5.154 1.156 6 .75 6.91.75H19.26a1 1 0 0 1 1 1v15.402Z"
      clipRule="evenodd"
    />
  </svg>
);
export default CoachingPlan;
