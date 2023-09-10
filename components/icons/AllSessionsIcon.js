import React from "react";

const AllSessionsIcon = (props) => {
  const { active = false, customClassname = "" } = props;
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={customClassname}
    >
      <path
        d="M12 1.5L15.399 8.41167L23 9.52681L17.5 14.9038L18.798 22.5L12 18.9117L5.202 22.5L6.5 14.9038L1 9.52681L8.601 8.41167L12 1.5Z"
        stroke={active ? "#0073C4" : "#141C36"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default AllSessionsIcon;
