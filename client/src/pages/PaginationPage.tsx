import React from "react";
import { useMovies } from "../hooks/useMovies";
import { useLocation } from "react-router-dom";
import MovieFrame from "../components/movie/movie-frame/MovieFrame";
import SeeMore from "../components/common/seeMore/SeeMore";

const PaginationPage = () => {
  const location = useLocation();
  const type_list = location.state?.movie?.type_list; // Lấy loại phim từ `state` hoặc mặc định là "hoat-hinh".
  const title = location.state?.title; // Lấy loại phim từ `state` hoặc mặc định là "hoat-hinh".
  const { phimLe, phimBo, hoatHinh, tvShows, loading, hasMore, loadMore } =
    useMovies();

  // Xác định danh sách phim dựa trên `type_list`.
  const movie =
    type_list === "phim-le"
      ? phimLe
      : type_list === "phim-bo"
      ? phimBo
      : type_list === "hoat-hinh"
      ? hoatHinh
      : tvShows;

  // Hàm xử lý khi nhấn "Xem thêm"
  const handleLoadMore = () => {
    loadMore(type_list); // Gọi `loadMore` với loại phim phù hợp.
  };

  return (
    <div className="pagination ">
      <div className="pagination-item text-center ">
        {/* Thành phần MovieFrame hiển thị danh sách phim */}
        <MovieFrame
          movie={movie}
          title={title}
          loading={loading}
          hasMore={hasMore[type_list]}
        />
        {/* Hiển thị nút See More nếu có thêm dữ liệu */}
        {hasMore[type_list] && !loading && <SeeMore onClick={handleLoadMore} />}
      </div>
    </div>
  );
};

export default PaginationPage;
