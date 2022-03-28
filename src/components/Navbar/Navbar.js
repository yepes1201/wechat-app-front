import React from "react";
import { useDispatch } from "react-redux";
import { startLogout } from "services";

export const Navbar = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(startLogout());
  };

  return (
    <div className="navbar animate__animated animate__fadeIn">
      <h1>WeChat!</h1>
      <button
        onClick={handleLogout}
        className="btn btn-outline-light btn-logout"
      >
        <i className="fas fa-sign-out"></i> Logout
      </button>
    </div>
  );
};
