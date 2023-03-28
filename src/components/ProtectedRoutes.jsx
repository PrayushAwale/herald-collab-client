import React from "react";
import { Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import SignInPage from "../pages/SignInPage";

const ProtectedRoutes = () => {
  const getToken = useAuth();
  return getToken ? <Outlet /> : <SignInPage />;
};

export default ProtectedRoutes;
