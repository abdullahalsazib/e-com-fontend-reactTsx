import React from "react";
import { MdDashboard } from "react-icons/md";

const Sideber: React.FC<{ isSideOpen: boolean }> = ({ isSideOpen }) => {
  return (
    <>
      <div
        className={` ${
          isSideOpen ? "w-80 duration-200" : "w-24 duration-200"
        } h-screen bg-slate-50 dark:bg-[#273142] dark:text-white border-r-[1px]  border-blue-300 dark:border-blue-900`}
      >
        <div className=" text-xl flex items-center justify-center py-[23px] border-b-[1px] border-blue-300 dark:border-blue-900 gap-1 text-center uppercase">
          <MdDashboard className={` ${isSideOpen ? "block" : "hidden"}`} /> Logo
        </div>
      </div>
    </>
  );
};

export default Sideber;
