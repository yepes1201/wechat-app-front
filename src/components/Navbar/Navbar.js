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
      <div className="navbar__menu">
        <p id="friends-link">Friends</p>
        <p id="profile-link">Profile</p>
      </div>
      <button
        onClick={handleLogout}
        className="btn btn-outline-light btn-logout"
      >
        <i className="fas fa-sign-out"></i> <span>Logout</span>
      </button>
    </div>
  );
};
