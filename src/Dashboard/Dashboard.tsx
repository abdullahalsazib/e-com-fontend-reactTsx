// Dashboard.tsx
import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./D-pages/Navber";
import Customers from "./D-pages/Customer";
import Settings from "./D-pages/Setting";
import DashboardHome from "./D-pages/DashboardHome";
import Loader from "../components/Loader"; // Assuming you already have the Loader component
import Sidebar from "./Sideber";
import Ecommearce from "./D-pages/Ecommearce";
import Profile from "./D-pages/Profile";
import ProductTable from "../products/ProductTable";

const Dashboard = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  // This will show the loader when navigating to any route within /dashboard
  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 500); // Simulate a delay (replace with actual loading logic)
    return () => clearTimeout(timeout);
  }, [location.pathname]); // Trigger the loader whenever the route changes within the dashboard

  return (
    <div className="flex fixed w-full">
      <Sidebar isOpen={isOpen} />
      <div className="flex-1">
        <Navbar onToggleSidebar={() => setIsOpen(!isOpen)} />
        <div className="">
          {loading ? (
            <Loader /> // Show loader while navigating between dashboard routes
          ) : (
            <Routes>
              <Route path="/" element={<DashboardHome />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/ecommerce" element={<Ecommearce />} />

              <Route path="/category" element={<ProductTable />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
