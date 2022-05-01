import React from "react";
import { useForm } from "hooks";
import { useDispatch } from "react-redux";
import { openAddFriend } from "services";

export const SidebarHeader = () => {
  const dispatch = useDispatch();
  const { form, handleForm } = useForm({ friendName: "" });

  const handleModal = () => {
    dispatch(openAddFriend());
  };

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
      <div onClick={handleModal} className="sidebar__header-add">
        <i className="fas fa-user-plus"></i>
      </div>
    </div>
  );
};
