import React from "react";
import { ChatHeader, ChatInput, ChatMessages } from "components";

export const Chat = () => {
  return (
    <div className="chat">
      <ChatHeader />
      <ChatMessages />
      <ChatInput />
    </div>
  );
};
