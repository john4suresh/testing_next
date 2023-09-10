import clsx from "clsx";
import PropTypes from "prop-types";

export default function Card({
  type = "recommended",
  children,
  className = "",
}) {
  return (
    <div
      className={clsx(
        className,
        {
          "p-6": type === "recommended",
          "px-6 pb-6 pt-4": type === "banner",
          "bg-green-light": type === "completed",
          "py-6 pl-6 pr-4": type === "todo" || type === "completed",
        },
        "rounded-md border border-gray-medium bg-white"
      )}
    >
      {children}
    </div>
  );
}

Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(["todo", "banner", "completed", "recommended"])
    .isRequired,
};
