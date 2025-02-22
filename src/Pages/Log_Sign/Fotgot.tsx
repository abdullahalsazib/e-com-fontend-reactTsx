import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import axios from "axios";
import useAlertStore from "../../components/aleartStore";
import Alert from "../../components/Alert";

interface IForgotPasswordData {
  email: string;
}

function ForgotPassword() {
  const { showAlert } = useAlertStore();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForgotPasswordData>();

  const onSubmit: SubmitHandler<IForgotPasswordData> = async (data) => {
    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:8005/forgot-password",
        data
      );
      if (response.status === 200) {
        showAlert("Password reset link sent to your email.", "success");
      }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      showAlert(
        `Error: ${error.response?.data?.message || error.message}`,
        "error"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Alert />
      <div className="w-full h-screen flex items-center justify-center flex-col py-10">
        <div className="w-full md:w-[50%] lg:w-[40%] bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-center">Forgot Password</h2>
          <p className="text-center text-gray-500">
            Enter your email to reset your password
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="mt-5">
            {/* Email Field */}
            <div className="mb-4">
              <label className="block text-gray-600 text-sm mb-1">
                Email Address
              </label>
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email address",
                  },
                })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#F56061]"
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#F56061] text-white py-2 rounded-lg hover:bg-red-500 transition duration-200"
              disabled={loading}
            >
              {loading ? "Processing..." : "Reset Password"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default ForgotPassword;
