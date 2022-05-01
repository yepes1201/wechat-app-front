import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useResponsiveSidebars } from "hooks";
import { NotificationCard, socket as Socket } from "components";
import { startLogout, setClearData, addFriend } from "services";
import { isNotificationNotRepeat } from "utils";

export const Navbar = () => {
  const { auth, notifications } = useSelector((state) => state);
  const dispatch = useDispatch();
  const { handleResponsiveSidebars } = useResponsiveSidebars();

  useEffect(() => {
    Socket.on("add", (data) => {
      if (data.to === auth.email) {
        if (isNotificationNotRepeat(notifications, data)) {
          dispatch(addFriend(data.from));
        }
      }
    });
    return () => Socket.off("add");
  }, [notifications, auth, dispatch]);

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
      <div className="navbar__buttons">
        <div className="navbar__notification">
          <i className="fas fa-bell"></i>
          {notifications.length > 0 && (
            <span className="navbar__notification-total">
              {notifications.length}
            </span>
          )}
          <div className="notification-list">
            {notifications.length !== 0 ? (
              notifications.map((notification, i) => (
                <NotificationCard key={i} {...notification} />
              ))
            ) : (
              <p className="notification-no">No friend request</p>
            )}
          </div>
        </div>
        <button
          onClick={handleLogout}
          className="btn btn-outline-light btn-logout"
        >
          <i className="fas fa-sign-out"></i> <span>Logout</span>
        </button>
      </div>
    </div>
  );
};
