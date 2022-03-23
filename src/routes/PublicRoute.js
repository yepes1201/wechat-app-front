import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export const PublicRoute = ({ user }) => {
  if (user.uid) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <Outlet />
    </div>
  );
};
