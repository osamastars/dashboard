import React from "react";

const ChartContainer = ({
  title,
  children,
  className = "",
  headerContent = null,
  height = "300px",
}) => {
  return (
    <div
      className={`bg-[#FAFAFA] border border-[#CC9F2C] p-6 rounded-xl shadow-md ${className}`}
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-[#000000]">{title}</h3>
        {headerContent}
      </div>
      <div style={{ height }}>{children}</div>
    </div>
  );
};

export default ChartContainer;
