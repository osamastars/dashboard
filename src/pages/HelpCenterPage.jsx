import React from "react";
import DashboardLayout from "../layouts/DashboardLayout";

const HelpCenterPage = () => {
  return (
    <DashboardLayout>
      <div className="min-h-full bg-gradient-to-br from-[#CC9F2C] to-[#1a1a1a] flex items-center justify-center p-6 font-sans">
        <div className="w-full max-w-2xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Stars Group Help Center
            </h1>
            <p className="text-xl text-gray-300">We're here to support you</p>
          </div>

          {/* Main Card */}
          <div className="bg-[#FAFAFA] border border-[#CC9F2C] rounded-2xl shadow-2xl p-8 md:p-12">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-[#000000] mb-6">
                Need Assistance?
              </h2>
              <p className="text-[#666666] text-lg leading-relaxed mb-8">
                If you're facing any issues or have a question, feel free to
                reach out. <br /> Our IT support team is ready to help.
              </p>

              {/* Support Button */}
              <button className="bg-[#CC9F2C] hover:bg-[#b8912a] text-white font-semibold py-4 px-8 rounded-xl text-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
                Raise a Support Ticket
              </button>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center mt-8">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Stars Group. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default HelpCenterPage;
