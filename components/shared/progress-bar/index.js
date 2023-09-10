import React from "react";
import { cn } from "@/lib/utils";

function ProgressBar(props) {
  const { data, average = null, color = "bg-red" } = props;
  if (
    data === "CANNOT ASSESS" ||
    data === "DID NOT ASSESS" ||
    data === "NOT APPLICABLE" ||
    data === null
  ) {
    return data || "NONE";
  }
  return (
    <div className="h-3 w-full rounded-full border border-gray-medium bg-gray-light">
      <div
        className={cn("h-3 rounded-full", color)}
        style={{ width: `${parseInt(data, 10)}%` }}
      />
    </div>
  );
}

export default ProgressBar;
