"use client";
import React from "react";
import PropTypes from "prop-types";
import { cn } from "@/lib/utils";

const Input = React.forwardRef(
  ({ type = "text", className, ...props }, ref) => {
    return (
      <input
        className={cn(
          "border-1 w-full appearance-none rounded-xs border-gray-medium p-3 text-base font-normal leading-[22px] placeholder:text-gray-dark focus-visible:border-blue-light focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-light",
          className
        )}
        type={type}
        ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

Input.propTypes = {
  type: PropTypes.string,
};

export default Input;
