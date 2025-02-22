import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import useAlertStore from "../../components/aleartStore";
import Alert from "../../components/Alert";

interface IResetPasswordData {
  password: string;
  confirmPassword: string;
}

function ResetPassword() {
  const { showAlert } = useAlertStore();
  const [loading, setLoading] = useState(false);
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IResetPasswordData>();

  const onSubmit: SubmitHandler<IResetPasswordData> = async (data) => {
    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:8005/reset-password",
        {
          token,
          password: data.password,
        }
      );

      if (response.status === 200) {
        showAlert("Password successfully reset!", "success");
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
          <h2 className="text-2xl font-bold text-center">Reset Password</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="mt-5">
            {/* Password Field */}
            <div className="mb-4">
              <label className="block text-gray-600 text-sm mb-1">
                New Password
              </label>
              <input
                type="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#F56061]"
                placeholder="Enter new password"
              />
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Confirm Password Field */}
            <div className="mb-4">
              <label className="block text-gray-600 text-sm mb-1">
                Confirm Password
              </label>
              <input
                type="password"
                {...register("confirmPassword", {
                  required: "Please confirm your password",
                  validate: (value) =>
                    value === watch("password") || "Passwords do not match",
                })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#F56061]"
                placeholder="Confirm new password"
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-[#F56061] text-white py-2 rounded-lg hover:bg-red-500 transition duration-200"
              disabled={loading}
            >
              {loading ? "Updating..." : "Reset Password"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default ResetPassword;
