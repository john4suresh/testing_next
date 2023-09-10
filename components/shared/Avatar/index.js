import Image from "next/image";
import PropTypes from "prop-types";
import { getInitials, cn } from "@/lib/utils";

export default function Initial({ src, name, size = "medium", isOnline }) {
  return (
    <div
      className={cn(
        "flex items-center justify-center overflow-auto rounded-full bg-navy",
        {
          "!bg-green-dark": isOnline === true,
          "h-24 w-24": size === "large",
          "h-[72px] w-[72px]": size === "medium",
          "h-10 w-10": size === "small",
        }
      )}
    >
      {name ? (
        <span
          className={cn("!font-normal leading-none text-white", {
            h1: size === "large" || size === "medium",
            body: size === "small",
          })}
        >
          {getInitials(name)}
        </span>
      ) : (
        <Image
          src={src}
          alt="profile image"
          width={96}
          height={96}
          className="rounded-full"
        />
      )}
    </div>
  );
}

Initial.propTypes = {
  src: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
  size: PropTypes.oneOf(["large", "medium", "small"]),
};
