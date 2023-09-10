import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import { Menu } from "@headlessui/react";

const MenuItem = ({ title, isExternal = true, onClick }) => {
  return (
    <Menu.Item
      as="div"
      {...(onClick ? { onClick } : {})}
      className={`flex items-center ${
        isExternal ? "justify-between" : "justify-center"
      } px-4 py-2`}
    >
      <p className="text-sm font-bold">{title}</p>
      {isExternal ? (
        <Image
          src="/static/external-link-icon.svg"
          width={24}
          height={24}
          alt="external-link"
        />
      ) : null}
    </Menu.Item>
  );
};

export default MenuItem;

MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  isExternal: PropTypes.bool,
};
