import React from "react";
import { GrDashboard } from "react-icons/gr";
import { FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoCloudyNight } from "react-icons/io5";
import { BsShop } from "react-icons/bs";
import { BiBorderAll, BiSolidCategory } from "react-icons/bi";
import Logout from "../Log_Sign/Logout";

interface SidebarProps {
  sideOpen: boolean;
  handle: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ sideOpen }) => {
  const SideBerNav = [
    { To: "/dashboard", Icon: <GrDashboard />, Label: "Dashboard" },
    { To: "/dashboard/ecommearce", Icon: <BsShop />, Label: "Ecommerce" },
    { To: "/dashboard/category", Icon: <BiSolidCategory />, Label: "Category" },
    { To: "/order", Icon: <BiBorderAll />, Label: "Order" },
    { To: "/dashboard/profile", Icon: <FaUsers />, Label: "User" },
  ];
  return (
    <div
      className={`transition-all duration-300 h-screen bg-indigo-600 text-white flex flex-col py-5 px-3 ${
        sideOpen ? "w-64" : "w-20"
      }`}
    >
      {/* Logo */}
      <div className="flex items-center justify-between px-3 gap-4 mb-8">
        <IoCloudyNight className="text-4xl" />
        {sideOpen && <h1 className="text-2xl font-bold">E-Shop</h1>}
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-col gap-4">
        {SideBerNav.map((item, index) => (
          <SidebarItem
            key={index}
            icon={item.Icon}
            to={item.To}
            label={item.Label}
            sideOpen={sideOpen}
          />
        ))}
      </nav>

      {/* Spacer */}
      <div className="flex-grow"></div>

      {/* Logout Button */}
      <div className="mt-auto">
        <Logout />
      </div>
    </div>
  );
};

// Reusable Sidebar Item Component
interface SidebarItemProps {
  sideOpen: boolean;
  to: string;
  icon: React.ReactNode;
  label: string;
}
const SidebarItem: React.FC<SidebarItemProps> = (props) => (
  <Link
    to={props.to}
    className={`flex items-center ${
      !props.sideOpen ? "justify-center" : "justify-start"
    } gap-3 text-lg px-3 py-2 hover:bg-indigo-800 rounded-md transition-all`}
  >
    <span className="text-2xl">{props.icon}</span>
    {props.sideOpen && <span>{props.label}</span>}
  </Link>
);

export default Sidebar;
