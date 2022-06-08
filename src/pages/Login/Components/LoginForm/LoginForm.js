import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "./LoginForm.css";

const LoginForm = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = () => {
    console.log("submit");
  };

  return (
    <div className="login">
      <form className="login-container" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          placeholder="Email"
          {...register("Email", { required: true })}
        />
        <input
          type="password"
          placeholder="Password"
          {...register("Password", { required: true })}
        />
        <Link to="/admin">
          <input type="submit" onClick={props.setAdmin} />
        </Link>
      </form>
    </div>
  );
};

export default LoginForm;
