import React from "react";
import { Bar } from "react-chartjs-2";
import ChartContainer from "../ui/ChartContainer";

const QuarterlyChart = ({ data, options }) => {
  return (
    <ChartContainer title="Quarterly Sales Comparison">
      <Bar data={data} options={options} />
    </ChartContainer>
  );
};

export default QuarterlyChart;
