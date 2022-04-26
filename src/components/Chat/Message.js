import React from "react";

export const Message = ({ message }) => {
  return (
    <div className="message">
      <div className={`message__container ${message.mine && "mine"}`}>
        <h6>{message.mine ? "Me" : message.author}</h6>
        <div className="message__message">
          <p>{message.message}</p>
        </div>
        <span className="message__date">
          <i className="fas fa-clock"></i> {message.date}
        </span>
      </div>
    </div>
  );
};
