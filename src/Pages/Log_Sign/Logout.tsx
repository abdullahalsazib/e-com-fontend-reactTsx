import React, { useContext } from "react";
import { useNavigate } from "react-router-dom"; // Use useNavigate
import { AuthContext } from "../../context/AuthContext";
import useAlertStore from "../../components/aleartStore";
// No need for js-cookie anymore

const Logout: React.FC = () => {
  const navigate = useNavigate(); // Initialize navigate hook
  const { setUser } = useContext(AuthContext)!;
  const { showAlert } = useAlertStore();
  const handleLogout = () => {
    // Remove JWT token from localStorage
    localStorage.removeItem("token");

    // Redirect to login page after logout
    navigate("/login"); // Redirect using navigate
    setUser(null);
    showAlert("User logged out successfully.", "success");
  };

  return (
    <div className="flex justify-center items-center">
      <button onClick={handleLogout} className="bg-blue-500 hover:bg-blue-600 active:bg-blue-800 cursor-pointer px-4 py-2 rounded">
        Logout
      </button>
    </div>
  );
};

export default Logout;
