"use client";
import React from "react";
import PropTypes from "prop-types";
import RadioButtonInput from "./radio-input";
import clsx from "clsx";

export default function RadioButtonGroup({
  label,
  options,
  disabled = false,
  readOnly = false,
  selectedOption = "",
  onChange = () => {},
  customeStyles = "",
}) {
  return (
    <div className={clsx(customeStyles, "flex flex-col gap-y-6")}>
      <label className="text-lg font-semibold" htmlFor={label}>
        {label}
      </label>
      <div className="ml-7 flex flex-wrap gap-x-8">
        {options.map((option) => (
          <RadioButtonInput
            key={option.value}
            label={option.label}
            value={option.value}
            checked={selectedOption === option.value}
            onChange={readOnly ? () => {} : () => onChange(option.value)}
            disabled={disabled}
            readOnly={readOnly}
          />
        ))}
      </div>
    </div>
  );
}

RadioButtonGroup.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  selectedOption: PropTypes.string,
  onChange: PropTypes.func,
  customeStyles: PropTypes.string,
};
