import { cn } from "@/lib/utils";
import React, { forwardRef } from "react";

const Card = forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(className, "rounded-md border border-gray-medium bg-white")}
    {...props}
  />
));
Card.displayName = "Card";

const CardHeader = forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("border-b border-gray-medium px-6 py-5 font-bold", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

/** Card title, CardDescription, CardContent is not that useful for us. But added for future care. */
const CardTitle = forwardRef(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = forwardRef(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-gray-500 dark:text-gray-400", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex justify-between border-t border-gray-medium px-6 py-5",
      className
    )}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
