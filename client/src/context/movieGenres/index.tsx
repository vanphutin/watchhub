import React, { useState, useEffect } from "react";
import { Item } from "../../interfaces/Movie";
import { MovieGenresContext } from "./MovieGenresContext";
import { getMoviesByCategory } from "../../services/apiMovie";
import { handleApiError } from "../../utils/handleApiError";

export const MovieGenresProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [movieGenres, setMoviesGenres] = useState<Item[]>([]);
  const [title, setTitle] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  // Khi component load lại, kiểm tra localStorage
  useEffect(() => {
    const savedKeySlug = localStorage.getItem("keySlug");
    const savedKeyTitle = localStorage.getItem("keyTitle");

    // Nếu có keySlug và keyTitle trong localStorage, tải lại dữ liệu
    if (savedKeySlug && savedKeyTitle) {
      handleGetMoviesByCategory(savedKeySlug, savedKeyTitle);
    }
  }, []);

  // Lưu keySlug và keyTitle vào localStorage khi bắt đầu sử dụng
  const handleGetMoviesByCategory = async (item: string, title: string) => {
    localStorage.setItem("keySlug", item);
    localStorage.setItem("keyTitle", title);

    try {
      setLoading(true);
      const res = await getMoviesByCategory(item);
      if (res && res.length > 0) {
        setMoviesGenres(res); // Cập nhật dữ liệu vào state
        if (!title || title === "") {
          const savedKeyTitle = localStorage.getItem("keyTitle");
          setTitle(savedKeyTitle || ""); // Đảm bảo giá trị title hợp lệ
        } else {
          setTitle(title);
        }
      } else {
        setMoviesGenres([]); // Nếu không có dữ liệu, set mảng rỗng
      }
    } catch (error) {
      handleApiError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <MovieGenresContext.Provider
      value={{
        movieGenres,
        setMoviesGenres,
        title,
        setTitle,
        loading,
        handleGetMoviesByCategory,
      }}
    >
      {children}
    </MovieGenresContext.Provider>
  );
};
