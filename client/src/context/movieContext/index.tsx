import { ReactNode, useEffect, useState } from "react";
import { ApiResponseMovie, Item } from "../../interfaces/Movie";
import { getMovies } from "../../services/apiMovie";
import { MovieContext } from "./MovieContext";

interface MovieProviderProps {
  children: ReactNode;
}

const MovieProvider: React.FC<MovieProviderProps> = ({ children }) => {
  const [phimLe, setPhimLe] = useState<{
    titlePage: string;
    type_list: string;
    items: Item[];
  }>({
    titlePage: "",
    type_list: "phim-le",
    items: [],
  });

  const [phimBo, setPhimBo] = useState<{
    titlePage: string;
    type_list: string;
    items: Item[];
  }>({
    titlePage: "",
    type_list: "phim-bo",
    items: [],
  });

  const [hoatHinh, setHoatHinh] = useState<{
    titlePage: string;
    type_list: string;
    items: Item[];
  }>({
    titlePage: "",
    type_list: "hoat-hinh",
    items: [],
  });

  const [tvShows, setTvShows] = useState<{
    titlePage: string;
    type_list: string;
    items: Item[];
  }>({
    titlePage: "",
    type_list: "tv-shows",
    items: [],
  });

  const [pages, setPages] = useState<{ [key: string]: number }>({
    "phim-le": 1,
    "phim-bo": 1,
    "hoat-hinh": 1,
    "tv-shows": 1,
  });

  const [loading, setLoading] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<{ [key: string]: boolean }>({
    "phim-le": true,
    "phim-bo": true,
    "hoat-hinh": true,
    "tv-shows": true,
  });

  // Hàm fetch dữ liệu từ API
  const fetchMovies = async (type: string, page: number) => {
    setLoading(true);
    try {
      const response = await getMovies(`${type}?limit=12&page=${page}`);
      const data: ApiResponseMovie = await response;

      if (data.items.length > 0) {
        const updatedData = {
          titlePage: data.titlePage || "",
          type_list: type,
          items: data.items,
        };

        // Cập nhật state dựa trên loại phim
        if (type === "phim-le") {
          setPhimLe((prev) => ({
            ...prev,
            ...updatedData,
            items: mergeUniqueItems(prev.items, data.items),
          }));
        } else if (type === "phim-bo") {
          setPhimBo((prev) => ({
            ...prev,
            ...updatedData,
            items: mergeUniqueItems(prev.items, data.items),
          }));
        } else if (type === "hoat-hinh") {
          setHoatHinh((prev) => ({
            ...prev,
            ...updatedData,
            items: mergeUniqueItems(prev.items, data.items),
          }));
        } else if (type === "tv-shows") {
          setTvShows((prev) => ({
            ...prev,
            ...updatedData,
            items: mergeUniqueItems(prev.items, data.items),
          }));
        }
      } else {
        setHasMore((prev) => ({ ...prev, [type]: false }));
      }
    } catch (error) {
      console.error(`Error fetching ${type}:`, error);
    } finally {
      setLoading(false);
    }
  };

  // Hàm hợp nhất các items nhưng loại bỏ trùng lặp
  const mergeUniqueItems = (
    existingItems: Item[],
    newItems: Item[]
  ): Item[] => {
    const existingIds = new Set(existingItems.map((item) => item._id));
    return [
      ...existingItems,
      ...newItems.filter((item) => !existingIds.has(item._id)),
    ];
  };

  // Load dữ liệu ban đầu
  useEffect(() => {
    Object.entries(pages).forEach(([type, page]) => {
      fetchMovies(type, page);
    });
  }, [pages]);

  // Hàm load thêm dữ liệu
  const loadMore = (type: string) => {
    if (!loading && hasMore[type]) {
      setPages((prev) => ({
        ...prev,
        [type]: prev[type] + 1,
      }));
    }
  };

  return (
    <MovieContext.Provider
      value={{
        phimLe,
        phimBo,
        hoatHinh,
        tvShows,
        loading,
        hasMore,
        loadMore,
        fetchMovies, // Thêm fetchMovies vào đây
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default MovieProvider;
