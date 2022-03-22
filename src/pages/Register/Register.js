import React from "react";
import { useForm } from "hooks";
import { Input } from "components";
import { Link } from "react-router-dom";

export const Register = () => {
  const { form, handleForm } = useForm({
    username: "",
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  // TODO: registration
  return (
    <div className="auth">
      <h1>WeChat!</h1>
      <div className="auth__form-container">
        <h2>Create account</h2>
        <Input
          onChange={handleForm}
          type="text"
          name="username"
          placeholder="Username"
          value={form.username}
        />
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
        <button className="btn btn-primary btn-full">Create account</button>

        <Link to="/auth/login">Already have an account?</Link>
      </div>
    </div>
  );
};
