// import { useEffect, useState } from "react";
// import { RiCameraAiFill } from "react-icons/ri";
// import { BiEdit } from "react-icons/bi";
// import { getUserProfile } from "../../api/Auth";
// import LineFooter from "../../Pages/Dashboard/LineFooter";

// const Profile = () => {
//   const [user, setUser] = useState<{
//     name: string;
//     Email: string;
//     profile_picture: string;
//   } | null>(null);

//   useEffect(() => {
//     getUserProfile()
//       .then((res) => {
//         setUser(res.data);
//       })
//       .catch((err) => {
//         console.error("Error fetching user:", err);
//       });
//   }, []);

//   return (
//     <div className="w-full h-screen  px-7 overflow-y-auto ">
//       <div className=" relative py-3 ">
//         <hr className="border-t-1 border-gray-200" />
//         <h2 className="absolute -top-1 bg-white text-[25px] px-5 font-light left-0">
//           My Profile
//         </h2>
//       </div>
//       <div className="flex items-center justify-start gap-5 flex-col py-3">
//         <div className="shadow-md inset-shadow-md rounded-3xl py-9 px-[5%] border-[1px] border-slate-200  mt-2 flex items-center justify-start gap-10 ">
//           <div className="relative w-[12%] rounded-full ring-2 ring-indigo-500 ">
//             <img
//               className=" rounded-full  cursor-pointer hover:scale-110 duration-300"
//               src={`https://e-com-backend-golang.onrender.com/uploads/${user?.profile_picture}`}
//               alt="error"
//             />
//             <RiCameraAiFill className="-translate-x-0  absolute right-0 bottom-3 text-black text-3xl bg-white p-1 rounded-full" />
//           </div>
//           <div className=" flex items-start justify-start gap-3 flex-col h-full">
//             <h1 className="text-2xl capitalize text-blue-500">{user?.name}</h1>
//             <p className="text-gray-400">Admin</p>
//             <p className="text-gray-600">Dhaka, Bangladesh.</p>
//           </div>
//         </div>
//         <div className=" shadow-md inset-shadow-md rounded-3xl py-5 px-[5%] border-[1px] border-slate-200  mt-2 flex items-center gap-10 w-full flex-col">
//           <div className="flex items-center justify-between w-full">
//             <h1>Personal Information</h1>
//             <button className=" py-2 px-5 bg-orange-400 text-white gap-3 flex items-center justify-center rounded-md cursor-pointer text-[17px]">
//               <p> Edit</p> <BiEdit />
//             </button>
//           </div>
//           <hr className="border-[1px] border-gray-200 w-full " />
//           <div className=" grid grid-cols-3 w-full py-1 gap-8">
//             <div className=" w-full space-y-2">
//               <p className="capitalize text-sm text-slate-600">first name</p>
//               <h3 className=" capitalize text-[17px]">Jack</h3>
//             </div>
//             <div className=" w-full space-y-2">
//               <p className="capitalize text-sm text-slate-600">last name</p>
//               <h3 className=" capitalize text-[17px]">sparrow</h3>
//             </div>
//             <div className=" w-full space-y-2">
//               <p className="capitalize text-sm text-slate-600">data of birth</p>
//               <h3 className=" capitalize text-[17px]">12-10-1990</h3>
//             </div>
//             <div className=" w-full space-y-2">
//               <p className="capitalize text-sm text-slate-600">email address</p>
//               <h3 className=" capitalize text-[17px]">jack123@gmail.com</h3>
//             </div>
//             <div className=" w-full space-y-2">
//               <p className="capitalize text-sm text-slate-600">phone number</p>
//               <h3 className=" capitalize text-[17px]">(+65) 82323 32323</h3>
//             </div>
//             <div className=" w-full space-y-2">
//               <p className="capitalize text-sm text-slate-600">user role</p>
//               <h3 className=" capitalize text-[17px]">admin</h3>
//             </div>
//           </div>
//         </div>
//         <div className=" shadow-md inset-shadow-md rounded-3xl py-5 px-[5%] border-[1px] border-slate-200  mt-2 flex items-center gap-10 w-full flex-col">
//           <div className="flex items-center justify-between w-full">
//             <h1>Personal Information</h1>
//             <button className=" py-2 px-5 bg-orange-400 text-white gap-3 flex items-center justify-center rounded-md cursor-pointer text-[17px]">
//               <p> Edit</p> <BiEdit />
//             </button>
//           </div>
//           <hr className="border-[1px] border-gray-200 w-full " />
//           <div className=" grid grid-cols-3 w-full py-1 gap-8">
//             <div className=" w-full space-y-2">
//               <p className="capitalize text-sm text-slate-600">first name</p>
//               <h3 className=" capitalize text-[17px]">Jack</h3>
//             </div>
//             <div className=" w-full space-y-2">
//               <p className="capitalize text-sm text-slate-600">last name</p>
//               <h3 className=" capitalize text-[17px]">sparrow</h3>
//             </div>
//             <div className=" w-full space-y-2">
//               <p className="capitalize text-sm text-slate-600">data of birth</p>
//               <h3 className=" capitalize text-[17px]">12-10-1990</h3>
//             </div>
//             <div className=" w-full space-y-2">
//               <p className="capitalize text-sm text-slate-600">email address</p>
//               <h3 className=" capitalize text-[17px]">jack123@gmail.com</h3>
//             </div>
//             <div className=" w-full space-y-2">
//               <p className="capitalize text-sm text-slate-600">phone number</p>
//               <h3 className=" capitalize text-[17px]">(+65) 82323 32323</h3>
//             </div>
//             <div className=" w-full space-y-2">
//               <p className="capitalize text-sm text-slate-600">user role</p>
//               <h3 className=" capitalize text-[17px]">admin</h3>
//             </div>
//           </div>
//         </div>
//         <LineFooter />
//         <br />
//         <b></b>
//       </div>
//     </div>
//   );
// };

// export default Profile;
const Profile = () => {
  return (
    <div className=" w-full h-screen flex items-center justify-center">
      <div className="text-center">Developing</div>
    </div>
  );
};

export default Profile;
