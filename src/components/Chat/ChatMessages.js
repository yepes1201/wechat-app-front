import React from "react";
import { Message } from "components";
import { useSelector } from "react-redux";

export const ChatMessages = () => {
  const { chat, auth } = useSelector((state) => state);
  const { messages } = chat.content;

  // { message: "Hello", author: "Daniel", authorId: 123123123, date: "21:52" },
  return (
    <div className="chat__messages">
      {messages.map((message, i) => {
        return (
          <Message key={message.date + i} message={message} myId={auth.uid} />
        );
      })}
      <div id="anchorDiv"></div>
    </div>
  );
};
