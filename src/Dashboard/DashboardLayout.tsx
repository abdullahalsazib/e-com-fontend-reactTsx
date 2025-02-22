import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sideber";
import Navbar from "./D-pages/Navber";

const DashboardLayout = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="flex">
      <Sidebar isOpen={isOpen} />
      <div className="flex-1 p-4">
        <h1>hello</h1>
        <Navbar onToggleSidebar={() => setIsOpen(!isOpen)} />
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
