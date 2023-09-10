"use client";
import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { cn } from "@/lib/utils";

export default function MultiTextInput({
  label,
  subLabel,
  placeholder,
  value,
  onChange = () => {},
  readOnly = false,
  disabled = false,
  rows = 4,
  customeStyles = "",
  labelStyles = "",
  characterLength = false,
}) {
  return (
    <div
      className={cn(
        "flex w-full flex-col items-start gap-y-2 text-gray-veryDark",
        customeStyles
      )}
    >
      <label
        className={cn("text-lg font-semibold", labelStyles)}
        htmlFor={label}
      >
        {label}
      </label>
      {subLabel && (
        <label className="text-base font-normal" htmlFor={label}>
          {subLabel}
        </label>
      )}
      <textarea
        className="w-full appearance-none rounded-sm border-[1px] border-gray-medium p-4 text-base font-normal leading-[22px]"
        id={label}
        placeholder={placeholder}
        value={value}
        readOnly={readOnly}
        disabled={disabled}
        onChange={(event) => {
          onChange(event.target.value);
        }}
        rows={rows}
      />
      {characterLength && <p className="pl-2 text-sm">0/1000</p>}
    </div>
  );
}

MultiTextInput.propTypes = {
  label: PropTypes.string.isRequired,
  subLabel: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  rows: PropTypes.number,
  onChange: PropTypes.func,
  readOnly: PropTypes.bool,
  disabled: PropTypes.bool,
  customeStyles: PropTypes.string,
};
