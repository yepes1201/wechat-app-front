import React from "react";

export const ChatMessages = () => {
  const messages = [
    { message: "Hello", author: "John", mine: false },
    { message: "Hello", author: "Daniel", mine: true },
    { message: "Todo bien John", author: "Daniel", mine: true },
    { message: "Cv", author: "Daniel", mine: true },
    { message: "Contesta", author: "Daniel", mine: true },
    {
      message:
        "Spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam ",
      author: "Daniel",
      mine: true,
    },
  ];
  return (
    <div className="chat__messages">
      {messages.map((message) => {
        return (
          <div className="message">
            <div className={`message__container ${message.mine && "mine"}`}>
              <h6>{message.author}</h6>
              <div className="message__message">
                <p>{message.message}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
