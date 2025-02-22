import { BiCopyright } from "react-icons/bi";

export const LineFooter = () => {
  return (
    <div className=" w-full bg-transparent ">
      <h1 className="text-center text-sm flex items-center justify-center py-4 px-0 gap-3 text-gray-500">
        <p className="flex items-center justify-center">
          Copyright
          <BiCopyright />
        </p>{" "}
        {new Date().getFullYear()}. Design with 💓 by Abdullah Al Sazib
      </h1>
    </div>
  );
};

export default LineFooter;
