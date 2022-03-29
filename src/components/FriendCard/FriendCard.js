import React from "react";

export const FriendCard = () => {
  return (
    <div className="friend-card">
      <div className="friend-img">
        <img
          src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80"
          alt="profile-img"
        />
        <div className="online"></div>
      </div>
      <div className="friend-info">
        <h3>Bricette Salcedo</h3>
        <p>Online</p>
      </div>
    </div>
  );
};
