import React from "react";
import { BiCopyright } from "react-icons/bi";

export const LineFooter = () => {
  return (
    <div className=" w-full bg-white ">
      <h1 className="text-center text-sm flex items-center justify-center py-4 px-0 gap-3 text-gray-500">
        Copyright <BiCopyright /> 2025. Design with 💓 by Abdullah Al Sazib
      </h1>
    </div>
  );
};

export default LineFooter;
