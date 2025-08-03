import React from "react";
import { Line } from "react-chartjs-2";
import ChartContainer from "../ui/ChartContainer";

const RevenueChart = ({ data, options }) => {
  const headerContent = (
    <div className="flex items-center gap-2 text-sm text-gray-500">
      <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
      <span>Actual</span>
      <span className="w-3 h-3 border-2 border-red-500 border-dashed rounded-full ml-4"></span>
      <span>Target</span>
    </div>
  );

  return (
    <ChartContainer
      title="Revenue Trend"
      headerContent={headerContent}
      className="lg:col-span-2"
    >
      <Line data={data} options={options} />
    </ChartContainer>
  );
};

export default RevenueChart;
