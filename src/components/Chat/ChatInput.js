import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "hooks";
import { socket as Socket } from "components";
import { startSendMessage } from "services";

export const ChatInput = () => {
  const dispatch = useDispatch();
  const { name, uid } = useSelector((state) => state.auth);
  const { form, handleForm, resetForm } = useForm({ message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = { author: name, authorId: uid, date: Date.now(), ...form };
    Socket.emit("message", message);
    dispatch(startSendMessage(message));
    resetForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="chat__input">
        <div className="chat__input-field">
          <input
            onChange={handleForm}
            type="text"
            name="message"
            id="message"
            value={form.message}
            placeholder="What's up..."
            autoComplete="off"
          />
        </div>
        <div className="chat__input-send">
          <button className="btn">
            <i className="fas fa-paper-plane"></i> <span>Send</span>
          </button>
        </div>
      </div>
    </form>
  );
};
