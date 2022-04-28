import React from "react";
import { useDispatch } from "react-redux";
import { useResponsiveSidebars } from "hooks";
import { startLogout, setClearData } from "services";

export const Navbar = () => {
  const dispatch = useDispatch();
  const { handleResponsiveSidebars } = useResponsiveSidebars();

  const handleLogout = () => {
    dispatch(setClearData());
    dispatch(startLogout());
  };

  return (
    <div className="navbar">
      <h1>WeChat!</h1>
      <div className="navbar__menu">
        <p
          onClick={() => handleResponsiveSidebars("friends")}
          id="friends-link"
          name="friends-link"
        >
          Friends
        </p>
        <p
          onClick={() => handleResponsiveSidebars("profile")}
          id="profile-link"
          name="profile-link"
        >
          Profile
        </p>
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
