import React, { useMemo } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import {
  PageHeader,
  DashboardFilters,
  KPIGrid,
  RevenueChart,
  CategoryChart,
  QuarterlyChart,
  StorePerformanceChart,
} from "../components";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement
);

const DashboardPage = () => {
  // Chart Data
  const revenueData = useMemo(
    () => ({
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      datasets: [
        {
          label: "Revenue ($)",
          data: [
            65000, 78000, 85000, 72000, 90000, 95000, 88000, 92000, 87000,
            98000, 103000, 110000,
          ],
          borderColor: "#3B82F6",
          backgroundColor: "rgba(59, 130, 246, 0.1)",
          borderWidth: 3,
          fill: true,
          tension: 0.4,
        },
        {
          label: "Target ($)",
          data: [
            70000, 75000, 80000, 85000, 90000, 95000, 100000, 105000, 110000,
            115000, 120000, 125000,
          ],
          borderColor: "#EF4444",
          backgroundColor: "rgba(239, 68, 68, 0.1)",
          borderWidth: 2,
          borderDash: [5, 5],
          fill: false,
        },
      ],
    }),
    []
  );

  const categoryData = useMemo(
    () => ({
      labels: [
        "Electronics",
        "Clothing",
        "Home & Garden",
        "Sports",
        "Books",
        "Others",
      ],
      datasets: [
        {
          data: [35, 25, 20, 10, 6, 4],
          backgroundColor: [
            "#3B82F6",
            "#10B981",
            "#F59E0B",
            "#EF4444",
            "#8B5CF6",
            "#6B7280",
          ],
          borderWidth: 0,
          hoverBorderWidth: 3,
          hoverBorderColor: "#ffffff",
        },
      ],
    }),
    []
  );

  const monthlySalesData = useMemo(
    () => ({
      labels: ["Q1", "Q2", "Q3", "Q4"],
      datasets: [
        {
          label: "Current Year",
          data: [245000, 298000, 267000, 321000],
          backgroundColor: "rgba(59, 130, 246, 0.8)",
          borderColor: "#3B82F6",
          borderWidth: 1,
          borderRadius: 4,
        },
        {
          label: "Previous Year",
          data: [220000, 275000, 245000, 290000],
          backgroundColor: "rgba(16, 185, 129, 0.8)",
          borderColor: "#10B981",
          borderWidth: 1,
          borderRadius: 4,
        },
      ],
    }),
    []
  );

  const storePerformanceData = useMemo(
    () => ({
      labels: [
        "Downtown",
        "Mall",
        "Airport",
        "Suburban",
        "City Center",
        "Outlet",
      ],
      datasets: [
        {
          label: "Sales ($000)",
          data: [145, 132, 128, 115, 98, 87],
          backgroundColor: [
            "rgba(59, 130, 246, 0.8)",
            "rgba(16, 185, 129, 0.8)",
            "rgba(245, 158, 11, 0.8)",
            "rgba(239, 68, 68, 0.8)",
            "rgba(139, 92, 246, 0.8)",
            "rgba(107, 114, 128, 0.8)",
          ],
          borderColor: [
            "#3B82F6",
            "#10B981",
            "#F59E0B",
            "#EF4444",
            "#8B5CF6",
            "#6B7280",
          ],
          borderWidth: 1,
          borderRadius: 4,
        },
      ],
    }),
    []
  );

  // Chart Options
  const chartOptions = useMemo(
    () => ({
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "top",
          labels: {
            usePointStyle: true,
            padding: 20,
            font: {
              size: 12,
              family: "Inter",
            },
          },
        },
        tooltip: {
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          titleColor: "#ffffff",
          bodyColor: "#ffffff",
          borderColor: "#374151",
          borderWidth: 1,
          cornerRadius: 8,
          displayColors: true,
        },
      },
      scales: {
        x: {
          grid: {
            display: false,
          },
          ticks: {
            font: {
              size: 11,
              family: "Inter",
            },
          },
        },
        y: {
          grid: {
            color: "rgba(0, 0, 0, 0.1)",
          },
          ticks: {
            font: {
              size: 11,
              family: "Inter",
            },
          },
        },
      },
    }),
    []
  );

  const pieOptions = useMemo(
    () => ({
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "right",
          labels: {
            usePointStyle: true,
            padding: 15,
            font: {
              size: 12,
              family: "Inter",
            },
          },
        },
        tooltip: {
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          titleColor: "#ffffff",
          bodyColor: "#ffffff",
          callbacks: {
            label: function (context) {
              return context.label + ": " + context.parsed + "%";
            },
          },
        },
      },
    }),
    []
  );

  const horizontalBarOptions = useMemo(
    () => ({
      ...chartOptions,
      indexAxis: "y",
    }),
    [chartOptions]
  );

  return (
    <DashboardLayout>
      <div className="p-6 bg-[#FAFAFA] min-h-full text-[#000000] font-sans">
        <PageHeader
          title="Sales Performance Dashboard"
          subtitle="Real-time insights and analytics"
        >
          <DashboardFilters />
        </PageHeader>

        <KPIGrid />

        {/* Main Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <RevenueChart data={revenueData} options={chartOptions} />
          <CategoryChart data={categoryData} options={pieOptions} />
        </div>

        {/* Bottom Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <QuarterlyChart data={monthlySalesData} options={chartOptions} />
          <StorePerformanceChart
            data={storePerformanceData}
            options={horizontalBarOptions}
          />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardPage;
