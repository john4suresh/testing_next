import React from "react";

const HomeIcon = (props) => {
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
        d="M3.625 9.16845L12 2.625L20.375 9.16845V19.451C20.375 19.9468 20.1789 20.4224 19.8299 20.773C19.4809 21.1236 19.0075 21.3206 18.5139 21.3206H5.48611C4.99251 21.3206 4.51913 21.1236 4.17011 20.773C3.82108 20.4224 3.625 19.9468 3.625 19.451V9.16845Z"
        stroke={active ? "#0073C4" : "#141C36"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.20728 21.3206V11.9728H14.7906V21.3206"
        stroke={active ? "#0073C4" : "#141C36"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default HomeIcon;
