import React, { useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import { Doughnut, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
);

const TeamPerformancePage = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("2023");

  // Sample goals data
  const goalsData = [
    {
      goalId: "G001",
      critical: "Critical",
      smartGoal: "Increase sales by 15%",
      description: "Achieve 15% increase in quarterly sales revenue",
      kpi: "Sales Revenue",
      formula: "(Current - Previous) / Previous * 100",
      dependencies: "Marketing Team",
      currentStatus: "In Progress",
      targetStatus: "Completed",
      weight: "High",
    },
    {
      goalId: "G002",
      critical: "Non-Critical",
      smartGoal: "Improve customer satisfaction",
      description: "Achieve 4.5+ rating in customer surveys",
      kpi: "CSAT Score",
      formula: "Average of all customer ratings",
      dependencies: "Support Team",
      currentStatus: "Completed",
      targetStatus: "Completed",
      weight: "Medium",
    },
    {
      goalId: "G003",
      critical: "Critical",
      smartGoal: "Reduce response time",
      description: "Decrease average response time to under 2 hours",
      kpi: "Response Time",
      formula: "Sum of response times / Number of tickets",
      dependencies: "IT Team",
      currentStatus: "At Risk",
      targetStatus: "Completed",
      weight: "High",
    },
    {
      goalId: "G004",
      critical: "Non-Critical",
      smartGoal: "Training completion",
      description: "100% team completion of mandatory training",
      kpi: "Training Rate",
      formula: "Completed trainings / Total employees * 100",
      dependencies: "HR Team",
      currentStatus: "In Progress",
      targetStatus: "Completed",
      weight: "Low",
    },
  ];

  // Employee Performance Chart Data
  const employeePerformanceData = {
    labels: ["Excellent", "Good", "Average", "Below Average"],
    datasets: [
      {
        data: [30, 40, 20, 10],
        backgroundColor: ["#CC9F2C", "#4A90E2", "#7ED321", "#F5A623"],
        borderWidth: 0,
      },
    ],
  };

  // Segment Analysis Chart Data
  const segmentData = {
    labels: ["Blog Articles", "Documentation", "Tutorials", "FAQs", "Videos"],
    datasets: [
      {
        label: "Engagement",
        data: [85, 70, 60, 45, 25],
        backgroundColor: [
          "#CC9F2C",
          "#4A90E2",
          "#7ED321",
          "#F5A623",
          "#BD10E0",
        ],
        borderRadius: 4,
      },
    ],
  };

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "completed":
        return "bg-green-100 text-green-800";
      case "in progress":
        return "bg-blue-100 text-blue-800";
      case "at risk":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getCriticalColor = (critical) => {
    return critical === "Critical"
      ? "bg-red-100 text-red-800"
      : "bg-gray-100 text-gray-800";
  };

  return (
    <DashboardLayout>
      <div className="p-6 bg-[#FAFAFA] min-h-full font-sans">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-[#000000] mb-2">
            Team Performance
          </h1>
          <p className="text-[#666666]">
            Monitor and analyze team goals and performance metrics
          </p>
        </div>

        {/* Top KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-[#FAFAFA] border border-[#CC9F2C] p-6 rounded-xl shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-[#666666] mb-1">
                  Achievement of PDP
                </p>
                <p className="text-3xl font-bold text-[#4A90E2]">50%</p>
              </div>
              <div className="p-3 bg-blue-100 rounded-full">
                <svg
                  className="w-8 h-8 text-[#4A90E2]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
            </div>
            <div className="mt-2">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-[#4A90E2] h-2 rounded-full"
                  style={{ width: "50%" }}
                ></div>
              </div>
            </div>
          </div>

          <div className="bg-[#FAFAFA] border border-[#CC9F2C] p-6 rounded-xl shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-[#666666] mb-1">
                  Current Quarter
                </p>
                <p className="text-3xl font-bold text-[#CC9F2C]">Q2</p>
              </div>
              <div className="p-3 bg-yellow-100 rounded-full">
                <svg
                  className="w-8 h-8 text-[#CC9F2C]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </div>
            <p className="text-sm text-[#666666] mt-2">April - June 2025</p>
          </div>

          <div className="bg-[#FAFAFA] border border-[#CC9F2C] p-6 rounded-xl shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-[#666666] mb-1">
                  Growth Rate
                </p>
                <p className="text-3xl font-bold text-[#7ED321]">+2.0%</p>
              </div>
              <div className="p-3 bg-green-100 rounded-full">
                <svg
                  className="w-8 h-8 text-[#7ED321]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
            </div>
            <p className="text-sm text-green-600 mt-2">↗ vs last quarter</p>
          </div>
        </div>

        {/* Goals Management Table */}
        <div className="bg-[#FAFAFA] border border-[#CC9F2C] rounded-xl shadow-md mb-8">
          <div className="p-6 border-b border-[#CC9F2C]">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-[#000000]">
                Goals Management
              </h2>
              <div className="flex space-x-2">
                <select
                  value={selectedPeriod}
                  onChange={(e) => setSelectedPeriod(e.target.value)}
                  className="px-3 py-1 border border-[#CC9F2C] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#CC9F2C]"
                >
                  <option value="2023">2023</option>
                  <option value="2024">2024</option>
                  <option value="2025">2025</option>
                </select>
                <button className="bg-[#CC9F2C] hover:bg-[#b8912a] text-white px-4 py-2 rounded-lg text-sm font-medium">
                  Add Goal
                </button>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[#2C3E50] text-white">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-medium">
                    Goal ID
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium">
                    Critical/Non-Critical
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium">
                    Smart Goal
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium">
                    Goal Description
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium">
                    KPI
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium">
                    Formula
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium">
                    Dependencies
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium">
                    Current Status
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium">
                    Target Status
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium">
                    Goal Weight
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {goalsData.map((goal, index) => (
                  <tr key={index} className="hover:bg-[#FAFAFA]">
                    <td className="px-4 py-3 text-sm font-medium text-[#000000]">
                      {goal.goalId}
                    </td>
                    <td className="px-4 py-3">
                      <span
                        className={`px-2 py-1 text-xs font-medium rounded-full ${getCriticalColor(
                          goal.critical
                        )}`}
                      >
                        {goal.critical}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm text-[#000000]">
                      {goal.smartGoal}
                    </td>
                    <td className="px-4 py-3 text-sm text-[#666666] max-w-xs truncate">
                      {goal.description}
                    </td>
                    <td className="px-4 py-3 text-sm text-[#000000]">
                      {goal.kpi}
                    </td>
                    <td className="px-4 py-3 text-sm text-[#666666] max-w-xs truncate">
                      {goal.formula}
                    </td>
                    <td className="px-4 py-3 text-sm text-[#000000]">
                      {goal.dependencies}
                    </td>
                    <td className="px-4 py-3">
                      <span
                        className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(
                          goal.currentStatus
                        )}`}
                      >
                        {goal.currentStatus}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <span
                        className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(
                          goal.targetStatus
                        )}`}
                      >
                        {goal.targetStatus}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm text-[#000000]">
                      {goal.weight}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Employee Performance Chart */}
          <div className="bg-[#FAFAFA] border border-[#CC9F2C] rounded-xl shadow-md p-6">
            <div className="text-center mb-6">
              <h3 className="text-lg font-semibold text-[#7B68EE] mb-2">
                Employee Performance
              </h3>
              <p className="text-sm text-[#666666]">
                for the Year {selectedPeriod}
              </p>
              <p className="text-xs text-[#666666]">Gauge Charts</p>
            </div>

            <div className="flex justify-center items-center">
              <div className="relative w-64 h-64">
                <Doughnut
                  data={employeePerformanceData}
                  options={{
                    responsive: true,
                    maintainAspectRatio: true,
                    cutout: "60%",
                    plugins: {
                      legend: {
                        display: false,
                      },
                    },
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#000000]">80</div>
                    <div className="text-sm text-[#666666]">Score</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-[#CC9F2C] rounded-full mr-2"></div>
                <span>Excellent 30%</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-[#4A90E2] rounded-full mr-2"></div>
                <span>Good 40%</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-[#7ED321] rounded-full mr-2"></div>
                <span>Average 20%</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-[#F5A623] rounded-full mr-2"></div>
                <span>Below Avg 10%</span>
              </div>
            </div>
          </div>

          {/* Segment Analysis */}
          <div className="bg-[#FAFAFA] border border-[#CC9F2C] rounded-xl shadow-md p-6">
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-[#000000] mb-2">
                <span className="text-[#CC9F2C]">SEGMENT:</span> Blog Articles
              </h3>
            </div>

            <div style={{ height: "300px" }}>
              <Bar
                data={segmentData}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      display: false,
                    },
                  },
                  scales: {
                    y: {
                      beginAtZero: true,
                      max: 100,
                      grid: {
                        color: "#e5e5e5",
                      },
                    },
                    x: {
                      grid: {
                        display: false,
                      },
                    },
                  },
                }}
              />
            </div>

            <div className="mt-4">
              <div className="flex justify-between text-sm text-[#666666]">
                <span>Articles Submitted</span>
                <span>Ranking</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default TeamPerformancePage;
