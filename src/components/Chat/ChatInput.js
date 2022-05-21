import { useForm } from "hooks";
import React from "react";

export const ChatInput = () => {
  const { form, handleForm, resetForm } = useForm({ message: "" });
  const handleSubmit = (e) => {
    e.preventDefault();

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
