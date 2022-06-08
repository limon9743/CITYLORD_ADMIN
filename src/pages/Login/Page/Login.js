import React from "react";
import LoginForm from "../Components/LoginForm/LoginForm";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-form-page-container">
      <LoginForm />
      <LoginForm />
      <LoginForm />
      <LoginForm />
    </div>
  );
};

export default Login;
