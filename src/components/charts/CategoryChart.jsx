import React from "react";
import { Doughnut } from "react-chartjs-2";
import ChartContainer from "../ui/ChartContainer";

const CategoryChart = ({ data, options }) => {
  return (
    <ChartContainer title="Sales by Category">
      <Doughnut data={data} options={options} />
    </ChartContainer>
  );
};

export default CategoryChart;
