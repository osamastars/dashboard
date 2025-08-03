import React from "react";

const DashboardFilters = () => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-4">
      <div className="flex items-center gap-2">
        <span className="text-sm text-[#666666]">Period:</span>
        <select className="px-3 py-2 text-sm border border-[#CC9F2C] rounded-xl focus:ring-2 focus:ring-[#CC9F2C] focus:border-[#CC9F2C] bg-[#FAFAFA] text-[#000000]">
          <option>Last 30 days</option>
          <option>Last 90 days</option>
          <option>This Year</option>
        </select>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm text-[#666666]">Store:</span>
        <select className="px-3 py-2 text-sm border border-[#CC9F2C] rounded-xl focus:ring-2 focus:ring-[#CC9F2C] focus:border-[#CC9F2C] bg-[#FAFAFA] text-[#000000]">
          <option>All Stores</option>
          <option>Downtown</option>
          <option>Mall Location</option>
        </select>
      </div>
      <button className="px-4 py-2 text-sm bg-[#CC9F2C] text-white rounded-xl hover:bg-[#b8912a] transition-colors font-medium">
        Export Report
      </button>
    </div>
  );
};

export default DashboardFilters;
