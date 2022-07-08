import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Message, socket as Socket } from "components";
import { startSendMessage } from "services";

export const ChatMessages = () => {
  const dispatch = useDispatch();
  const { chat, auth } = useSelector((state) => state);
  const { messages, id } = chat.content;

  useEffect(() => {
    Socket.on("message", (message) => {
      if (message.authorId !== auth.uid) {
        dispatch(startSendMessage(message));
      } else {
        const anchorDiv = document.getElementById("anchorDiv");
        anchorDiv.scrollIntoView({ behavior: "smooth" });
      }
    });

    return () => {
      Socket.off();
    };
  }, [auth.name, id, dispatch, auth.uid]);

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
