import React from "react";
import { useForm } from "hooks";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";

import { Input } from "components";

import { startLoginEmailAndPassword, startLoginGoogle } from "services";
import { isLoginFormValid, toastifyOptions, errors } from "utils";

export const Login = () => {
  const dispatch = useDispatch();
  const ui = useSelector((state) => state.ui);
  const { form, handleForm } = useForm({ email: "", password: "" });

  const handleLoginEmailAndPassword = () => {
    if (isLoginFormValid(form)) {
      dispatch(startLoginEmailAndPassword(form.email, form.password));
    } else {
      toast.error(errors.invalidLogin, toastifyOptions);
    }
  };

  const handleGoogleLogin = async () => {
    dispatch(startLoginGoogle());
  };

  return (
    <div className="auth">
      <h1>WeChat!</h1>
      <div className="auth__form-container animate__animated animate__fadeIn">
        <h2>Log in</h2>
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
        <button
          disabled={ui.loading}
          onClick={handleLoginEmailAndPassword}
          className="btn btn-primary btn-full"
        >
          Log In
        </button>
        <button
          disabled={ui.loading}
          onClick={handleGoogleLogin}
          className="btn btn-light btn-full"
        >
          <i className="fab fa-google"></i> Sign In with Google
        </button>

        <Link to="/auth/register">Don't have an account?</Link>
      </div>
    </div>
  );
};
