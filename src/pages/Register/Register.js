import React from "react";
import { useDispatch } from "react-redux";
import { useForm } from "hooks";

import { Link } from "react-router-dom";
import { Input } from "components";
import { registerEmailAndPassword } from "services/actions/auth/auth";
import { isRegisterFormValid } from "utils/validations/auth";

export const Register = () => {
  const dispatch = useDispatch();
  const { form, handleForm } = useForm({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const handleRegistration = () => {
    if (isRegisterFormValid(form)) {
      dispatch(registerEmailAndPassword(form.email, form.name, form.password));
    }
  };

  return (
    <div className="auth">
      <h1>WeChat!</h1>
      <div className="auth__form-container">
        <h2>Create account</h2>
        <Input
          onChange={handleForm}
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
        />
        <Input
          onChange={handleForm}
          type="email"
          placeholder="example@mail.com"
          value={form.email}
        />
        <Input
          onChange={handleForm}
          type="password"
          placeholder="Password"
          value={form.password}
        />
        <Input
          onChange={handleForm}
          type="password"
          name="password2"
          placeholder="Confirm Password"
          value={form.password2}
        />
        <button
          onClick={handleRegistration}
          className="btn btn-primary btn-full"
        >
          Create account
        </button>

        <Link to="/auth/login">Already have an account?</Link>
      </div>
    </div>
  );
};
