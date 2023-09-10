import { forwardRef } from "react";
import { cn } from "@/lib/utils";

const Textarea = forwardRef(
  ({ name, placeholder, rows = 3, label, info, className, ...props }, ref) => (
    <>
      {label && <label htmlFor={name}>{label}</label>}
      <textarea
        ref={ref}
        id={name}
        {...props}
        rows={rows}
        name={name}
        placeholder={placeholder}
        data-automation-id={name}
        className={cn(
          "border-1 body peer block w-full resize-none appearance-none rounded-[4px] border-gray-medium bg-white p-4 leading-normal placeholder:italic focus-visible:border-blue-light focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-light disabled:cursor-not-allowed disabled:border-grayLight",
          className
        )}
      />
      {info && <span className="mt-2 text-xs">{info}</span>}
    </>
  )
);

Textarea.displayName = "Textarea";

export default Textarea;
