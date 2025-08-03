import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import StarsGroupLogo from "../components/ui/StarsGroupLogo";
import backgroundImage from "../assets/background.png";

const ForgetPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setIsLoading(true);
      // Simulate API call
      setTimeout(() => {
        setIsLoading(false);
        navigate("/password-reset-sent");
      }, 1500);
    }
  };

  const handleBackToLogin = () => {
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Reset Password Form - Full width on mobile */}
      <div className="flex-1 lg:flex-1 bg-[#FAFAFA] flex items-center justify-center p-4 sm:p-8">
        <div className="w-full max-w-md">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-[#000000] mb-2 font-sans">
              Stars Group IRP
            </h1>
            <p className="text-[#666666] text-sm sm:text-base">
              Enter your email and we send you a password reset link.
            </p>
          </div>

          {/* Reset Password Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-[#000000] mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 sm:py-3 border border-[#CC9F2C] rounded-xl focus:ring-2 focus:ring-[#CC9F2C] focus:border-[#CC9F2C] outline-none transition-colors text-base bg-white text-[#000000]"
                placeholder="Enter your email address"
                required
              />
            </div>

            {/* Send Request Button */}
            <button
              type="submit"
              disabled={isLoading || !email.trim()}
              className="w-full bg-[#CC9F2C] text-white py-4 sm:py-3 px-4 rounded-xl font-medium hover:bg-[#b8912a] focus:ring-2 focus:ring-[#CC9F2C] focus:ring-offset-2 transition-colors text-base disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <svg
                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Sending...
                </div>
              ) : (
                "Send request"
              )}
            </button>

            {/* Back to Login Link */}
            <div className="text-center mt-4">
              <button
                type="button"
                onClick={handleBackToLogin}
                className="text-sm text-[#CC9F2C] hover:text-[#b8912a] font-medium transition-colors"
              >
                ← Back to Login
              </button>
            </div>
          </form>

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

export default ForgetPasswordPage;
