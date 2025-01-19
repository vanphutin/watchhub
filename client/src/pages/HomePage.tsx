import { useTranslation } from "react-i18next";
import "../assets/style/pages/_home.scss";
import MovieFrame from "../components/movie/movie-frame/MovieFrame";
import { useMovies } from "../hooks/useMovies";

const HomePage: React.FC = () => {
  const { phimLe, phimBo, hoatHinh, tvShows, loading, hasMore, loadMore } =
    useMovies();
  const { t } = useTranslation();

  return (
    <div className="home text-white ">
      <h1 className="pt-3 text-center welcome">{t("common.welcome")}👋</h1>

      {/* phim xem gan day */}
      {/* Phim Hoạt Hình */}
      <div className="cartoon">
        <MovieFrame
          movie={hoatHinh}
          title={"movie.cartoon.title.heading"}
          loading={loading}
          hasMore={hasMore["hoat-hinh"]}
          loadMore={() => loadMore("hoat-hinh")}
        />
      </div>

      {/* Phim Lẻ */}
      <div className="single-movie">
        <MovieFrame
          href="single-section"
          movie={phimLe}
          title={"movie.singlemovie.title.heading"}
          loading={loading}
          hasMore={hasMore["phim-le"]}
          loadMore={() => loadMore("phim-le")}
        />
      </div>

      {/* Phim chương trình truyền hình */}
      <div className="tv-shows">
        <MovieFrame
          href="tvshows-section"
          movie={tvShows}
          title={"movie.tvshows.title.heading"}
          loading={loading}
          hasMore={hasMore["tvShows"]}
          loadMore={() => loadMore("tvShows")}
        />
      </div>

      {/* Phim bộ */}
      <div className="tv-series">
        <MovieFrame
          href="tvseries-section"
          movie={phimBo}
          title={"movie.tvseries.title.heading"}
          loading={loading}
          hasMore={hasMore["phim-bo"]}
          loadMore={() => loadMore("phim-bo")}
        />
      </div>
    </div>
  );
};

export default HomePage;
