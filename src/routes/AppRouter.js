import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";

import { PublicRoute } from "routes/PublicRoute";
import { PrivateRoute } from "routes/PrivateRoute";
import { Home, Login, Register } from "pages";
import { Loading } from "components";

import { getAuth, onAuthStateChanged } from "firebase/auth";
import { login, startLogout } from "services";
import { returnUser } from "utils";

export const AppRouter = () => {
  const dispatch = useDispatch();
  const [checking, setChecking] = useState(true);
  const user = useSelector((state) => state.auth);

  // * Check if the user is signed in
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        dispatch(login(returnUser(user)));
      }
      setChecking(false);
    });
  }, [dispatch]);

  // const handleLogout = () => {
  //   dispatch(startLogout());
  // };

  if (checking) {
    return <Loading />;
  } else {
    return (
      <div>
        <Routes>
          {/* Private Routes */}
          <Route path="/" element={<PrivateRoute user={user} />}>
            <Route index element={<Home />} />
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
  }
};
