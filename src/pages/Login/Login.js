import React from "react";
import { Link } from "react-router-dom";

import { useForm } from "hooks";
import { Input } from "components";

export const Login = () => {
  const { form, handleForm } = useForm({ email: "", password: "" });

  // TODO: login
  return (
    <div className="auth">
      <h1>WeChat!</h1>
      <div className="auth__form-container">
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
        <button className="btn btn-primary btn-full">Log In</button>
        <button className="btn btn-light btn-full">
          <i className="fab fa-google"></i> Sign In with Google
        </button>

        <Link to="/auth/register">Don't have an account?</Link>
      </div>
    </div>
  );
};
