"use client";
import { DonutChart as Chart } from "@tremor/react";
import PropTypes from "prop-types";
import { cn } from "@/lib/utils";

export default function DonutChart({
  data,
  category,
  chartIndexValue,
  isSingleValueChart = false,
  showLegends = true,
  valueFormatter = (n) => n,
}) {
  const colors = isSingleValueChart
    ? ["barchart1", "barchart5"]
    : ["barchart1", "barchart2", "barchart3", "barchart4"];
  const chartData = isSingleValueChart
    ? [data, { key: "empty", [category]: 100 - data[category] }]
    : data;
  const legendColors = [
    "bg-barchart1-500",
    "bg-barchart2-500",
    "bg-barchart3-500",
    "bg-barchart4-500",
  ];
  return (
    <>
      <Chart
        className={cn(isSingleValueChart ? "h-[240px]" : "h-[200px]", "my-8")}
        data={chartData}
        category={category}
        index={chartIndexValue}
        showTooltip={false}
        valueFormatter={valueFormatter}
        colors={colors}
      />
      {showLegends && (
        <div>
          {chartData.map((item, index) => {
            const label = item[chartIndexValue];
            const value = `${item[category]} ${category}`;
            return (
              <div key={index} className="flex gap-2 px-6 py-3">
                <div className={cn(legendColors[index], "mt-1 h-4 w-4")}></div>
                <div>
                  <div>{label}</div>
                  <div>{`${item.percentage} | ${value}`}</div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}

DonutChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.any),
  category: PropTypes.string.isRequired,
  chartIndexValue: PropTypes.string.isRequired,
  isSingleValueChart: PropTypes.bool,
  showLegends: PropTypes.bool,
  valueFormatter: PropTypes.func,
};
