import React, { useState } from "react";
import RegisterForm from "../components/register/registerForm";
import { UserRegister } from "../interfaces/User";
import "../assets/style/pages/_login.scss";
import { handleApiError } from "../utils/handleApiError";
import { registerUser } from "../services/apiAuth";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [register, setRegister] = useState<UserRegister>({
    email: "",
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegister({ ...register, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await registerUser(register);
      if (res.status === "success") {
        navigate("/login");
      } else {
        setError(res.message);
      }
    } catch (error) {
      setError(handleApiError(error));
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="login register">
      <div className="login-form register-form">
        <RegisterForm
          register={register}
          onChange={handleInputChange}
          onSubmit={handleSubmit}
          loading={loading}
          error={error}
        />
      </div>
    </div>
  );
};

export default RegisterPage;
