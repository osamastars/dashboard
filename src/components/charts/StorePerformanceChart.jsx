import React from "react";
import { Bar } from "react-chartjs-2";
import ChartContainer from "../ui/ChartContainer";

const StorePerformanceChart = ({ data, options }) => {
  return (
    <ChartContainer title="Store Performance">
      <Bar data={data} options={options} />
    </ChartContainer>
  );
};

export default StorePerformanceChart;
