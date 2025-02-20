// Sidebar.tsx
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white h-screen p-4">
      <h2 className="text-xl font-semibold mb-6">Admin Dashboard</h2>
      <ul>
        <li>
          <Link
            to="/dashboard"
            className="block py-2 px-4 hover:bg-gray-700 rounded"
          >
            Dashboard Home
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard/orders"
            className="block py-2 px-4 hover:bg-gray-700 rounded"
          >
            Orders
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard/customers"
            className="block py-2 px-4 hover:bg-gray-700 rounded"
          >
            Customers
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard/settings"
            className="block py-2 px-4 hover:bg-gray-700 rounded"
          >
            Settings
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
