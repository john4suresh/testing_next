import * as React from "react";

const Users = ({ active }, props) => (
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
      d="M9.49 7.667C9.49 6.202 10.69 5 12.19 5c1.499 0 2.699 1.202 2.699 2.667 0 1.464-1.2 2.666-2.699 2.666-1.499 0-2.699-1.202-2.699-2.666ZM12.19 3C9.602 3 7.49 5.081 7.49 7.667c0 2.585 2.112 4.666 4.699 4.666 2.587 0 4.699-2.08 4.699-4.666C16.888 5.08 14.776 3 12.189 3Zm-2.69 11c-.835 0-1.522.116-2.11.41-.596.3-.988.732-1.31 1.161-.71.946-1.08 2.181-1.08 3.429v2a1 1 0 0 0 2 0v-2c0-.875.264-1.674.68-2.229.24-.32.409-.473.607-.573.207-.104.55-.198 1.214-.198h5c.772 0 1.494.335 1.821.771.416.555.679 1.354.679 2.229v2a1 1 0 0 0 2 0v-2c0-1.248-.37-2.483-1.079-3.429C17.123 14.507 15.728 14 14.5 14h-5Zm10.258.871a1 1 0 0 1 1.217-.72c1.006.257 1.9.84 2.538 1.656.64.817.987 1.823.988 2.859V20.5a1 1 0 1 1-2 0v-1.833c0-.588-.198-1.161-.563-1.628a2.702 2.702 0 0 0-1.459-.951 1 1 0 0 1-.72-1.217Zm-.971-10.83a1 1 0 0 0-.572 1.917c.327.098.65.33.895.698.247.37.39.842.39 1.344 0 .501-.143.974-.39 1.344-.246.368-.568.6-.895.697a1 1 0 0 0 .572 1.917c.817-.244 1.509-.787 1.987-1.505.478-.716.727-1.58.727-2.453 0-.874-.25-1.737-.727-2.454-.478-.718-1.17-1.261-1.987-1.505ZM4.743 14.752a1 1 0 0 0-1.217-.72c-1.006.257-1.9.839-2.538 1.656A4.646 4.646 0 0 0 0 18.547v1.834a1 1 0 1 0 2 0v-1.833c0-.589.198-1.161.563-1.628a2.701 2.701 0 0 1 1.459-.951 1 1 0 0 0 .72-1.217Zm.971-10.71a1 1 0 0 1 .572 1.916c-.327.098-.65.33-.895.698C5.144 7.026 5 7.498 5 8c0 .501.144.974.39 1.344.246.368.569.6.896.697a1 1 0 0 1-.572 1.917c-.817-.244-1.509-.787-1.987-1.505A4.436 4.436 0 0 1 3 8c0-.874.249-1.737.727-2.454.478-.718 1.17-1.261 1.987-1.505Z"
      clipRule="evenodd"
    />
  </svg>
);

export default Users;
