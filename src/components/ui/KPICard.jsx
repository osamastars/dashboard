import React from "react";

const KPICard = ({
  title,
  value,
  change,
  changeType = "positive",
  icon,
  iconBgColor = "bg-blue-100",
  iconColor = "text-blue-600",
}) => {
  const getChangeColor = () => {
    switch (changeType) {
      case "positive":
        return "text-green-600";
      case "negative":
        return "text-red-600";
      default:
        return "text-gray-600";
    }
  };

  const getChangeIcon = () => {
    switch (changeType) {
      case "positive":
        return "↗";
      case "negative":
        return "↘";
      default:
        return "→";
    }
  };

  return (
    <div className="bg-[#FAFAFA] border border-[#CC9F2C] rounded-xl shadow-md p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-[#666666] mb-1">{title}</p>
          <p className="text-2xl font-bold text-[#000000]">{value}</p>
          <p className={`text-sm mt-1 ${getChangeColor()}`}>
            {getChangeIcon()} {change}
          </p>
        </div>
        <div className={`p-3 ${iconBgColor} rounded-full`}>
          <svg
            className={`w-6 h-6 ${iconColor}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={icon}
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default KPICard;
