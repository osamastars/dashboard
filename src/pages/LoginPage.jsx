import { useState } from "react";
import { useNavigate } from "react-router-dom";
import StarsGroupLogo from "../components/ui/StarsGroupLogo";
import backgroundImage from "../assets/background.png";

const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    rememberMe: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login submitted:", formData);

    // Simple navigation to home (no real authentication)
    if (formData.username && formData.password) {
      navigate("/home");
    } else {
      alert("Please enter username and password");
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Login Form - Full width on mobile */}
      <div className="flex-1 lg:flex-1 bg-[#FAFAFA] flex items-center justify-center p-4 sm:p-8">
        <div className="w-full max-w-md">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-[#000000] mb-2 font-sans">
              Stars Group IRP
            </h1>
            <p className="text-[#666666] text-sm sm:text-base">
              Welcome back! Please login to your account.
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Username Field */}
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-[#000000] mb-2"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                className="w-full px-4 py-3 sm:py-3 border border-[#CC9F2C] rounded-xl focus:ring-2 focus:ring-[#CC9F2C] focus:border-[#CC9F2C] outline-none transition-colors text-base bg-white text-[#000000]"
                placeholder="Enter your username"
                required
              />
            </div>

            {/* Password Field */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-[#000000] mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full px-4 py-3 sm:py-3 border border-[#CC9F2C] rounded-xl focus:ring-2 focus:ring-[#CC9F2C] focus:border-[#CC9F2C] outline-none transition-colors text-base bg-white text-[#000000]"
                placeholder="Enter your password"
                required
              />
            </div>

            {/* Remember Me and Forgot Password */}
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between space-y-3 sm:space-y-0">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="rememberMe"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleInputChange}
                  className="h-4 w-4 text-[#CC9F2C] focus:ring-[#CC9F2C] border-gray-300 rounded"
                />
                <label
                  htmlFor="rememberMe"
                  className="ml-2 block text-sm text-[#000000]"
                >
                  Remember me
                </label>
              </div>
              <div className="text-center sm:text-right">
                <button
                  type="button"
                  onClick={() => navigate("/forget-password")}
                  className="text-sm text-[#CC9F2C] hover:text-[#b8912a] font-medium transition-colors"
                >
                  Forgot Password
                </button>
              </div>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-[#CC9F2C] text-white py-4 sm:py-3 px-4 rounded-xl font-medium hover:bg-[#b8912a] focus:ring-2 focus:ring-[#CC9F2C] focus:ring-offset-2 transition-colors text-base"
            >
              Login
            </button>
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

export default LoginPage;
