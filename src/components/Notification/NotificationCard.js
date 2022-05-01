import React from "react";

export const NotificationCard = ({ name, img }) => {
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
        <button className="btn btn-primary">Accept</button>
        <button className="btn btn-light">Reject</button>
      </div>
    </div>
  );
};
