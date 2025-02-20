// Navber.tsx
const Navbar = () => {
  return (
    <div className="bg-gray-800 text-white p-4 flex justify-between">
      <div className="text-xl font-semibold">E-commerce Dashboard</div>
      <div className="flex items-center">
        <button className="bg-blue-500 px-4 py-2 rounded">Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
