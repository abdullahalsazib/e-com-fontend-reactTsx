import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sideber";
import Navbar from "./D-pages/Navber";

const DashboardLayout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-4">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
