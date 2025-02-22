import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

interface SettingsForm {
  name: string;
  email: string;
  password: string;
  darkMode: boolean;
  notifications: boolean;
}

export default function Settings() {
  const { register, handleSubmit, setValue } = useForm<SettingsForm>();

  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );
  const [notifications, setNotifications] = useState(true);

  useEffect(() => {
    setValue("darkMode", darkMode);
    setValue("notifications", notifications);
  }, [darkMode, notifications, setValue]);

  const onSubmit = (data: SettingsForm) => {
    console.log("Updated Settings:", data);
    localStorage.setItem("darkMode", JSON.stringify(data.darkMode));
    alert("Settings Updated Successfully!");
  };

  return (
    <div className="p-6 w-full flex justify-center">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Settings</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Name Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              {...register("name")}
              placeholder="Your Name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              {...register("email")}
              placeholder="Your Email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              New Password
            </label>
            <input
              type="password"
              {...register("password")}
              placeholder="New Password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Dark Mode Toggle */}
          <div className="flex items-center justify-between">
            <span>Dark Mode</span>
            <input
              type="checkbox"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
              className="w-5 h-5 cursor-pointer"
            />
          </div>

          {/* Notification Toggle */}
          <div className="flex items-center justify-between">
            <span>Enable Notifications</span>
            <input
              type="checkbox"
              checked={notifications}
              onChange={() => setNotifications(!notifications)}
              className="w-5 h-5 cursor-pointer"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}
