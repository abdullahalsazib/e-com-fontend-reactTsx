import React, { useEffect, useRef, useState } from "react";
// import { AuthContext } from "../../context/AuthContext";
import { Route, Routes, useNavigate } from "react-router-dom";
import Sideber from "./Sideber";
import { BsMenuButton } from "react-icons/bs";
import { BiSearchAlt2, BiUserCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
import { FcSettings } from "react-icons/fc";
import { CgWebsite } from "react-icons/cg";
import UpdateProfile from "../ProfileUpdate";
import Profile from "../Profile";
import { DashboardHome } from "./DashboardHome";
import Ecommearce from "../../Dashboard/D-pages/Ecommearce";
import ProductTable from "../../products/ProductTable";
import Logout from "../Log_Sign/Logout";

function Dashboard() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false); // 🔹 Toggle Search Box
  const searchRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [sideOpen, setSideOpen] = useState(true);
  // const { user } = useContext(AuthContext)!;
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Toggle the sidebar state
  const handleSideber = () => {
    setSideOpen(!sideOpen);
  };

  // Toggle Search Box
  const handleSearchToggle = () => {
    setIsSearchOpen(!isSearchOpen);
    if (!isSearchOpen) {
      setTimeout(() => searchRef.current?.focus(), 300); // Auto-focus input
    }
  };

  return (
    <>
      <div className="flex overflow-hidden">
        <Sideber sideOpen={sideOpen} handle={handleSideber} />
        <div className="w-full h-screen flex items-center justify-start flex-col">
          <div className="bg-sky-100 w-full py-4 px-7 flex items-center justify-between">
            {/* nav sideber button */}
            <div className="flex items-center justify-start gap-3">
              <IconButton icon={<BsMenuButton />} handleClick={handleSideber} />
              <IconButton
                icon={<BiSearchAlt2 />}
                handleClick={handleSearchToggle}
              />
              <IconButton
                icon={<CgWebsite />}
                handleClick={() => navigate("/")}
              />
            </div>

            {/* 🔹 Search Box Toggle */}
            {isSearchOpen && (
              <div
                ref={searchRef}
                className="absolute left-1/2 transform -translate-x-1/2 top-16 bg-white shadow-md rounded-lg flex items-center p-3 border border-gray-200 transition-all duration-300"
              >
                <input
                  type="text"
                  placeholder="Search here..."
                  className="outline-none px-2 py-1 border border-gray-300 rounded-md w-72"
                />
                <button
                  className="ml-2 text-red-500 hover:text-red-700"
                  onClick={() => setIsSearchOpen(false)}
                >
                  ✖
                </button>
              </div>
            )}

            {/* nav top profile */}
            <div className="relative" ref={dropdownRef}>
              <IconButton
                handleClick={() => setIsDropdownOpen(!isDropdownOpen)}
                icon={<BiUserCircle />}
              />
              {isDropdownOpen && (
                <div className="absolute right-0 top-14 w-48 bg-white shadow-lg rounded-lg py-2 transition-all duration-300 border border-slate-200">
                  <Link
                    to="#"
                    className=" px-4 py-2 hover:bg-gray-100 flex items-center justify-start gap-3"
                  >
                    <FcSettings /> Setting
                  </Link>
                  {/* <Link
                    to="/dashboard/update" // Change this to the path you want for profile edit
                    className=" px-4 py-2 hover:bg-gray-100 flex items-center justify-start gap-3"
                  >
                    <CgEditExposure /> Edit Profile
                  </Link> */}
                  <Logout />
                </div>
              )}
            </div>
          </div>

          {/* content */}
          <div className=" w-full min-h-full flex items-center justify-center">
            <div className="w-full  ">
              <Routes>
                {/* Home Route */}
                <Route path="/" element={<DashboardHome />} />
                {/* Home Route */}
                <Route path="/profile" element={<Profile />} />
                {/* Update Profile Route */}
                <Route path="ecommearce" element={<Ecommearce />} />
                <Route path="update" element={<UpdateProfile />} />
                <Route path="category" element={<ProductTable />} />
                {/* Add new routes here */}
                {/* Example: Add Route for 'Settings' */}
                <Route path="settings" element={<h1>Settings Page</h1>} />
                {/* Example: Add Route for 'Orders' */}
                <Route path="orders" element={<h1>Orders Page</h1>} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;

interface IconButtonProps {
  icon: React.ReactNode;
  handleClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const IconButton: React.FC<IconButtonProps> = ({ icon, handleClick }) => {
  return (
    <div
      onClick={handleClick}
      className="text-2xl text-blue-500 bg-slate-50 shadow-md hover:bg-slate-100 hover:text-slate-600 duration-200 cursor-pointer p-1.5 rounded-full"
    >
      {icon}
    </div>
  );
};
