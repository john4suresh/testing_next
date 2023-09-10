import React from "react";
import { cn } from "@/lib/utils";

const Select = (props) => {
  const {
    options = [],
    placeholder = "",
    isError,
    errorMessage,
    ...rest
  } = props;
  return (
    <>
      <select
        {...rest}
        className={cn(
          "border-1 mb-2 w-full appearance-none rounded-xs border-gray-medium p-3 text-base font-normal leading-[22px] placeholder:text-gray-dark focus-visible:border-blue-light focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-light",
          {
            "border-red focus-visible:border-red focus-visible:ring-red":
              isError,
          }
        )}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <p className="mx-4 text-left text-[12px] text-red">{errorMessage}</p>
    </>
  );
};

export default Select;
