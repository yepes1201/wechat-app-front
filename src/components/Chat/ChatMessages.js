import React from "react";

export const ChatMessages = () => {
  const messages = [
    { message: "Hello", author: "John", mine: false, date: "21:48" },
    { message: "Hello", author: "Daniel", mine: true, date: "21:52" },
    { message: "How you doing?", author: "Daniel", mine: true, date: "21:52" },
    {
      message: "I'm doing good thanks for asking",
      author: "John",
      mine: false,
      date: "21:54",
    },
    { message: "That's great", author: "Daniel", mine: true, date: "22:00" },
    {
      message:
        "Spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam ",
      author: "Daniel",
      mine: true,
      date: "22:05",
    },
  ];
  return (
    <div className="chat__messages">
      {messages.map((message) => {
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
      })}
      <div id="anchorDiv"></div>
    </div>
  );
};
