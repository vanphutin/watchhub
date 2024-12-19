import React from "react";
import InputField from "../common/inputField/InputField";
import Button from "../common/button/Button";
import { Link } from "react-router-dom";

interface LoginFormProps {
  login: { username: string; password: string };
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
  error: string | null;
  loading: boolean;
}

const LoginForm: React.FC<LoginFormProps> = ({
  login,
  onChange,
  onSubmit,
  loading,
}) => {
  return (
    <>
      <form onSubmit={onSubmit}>
        <h1 className="login-title">Welcome back ✋</h1>
        <div className="form-input">
          <InputField
            type="text"
            className="username"
            name="username"
            value={login.username}
            placeholder="Enter your username"
            onChange={onChange}
          />
          <InputField
            className="password"
            type="text"
            value={login.password}
            name="password"
            placeholder="Enter your password"
            onChange={onChange}
          />
          {loading ? (
            <Button
              disabled={true}
              type="submit"
              className="btn btn-dark btn-login"
              text="Loading ..."
            />
          ) : (
            <Button
              className="btn btn-dark btn-login"
              type="submit"
              text="Login"
            />
          )}
        </div>
      </form>
      <div className="form-to-sign-in">
        <p className="text-white text-center ">
          Are you new here? <Link to="/register">Register</Link>
        </p>
      </div>
    </>
  );
};

export default LoginForm;
