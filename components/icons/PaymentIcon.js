import React from "react";

const PaymentIcon = (props) => {
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
        d="M8.5791 11.1053L12.3686 14.8947L23 4"
        stroke={active ? "#0073C4" : "#141C36"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 12V19.7778C22 20.3671 21.7659 20.9324 21.3491 21.3491C20.9324 21.7659 20.3671 22 19.7778 22H4.22222C3.63285 22 3.06762 21.7659 2.65087 21.3491C2.23413 20.9324 2 20.3671 2 19.7778V4.22222C2 3.63285 2.23413 3.06762 2.65087 2.65087C3.06762 2.23413 3.63285 2 4.22222 2H16.4444"
        stroke={active ? "#0073C4" : "#141C36"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default PaymentIcon;
