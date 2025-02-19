import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const { user } = useContext(AuthContext)!;
  return <div>{user ? children : <Navigate to="/login" />}</div>;
};

export default PrivateRoute;
