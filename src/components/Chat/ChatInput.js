import React from "react";

export const ChatInput = () => {
  return (
    <div className="chat__input">
      <div className="chat__input-field">
        <input
          type="text"
          name="message"
          id="message"
          placeholder="What's up..."
        />
      </div>
      <div className="chat__input-send">
        <button className="btn">
          <i className="fas fa-paper-plane"></i> Send
        </button>
      </div>
    </div>
  );
};
