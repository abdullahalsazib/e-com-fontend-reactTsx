import React from "react";
import { BiTrendingUp } from "react-icons/bi";
import { CgShoppingCart } from "react-icons/cg";
import { FaDollarSign } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import Home from "./Home";

const DashboardHome: React.FC = () => {
  return (
    <div className=" p-3 bg-slate-500 h-screen w-full">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow flex items-center space-x-4">
          <FaDollarSign size={32} className="text-green-500" />
          <div>
            <p className="text-gray-500">Total Revenue</p>
            <h2 className="text-2xl font-bold">$12,345</h2>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow flex items-center space-x-4">
          <FiUsers size={32} className="text-blue-500" />
          <div>
            <p className="text-gray-500">Total Users</p>
            <h2 className="text-2xl font-bold">5,432</h2>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow flex items-center space-x-4">
          <CgShoppingCart size={32} className="text-purple-500" />
          <div>
            <p className="text-gray-500">Total Orders</p>
            <h2 className="text-2xl font-bold">2,345</h2>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow flex items-center space-x-4">
          <BiTrendingUp size={32} className="text-yellow-500" />
          <div>
            <p className="text-gray-500">Growth</p>
            <h2 className="text-2xl font-bold">+23%</h2>
          </div>
        </div>
      </div>

      {/* Placeholder for Charts or More Content */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow">
        <h2 className="text-lg font-bold">Analytics Overview</h2>
        <p className="text-gray-500 mt-2">Charts and graphs will be here.</p>
      </div>
    </div>
  );
};

export default DashboardHome;
