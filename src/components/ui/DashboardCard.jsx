import React from "react";

const DashboardCard = ({ title, children, className = "" }) => {
  return (
    <div
      className={`bg-[#FAFAFA] border border-[#CC9F2C] rounded-xl shadow-md p-6 ${className}`}
    >
      <h2 className="text-xl font-semibold text-[#000000] mb-4">{title}</h2>
      {children}
    </div>
  );
};

export default DashboardCard;
