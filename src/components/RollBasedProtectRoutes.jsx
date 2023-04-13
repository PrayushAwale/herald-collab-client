import React from "react";
import getCookie from "../hooks/getCookie";
import { Navigate, Outlet } from "react-router-dom";

const RollBasedProtectRoutes = ({ alloweRole }) => {
  const role = getCookie("role");

  return role === alloweRole ? (
    <Outlet />
  ) : (
    <>
      <Navigate to="unauthorized" />
      {alert("Unauthorized! Access Denied !!")}
    </>
  );
};

export default RollBasedProtectRoutes;
