"use client";
import { BarChart as Chart } from "@tremor/react";
import PropTypes from "prop-types";

export default function BarChart({ data, minValue = null, maxValue = null }) {
  const dataFormatter = (number) => {
    return number.toString();
  };

  return (
    <Chart
      className="mt-6 h-[400px] p-6"
      layout="horizontal"
      data={data}
      index="name"
      categories={["value"]}
      colors={["barchart1"]}
      valueFormatter={dataFormatter}
      showLegend={false}
      showTooltip={false}
      autoMinValue={minValue === undefined || minValue === null}
      minValue={minValue}
      maxValue={maxValue}
    />
  );
}

BarChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.number,
    })
  ),
  minValue: PropTypes.number,
  maxValue: PropTypes.number,
};
