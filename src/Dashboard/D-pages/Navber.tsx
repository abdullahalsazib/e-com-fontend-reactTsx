import { BiMenuAltRight } from "react-icons/bi";
import Logout from "../../Pages/Log_Sign/Logout";

// Navber.tsx
const Navbar: React.FC<{
  onToggleSidebar: () => void;
}> = ({ onToggleSidebar }) => {
  return (
    <div className="bg-gray-800 text-white w-full p-4 flex justify-between">
      <div className=" flex items-center justify-start ">
        <BiMenuAltRight
          onClick={onToggleSidebar}
          className="text-4xl cursor-pointer rounded-full"
        />
      </div>
      <div className="text-xl font-semibold">E-commerce Dashboard</div>
      <div className="flex items-center">
        {/* <button className="bg-blue-500 px-4 py-2 rounded">Logout</button> */}
        <Logout />
      </div>
    </div>
  );
};

export default Navbar;
