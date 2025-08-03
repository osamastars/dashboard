import React, { useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@starsgroup.com",
    phone: "+1 (555) 123-4567",
    department: "IT",
  });

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const tabs = [
    { id: "profile", label: "Profile", icon: "👤" },
    { id: "security", label: "Security", icon: "🔒" },
    { id: "admin", label: "Admin Panel", icon: "👨‍💼" },
  ];

  return (
    <DashboardLayout>
      <div className="p-6 bg-[#FAFAFA] min-h-full font-sans">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#000000] mb-2">Settings</h1>
          <p className="text-[#666666]">
            Manage your account settings and preferences
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white border border-gray-200 rounded-xl shadow-lg mb-8">
          <div className="flex overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-8 py-4 text-sm font-semibold whitespace-nowrap transition-all duration-300 border-b-2 ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-[#CC9F2C] to-[#b8912a] text-white border-[#CC9F2C] shadow-md"
                    : "text-[#666666] hover:text-[#CC9F2C] hover:bg-[#FAFAFA] border-transparent hover:border-[#CC9F2C]/30"
                }`}
              >
                <span className="mr-3 text-lg">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="max-w-4xl mx-auto">
          {/* Main Content */}
          <div>
            {activeTab === "profile" && (
              <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-8">
                <div className="border-b border-gray-100 pb-6 mb-8">
                  <h2 className="text-2xl font-bold text-[#000000] mb-2">
                    Profile Information
                  </h2>
                  <p className="text-[#666666]">
                    Update your personal details and profile settings
                  </p>
                </div>

                {/* Profile Picture */}
                <div className="flex items-center mb-8 p-6 bg-gradient-to-r from-[#FAFAFA] to-white rounded-xl border border-gray-100">
                  <div className="w-24 h-24 bg-gradient-to-br from-[#CC9F2C] to-[#b8912a] rounded-full flex items-center justify-center text-white text-3xl font-bold mr-6 shadow-lg">
                    JD
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-[#000000] mb-2">
                      Profile Photo
                    </h3>
                    <p className="text-sm text-[#666666] mb-4">
                      Update your profile picture to personalize your account
                    </p>
                    <div className="flex space-x-3">
                      <button className="bg-gradient-to-r from-[#CC9F2C] to-[#b8912a] hover:from-[#b8912a] hover:to-[#a8821a] text-white px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 shadow-md hover:shadow-lg">
                        Change Photo
                      </button>
                      <button className="border-2 border-[#CC9F2C] text-[#CC9F2C] hover:bg-[#CC9F2C] hover:text-white px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200">
                        Remove Photo
                      </button>
                    </div>
                  </div>
                </div>

                {/* Profile Form */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-[#000000]">
                      First Name
                    </label>
                    <input
                      type="text"
                      value={formData.firstName}
                      onChange={(e) =>
                        handleInputChange("firstName", e.target.value)
                      }
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#CC9F2C] focus:border-[#CC9F2C] transition-all duration-200 bg-white"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-[#000000]">
                      Last Name
                    </label>
                    <input
                      type="text"
                      value={formData.lastName}
                      onChange={(e) =>
                        handleInputChange("lastName", e.target.value)
                      }
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#CC9F2C] focus:border-[#CC9F2C] transition-all duration-200 bg-white"
                      placeholder="Enter your last name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-[#000000]">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#CC9F2C] focus:border-[#CC9F2C] transition-all duration-200 bg-white"
                      placeholder="Enter your email address"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-[#000000]">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        handleInputChange("phone", e.target.value)
                      }
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#CC9F2C] focus:border-[#CC9F2C] transition-all duration-200 bg-white"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="block text-sm font-semibold text-[#000000]">
                      Department
                    </label>
                    <select
                      value={formData.department}
                      onChange={(e) =>
                        handleInputChange("department", e.target.value)
                      }
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#CC9F2C] focus:border-[#CC9F2C] transition-all duration-200 bg-white"
                    >
                      <option value="IT">Information Technology</option>
                      <option value="HR">Human Resources</option>
                      <option value="Finance">Finance</option>
                      <option value="Marketing">Marketing</option>
                      <option value="Operations">Operations</option>
                      <option value="Sales">Sales</option>
                    </select>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-[#666666]">
                        Make sure your information is up to date to ensure
                        smooth operations.
                      </p>
                    </div>
                    <button className="bg-gradient-to-r from-[#CC9F2C] to-[#b8912a] hover:from-[#b8912a] hover:to-[#a8821a] text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl">
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "security" && (
              <div className="space-y-8">
                {/* Change Password */}
                <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-8">
                  <div className="border-b border-gray-100 pb-6 mb-8">
                    <h2 className="text-2xl font-bold text-[#000000] mb-2">
                      Change Password
                    </h2>
                    <p className="text-[#666666]">
                      Update your password to keep your account secure
                    </p>
                  </div>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-[#000000]">
                        Current Password
                      </label>
                      <input
                        type="password"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#CC9F2C] focus:border-[#CC9F2C] transition-all duration-200 bg-white"
                        placeholder="Enter your current password"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-[#000000]">
                        New Password
                      </label>
                      <input
                        type="password"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#CC9F2C] focus:border-[#CC9F2C] transition-all duration-200 bg-white"
                        placeholder="Enter your new password"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-[#000000]">
                        Confirm New Password
                      </label>
                      <input
                        type="password"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#CC9F2C] focus:border-[#CC9F2C] transition-all duration-200 bg-white"
                        placeholder="Confirm your new password"
                      />
                    </div>
                    <div className="pt-4">
                      <button className="bg-gradient-to-r from-[#CC9F2C] to-[#b8912a] hover:from-[#b8912a] hover:to-[#a8821a] text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl">
                        Update Password
                      </button>
                    </div>
                  </div>
                </div>

                {/* Two-Factor Authentication */}
                <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-8">
                  <div className="border-b border-gray-100 pb-6 mb-6">
                    <h2 className="text-2xl font-bold text-[#000000] mb-2">
                      Two-Factor Authentication
                    </h2>
                    <p className="text-[#666666]">
                      Add an extra layer of security to your account
                    </p>
                  </div>
                  <div className="flex items-center justify-between p-6 bg-gradient-to-r from-[#FAFAFA] to-white rounded-xl border border-gray-100">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#CC9F2C] to-[#b8912a] rounded-full flex items-center justify-center mr-4">
                        <span className="text-white text-xl">🔒</span>
                      </div>
                      <div>
                        <p className="text-[#000000] font-semibold text-lg">
                          Enable 2FA
                        </p>
                        <p className="text-sm text-[#666666]">
                          Secure your account with two-factor authentication
                        </p>
                      </div>
                    </div>
                    <button className="bg-gradient-to-r from-[#CC9F2C] to-[#b8912a] hover:from-[#b8912a] hover:to-[#a8821a] text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 shadow-md hover:shadow-lg">
                      Enable 2FA
                    </button>
                  </div>
                </div>

                {/* Active Sessions */}
                <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-8">
                  <div className="border-b border-gray-100 pb-6 mb-6">
                    <h2 className="text-2xl font-bold text-[#000000] mb-2">
                      Active Sessions
                    </h2>
                    <p className="text-[#666666]">
                      Monitor and manage your active login sessions
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mr-4">
                          <span className="text-white text-sm">💻</span>
                        </div>
                        <div>
                          <p className="font-semibold text-[#000000]">
                            Current Session
                          </p>
                          <p className="text-sm text-[#666666]">
                            Windows • Chrome • 192.168.1.100
                          </p>
                        </div>
                      </div>
                      <span className="text-sm text-green-600 font-semibold bg-green-100 px-3 py-1 rounded-full">
                        Active Now
                      </span>
                    </div>
                    <div className="flex items-center justify-between p-6 bg-gradient-to-r from-gray-50 to-slate-50 rounded-xl border border-gray-200">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-400 rounded-full flex items-center justify-center mr-4">
                          <span className="text-white text-sm">📱</span>
                        </div>
                        <div>
                          <p className="font-semibold text-[#000000]">
                            Mobile Device
                          </p>
                          <p className="text-sm text-[#666666]">
                            iPhone • Safari • Last seen 2 hours ago
                          </p>
                        </div>
                      </div>
                      <button className="text-sm text-red-600 hover:text-red-800 font-semibold bg-red-50 hover:bg-red-100 px-4 py-2 rounded-lg transition-all duration-200">
                        Revoke Access
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "admin" && (
              <div className="space-y-8">
                {/* User Management */}
                <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-8">
                  <div className="border-b border-gray-100 pb-6 mb-6">
                    <h2 className="text-2xl font-bold text-[#000000] mb-2">
                      User Management
                    </h2>
                    <p className="text-[#666666]">
                      Manage users, roles, and permissions
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <button className="p-6 bg-gradient-to-r from-[#CC9F2C] to-[#b8912a] hover:from-[#b8912a] hover:to-[#a8821a] text-white rounded-xl font-semibold text-left transition-all duration-200 shadow-lg hover:shadow-xl group">
                      <div className="flex items-center mb-3">
                        <span className="text-2xl mr-3 group-hover:scale-110 transition-transform duration-200">
                          👥
                        </span>
                        <span className="text-lg">Manage Users</span>
                      </div>
                      <p className="text-sm opacity-90">
                        Add, edit, or remove user accounts
                      </p>
                    </button>
                    <button className="p-6 bg-white border-2 border-[#CC9F2C] text-[#CC9F2C] hover:bg-gradient-to-r hover:from-[#CC9F2C] hover:to-[#b8912a] hover:text-white rounded-xl font-semibold text-left transition-all duration-200 group">
                      <div className="flex items-center mb-3">
                        <span className="text-2xl mr-3 group-hover:scale-110 transition-transform duration-200">
                          🔑
                        </span>
                        <span className="text-lg">Role Permissions</span>
                      </div>
                      <p className="text-sm opacity-70 group-hover:opacity-90">
                        Configure user roles and access levels
                      </p>
                    </button>
                    <button className="p-6 bg-white border-2 border-[#CC9F2C] text-[#CC9F2C] hover:bg-gradient-to-r hover:from-[#CC9F2C] hover:to-[#b8912a] hover:text-white rounded-xl font-semibold text-left transition-all duration-200 group">
                      <div className="flex items-center mb-3">
                        <span className="text-2xl mr-3 group-hover:scale-110 transition-transform duration-200">
                          📊
                        </span>
                        <span className="text-lg">Activity Logs</span>
                      </div>
                      <p className="text-sm opacity-70 group-hover:opacity-90">
                        View user activity and audit trails
                      </p>
                    </button>
                  </div>
                </div>

                {/* System Configuration */}
                <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-8">
                  <div className="border-b border-gray-100 pb-6 mb-6">
                    <h2 className="text-2xl font-bold text-[#000000] mb-2">
                      System Configuration
                    </h2>
                    <p className="text-[#666666]">
                      Configure system settings and preferences
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <button className="p-6 bg-white border-2 border-[#CC9F2C] text-[#CC9F2C] hover:bg-gradient-to-r hover:from-[#CC9F2C] hover:to-[#b8912a] hover:text-white rounded-xl font-semibold text-left transition-all duration-200 group">
                      <div className="flex items-center mb-3">
                        <span className="text-2xl mr-3 group-hover:scale-110 transition-transform duration-200">
                          ⚙️
                        </span>
                        <span className="text-lg">System Settings</span>
                      </div>
                      <p className="text-sm opacity-70 group-hover:opacity-90">
                        Configure general system preferences
                      </p>
                    </button>
                    <button className="p-6 bg-white border-2 border-[#CC9F2C] text-[#CC9F2C] hover:bg-gradient-to-r hover:from-[#CC9F2C] hover:to-[#b8912a] hover:text-white rounded-xl font-semibold text-left transition-all duration-200 group">
                      <div className="flex items-center mb-3">
                        <span className="text-2xl mr-3 group-hover:scale-110 transition-transform duration-200">
                          🔧
                        </span>
                        <span className="text-lg">Database Management</span>
                      </div>
                      <p className="text-sm opacity-70 group-hover:opacity-90">
                        Manage database connections and settings
                      </p>
                    </button>
                    <button className="p-6 bg-white border-2 border-[#CC9F2C] text-[#CC9F2C] hover:bg-gradient-to-r hover:from-[#CC9F2C] hover:to-[#b8912a] hover:text-white rounded-xl font-semibold text-left transition-all duration-200 group">
                      <div className="flex items-center mb-3">
                        <span className="text-2xl mr-3 group-hover:scale-110 transition-transform duration-200">
                          📈
                        </span>
                        <span className="text-lg">System Analytics</span>
                      </div>
                      <p className="text-sm opacity-70 group-hover:opacity-90">
                        View system performance metrics
                      </p>
                    </button>
                    <button className="p-6 bg-white border-2 border-[#CC9F2C] text-[#CC9F2C] hover:bg-gradient-to-r hover:from-[#CC9F2C] hover:to-[#b8912a] hover:text-white rounded-xl font-semibold text-left transition-all duration-200 group">
                      <div className="flex items-center mb-3">
                        <span className="text-2xl mr-3 group-hover:scale-110 transition-transform duration-200">
                          🔒
                        </span>
                        <span className="text-lg">Security Settings</span>
                      </div>
                      <p className="text-sm opacity-70 group-hover:opacity-90">
                        Configure security policies and rules
                      </p>
                    </button>
                  </div>
                </div>

                {/* Backup & Maintenance */}
                <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-8">
                  <div className="border-b border-gray-100 pb-6 mb-6">
                    <h2 className="text-2xl font-bold text-[#000000] mb-2">
                      Backup & Maintenance
                    </h2>
                    <p className="text-[#666666]">
                      Manage backups and system maintenance tasks
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <button className="p-6 bg-white border-2 border-[#CC9F2C] text-[#CC9F2C] hover:bg-gradient-to-r hover:from-[#CC9F2C] hover:to-[#b8912a] hover:text-white rounded-xl font-semibold text-left transition-all duration-200 group">
                      <div className="flex items-center mb-3">
                        <span className="text-2xl mr-3 group-hover:scale-110 transition-transform duration-200">
                          💾
                        </span>
                        <span className="text-lg">Create Backup</span>
                      </div>
                      <p className="text-sm opacity-70 group-hover:opacity-90">
                        Generate system backup files
                      </p>
                    </button>
                    <button className="p-6 bg-white border-2 border-[#CC9F2C] text-[#CC9F2C] hover:bg-gradient-to-r hover:from-[#CC9F2C] hover:to-[#b8912a] hover:text-white rounded-xl font-semibold text-left transition-all duration-200 group">
                      <div className="flex items-center mb-3">
                        <span className="text-2xl mr-3 group-hover:scale-110 transition-transform duration-200">
                          📁
                        </span>
                        <span className="text-lg">Backup History</span>
                      </div>
                      <p className="text-sm opacity-70 group-hover:opacity-90">
                        View and restore previous backups
                      </p>
                    </button>
                    <button className="p-6 bg-white border-2 border-[#CC9F2C] text-[#CC9F2C] hover:bg-gradient-to-r hover:from-[#CC9F2C] hover:to-[#b8912a] hover:text-white rounded-xl font-semibold text-left transition-all duration-200 group">
                      <div className="flex items-center mb-3">
                        <span className="text-2xl mr-3 group-hover:scale-110 transition-transform duration-200">
                          🔄
                        </span>
                        <span className="text-lg">System Updates</span>
                      </div>
                      <p className="text-sm opacity-70 group-hover:opacity-90">
                        Check for and install updates
                      </p>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default SettingsPage;
