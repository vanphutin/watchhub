import React, { useEffect, useState } from "react";
import "../assets/style/pages/_login.scss";
import LoginForm from "../components/login/LoginForm";
import { UserLogin } from "../interfaces/User";
import { useSelector } from "react-redux";
import { RootState } from "../redux";
import { useAction } from "../hooks/useAction";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState<UserLogin>({
    username: "",
    password: "",
  });
  const { loading, error, data } = useSelector(
    (state: RootState) => state.login
  );

  // Sử dụng hook useAction
  const { userLogin } = useAction();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    userLogin(login.username, login.password);
  };

  // Kiểm tra nếu đăng nhập thành công và điều hướng
  useEffect(() => {
    if (data) {
      navigate("/");
    }
  }, [data, navigate]);

  return (
    <div className="login">
      <div className="login-form">
        <LoginForm
          login={login}
          onChange={handleInputChange}
          onSubmit={handleSubmit}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  );
};

export default LoginPage;
