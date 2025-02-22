import React from "react";
import { FaJediOrder } from "react-icons/fa";
import { FcCustomerSupport } from "react-icons/fc";
import { IoSettings } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";
import { RiDashboard2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

const DashboardRoute = [
  { title: "Dashboard", hrefLink: "/dashboard", icon: <MdDashboard /> },
  { title: "Orders", hrefLink: "/dashboard/orders", icon: <FaJediOrder /> },
  {
    title: "E-commearce",
    hrefLink: "/dashboard/ecommerce",
    icon: <FaJediOrder />,
  },
  {
    title: "Customers",
    hrefLink: "/dashboard/customers",
    icon: <FcCustomerSupport />,
  },
  { title: "Settings", hrefLink: "/dashboard/settings", icon: <IoSettings /> },
];

const Sidebar: React.FC<{ isOpen: boolean }> = ({ isOpen }) => {
  return (
    <div
      className={`bg-gray-800 text-white flex flex-col items-center justify-between h-screen transition-all duration-300 ${
        isOpen ? "w-64" : "w-20"
      }`}
    >
      <div>
        <h2 className="text-xl font-semibold py-5 gap-3 flex items-center justify-center px-3">
          {isOpen ? (
            <>
              <RiDashboard2Fill className="text-5xl" /> Admin Dashboard
            </>
          ) : (
            <RiDashboard2Fill className="text-5xl" />
          )}
        </h2>
        <ul
          className={`w-full space-y-1 flex mt-5 flex-col self-start ${
            isOpen
              ? "items-start justify-start px-3"
              : " items-center justify-start px-0"
          }`}
        >
          {DashboardRoute.map((item, index) => (
            <li key={index} className=" w-full">
              <Link
                to={item.hrefLink}
                className={` bg-slate-800  hover:bg-gray-700 rounded flex items-center gap-3 ${
                  !isOpen
                    ? "justify-center py-2 mx-3 text-2xl"
                    : "justify-start py-2 px-4"
                }`}
              >
                {!isOpen ? (
                  <>{item.icon}</>
                ) : (
                  <>
                    {item.icon} {item.title}
                  </>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className=" w-full h-[100px] flex items-center justify-center gap-3">
        <div
          className={` cursor-pointer bg-slate-700 w-full flex  gap-4 rounded-md ${
            !isOpen
              ? " p-3 mx-1 items-center justify-center "
              : "mx-3 items-center justify-start py-2 px-3"
          }`}
        >
          <img
            className="w-10 h-10 object-cover rounded-full"
            src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRMa5yk--wdax46eQ4O72XMmO6x7WvEht-bczMtyO1g_gXdMYXLY8NUwxVt1NFQRtKcK8WbbNn4GDjyFc8LP7YPrQ"
            alt=""
          />
          <div className={!isOpen ? "hidden" : "block"}>
            <h1>Jhon Deo</h1>
            <p className=" text-slate-400 text-xs">Admin</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
