import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  return window.location.pathname === "/111" ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;
