import React, { useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";

const ReportsPage = () => {
  const [activeTab, setActiveTab] = useState("All reports as Dashboard");
  const [sortBy, setSortBy] = useState("Created By");

  const sidebarSections = [
    {
      items: [
        { icon: "🕒", label: "Recent" },
        { icon: "⭐", label: "Favorites" },
      ],
    },
    {
      items: [
        { icon: "📊", label: "All reports as Dashboard" },
        { icon: "📑", label: "All reports as Tables" },
        { icon: "🔒", label: "Private reports" },
        { icon: "👥", label: "Shared reports" },
      ],
    },
  ];

  const reports = [
    {
      id: 1,
      name: "Test",
      status: "Curated",
      createdBy: "System",
      createdDate: "01/01/2025",
      lastModifiedBy: "Stars Group Team",
      lastModifiedDate: "01/01/2025",
      favorite: false,
    },
    {
      id: 2,
      name: "report 1",
      status: "Curated",
      createdBy: "System",
      createdDate: "01/01/2025",
      lastModifiedBy: "Stars Group Team",
      lastModifiedDate: "01/01/2025",
      favorite: false,
    },
  ];

  return (
    <DashboardLayout>
      <div className="flex h-full bg-[#FAFAFA] text-[#000000] font-sans">
        {/* Left Sidebar */}
        <div className="w-64 bg-[#F5F5F5] border-r border-[#CC9F2C]">
          <div className="p-4">
            <nav className="space-y-1">
              {sidebarSections.map((section, sectionIndex) => (
                <div key={sectionIndex}>
                  {section.items.map((item, itemIndex) => (
                    <button
                      key={`${sectionIndex}-${itemIndex}`}
                      onClick={() => setActiveTab(item.label)}
                      className={`w-full flex items-center space-x-3 px-3 py-2 text-left text-sm rounded-xl transition-colors ${
                        activeTab === item.label
                          ? "bg-[#CC9F2C] text-white border-r-2 border-[#CC9F2C]"
                          : "text-[#666666] hover:bg-[#FAFAFA] hover:text-[#000000]"
                      }`}
                    >
                      <span className="text-base">{item.icon}</span>
                      <span>{item.label}</span>
                    </button>
                  ))}
                  {sectionIndex < sidebarSections.length - 1 && (
                    <div className="my-3 border-t border-[#CC9F2C]"></div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <div className="px-6 py-4 border-b border-[#CC9F2C] bg-white">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-semibold text-[#000000]">Reports</h1>
              <div className="flex items-center space-x-3">
                <button className="p-2 text-[#666666] hover:text-[#000000]">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                  <span className="sr-only">Search</span>
                </button>
                <button className="p-2 text-[#666666] hover:text-[#000000]">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="sr-only">Help Center</span>
                </button>
                <button className="px-4 py-2 bg-[#CC9F2C] text-white text-sm font-medium rounded-xl hover:bg-[#b8912a] transition-colors">
                  New Report
                </button>
              </div>
            </div>

            {/* Tabs and Filter */}
            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center space-x-6">
                <button
                  className={`pb-2 text-sm font-medium border-b-2 ${
                    activeTab === "All reports"
                      ? "text-[#CC9F2C] border-[#CC9F2C]"
                      : "text-[#666666] border-transparent hover:text-[#000000]"
                  }`}
                >
                  All reports
                </button>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-[#666666]">Sort By:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="text-sm border border-[#CC9F2C] rounded-xl px-3 py-1 focus:outline-none focus:ring-2 focus:ring-[#CC9F2C] focus:border-[#CC9F2C] bg-[#FAFAFA] text-[#000000]"
                >
                  <option>Created By</option>
                  <option>Name</option>
                  <option>Created Date</option>
                  <option>Last Modified</option>
                </select>
              </div>
            </div>
          </div>

          {/* Reports Table */}
          <div className="flex-1 overflow-auto">
            <table className="w-full">
              <thead className="bg-[#F5F5F5] border-b border-[#CC9F2C]">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-[#666666] uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-[#666666] uppercase tracking-wider">
                    Created by
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-[#666666] uppercase tracking-wider">
                    Created date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-[#666666] uppercase tracking-wider">
                    Last Modified by
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-[#666666] uppercase tracking-wider">
                    Last Modified date
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-[#e5e5e5]">
                {reports.map((report) => (
                  <tr key={report.id} className="hover:bg-[#FAFAFA]">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <button className="mr-3 text-[#666666] hover:text-[#CC9F2C]">
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                            />
                          </svg>
                        </button>
                        <div>
                          <div className="flex items-center">
                            <span className="text-sm font-medium text-[#CC9F2C] hover:text-[#b8912a] cursor-pointer">
                              {report.name}
                            </span>
                            {report.status && (
                              <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#CC9F2C] text-white">
                                {report.status}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#000000]">
                      {report.createdBy}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#000000]">
                      {report.createdDate}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#000000]">
                      {report.lastModifiedBy}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#000000]">
                      {report.lastModifiedDate}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="px-6 py-3 bg-white border-t border-[#CC9F2C]">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <button className="px-3 py-1 text-sm text-[#666666] hover:text-[#000000] disabled:opacity-50">
                  ← Previous
                </button>
                <div className="flex items-center space-x-1">
                  <button className="px-3 py-1 text-sm bg-[#CC9F2C] text-white rounded-xl">
                    1
                  </button>
                  <button className="px-3 py-1 text-sm text-[#666666] hover:text-[#000000]">
                    2
                  </button>
                  <button className="px-3 py-1 text-sm text-[#666666] hover:text-[#000000]">
                    3
                  </button>
                  <button className="px-3 py-1 text-sm text-[#666666] hover:text-[#000000]">
                    4
                  </button>
                  <button className="px-3 py-1 text-sm text-[#666666] hover:text-[#000000]">
                    5
                  </button>
                </div>
                <button className="px-3 py-1 text-sm text-[#666666] hover:text-[#000000]">
                  Next →
                </button>
              </div>
              <div className="text-sm text-[#666666]">Showing 10 results</div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ReportsPage;
