"use client";
import React from "react";
import PropTypes from "prop-types";

export default function RadioButtonInput({
  label,
  value,
  disabled = false,
  readOnly = false,
  checked = false,
  onChange = () => {},
}) {
  return (
    <div className="mb-2">
      <label className="inline-flex items-center">
        <input
          type="radio"
          className="h-6 w-6 accent-navy"
          value={value}
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          readOnly={readOnly}
        />
        <span className="ml-2">{label}</span>
      </label>
    </div>
  );
}

RadioButtonInput.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
};
