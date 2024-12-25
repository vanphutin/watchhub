import { createBrowserRouter } from "react-router-dom";
import HomePage from "../layouts/HomePage";
import LoginPage from "../layouts/LoginPage"; // Import LoginPage nếu bạn chưa có
import { AuthLayout } from "./AuthLayout";
import RegisterPage from "../layouts/RegisterPage";
import Header from "../layouts/Header";

const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [
      {
        element: <LoginPage />,
        path: "/login",
      },
      {
        element: <Header />,
        children: [
          {
            element: <HomePage />,
            path: "/",
          },
        ],
      },
      {
        element: <RegisterPage />,
        path: "/register",
      },
    ],
  },
]);

export default router;
