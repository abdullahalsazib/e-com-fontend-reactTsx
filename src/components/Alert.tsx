import { useEffect } from "react";
import { BiCheckCircle, BiInfoCircle, BiXCircle } from "react-icons/bi";
import useAlertStore from "./aleartStore";

const Alert = () => {
  const { message, type, show, hideAlert } = useAlertStore();

  useEffect(() => {
    if (show) {
      const timer = setTimeout(hideAlert, 2000); // Auto-dismiss after 3s
      return () => clearTimeout(timer);
    }
  }, [show, hideAlert]);

  if (!show) return null;

  const typeStyles = {
    success: "bg-green-500 text-white",
    error: "bg-red-500 text-white",
    info: "bg-blue-500 text-white",
  };

  const icons = {
    success: <BiCheckCircle className="w-6 h-6" />,
    error: <BiXCircle className="w-6 h-6" />,
    info: <BiInfoCircle className="w-6 h-6" />,
  };

  return (
    <div
      className={`fixed top-5 right-5 flex items-center gap-3 px-5 py-3 rounded-lg shadow-lg transition-opacity duration-500 ${
        show ? "opacity-100" : "opacity-0"
      } ${typeStyles[type]}`}
    >
      {icons[type]}
      <span>{message}</span>
      <button onClick={hideAlert} className="text-white font-bold">
        ✕
      </button>
    </div>
  );
};

export default Alert;
