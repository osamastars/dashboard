import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import ForgetPasswordPage from "./pages/ForgetPasswordPage";
import PasswordResetSentPage from "./pages/PasswordResetSentPage";
import HomePage from "./pages/HomePage";
import DashboardPageRefactored from "./pages/DashboardPage";
import ReportsPage from "./pages/ReportsPage";
import TeamPerformancePage from "./pages/TeamPerformancePage";
import HelpCenterPage from "./pages/HelpCenterPage";
import SettingsPage from "./pages/SettingsPage";
import DataTestPage from "./pages/DataTestPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <Router>
      <Routes>
        {/* Login Routes */}
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />

        {/* Password Reset Routes */}
        <Route path="/forget-password" element={<ForgetPasswordPage />} />
        <Route
          path="/password-reset-sent"
          element={<PasswordResetSentPage />}
        />

        {/* Home Route */}
        <Route path="/home" element={<HomePage />} />

        {/* Dashboard Route */}
        <Route path="/dashboard" element={<DashboardPageRefactored />} />

        {/* Reports Route */}
        <Route path="/reports" element={<ReportsPage />} />

        {/* Team Performance Route */}
        <Route path="/team-performance" element={<TeamPerformancePage />} />

        {/* Help Center Route */}
        <Route path="/help" element={<HelpCenterPage />} />

        {/* Settings Route */}
        <Route path="/settings" element={<SettingsPage />} />

        {/* Data Test Route */}
        <Route path="/data-test" element={<DataTestPage />} />

        {/* 404 Page */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
