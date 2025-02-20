import { BiLogOut, BiMessageAdd } from "react-icons/bi";
import { FaUser } from "react-icons/fa6";
import { FiSettings } from "react-icons/fi";

export const userDropDown = [
  { Icon: <FaUser />, Title: "user" },
  { Icon: <BiMessageAdd />, Title: "inbox" },
  { Icon: <FiSettings />, Title: "setting" },
  { Icon: <BiLogOut />, Title: "log out" },
];