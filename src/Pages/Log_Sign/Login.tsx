import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import useAlertStore from "../../components/aleartStore";
import { AuthContext } from "../../context/AuthContext";
import Alert from "../../components/Alert";

// Validation Schema
const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup
    .string()
    .min(1, "Password must be at least 1 characters")
    .required("Password is required"),
});

interface ILoginFormData {
  email: string;
  password: string;
}

const Login = () => {
  const { setUser } = useContext(AuthContext)!;
  const navigate = useNavigate();
  const { showAlert } = useAlertStore();
  const [isCheck, setIsCheck] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginFormData>({
    resolver: yupResolver(loginSchema),
  });

  const saveForm = async (data: ILoginFormData) => {
    try {
      // const response = await axios.post("http://localhost:8005/login", data);
      const response = await axios.post(
        "https://e-com-auth-golang.onrender.com/login",
        data
      );

      if (response.status === 200) {
        const responseData = response.data;
        localStorage.setItem("token", responseData.token);
        setUser(responseData.user);

        showAlert("Login successful!", "success");
        navigate("/");
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      showAlert(error.response?.data?.msg || "Login failed", "error");
    }
  };

  return (
    <>
      <Alert />
      <div className="w-full h-screen flex items-center justify-center">
        <div className="w-full md:w-[90%] lg:w-[80%] 2xl:w-[60%] h-full lg:h-[80vh] py-0 md:py-10 flex items-center justify-center  md:justify-between md:flex-row flex-col rounded-lg shadow-xl">
          <div className="hidden md:flex items-center justify-between flex-col w-[50%] h-full lg:h-[80vh] bg-[#F67878] p-10 rounded-s-2xl">
            <img
              src="https://wpocean.com/html/tf/pengu/assets/images/login.png"
              alt="Login"
            />
            <Link
              to="/register"
              className="py-3 px-4 bg-white rounded-md border-2 border-white hover:bg-red-400"
            >
              Create Account
            </Link>
          </div>

          <div className="flex flex-col py-10 px-2 md:px-10 2xl:px-20 w-[90%] md:w-[50%] bg-white rounded-r-2xl">
            <h1 className="text-4xl font-bold">Login</h1>
            <p className="text-base text-slate-400 py-3">Sign into your account</p>

            <form
              onSubmit={handleSubmit(saveForm)}
              className="flex flex-col gap-3 w-full"
            >
              <div className="w-full flex flex-col gap-4">
                <label className="text-gray-500">
                  Email <span className="text-red-600">*</span>
                  <input
                    className="py-3 px-3 w-full border border-gray-200 outline-none hover:border-gray-400"
                    type="email"
                    {...register("email")}
                    placeholder="Enter your email"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs">
                      {errors.email.message}
                    </p>
                  )}
                </label>

                <label className="text-gray-500">
                  Password <span className="text-red-600">*</span>
                  <input
                    className="py-3 px-3 w-full border border-gray-200 outline-none hover:border-gray-400"
                    type="password"
                    {...register("password")}
                    placeholder="Enter your password"
                  />
                  {errors.password && (
                    <p className="text-red-500 text-xs">
                      {errors.password.message}
                    </p>
                  )}
                </label>

                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={isCheck}
                      onChange={() => setIsCheck(!isCheck)}
                    />
                    Remember Me
                  </label>
                  <Link
                    to="/forgot-password"
                    className="text-[#F56061] text-[16px]"
                  >
                    Forgot Password?
                  </Link>
                </div>
              </div>

              <SubmitButton title="Login" type="submit" />
            </form>

            <div className="w-full flex flex-col items-center gap-3">
              <div className="w-full flex items-center py-5">
                <hr className="border-gray-300 border-t w-full" />
                <span className="bg-white px-3 text-[18px]">or</span>
                <hr className="border-gray-300 border-t w-full" />
              </div>

              <h3 className="text-[15px]">
                Don't have an account?{" "}
                <Link to="/register" className="text-[#F56061] text-[14px]">
                  Create free account
                </Link>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

interface SubmitButtonProps {
  type: "button" | "reset" | "submit";
  title: string;
  onClick?: () => void;
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({
  type,
  title,
  onClick,
}) => (
  <button
    className="w-full py-3 border-2 border-white bg-[#F56061] hover:bg-white hover:text-black hover:border-red-400 duration-300 active:scale-110 cursor-pointer text-white"
    type={type}
    onClick={onClick}
  >
    {title}
  </button>
);
