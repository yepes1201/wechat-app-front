import React from "react";
import { useDispatch } from "react-redux";
import { acceptFriendRequest, rejectFriendRequest } from "services";

export const NotificationCard = ({ user }) => {
  const { name, img } = user;
  const dispatch = useDispatch();
  return (
    <div className="notification-card">
      <div className="notification-left">
        <img
          src={
            img ||
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZYRo0nQdHum-G5HlyiHSiVYrXlyCQnaX3lA&usqp=CAU"
          }
          alt="profile"
        />
        <p>{name}</p>
      </div>
      <div className="notification-right">
        <button
          onClick={() => dispatch(acceptFriendRequest(user))}
          className="btn btn-primary"
        >
          Accept
        </button>
        <button
          onClick={() => dispatch(rejectFriendRequest(user))}
          className="btn btn-light"
        >
          Reject
        </button>
      </div>
    </div>
  );
};
