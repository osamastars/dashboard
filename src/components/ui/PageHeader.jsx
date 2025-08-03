import React from "react";

const PageHeader = ({ title, subtitle, children }) => {
  return (
    <div className="mb-8">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-[#000000] mb-2">{title}</h1>
          <p className="text-[#666666]">{subtitle}</p>
        </div>
        {children}
      </div>
    </div>
  );
};

export default PageHeader;
