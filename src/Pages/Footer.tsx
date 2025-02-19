import { Link } from "react-router-dom";
import { helpOption, navLinks } from "../data/NavData";
import { RxButton } from "react-icons/rx";
import LineFooter from "./Dashboard/LineFooter";

export const Footer = () => {
  return (
    <>
      <div className="flex items-start justify-between px-[10%] py-10 border-t-[1px] border-gray-300 ">
        <div className=" flex items-start h-full justify-around flex-col">
          <Link to="/">
            <img
              className="w-35"
              src="https://wpocean.com/html/tf/pengu/assets/images/logo.svg"
              alt="Logo"
            />
          </Link>
          <p className=" text-sm text-slate-500 ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            quidem ratione deserunt.
          </p>
        </div>
        <div className=" capitalize">
          <h1 className=" text-slate-500 pb-5">link</h1>
          <ul className=" flex items-start justify-center flex-col gap-10">
            {navLinks.map((item, index) => (
              <li key={index}>
                <Link to={item.hrefTo}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="capitalize">
          <h1 className=" text-slate-500 pb-5">help</h1>
          <ul className=" flex items-start justify-center flex-col gap-10">
            {helpOption.map((item, index) => (
              <li key={index}>
                <Link to={item.hrefTo}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className=" capitalize">
          <h1 className=" text-slate-500 pb-5">newsletter</h1>
          <div className=" flex items-center justify-center gap-5">
            <input
              type="text"
              className=" py-2 px-5 border-2 border-slate-300"
              placeholder="Enter your email address.."
            />
            <button className=" py-2 px-5 uppercase border-2 flex items-center justify-between gap-5 rounded-md cursor-pointer hover:border-slate-300 duration-200">
              <RxButton />
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <LineFooter />
    </>
  );
};
