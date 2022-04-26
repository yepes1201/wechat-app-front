import { useForm } from "hooks";
import React from "react";

export const ProfileSettings = () => {
  const { form, handleForm } = useForm({
    name: "Daniel Yepes",
    email: "danielyepes@mail.com",
    password: "123456789",
  });
  return (
    <div className="profile-settings">
      <div className="profile-settings__header">
        <div className="profile-settings__avatar">
          <img src="https://via.placeholder.com/150" alt="avatar" />
        </div>
        <h3>Daniel Yepes</h3>
      </div>
      <div className="profile-settings__form">
        <input
          onChange={handleForm}
          className="input"
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          value={form.name}
        />
        <input
          onChange={handleForm}
          className="input"
          type="email"
          id="email"
          name="email"
          placeholder="example@mail.com"
          value={form.email}
        />
        <input
          onChange={handleForm}
          className="input"
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          value={form.password}
        />
        <button className="btn btn-primary btn-full">Save</button>
      </div>
    </div>
  );
};
