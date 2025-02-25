import axios from "axios";
import { useForm, SubmitHandler } from "react-hook-form";
import LineFooter from "../Dashboard/LineFooter";
import { Link, useNavigate } from "react-router-dom";
import { SubmitButton } from "./Login";
import useAlertStore from "../../components/aleartStore";
import Alert from "../../components/Alert";

interface IRegisterFormData {
  name: string;
  email: string;
  password: string;
  agree: boolean; // Added checkbox validation
}

function Register() {
  const navigate = useNavigate();
  const { showAlert } = useAlertStore();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterFormData>();

  const saveForm: SubmitHandler<IRegisterFormData> = async (data) => {
    try {
      // const response = await axios.post("http://localhost:8005/register", data);
      const response = await axios.post(
        "https://e-com-auth-golang.onrender.com/register",
        data
      );
      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        navigate("/login");
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      showAlert(`User already exists: ${error.message}`, "error");
    }
  };

  return (
    <>
      <Alert />
      <div className="w-full h-screen flex items-center justify-center flex-col py-10">
        <div className="w-full md:w-[90%] lg:w-[80%] 2xl:w-[60%] h-full lg:h-[80vh] py-0 md:py-10 flex items-center justify-center md:justify-between md:flex-row flex-col rounded-lg shadow-xl">
          {/* Left Section */}
          <div className="hidden md:flex items-center justify-between flex-col w-[50%] h-full lg:h-[80vh] bg-[#F67878] p-10 rounded-s-2xl">
            <div className="flex items-center justify-between w-full">
              <img
                src="https://wpocean.com/html/tf/pengu/assets/images/logo-2.svg"
                alt="Logo"
              />
              <Link
                to="/login"
                className="py-3 px-4 text-base bg-white rounded-md border-2 border-white hover:border-white hover:text-white hover:bg-red-400 duration-200"
              >
                Login
              </Link>
            </div>
            <img
              src="https://wpocean.com/html/tf/pengu/assets/images/login.png"
              alt="Illustration"
            />
            <div className="flex items-center justify-between w-full">
              <Link
                to="/"
                className="py-3 px-4 text-base bg-white rounded-md border-2 border-white hover:border-white hover:text-white hover:bg-red-400 duration-200"
              >
                Back to Home
              </Link>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-start py-10 px-2 md:px-10 2xl:px-20 md:gap-0 gap-10 md:justify-between flex-col w-[90%] md:w-[50%] h-full lg:h-[80vh] bg-white rounded-r-2xl">
            <div className="flex gap-2 flex-col font-light">
              <h1 className="text-4xl capitalize font-bold">Signup</h1>
              <p className="text-base text-slate-400">
                Sign into your pages account
              </p>
            </div>

            <form
              onSubmit={handleSubmit(saveForm)}
              className="flex flex-col gap-3 items-center justify-center w-full"
            >
              <label className="capitalize text-[16px] w-full font-extralight text-gray-500">
                <h3>
                  Name <span className="text-red-600">*</span>
                </h3>
                <input
                  className="py-3 px-3 w-full border-[1px] border-gray-200 outline-none hover:border-gray-400 duration-200 text-[15px] font-light focus:text-slate-800"
                  type="text"
                  {...register("name", { required: "Name is required" })}
                  placeholder="Enter your name"
                />
                {errors.name && (
                  <p className="text-red-500 text-xs lowercase">
                    {errors.name.message}
                  </p>
                )}
              </label>

              <label className="capitalize text-[16px] w-full font-extralight text-gray-500">
                <h3>
                  Email <span className="text-red-600">*</span>
                </h3>
                <input
                  className="py-3 px-3 w-full border-[1px] border-gray-200 outline-none hover:border-gray-400 duration-200 text-[15px] font-light focus:text-slate-800"
                  type="email"
                  {...register("email", { required: "Email is required" })}
                  placeholder="Enter your email"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs lowercase">
                    {errors.email.message}
                  </p>
                )}
              </label>

              <label className="capitalize w-full text-[16px] font-extralight text-gray-500">
                <h3>
                  Password <span className="text-red-600">*</span>
                </h3>
                <input
                  className="py-3 px-3 w-full border-[1px] border-gray-200 outline-none hover:border-gray-400 duration-200 text-[15px] font-light focus:text-slate-800"
                  type="password"
                  {...register("password", {
                    required: "Password is required",
                  })}
                  placeholder="Enter your password"
                />
                {errors.password && (
                  <p className="text-red-500 text-xs lowercase">
                    {errors.password.message}
                  </p>
                )}
              </label>

              {/* Checkbox Validation */}
              <div className="flex items-center justify-between flex-row w-full">
                <span className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="agree"
                    className="cursor-pointer w-4 h-4"
                    {...register("agree", {
                      required: "You must agree to the terms",
                    })}
                  />
                  <label htmlFor="agree" className="cursor-pointer">
                    I agree to the terms and conditions
                  </label>
                </span>
              </div>
              {errors.agree && (
                <p className="text-red-500 text-xs lowercase">
                  {errors.agree.message}
                </p>
              )}

              <SubmitButton title="Register" type="submit" />
            </form>

            <div className="w-full flex items-center gap-7 flex-col">
              {/* OR Separator */}
              <div className="flex items-center justify-center flex-col w-full">
                <hr className="border-gray-300 border-t-[0.2px] rounded-full w-full" />
                <h1 className="absolute bg-white px-5 text-[18px] uppercase">
                  or
                </h1>
              </div>

              {/* <div className="flex items-center justify-between text-4xl gap-4">
                <RiFacebookBoxFill />

                <RiTwitterXFill />
                <RiLinkedinBoxFill />
              </div> */}

              <h3 className="text-[15px]">
                I have an account!{" "}
                <Link to="/login" className="text-[14px] text-[#F56061]">
                  Login account
                </Link>
              </h3>
            </div>
          </div>
        </div>
      </div>
      <LineFooter />
    </>
  );
}

export default Register;
