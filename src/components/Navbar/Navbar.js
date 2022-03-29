import React from "react";
import { useDispatch } from "react-redux";
import { startLogout } from "services";

export const Navbar = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(startLogout());
  };

  return (
    <div className="navbar">
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
