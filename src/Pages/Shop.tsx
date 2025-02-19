import { BsMenuApp, BsMenuButton } from "react-icons/bs";
import { CgFilters } from "react-icons/cg";
import ProductList from "./ProductList";
import { Footer } from "./Footer";
import { FaAngleRight } from "react-icons/fa";
import React from "react";
import { TastMoinalObj } from "../data/data";
import { Link } from "react-router-dom";

const Shop = () => {
  return (
    <>
      <div className="w-full h-auto pt-19 ">
        {/* common header */}
        <CommonHeader title="Shop" />
        {/* filler */}
        <div className=" flex items-center justify-between flex-row bg-[#F9F1E7] py-5 px-[10%]">
          {/* shopNav */}
          <div className="flex items-center justify-center gap-15 capitalize text-xl">
            {/* sec1 */}
            <div className=" flex items-center justify-center gap-1">
              <CgFilters />
              <p>Filter</p>
            </div>
            <div className=" flex items-center justify-center gap-3">
              <BsMenuApp />
              <BsMenuButton />
            </div>
            <p className=" text-2xl font-extrabold text-slate-400">|</p>
            <div>
              <p>showing 1-16 of 32 results</p>
            </div>
          </div>
          {/* sec2 */}
          <div className="flex items-center justify-center gap-15">
            <div className="flex items-center justify-center gap-3 capitalize">
              show <div className=" p-4 bg-white text-gray-700  ">16</div>
            </div>
            <div className="flex items-center justify-center gap-3 capitalize">
              short by{" "}
              <div className=" p-4 bg-white text-gray-700">default</div>
            </div>
          </div>
        </div>
        <div className=" py-5 px-[10%]">
          <ProductList />
        </div>
        <div className=" flex items-center justify-between flex-row bg-[#F9F1E7] py-15 px-[10%]">
          {TastMoinalObj.map((item, index) => (
            <TastMonialCart
              key={index}
              h1Title={item.title}
              pTitle={item.pTitle}
              icons={item.icons}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Shop;

interface TastMonialCartProps {
  icons: React.ReactNode;
  h1Title: string;
  pTitle: string;
}
export const TastMonialCart: React.FC<TastMonialCartProps> = ({
  h1Title,
  icons,
  pTitle,
}) => {
  return (
    <>
      <div className=" flex items-center justify-center gap-3">
        <div className=" text-[70px]">{icons}</div>
        <div>
          <h1 className=" text-2xl">{h1Title}</h1>
          <p className=" text-sm text-slate-500">{pTitle}</p>
        </div>
      </div>
    </>
  );
};

interface CommonHeaderProps {
  title: string;
}
export const CommonHeader: React.FC<CommonHeaderProps> = ({ title }) => {
  return (
    <>
      {" "}
      <div className=" py-30  w-full bg-[url(/src/Images/background_home.png)] bg-center bg-cover  relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/0 via-transparent to-amber-900/30 z-10"></div>

        <div className=" text-center flex items-center justify-center flex-col">
          <img
            className=""
            src="https://wpocean.com/html/tf/pengu/assets/images/logo.svg"
            alt="Logo"
          />
          <div className=" z-40">
            <h1 className=" text-[72px] font-bold uppercase"> {title} </h1>
            <div className=" flex items-center justify-center gap-2 text-md text-gray-900 z-50">
              <Link to={"/"} className=" peer/link hover:text-slate-700 py-3 ">
                Home
              </Link>
              <FaAngleRight className=" peer-hover/link:scale-225 peer-hover/link:translate-x-60 duration-500" />{" "}
              <p className=" text-sm text-slate-500 peer-hover/link:translate-x-20 duration-500">
                {title}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
