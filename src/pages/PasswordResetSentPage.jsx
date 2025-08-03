import React from "react";
import { useNavigate } from "react-router-dom";
import StarsGroupLogo from "../components/ui/StarsGroupLogo";
import backgroundImage from "../assets/background.png";

const PasswordResetSentPage = () => {
  const navigate = useNavigate();

  const handleBackToLogin = () => {
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Confirmation Message - Full width on mobile */}
      <div className="flex-1 lg:flex-1 bg-[#FAFAFA] flex items-center justify-center p-4 sm:p-8">
        <div className="w-full max-w-md">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-[#000000] mb-2 font-sans">
              Stars Group IRP
            </h1>
          </div>

          {/* Success Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <svg
                className="w-8 h-8 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>

          {/* Confirmation Message */}
          <div className="text-center space-y-4 mb-8">
            <p className="text-[#666666] text-sm sm:text-base leading-relaxed">
              Thanks! Please check your email for a link to reset your password
            </p>
          </div>

          {/* Actions */}
          <div className="space-y-6">
            <button
              onClick={handleBackToLogin}
              className="w-full bg-[#CC9F2C] text-white py-4 sm:py-3 px-4 rounded-xl font-medium hover:bg-[#b8912a] focus:ring-2 focus:ring-[#CC9F2C] focus:ring-offset-2 transition-colors text-base"
            >
              Back to Login
            </button>

            <div className="text-center">
              <p className="text-sm text-[#666666]">
                Didn't receive the email?{" "}
                <button
                  onClick={() => navigate("/forget-password")}
                  className="text-[#CC9F2C] hover:text-[#b8912a] font-medium transition-colors"
                >
                  Try again
                </button>
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-8 text-center">
            <p className="text-xs text-[#666666]">
              © {new Date().getFullYear()} Stars Group. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Logo and Background - Hidden on mobile */}
      <div
        className="hidden lg:flex flex-1 relative overflow-hidden"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Optional overlay for better logo visibility if needed */}
        <div className="absolute inset-0 bg-black/10"></div>

        {/* Logo positioned in top-center area, moved down a little */}
        <div className="absolute top-50 left-1/2 transform -translate-x-1/2 z-10">
          <StarsGroupLogo className="w-[36rem]" />
        </div>
      </div>
    </div>
  );
};

export default PasswordResetSentPage;
