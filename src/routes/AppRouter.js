import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { PublicRoute } from "routes/PublicRoute";
import { PrivateRoute } from "routes/PrivateRoute";
import { Login, Register } from "pages";

export const AppRouter = () => {
  //   const [user, setUser] = useState({ id: 123, name: "Daniel" });
  const [user, setUser] = useState({});
  // TODO: onAuthStateChange
  return (
    <div>
      <Routes>
        {/* Private Routes */}
        <Route path="/" element={<PrivateRoute user={user} />}>
          <Route index element={<h1>Home</h1>} />
        </Route>

        {/* Auth Routes */}
        <Route path="/auth" element={<PublicRoute user={user} />}>
          <Route index element={<Navigate to="/auth/login" replace />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
};
