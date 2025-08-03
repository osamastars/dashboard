import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#FAFAFA] flex flex-col justify-center items-center px-4 font-sans">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-[#000000] mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-[#000000] mb-4">
          Page Not Found
        </h2>
        <p className="text-[#666666] mb-8 max-w-md">
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>

        <div className="space-x-4">
          <button
            onClick={() => navigate("/login")}
            className="bg-[#CC9F2C] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#b8912a] transition-colors"
          >
            Go to Login
          </button>
          <button
            onClick={() => navigate("/dashboard")}
            className="bg-[#F5F5F5] border border-[#CC9F2C] text-[#000000] px-6 py-3 rounded-xl font-medium hover:bg-[#e5e5e5] transition-colors"
          >
            Go to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
