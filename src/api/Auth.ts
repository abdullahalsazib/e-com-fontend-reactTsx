/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";
const BaseUrl = "https://e-com-auth-golang.onrender.com";
const BaseUrl_2 = "https://e-com-backend-golang.onrender.com";


// const BaseUrl = "http://localhost:8000";
// const BaseUrl = "https://e-com-auth-golang.onrender.com";
// const BaseUrl = "https://e-com-auth-golang.onrender.com";

// interface registerProps {
//      name: string;
//      email: string;
//      password: string
// }

// export const register = async (userData: registerProps ) => {
//      return await axios.post(`${BaseUrl}/api/register`, userData)
// }
// export const login = async (userData: { email: string, password: string }) => {
//      return await axios.post(`${BaseUrl}/api/login`, userData, { withCredentials: true} )
// }
export const getUser = async () => {
     return await axios.get(`${BaseUrl_2}/api/profile`, { withCredentials: true})
}
export const getUserProfile = async () => {
  return await axios.get(`${BaseUrl_2}/api/user`, { withCredentials: true });
};
export const logout = async () => {
     return await axios.post(`${BaseUrl}/api/logout`, {} , {withCredentials: true})
}


export const uploadProfilePicture = async (file: File) => {
  const formData = new FormData();
  formData.append("profile_picture", file);

  return await axios.post(`${BaseUrl_2}/api/update`, formData, {
    withCredentials: true,
    headers: { "Content-Type": "multipart/form-data" },
  });
};



// Define the types for form data
interface ILoginFormData {
  email: string;
  password: string;
}

interface RegisterProps {
  name: string;
  email: string;
  password: string;
}


// Register function
export const register = async (userData: RegisterProps) => {
  return await axios.post(`${BaseUrl}/register`, userData);
};

// Login function
export const login = async (userData: { email: string; password: string }) => {
     return await axios.post(`${BaseUrl}/login`, userData,
          {
               withCredentials: true,
               headers: {
      "Content-Type": "application/json", // Ensure proper content type
               },
          });
};
