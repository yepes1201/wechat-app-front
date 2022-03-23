import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoute = ({ user }) => {
  if (!user.uid) {
    return <Navigate to="/auth/login" />;
  }
  return (
    <div>
      <Outlet />
    </div>
  );
};
