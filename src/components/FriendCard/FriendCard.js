import React from "react";
import { useDispatch } from "react-redux";
import { startActiveChat } from "services";

export const FriendCard = ({ friend, auth }) => {
  const { img, name } = friend;
  const dispatch = useDispatch();

  const handleChat = () => {
    dispatch(startActiveChat(auth, friend));
  };

  return (
    <div onClick={handleChat} className="friend-card">
      <div className="friend-img">
        <img
          src={
            img ||
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZYRo0nQdHum-G5HlyiHSiVYrXlyCQnaX3lA&usqp=CAU"
          }
          alt="profile-img"
        />
        {/* <div className="online"></div> */}
      </div>
      <div className="friend-info">
        <h3>{name}</h3>
        {/* <p>Online</p> */}
      </div>
    </div>
  );
};
