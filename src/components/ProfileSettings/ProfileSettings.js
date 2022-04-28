import React from "react";
import { useForm } from "hooks";
import { useSelector } from "react-redux";

export const ProfileSettings = () => {
  const { auth, ui } = useSelector((state) => state);
  const { form, handleForm } = useForm({
    name: auth.name,
    email: auth.email,
    password: "",
  });

  const handleSave = () => {
    // TODO: Save user data
  };

  return (
    <div className="profile-settings">
      <div className="profile-settings__header">
        <div className="profile-settings__avatar">
          <img
            src={
              auth.img ||
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZYRo0nQdHum-G5HlyiHSiVYrXlyCQnaX3lA&usqp=CAU"
            }
            alt="avatar"
          />
        </div>
        <h3>Daniel Yepes</h3>
      </div>
      <div className="profile-settings__form">
        <input
          autoComplete="off"
          onChange={handleForm}
          className="input"
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          value={form.name}
        />
        <input
          autoComplete="off"
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
        <button
          disabled={ui.loading}
          onClick={handleSave}
          className="btn btn-primary btn-full"
        >
          Save
        </button>
      </div>
    </div>
  );
};
