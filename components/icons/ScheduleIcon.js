import React from "react";

const ScheduleIcon = (props) => {
  const { active = false, customClassname = "" } = props;
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={active ? "#0073C4" : "#141C36"}
      xmlns="http://www.w3.org/2000/svg"
      className={customClassname}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.7349 2.5C16.7349 1.94772 16.2871 1.5 15.7349 1.5C15.1826 1.5 14.7349 1.94772 14.7349 2.5V3.39075H9.20557V2.5C9.20557 1.94772 8.75785 1.5 8.20557 1.5C7.65328 1.5 7.20557 1.94772 7.20557 2.5V3.39075H5.38218C3.78613 3.39075 2.5 4.68924 2.5 6.28147V10.0629V19.5165C2.5 21.1087 3.78613 22.4072 5.38218 22.4072H18.5574C20.1535 22.4072 21.4396 21.1087 21.4396 19.5165V10.0629V6.28147C21.4396 4.68924 20.1535 3.39075 18.5574 3.39075H16.7349V2.5ZM19.4396 9.06293V6.28147C19.4396 5.78526 19.0404 5.39075 18.5574 5.39075H16.7349V6.28144C16.7349 6.83373 16.2871 7.28144 15.7349 7.28144C15.1826 7.28144 14.7349 6.83373 14.7349 6.28144V5.39075H9.20557V6.28144C9.20557 6.83373 8.75785 7.28144 8.20557 7.28144C7.65328 7.28144 7.20557 6.83373 7.20557 6.28144V5.39075H5.38218C4.89923 5.39075 4.5 5.78526 4.5 6.28147V9.06293H19.4396ZM4.5 11.0629H19.4396V19.5165C19.4396 20.0127 19.0404 20.4072 18.5574 20.4072H5.38218C4.89923 20.4072 4.5 20.0127 4.5 19.5165V11.0629Z"
      />
    </svg>
  );
};

export default ScheduleIcon;