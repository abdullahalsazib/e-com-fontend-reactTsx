/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect, useRef } from "react";
import Sideber from "./Sideber";
import { BsMenuButton } from "react-icons/bs";
import { BiLogOut, BiMessageAdd, BiSearch } from "react-icons/bi";
import { FaArrowRightLong, FaUser } from "react-icons/fa6";
import { MdMailOutline } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CgClose } from "react-icons/cg";
import { FiSettings } from "react-icons/fi";
import { userDropDown } from "./DashboardData";

const Dashboard = () => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [openSide, setOpenSide] = useState(false);
  const [isUser, setIsUser] = useState<boolean>(false);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark" ||
      (!localStorage.getItem("theme") &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
  );

  const [notificationCount, setNotificationCount] = useState(5); // Example count
  const [newProfile, setNewProfile] = useState(true); // Example "new" text badge

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsUser(false); // Close the user dropdown if clicked outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full h-screen flex flex-row">
      <Sideber isSideOpen={openSide} />
      <main className="w-full bg-gray-50 dark:bg-slate-900 dark:text-white h-screen transition-all duration-300">
        {/* Navbar */}
        <nav className="w-full py-4 bg-white dark:bg-slate-900 border-b border-blue-300 dark:border-blue-900 px-5 flex items-center justify-between">
          <div className="flex items-center gap-4">
            {/* Sidebar Toggle Button */}
            <button
              onClick={() => setOpenSide(!openSide)}
              className="cursor-pointer text-slate-500 hover:text-slate-700 dark:hover:text-gray-300 active:scale-110 transition-transform"
            >
              {openSide ? (
                <BsMenuButton className="text-3xl" />
              ) : (
                <FaArrowRightLong className="text-3xl" />
              )}
            </button>

            {/* Search Input */}
            <div className="relative w-72">
              <BiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 peer-focus:text-blue-500 dark:peer-focus:text-white transition-all" />
              <input
                type="text"
                placeholder="Search..."
                className="peer w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white focus:border-blue-500 dark:focus:border-blue-400 focus:outline-none transition-all"
              />
            </div>
          </div>

          {/* Right Side Buttons */}
          <div className="flex items-center gap-5 relative" ref={dropdownRef}>
            <NavBtnIcon
              content={
                <img src="https://wowdash.wowtheme7.com/demo/assets/images/lang-flag.png" />
              }
            />
            <NavBtnIcon
              content={
                <div className="relative">
                  <MdMailOutline />
                  {/* Badge for new messages */}
                  {notificationCount > 0 && (
                    <span className="absolute -top-3 -right-3 bg-red-500 text-white text-xs rounded-full px-2 py-1">
                      {notificationCount}
                    </span>
                  )}
                </div>
              }
            />
            <NavBtnIcon
              content={
                <div className="relative">
                  <IoIosNotificationsOutline />
                  {/* Badge for new notifications */}
                  {notificationCount > 0 && (
                    <span className="absolute -top-3 -right-3 bg-red-500 text-white text-xs rounded-full px-2 py-1">
                      {notificationCount}
                    </span>
                  )}
                </div>
              }
            />
            <NavBtnIcon
              className="p-0!"
              handleFunc={() => setIsUser(!isUser)} // Toggle user profile dropdown
              content={
                <div className="relative">
                  <img src="https://wowdash.wowtheme7.com/demo/assets/images/user.png" />
                  {/* New Profile Badge */}
                  {newProfile && (
                    <span className="absolute -top-3 -right-3 bg-green-500 text-white text-xs rounded-full px-2 py-1">
                      New
                    </span>
                  )}
                </div>
              }
            />
            {isUser && (
              <div className="absolute right-3 top-15 rounded-md p-3 w-[300px] bg-white dark:bg-slate-900 shadow-xl border-[1px] border-slate-200 dark:border-blue-950 animate-border flex flex-col gap-3">
                <div className="flex items-center justify-between bg-slate-200 rounded-lg text-black p-4 dark:bg-slate-800 dark:text-slate-50 group cursor-pointer dark:group-hover:bg-slate-800 transition-all">
                  <div className="space-y-2">
                    <h1 className="text-2xl uppercase">John Deo</h1>
                    <p className="text-sm text-gray-500">Admin</p>
                  </div>
                  <NavBtnIcon
                    handleFunc={() => setIsUser(false)}
                    content={<CgClose />}
                    className="text-black group-hover:text-red-500 transition-colors duration-300 dark:text-slate-50 dark:group-hover:text-red-500"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  {userDropDown.map((item, index) => (
                    <DropdownBtns
                      key={index}
                      Icon={item.Icon}
                      Title={item.Title}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </nav>
      </main>
    </div>
  );
};

export default Dashboard;

const NavBtnIcon: React.FC<{
  content: React.ReactNode;
  className?: string;
  handleFunc?: () => void;
}> = ({ content, className, handleFunc }) => {
  return (
    <button
      onClick={handleFunc}
      className={`text-2xl cursor-pointer bg-blue-50 p-2 rounded-full hover:bg-blue-100 dark:bg-gray-700 dark:hover:bg-gray-600 text-slate-500 dark:text-white transition-all ${className}`}
    >
      {content}
    </button>
  );
};

const DropdownBtns: React.FC<{ Icon: React.ReactNode; Title: string }> = ({
  Icon,
  Title,
}) => {
  return (
    <>
      <button className=" capitalize  dark:bg-slate-800 gorup dark:hover:bg-slate-950 hover:bg-slate-300 w-full  py-3 px-5 rounded-lg cursor-pointer  transition-all duration-200 active:scale-105 bg-slate-200">
        <h1 className=" flex items-center justify-start gap-5 transition-all duration-200 text-sm">
          {Icon} {Title}
        </h1>
      </button>
    </>
  );
};
