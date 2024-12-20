import React from "react";
import InputField from "../common/inputField/InputField";
import { Link } from "react-router-dom";
import Button from "../common/button/Button";

interface RegisterFormProps {
  register: { username: string; password: string; email: string };
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
  error: string | null;
  loading: boolean;
}

const RegisterForm: React.FC<RegisterFormProps> = ({
  register,
  onChange,
  onSubmit,

  loading,
}) => {
  return (
    <>
      <form onSubmit={onSubmit}>
        <h1 className="login-title">Create an account</h1>
        <div className="form-input">
          <InputField
            type="email"
            className="email"
            name="email"
            value={register.email}
            placeholder="Enter your email"
            onChange={onChange}
          />
          <InputField
            type="text"
            className="username"
            name="username"
            value={register.username}
            placeholder="Enter your username"
            onChange={onChange}
          />
          <InputField
            className="password"
            type="password"
            value={register.password}
            name="password"
            placeholder="Enter your password"
            onChange={onChange}
          />

          <Button
            className="btn btn-dark btn-login"
            type="submit"
            text={loading ? "Registering..." : "Register"}
            disabled={loading}
          />
        </div>
      </form>
      <div className="form-to-sign-in">
        <p className="text-white text-center ">
          Don't you have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </>
  );
};

export default RegisterForm;
