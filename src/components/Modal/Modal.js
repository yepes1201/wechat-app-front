import React from "react";
import { useDispatch } from "react-redux";
import { useForm } from "hooks";
import { closeAddFriend } from "services";

export const Modal = () => {
  const dispatch = useDispatch();
  const { form, handleForm } = useForm({
    email: "",
  });
  const handleModal = () => {
    dispatch(closeAddFriend());
  };

  return (
    <div className="modal-bg animate__animated animate__fadeIn">
      <div className="modal">
        <div>
          <div className="modal-header">
            <h3>Add Friend</h3>
            <div onClick={handleModal} className="modal-close">
              <i className="fas fa-times"></i>
            </div>
          </div>
          <p className="modal-p">Type your friend's email</p>
        </div>
        <div>
          <input
            autoComplete="off"
            className="input"
            onChange={handleForm}
            type="email"
            name="email"
            placeholder="example@mail.com"
            value={form.email}
          />
        </div>
        <div>
          <button className="btn btn-primary btn-full">Add Friend</button>
        </div>
      </div>
    </div>
  );
};
