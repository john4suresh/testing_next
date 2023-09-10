import React, { useEffect } from "react";
import SearchIcon from "/public/static/search.svg";
import Image from "next/image";
import PropTypes from "prop-types";
import { useDebouncedCallback } from "use-debounce";

export default function SearchInput({
  placeholder,
  value,
  onChange = () => {},
}) {
  const debounced = useDebouncedCallback((value) => {
    onChange(value);
  }, 300);

  return (
    <div className="relative">
      <input
        type="text"
        placeholder={placeholder}
        className="w-full rounded-xl border-gray-medium p-4 text-base leading-5 text-gray-veryDark placeholder:text-gray-dark focus:border-blue-light focus:ring-1 focus:ring-blue-light"
        onChange={(e) => {
          debounced(e.target.value);
        }}
        defaultValue={value}
        data-automation-id="search-input-box"
      />
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
        <Image src={SearchIcon} alt="search-icon" />
      </div>
    </div>
  );
}

SearchInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};
