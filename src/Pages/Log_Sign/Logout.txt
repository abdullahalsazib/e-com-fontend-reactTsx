import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { logout } from "../../api/Auth";

interface LogoutProps {
  className?: string;
  icon?: React.ReactNode;
  title?: string;
}
const Logout: React.FC<LogoutProps> = (props) => {
  const { setUser } = useContext(AuthContext)!;
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logout();
      setUser(null);
      navigate("/login");
    } catch (error) {
      console.log("Logout Faild -> ", error);
    }
  };
  return (
    <>
      <Link to={"/login"} onClick={handleLogout} className={props.className}>
        {props.icon} {props.title}
      </Link>
    </>
  );
};

export default Logout;
