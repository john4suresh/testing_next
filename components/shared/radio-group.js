"use client";
import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import radioSelected from "@/public/static/radio-selected.svg";
import radioUnselected from "@/public/static/radio-unselected.svg";
import { cn } from "@/lib/utils";
import Image from "next/image";

const RadioGroup = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn("grid gap-2", className)}
      {...props}
      ref={ref}
    />
  );
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

const RadioGroupItem = React.forwardRef(
  ({ className, children, ...props }, ref) => {
    return (
      <RadioGroupPrimitive.Item
        ref={ref}
        className={cn("relative", className)}
        {...props}
      >
        <Image
          src={radioUnselected}
          className="h-[18px] w-[18px]"
          alt="radio"
        />
        <RadioGroupPrimitive.Indicator className="absolute top-0 flex items-center justify-center">
          <Image
            src={radioSelected}
            className="h-[18px] w-[18px]"
            alt="radio"
          />
        </RadioGroupPrimitive.Indicator>
      </RadioGroupPrimitive.Item>
    );
  }
);
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroup, RadioGroupItem };
