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
      <button
        onClick={handleLogout}
        className="py-2 px-5 bg-red-600 text-white rounded-md hover:bg-red-700"
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;
