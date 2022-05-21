import React from "react";
import { Message } from "components";

export const ChatMessages = () => {
  const messages = [
    // { message: "Hello", author: "John", authorId: false, date: "21:48" },
    // { message: "Hello", author: "Daniel", authorId: true, date: "21:52" },
    // {
    //   message: "How you doing?",
    //   author: "Daniel",
    //   authorId: true,
    //   date: "21:52",
    // },
    // {
    //   message: "I'm doing good thanks for asking",
    //   author: "John",
    //   authorId: false,
    //   date: "21:54",
    // },
    // {
    //   message: "That's great",
    //   author: "Daniel",
    //   authorId: true,
    //   date: "22:00",
    // },
    // {
    //   message:
    //     "Spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam ",
    //   author: "Daniel",
    //   authorId: true,
    //   date: "22:05",
    // },
  ];
  return (
    <div className="chat__messages">
      {messages.map((message, i) => {
        return <Message key={message.date + i} message={message} />;
      })}
      <div id="anchorDiv"></div>
    </div>
  );
};
