import LoadingDots from "@/components/icons/loading-dots.js";
import clsx from "clsx";
import PropTypes from "prop-types";

/**
 * Button UI component for user interaction
 */
export default function Button({
  id,
  text,
  variant = "primary",
  onClick,
  disabled,
  loading,
  icon,
  size = "small",
  className,
}) {
  return (
    <button
      // if onClick is passed, it's a "button" type, otherwise it's being used in a form, hence "submit"
      id={id}
      data-automation-id={id}
      type={onClick ? "button" : "submit"}
      className={clsx(
        className,
        "rounded-[24px] px-4 py-2 text-base transition-all",
        {
          "px-4 py-2": size === "small",
          "px-6 py-3": size === "medium",
        },
        disabled || loading
          ? "cursor-not-allowed border-gray-200 bg-gray-100 text-gray-400 focus:outline-none"
          : {
              "bg-blue-light text-white outline-2 hover:bg-blue-dark focus:outline-none focus:ring-2 focus:ring-blue-light focus:ring-offset-2 focus:ring-offset-white":
                variant === "primary",
              "border border-blue-light bg-white text-blue-light hover:border-blue-dark hover:text-blue-dark focus:outline-none focus:ring-2 focus:ring-blue-light focus:ring-offset-2 focus:ring-offset-white":
                variant === "secondary",
              "!px-1 !py-0 text-blue-light": variant === "link",
            }
      )}
      {...(onClick ? { onClick } : {})}
      disabled={disabled || loading}
    >
      {loading ? (
        <LoadingDots color="#808080" />
      ) : (
        <>
          {icon}
          {text && <p id={id}>{text}</p>}
        </>
      )}
    </button>
  );
}

Button.propTypes = {
  /**
   * Button variant
   */
  variant: PropTypes.oneOf(["primary", "secondary", "link"]),
  /**
   * Button contents
   */
  text: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
  /**
   * Button size
   */
  size: PropTypes.oneOf(["small", "medium"]),
};
