import React from "react";
import { useDispatch, useSelector } from "react-redux";
import validator from "validator";
import { toast } from "react-toastify";
import { useForm } from "hooks";
import { closeAddFriend, startAddFriend } from "services";
import { socket as Socket } from "components";
import { toastifyOptions } from "utils";

export const Modal = () => {
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state);
  const { form, handleForm } = useForm({
    email: "",
  });

  const handleModal = () => {
    dispatch(closeAddFriend());
  };

  const handleAddFriend = () => {
    if (form.email === auth.email) {
      toast.error("You can not add yourself", toastifyOptions);
    } else if (validator.isEmail(form.email)) {
      Socket.emit("add", { to: form.email, from: auth });
      dispatch(startAddFriend(form.email));
      dispatch(closeAddFriend());
    } else {
      toast.error("Please type a valid email", toastifyOptions);
    }
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
          <button
            onClick={handleAddFriend}
            className="btn btn-primary btn-full"
          >
            Add Friend
          </button>
        </div>
      </div>
    </div>
  );
};
