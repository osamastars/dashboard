import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import miniLogo from "../assets/minilogo.png";

const DashboardLayout = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    navigate("/login");
  };

  const menuItems = [
    { icon: "🏠", label: "Home", path: "/home" },
    { icon: "📊", label: "Dashboard", path: "/dashboard" },
    { icon: "📄", label: "Reports", path: "/reports" },
    { icon: "😀", label: "Team Performance", path: "/team-performance" },
    { icon: "❓", label: "Help Center", path: "/help" },
    { icon: "⚙️", label: "Settings", path: "/settings" },
  ];

  return (
    <div className="flex h-screen bg-[#FAFAFA]">
      {/* Sidebar */}
      <div className="w-64 bg-[#000000] text-white">
        {/* Logo Section */}
        <div className="p-6 border-b border-r border-[#CC9F2C] bg-gradient-to-b from-white to-[#FAFAFA]">
          <div className="flex items-center justify-center bg-white rounded-lg shadow-sm p-3 border-l-4 border-[#CC9F2C]">
            <img
              src={miniLogo}
              alt="Stars Group"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="mt-6">
          {menuItems.map((item, index) => (
            <button
              key={index}
              onClick={() => navigate(item.path)}
              className={`w-full flex items-center space-x-3 px-6 py-3 text-left hover:bg-[#1a1a1a] transition-colors ${
                location.pathname === item.path
                  ? "bg-[#1a1a1a] border-r-2 border-[#CC9F2C]"
                  : ""
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              <span className="text-sm">{item.label}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-md border-b border-[#CC9F2C] px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Search Bar */}
            <div className="flex-1 max-w-2xl">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Search Dashboard, Report Name or Help"
                  className="block w-full pl-10 pr-3 py-2 border border-[#CC9F2C] rounded-xl leading-5 bg-[#FAFAFA] placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-[#CC9F2C] focus:border-[#CC9F2C] font-sans"
                />
              </div>
            </div>

            {/* Right side - User menu */}
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-400 hover:text-gray-600">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 2L13 8h7l-5.5 4.5L16 20l-6-4.5L4 20l1.5-7.5L0 8h7l3-6z" />
                </svg>
              </button>
              <button className="p-2 text-gray-400 hover:text-gray-600">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <button className="p-2 text-gray-400 hover:text-gray-600 relative">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                </svg>
                <span className="absolute -top-1 -right-1 bg-orange-400 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  1
                </span>
              </button>

              <div className="flex items-center space-x-3">
                <span className="text-sm text-gray-700">Rafat Khawan</span>
                <button
                  onClick={handleLogout}
                  className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center hover:bg-gray-400 transition-colors"
                >
                  <span className="text-xs font-semibold text-gray-700">
                    RK
                  </span>
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto bg-[#FAFAFA] p-6 font-sans">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
