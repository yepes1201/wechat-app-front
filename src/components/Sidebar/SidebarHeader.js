import React from "react";
import { useForm } from "hooks";

export const SidebarHeader = () => {
  const { form, handleForm } = useForm({ friendName: "" });
  return (
    <div className="sidebar__header">
      <div className="sidebar__header-form">
        <i className="fas fa-search"></i>
        <input
          autoComplete="off"
          className="input"
          name="friendName"
          placeholder="Search Friend"
          onChange={handleForm}
          type="text"
          value={form.friendName}
        />
      </div>
      <div className="sidebar__header-add">
        <i className="fas fa-user-plus"></i>
      </div>
    </div>
  );
};
