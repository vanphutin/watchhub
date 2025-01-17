import { useState, useEffect } from "react";
import {
  CategoryMovieType,
  EpisodeContext,
  EpisodeListType,
} from "./EpisodeContext";
import { Episode, Movie } from "../../interfaces/MoiveDetail";

export const MovieContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [currentEpisode, setCurrentEpisode] = useState<EpisodeListType | null>(
    null
  );
  const [currentMovie, setCurrentMovie] = useState<Movie | null>(null);
  const [episodes, setEpisodes] = useState<Episode[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(-1);
  const [categoryMovieType, setCategoryMovieType] =
    useState<CategoryMovieType | null>(null);

  // Khôi phục currentEpisode và episodes từ localStorage khi trang tải lại
  useEffect(() => {
    const storedEpisode = localStorage.getItem("currentEpisode");
    const storedEpisodes = localStorage.getItem("storedEpisode");
    if (storedEpisode) {
      setCurrentEpisode(JSON.parse(storedEpisode));
    }

    if (storedEpisodes) {
      setEpisodes(JSON.parse(storedEpisodes));
    }
  }, []);

  // Lưu currentEpisode và episodes vào localStorage khi chúng thay đổi
  useEffect(() => {
    if (currentEpisode) {
      localStorage.setItem("currentEpisode", JSON.stringify(currentEpisode));
    }
    if (episodes.length > 0) {
      localStorage.setItem("storedEpisode", JSON.stringify(episodes));
    }
  }, [currentEpisode, episodes]);

  // Hàm xử lý chọn tập (episode)
  useEffect(() => {
    if (currentEpisode && episodes.length > 0) {
      const index = episodes[0].server_data.findIndex(
        (c) => c.slug === currentEpisode.slug
      );
      if (index !== -1) {
        setCurrentIndex(index);
      } else {
        setCurrentIndex(-1); // Nếu không tìm thấy tập phim
      }
    }
  }, [currentEpisode, episodes]);

  // Hàm xử lý chuyển sang tập tiếp theo
  const handleNextEpisode = () => {
    if (episodes.length === 0 || currentIndex === -1) return;

    if (currentIndex < episodes[0].server_data.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setCurrentEpisode(episodes[0].server_data[currentIndex + 1]);
    } else {
      setError("Không còn tập nào nữa");
    }
  };

  // Hàm xử lý quay lại tập trước
  const handlePrevEpisode = () => {
    if (currentIndex === 0 || episodes.length === 0 || currentIndex === -1)
      return;

    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setCurrentEpisode(episodes[0].server_data[currentIndex - 1]);
    } else {
      setError("Không còn tập nào nữa");
    }
  };

  // Sử dụng useEffect để thiết lập chỉ số tập phim ban đầu dựa trên phim hoặc tập phim đã chọn
  useEffect(() => {
    if (currentMovie && episodes.length > 0) {
      const defaultEpisodeIndex = episodes[0].server_data.findIndex(
        (ep) => ep.slug === currentMovie.slug
      );
      setCurrentIndex(defaultEpisodeIndex >= 0 ? defaultEpisodeIndex : 0);
    }
  }, [currentMovie, episodes]);
  return (
    <EpisodeContext.Provider
      value={{
        currentEpisode,
        categoryMovieType,
        setCategoryMovieType,
        setCurrentEpisode,
        currentMovie,
        setCurrentMovie,
        episodes,
        setEpisodes,
        handleNextEpisode,
        handlePrevEpisode,
        error,
      }}
    >
      {children}
    </EpisodeContext.Provider>
  );
};
