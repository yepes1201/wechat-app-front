import React from "react";

export const Message = ({ message, myId }) => {
  const date =
    new Date(message.date).getHours() +
    ":" +
    new Date(message.date).getMinutes();
  return (
    <div className="message">
      <div
        className={`message__container ${message.authorId === myId && "mine"}`}
      >
        <h6>{message.authorId ? "Me" : message.author}</h6>
        <div className="message__message">
          <p>{message.message}</p>
        </div>
        <span className="message__date">
          <i className="fas fa-clock"></i> {date}
        </span>
      </div>
    </div>
  );
};
