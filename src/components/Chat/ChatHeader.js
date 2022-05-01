import React from "react";

export const ChatHeader = () => {
  return (
    <div className="chat__friend">
      <div className="chat__friend-avatar">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZYRo0nQdHum-G5HlyiHSiVYrXlyCQnaX3lA&usqp=CAU"
          alt="profile-img"
        />
      </div>
      <div>
        <p>Friend</p>
      </div>
    </div>
  );
};
