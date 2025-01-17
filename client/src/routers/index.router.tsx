import { createBrowserRouter } from "react-router-dom";

import { AuthLayout } from "./AuthLayout";
import Header from "../layouts/Header";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import RegisterPage from "../pages/RegisterPage";
import AboutPage from "../pages/AboutPage";
import PaginationPage from "../pages/PaginationPage";
import Main from "../pages/Main";
import MovieDetailPage from "../pages/MovieDetailPage";
import MovieGenres from "../pages/MovieGenres";
import PlayerMoviePage from "../pages/PlayerMoviePage";

const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [
      {
        element: <LoginPage />,
        path: "/login",
      },
      {
        element: <RegisterPage />,
        path: "/register",
      },
      {
        element: <Header />, // Header sẽ hiển thị trên các trang con
        children: [
          {
            element: <Main />, // Main bao bọc các trang con như HomePage, AboutPage
            children: [
              {
                element: <HomePage />,
                path: "/",
              },
              {
                element: <PaginationPage />,
                path: "/last-update",
              },
              {
                element: <AboutPage />,
                path: "/about",
              },
              {
                element: <MovieDetailPage />,
                path: "/movie/:id",
              },
              {
                element: <MovieGenres />,
                path: "/movie-genres/:id",
              },
              {
                path: "/movie-play/:moviename/:tapPhim",
                element: <PlayerMoviePage />,
              },
              {
                path: "*",
                element: <h1>404 - Không tìm thấy trang</h1>, // Route mặc định
              },
            ],
          },
        ],
      },
    ],
  },
]);

export default router;
