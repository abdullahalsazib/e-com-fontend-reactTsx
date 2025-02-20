// Dashboard.tsx
import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./D-pages/Navber";
import Orders from "./D-pages/Order";
import Customers from "./D-pages/Customer";
import Settings from "./D-pages/Setting";
import DashboardHome from "./D-pages/DashboardHome";
import Loader from "../components/Loader"; // Assuming you already have the Loader component
import Sidebar from "./Sideber";

const Dashboard = () => {
  const location = useLocation();
  const [loading, setLoading] = useState<boolean>(false);

  // This will show the loader when navigating to any route within /dashboard
  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 500); // Simulate a delay (replace with actual loading logic)
    return () => clearTimeout(timeout);
  }, [location.pathname]); // Trigger the loader whenever the route changes within the dashboard

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-4">
        <Navbar />
        {loading ? (
          <Loader /> // Show loader while navigating between dashboard routes
        ) : (
          <Routes>
            <Route path="/" element={<DashboardHome />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
