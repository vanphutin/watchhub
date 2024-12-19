import { createBrowserRouter } from "react-router-dom";
import HomePage from "../layouts/HomePage";
import LoginPage from "../layouts/LoginPage"; // Import LoginPage nếu bạn chưa có
import { AuthLayout } from "./AuthLayout";

const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [
      {
        element: <HomePage />,
        path: "/",
      },
      {
        element: <LoginPage />,
        path: "/login",
      },
    ],
  },
]);

export default router;
