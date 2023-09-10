import clsx from "clsx";
import Image from "next/image";
import PropTypes from "prop-types";
import incomplete from "@/public/assets/icons/incomplete.svg";
/* 
    Add more types if needed.
    @types: "primary" | "secondary" | "success" | "error"
*/
export default function Alert({ type, children }) {
  const icons = {
    warning: incomplete,
  };
  return (
    <div
      className={clsx("mb-2 mt-1.5 flex items-center rounded-md border p-4", {
        "border-yellow-light bg-yellow-light": type === "warning",
        "border-red  bg-red bg-opacity-20": type === "error",
      })}
    >
      <Image src={icons[type]} alt="" className="mr-3" />
      <p className="body break-words !font-bold ">{children}</p>
    </div>
  );
}

Alert.propTypes = {
  type: PropTypes.oneOf(["warning", "error"]).isRequired,
  children: PropTypes.node.isRequired,
};
