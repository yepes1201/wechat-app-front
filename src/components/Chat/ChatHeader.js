import React from "react";
import { useSelector } from "react-redux";

export const ChatHeader = () => {
  const { friend } = useSelector((state) => state.chat);

  return (
    <div className="chat__friend">
      <div className="chat__friend-avatar">
        <img
          src={
            friend.img ||
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZYRo0nQdHum-G5HlyiHSiVYrXlyCQnaX3lA&usqp=CAU"
          }
          alt="profile-img"
        />
      </div>
      <div>
        <p>{friend.name}</p>
      </div>
    </div>
  );
};
