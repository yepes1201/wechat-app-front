import React from "react";

export const FriendCard = ({ name, img }) => {
  return (
    <div className="friend-card">
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
