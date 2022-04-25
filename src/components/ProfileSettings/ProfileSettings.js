import React from "react";

export const ProfileSettings = () => {
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
          className="input"
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          value="Daniel Yepes"
        />
        <input
          className="input"
          type="email"
          id="email"
          name="email"
          placeholder="example@mail.com"
          value="danielyepes@mail.com"
        />
        <input
          className="input"
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          value=""
        />
        <button className="btn btn-primary btn-full">Save</button>
      </div>
    </div>
  );
};
