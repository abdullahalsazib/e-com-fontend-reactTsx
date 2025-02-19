// src/Pages/Dashboard/DashboardHome.tsx
import React from "react";
import { PiArrowLineRightFill } from "react-icons/pi";
import LineFooter from "./LineFooter";
// import { AuthContext } from "../../context/AuthContext";

export const DashboardHome: React.FC = () => {
  //   const { user } = useContext(AuthContext)!;
  return (
    <>
      <div className=" w-full h-screen bg-gray-100 overflow-y-scroll py-6 px-3 pb-20">
        <div className=" w-full h-screen">
          <div className="w-full grid grid-cols-2 gap-4">
            {/* box */}
            <div className="bg-gradient-to-tl from-sky-400 to-blue-900 py-7 px-5 rounded-2xl">
              <div className="flex items-start justify-start flex-col gap-5 w-[70%]">
                <h3 className=" font-semibold text-3xl text-white">
                  Great! Your goal is almost complete
                </h3>
                <p className="text-sm font-light text-gray-200 font-mono">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
                  blanditiis? Lorem, ipsum dolor sit amet consectetur
                  adipisicing elit. Ducimus, laudantium.
                </p>
                <a
                  href="#"
                  className="flex items-center justify-center gap-3 text-sm py-3 hover:text-slate-300 duration-200 text-white"
                >
                  View deteil <PiArrowLineRightFill />
                </a>
              </div>
            </div>
            <CardBoxChart className="bg-gradient-to-l from-violet-600 to-lime-500" />
            <CardBoxChart className="bg-gradient-to-t from-blue-900 to-slate-400" />
            <CardBoxChart className="bg-gradient-to-tl from-green-200 to-slate-800" />
          </div>
        </div>
        <LineFooter />
      </div>
    </>
  );
};

const CardBoxChart: React.FC<{
  className: string;
}> = ({ className }) => {
  return (
    <>
      <div className={`${className} py-7 px-5 rounded-2xl`}>
        <div className="flex items-start justify-start flex-col gap-5 w-[70%]">
          <h3 className=" font-semibold text-3xl text-white">
            Great! Your goal is almost complete
          </h3>
          <p className="text-sm font-light text-gray-200 font-mono">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
            blanditiis? Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Ducimus, laudantium.
          </p>
          <a
            href="#"
            className="flex items-center justify-center gap-3 text-sm py-3 hover:text-slate-300 duration-200 text-white"
          >
            View deteil <PiArrowLineRightFill />
          </a>
        </div>
      </div>
    </>
  );
};
