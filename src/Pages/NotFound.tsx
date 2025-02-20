import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="text-center">
        <img
          src="https://wowdash.wowtheme7.com/demo/assets/images/error-img.png"
          alt="error"
        />
        <h1 className="text-4xl font-bold text-[#111827]">
          Page not Found 404
        </h1>
        <p className="text-lg text-gray-700">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
