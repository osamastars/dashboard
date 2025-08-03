import React from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: "📊",
      title: "Advanced Analytics",
      description:
        "Get comprehensive insights into your team's performance with detailed reports and real-time analytics.",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: "🎯",
      title: "Goal Management",
      description:
        "Set, track, and achieve your team goals with our intelligent goal management system.",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: "👥",
      title: "Team Collaboration",
      description:
        "Foster better collaboration and communication within your team with integrated tools.",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: "⚙️",
      title: "Customizable Settings",
      description:
        "Tailor the platform to your needs with extensive customization options and user preferences.",
      color: "bg-orange-100 text-orange-600",
    },
    {
      icon: "📈",
      title: "Performance Tracking",
      description:
        "Monitor individual and team performance with detailed metrics and progress indicators.",
      color: "bg-indigo-100 text-indigo-600",
    },
    {
      icon: "🔒",
      title: "Secure & Reliable",
      description:
        "Enterprise-grade security ensures your data is protected with 99.9% uptime guarantee.",
      color: "bg-red-100 text-red-600",
    },
  ];

  const quickLinks = [
    {
      title: "Start with Dashboard",
      description: "View your team's current status and key metrics",
      action: () => navigate("/dashboard"),
      icon: "📊",
      color: "bg-[#CC9F2C]",
    },
    {
      title: "Manage Team Performance",
      description: "Set goals and track your team's progress",
      action: () => navigate("/team-performance"),
      icon: "🎯",
      color: "bg-blue-500",
    },
    {
      title: "Generate Reports",
      description: "Create detailed analytics and performance reports",
      action: () => navigate("/reports"),
      icon: "📋",
      color: "bg-green-500",
    },
    {
      title: "Configure Settings",
      description: "Customize your workspace and preferences",
      action: () => navigate("/settings"),
      icon: "⚙️",
      color: "bg-purple-500",
    },
  ];

  return (
    <DashboardLayout>
      <div className="min-h-full bg-[#FAFAFA] font-sans">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-[#CC9F2C] to-[#1a1a1a] text-white py-16 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Welcome to Stars Group
              <span className="block text-2xl md:text-3xl font-normal mt-2 text-gray-200">
                Internal Dashboard System
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
              Streamline your team's performance management with our
              comprehensive internal dashboard solution designed specifically
              for Stars Group.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate("/dashboard")}
                className="bg-white text-[#CC9F2C] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors duration-200 shadow-lg"
              >
                Get Started
              </button>
              <button
                onClick={() => navigate("/help")}
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-[#CC9F2C] transition-colors duration-200"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#000000] mb-6">
                What is the Stars Group Dashboard?
              </h2>
              <p className="text-lg text-[#666666] max-w-4xl mx-auto leading-relaxed">
                Our internal dashboard system is a comprehensive platform
                designed to help Stars Group teams manage performance, track
                goals, generate reports, and collaborate effectively. Built with
                modern technology and user-centric design, it provides
                everything you need to optimize your team's productivity and
                success.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-[#FAFAFA] border border-[#CC9F2C] rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-200"
                >
                  <div
                    className={`w-16 h-16 ${feature.color} rounded-xl flex items-center justify-center text-2xl mb-4`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-[#000000] mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-[#666666] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* How It Works Section */}
        <div className="bg-white py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#000000] mb-6">
                How It Works
              </h2>
              <p className="text-lg text-[#666666] max-w-3xl mx-auto">
                Get up and running in minutes with our intuitive three-step
                process
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-[#CC9F2C] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                  1
                </div>
                <h3 className="text-xl font-semibold text-[#000000] mb-4">
                  Access Your Dashboard
                </h3>
                <p className="text-[#666666]">
                  Log in with your Stars Group credentials to access your
                  personalized dashboard with real-time data and insights.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-[#4A90E2] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                  2
                </div>
                <h3 className="text-xl font-semibold text-[#000000] mb-4">
                  Set Goals & Track Progress
                </h3>
                <p className="text-[#666666]">
                  Define your team goals, assign tasks, and monitor progress
                  with our comprehensive tracking system.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-[#7ED321] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                  3
                </div>
                <h3 className="text-xl font-semibold text-[#000000] mb-4">
                  Analyze & Optimize
                </h3>
                <p className="text-[#666666]">
                  Generate detailed reports, analyze performance metrics, and
                  make data-driven decisions for continuous improvement.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions Section */}
        <div className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#000000] mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-[#666666]">
                Choose where you'd like to begin your journey
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={link.action}
                  className="bg-[#FAFAFA] border border-[#CC9F2C] rounded-xl p-6 hover:shadow-lg transition-all duration-200 hover:border-[#b8912a] group text-left"
                >
                  <div
                    className={`w-12 h-12 ${link.color} rounded-lg flex items-center justify-center text-white text-xl mb-4 group-hover:scale-110 transition-transform duration-200`}
                  >
                    {link.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-[#000000] mb-2">
                    {link.title}
                  </h3>
                  <p className="text-sm text-[#666666]">{link.description}</p>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-[#CC9F2C] to-[#b8912a] text-white py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Trusted by Stars Group Teams
              </h2>
              <p className="text-xl text-gray-200">
                Empowering teams across the organization
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">150+</div>
                <div className="text-gray-200">Active Users</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-gray-200">Goals Completed</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">98%</div>
                <div className="text-gray-200">Uptime</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="text-gray-200">Support</div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-[#000000] text-white py-12 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-[#CC9F2C] mb-4">
                Stars Group Internal Dashboard
              </h3>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Streamlining performance management and team collaboration for a
                more productive and successful Stars Group.
              </p>
            </div>

            <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-8">
              <button
                onClick={() => navigate("/help")}
                className="text-[#CC9F2C] hover:text-white transition-colors duration-200"
              >
                Help Center
              </button>
              <span className="text-gray-600 hidden md:block">|</span>
              <button
                onClick={() => navigate("/settings")}
                className="text-[#CC9F2C] hover:text-white transition-colors duration-200"
              >
                Settings
              </button>
              <span className="text-gray-600 hidden md:block">|</span>
              <span className="text-gray-400">
                Contact: support@starsgroup.com
              </span>
            </div>

            <div className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Stars Group. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default HomePage;
