import { createBrowserRouter } from "react-router-dom";

import { AuthLayout } from "./AuthLayout";
import Header from "../layouts/Header";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import RegisterPage from "../pages/RegisterPage";
import PaginationPage from "../pages/PaginationPage";
import Main from "../pages/Main";
import MovieDetailPage from "../pages/MovieDetailPage";
import MovieGenres from "../pages/MovieGenres";
import PlayerMoviePage from "../pages/PlayerMoviePage";
import SearchResult from "../pages/SearchResult";
import TechnologiesPage from "../pages/TechnologiesPage";
import NotFoundPage from "../pages/NotFoundPage";

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
                element: <TechnologiesPage />,
                path: "/technologies",
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
                path: "/tim-kiem",
                element: <SearchResult />,
              },
              {
                path: "*",
                element: <NotFoundPage />, // Route mặc định
              },
            ],
          },
        ],
      },
    ],
  },
]);

export default router;
