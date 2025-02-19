// import { useState } from "react";
// import { useForm, SubmitHandler } from "react-hook-form";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import { MdAccountCircle } from "react-icons/md";
// import axios from "axios";

// // Define the types for form data
// interface ILoginFormData {
//   email: string;
//   password: string;
// }

// function Login() {
//   const {
//     register,
//     handleSubmit,
//     // eslint-disable-next-line @typescript-eslint/no-unused-vars
//     formState: { errors },
//   } = useForm<ILoginFormData>();

//   // Define the saveForm function with proper data type
//   const saveFrom: SubmitHandler<ILoginFormData> = async (data) => {
//     console.log(data);

//     try {
//       // Pass the user data to the login function
//       const response = await axios.post(
//         "https://e-com-auth-golang.onrender.com/login",
//         data
//       ); // Pass data here
//       if (response.status === 200) {
//         const responseData = response.data;
//         // Store the JWT token in a cookie
//         // Save the token in localStorage after login
//         localStorage.setItem("token", responseData.token);

//         console.log("Logged in successfully:", localStorage);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div>
//       <div className="bg-slate-100 flex items-center justify-center flex-col gap-10">
//         <h1 className="flex items-center justify-center gap-5">
//           Login to the account? <MdAccountCircle />
//         </h1>
//         <form
//           onSubmit={handleSubmit(saveFrom)}
//           className="flex flex-col items-center justify-center"
//         >
//           <label className="flex flex-col gap-2">
//             Email:
//             <input
//               className="py-2 px-5 border-2 rounded-md"
//               type="email"
//               {...register("email")}
//               placeholder="Enter your email"
//             />
//           </label>
//           <label className="flex flex-col gap-2">
//             Password:
//             <input
//               className="py-2 px-5 border-2 rounded-md"
//               type="password"
//               {...register("password")}
//               placeholder="Enter your password"
//             />
//           </label>
//           <input
//             type="submit"
//             value={"Login"}
//             className="py-2 mt-2 cursor-pointer px-5 border-2 rounded-md"
//           />
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Login;

// interface LabelInputFildProps {
//   type?: string;
//   htmlFor: string;
//   labelText: string;
//   placeholder: string;
//   value?: string;
//   onChange?: (value: React.ChangeEvent<HTMLInputElement>) => void;
// }
// export const LabelInputFild: React.FC<LabelInputFildProps> = (props) => {
//   return (
//     <>
//       <div className="flex items-start flex-col">
//         <label
//           className="capitalize text-[16px] font-extralight text-gray-500 "
//           htmlFor={props.htmlFor}
//         >
//           {props.labelText}
//         </label>
//         <input
//           className="py-3 px-3 w-full border-[1px] border-gray-200 outline-none hover:border-gray-400 duration-200 text-[15px] font-light"
//           value={props.value}
//           onChange={props.onChange}
//           type={props.type}
//           id={props.htmlFor}
//           placeholder={props.placeholder}
//         />
//       </div>
//     </>
//   );
// };

// export const PasswordFild: React.FC<LabelInputFildProps> = (props) => {
//   const [eyeOpen, setEyeOpen] = useState(false);
//   return (
//     <>
//       <div className=" relative">
//         <LabelInputFild
//           htmlFor={props.htmlFor}
//           labelText={props.labelText}
//           placeholder={props.placeholder}
//           value={props.value}
//           onChange={props.onChange}
//           type={eyeOpen ? "text" : props.type}
//         />
//         {eyeOpen ? (
//           <FaEye
//             className=" absolute top-[50%] right-5 text-[22px] cursor-pointer text-slate-600 duration-200"
//             onClick={() => setEyeOpen(!eyeOpen)}
//           />
//         ) : (
//           <FaEyeSlash
//             className=" absolute top-[50%] right-5 text-[22px] cursor-pointer text-slate-600 duration-200"
//             onClick={() => setEyeOpen(!eyeOpen)}
//           />
//         )}
//       </div>
//     </>
//   );
// };

// interface SubmitButtonProps {
//   type: "button" | "reset" | "submit";
//   title: string;
//   onClick?: () => void;
// }

// export const SubmitButton: React.FC<SubmitButtonProps> = (props) => {
//   return (
//     <>
//       <button
//         className=" w-full hover:border-[2px] border-[2px] border-white py-3 px-3 cursor-pointer duration-200 hover:border-red-400 bg-[#F56061] hover:bg-white text-white hover:text-black"
//         type={props.type}
//         onClick={props.onClick}
//       >
//         {props.title}
//       </button>
//     </>
//   );
// };
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import {
  RiFacebookBoxFill,
  RiLinkedinBoxFill,
  RiTwitterXFill,
} from "react-icons/ri";
// import { AuthContext } from "../../context/AuthContext";
// import { getUser, login } from "../../api/Auth";
import LineFooter from "../Dashboard/LineFooter";
import { useForm } from "react-hook-form";
import axios from "axios";
import useAlertStore from "../../components/aleartStore";
import { AuthContext } from "../../context/AuthContext";
import Alert from "../../components/Alert";

interface ILoginFormData {
  email: string;
  password: string;
}
const Login = () => {
  const { setUser } = useContext(AuthContext)!;
  const navigate = useNavigate();
  const { showAlert } = useAlertStore();
  const {
    register,
    handleSubmit,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    formState: { errors },
  } = useForm<ILoginFormData>();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const saveFrom = async (data: any) => {
    // console.log(data);
    try {
      // Pass the user data to the login function
      const response = await axios.post(
        "https://e-com-auth-golang.onrender.com/login",
        data
      ); // Pass data here
      if (response.status === 200) {
        const responseData = response.data;
        // Store the JWT token in a cookie
        // Save the token in localStorage after login
        localStorage.setItem("token", responseData.token);
        setUser(responseData.user);

        showAlert(data.msg, "success");

        navigate("/");
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      showAlert(error.message, "error");
    }
  };
  return (
    <>
      <Alert />
      <div className=" w-full h-screen flex items-center justify-center">
        <div className=" w-full md:w-[90%] lg:w-[80%] 2xl:w-[60%]  h-full lg:h-[80vh] py-0 md:py-10  flex items-center justify-between md:flex-row flex-col rounded-lg shadow-xl">
          <div className=" hidden md:flex items-center justify-between flex-col w-[50%]  h-full lg:h-[80vh] bg-[#F67878] p-10 rounded-s-2xl">
            <div className="flex items-center justify-between w-full ">
              <img
                src="https://wpocean.com/html/tf/pengu/assets/images/logo-2.svg"
                alt=""
              />
              <Link
                to="/register"
                className=" py-3 px-4 text-base bg-white rounded-md border-2 border-white hover:border-white hover:text-white hover:bg-red-400 duration-200"
              >
                Create Account
              </Link>
            </div>
            <img
              src="https://wpocean.com/html/tf/pengu/assets/images/login.png"
              alt="error"
            />
            <div className="flex items-center justify-between w-full">
              <Link
                to="/"
                className=" py-3 px-4 text-base bg-white rounded-md border-2 border-white hover:border-white hover:text-white hover:bg-red-400 duration-200"
              >
                Back to Home
              </Link>
            </div>
          </div>

          <div className="flex items-start py-10 px-2 md:px-10  2xl:px-20 md:gap-0 gap-10 md:justify-between flex-col w-[90%] md:w-[50%] h-full lg:h-[80vh] bg-white rounded-r-2xl">
            <div className="flex gap-2 flex-col font-light">
              <h1 className=" text-4xl capitalize font-bold">Login</h1>
              <p className="text-base text-slate-400">
                Sign into your pages account
              </p>
            </div>

            <form
              onSubmit={handleSubmit(saveFrom)}
              className="flex flex-col gap-3 items-center justify-center w-full"
            >
              <div className="w-full flex gap-5 flex-col">
                {/* form */}
                <label className="capitalize text-[16px] font-extralight text-gray-500 ">
                  <h3>
                    Email <span className=" text-red-600">*</span>
                  </h3>
                  <input
                    className="py-3 px-3 w-full border-[1px] border-gray-200 outline-none hover:border-gray-400 duration-200 text-[15px] font-light focus:text-slate-800"
                    type="email"
                    {...register("email")}
                    placeholder="Enter your email"
                  />
                </label>
                <label className="capitalize text-[16px] font-extralight text-gray-500 ">
                  <h3>
                    Password <span className=" text-red-600">*</span>
                  </h3>
                  <input
                    className="py-3 px-3 w-full border-[1px] border-gray-200 outline-none hover:border-gray-400 duration-200 text-[15px] font-light focus:text-slate-800"
                    type="password"
                    {...register("password")}
                    placeholder="Enter your password"
                  />
                </label>
                {/* form */}

                <div className="flex items-center justify-between flex-row">
                  <span className="flex items-center justify-center gap-2">
                    <input
                      type="checkbox"
                      id="check"
                      className=" cursor-pointer w-4 h-4"
                    />
                    <label className=" cursor-pointer" htmlFor="check">
                      Remember Me
                    </label>
                  </span>
                  <a href="#" className="text-[#F56061] text-[16px]">
                    Forgot Password?
                  </a>
                </div>
              </div>

              <SubmitButton title="Login" type="submit" />
            </form>
            <div className=" w-full flex items-center gap-7 flex-col">
              <div className="flex items-center justify-center flex-col w-full">
                <hr className=" border-gray-300 border-t-[0.2px] rounded-full w-full" />
                <h1 className=" absolute bg-white px-5 text-[18px] uppercase ">
                  or
                </h1>
              </div>
              <div className=" flex items-center justify-between text-4xl gap-4">
                <RiFacebookBoxFill />
                <RiTwitterXFill />
                <RiLinkedinBoxFill />
              </div>
              <h3 className=" text-[15px]">
                Don't have an account?{" "}
                <Link to="/register" className="text-[14px] text-[#F56061]">
                  Create free account
                </Link>
              </h3>
            </div>
          </div>
        </div>
      </div>
      <LineFooter />
    </>
  );
};

export default Login;

interface LabelInputFildProps {
  type?: string;
  htmlFor: string;
  labelText: string;
  placeholder: string;
  value?: string;
  onChange?: (value: React.ChangeEvent<HTMLInputElement>) => void;
}
export const LabelInputFild: React.FC<LabelInputFildProps> = (props) => {
  return (
    <>
      <div className="flex items-start flex-col">
        <label
          className="capitalize text-[16px] font-extralight text-gray-500 "
          htmlFor={props.htmlFor}
        >
          {props.labelText}
        </label>
        <input
          className="py-3 px-3 w-full border-[1px] border-gray-200 outline-none hover:border-gray-400 duration-200 text-[15px] font-light"
          value={props.value}
          onChange={props.onChange}
          type={props.type}
          id={props.htmlFor}
          placeholder={props.placeholder}
        />
      </div>
    </>
  );
};

export const PasswordFild: React.FC<LabelInputFildProps> = (props) => {
  const [eyeOpen, setEyeOpen] = useState(false);
  return (
    <>
      <div className=" relative">
        <LabelInputFild
          htmlFor={props.htmlFor}
          labelText={props.labelText}
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
          type={eyeOpen ? "text" : props.type}
        />
        {eyeOpen ? (
          <FaEye
            className=" absolute top-[50%] right-5 text-[22px] cursor-pointer text-slate-600 duration-200"
            onClick={() => setEyeOpen(!eyeOpen)}
          />
        ) : (
          <FaEyeSlash
            className=" absolute top-[50%] right-5 text-[22px] cursor-pointer text-slate-600 duration-200"
            onClick={() => setEyeOpen(!eyeOpen)}
          />
        )}
      </div>
    </>
  );
};

interface SubmitButtonProps {
  type: "button" | "reset" | "submit";
  title: string;
  onClick?: () => void;
}

export const SubmitButton: React.FC<SubmitButtonProps> = (props) => {
  return (
    <>
      <button
        className=" w-full hover:border-[2px] border-[2px] border-white py-3 px-3 cursor-pointer duration-200 hover:border-red-400 bg-[#F56061] hover:bg-white text-white hover:text-black"
        type={props.type}
        onClick={props.onClick}
      >
        {props.title}
      </button>
    </>
  );
};
