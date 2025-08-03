import React from "react";
import KPICard from "../ui/KPICard";

const KPIGrid = () => {
  const kpiData = [
    {
      title: "Total Revenue",
      value: "$1.2M",
      change: "+12.5% vs last month",
      changeType: "positive",
      icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1",
      iconBgColor: "bg-[#f0f8ff]",
      iconColor: "text-[#CC9F2C]",
    },
    {
      title: "Total Orders",
      value: "8,547",
      change: "+8.2% vs last month",
      changeType: "positive",
      icon: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z",
      iconBgColor: "bg-[#f0f8ff]",
      iconColor: "text-[#CC9F2C]",
    },
    {
      title: "Conversion Rate",
      value: "3.24%",
      change: "-2.1% vs last month",
      changeType: "negative",
      icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
      iconBgColor: "bg-[#f0f8ff]",
      iconColor: "text-[#CC9F2C]",
    },
    {
      title: "Avg. Order Value",
      value: "$145",
      change: "+4.1% vs last month",
      changeType: "positive",
      icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
      iconBgColor: "bg-[#f0f8ff]",
      iconColor: "text-[#CC9F2C]",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {kpiData.map((kpi, index) => (
        <KPICard
          key={index}
          title={kpi.title}
          value={kpi.value}
          change={kpi.change}
          changeType={kpi.changeType}
          icon={kpi.icon}
          iconBgColor={kpi.iconBgColor}
          iconColor={kpi.iconColor}
        />
      ))}
    </div>
  );
};

export default KPIGrid;
