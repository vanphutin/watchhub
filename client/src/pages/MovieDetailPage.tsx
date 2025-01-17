import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "../services/apiMovie";
import { useEpisode } from "../hooks/useEpisode";
import MovieDetails from "../components/movie/movie-detail/MovieDetails";
import EpisodeList from "../components/movie/movie-detail/EpisodeList";
import MovieSearchTip from "../layouts/MovieSearchTip";
import Content from "../components/movie/movie-detail/Content";
import useCategoryMovie from "../hooks/useCategoryMovie";
import { useMovies } from "../hooks/useMovies";
import MovieFrame from "../components/movie/movie-frame/MovieFrame";
import MovieDetailLoading from "../components/movie/movie-detail/MovieDetailLoading";
import { Movie } from "../interfaces/MoiveDetail";

const MovieDetailPage = () => {
  const { id } = useParams();
  const { phimLe, phimBo, hoatHinh, tvShows, loading, hasMore, loadMore } =
    useMovies();

  const [movie, setMovie] = useState<Movie | null>(null);
  const movieCategory = useCategoryMovie(movie?.type ?? "");
  const {
    setCurrentMovie,
    setEpisodes,
    episodes,
    currentMovie,
    setCategoryMovieType,
  } = useEpisode();
  // Hàm lấy danh mục
  const typeMovie = (
    category: "hoat-hinh" | "phim-le" | "tv-shows" | "phim-bo" | null
  ) => {
    const categories = {
      "hoat-hinh": hoatHinh,
      "phim-le": phimLe,
      "tv-shows": tvShows,
      "phim-bo": phimBo,
    };
    return categories[category!];
  };

  const movies = typeMovie(movieCategory ?? null);
  useEffect(() => {
    setCategoryMovieType(movies);
  }, [movies]);
  // Hàm gọi API
  const handleApi = async (id: string) => {
    try {
      const apiData = await getMovieDetails(id);
      if (apiData?.status === true) {
        setMovie(apiData.movie);
        setCurrentMovie(apiData.movie);
        setEpisodes(apiData.episodes ?? []);
      }
    } catch (error) {
      console.error("Error fetching movie details:", error);
    }
  };

  useEffect(() => {
    if (id) {
      setCurrentMovie(null);
      setEpisodes([]);
      handleApi(id);
    }
  }, [id]);

  if (loading || !currentMovie) {
    return <MovieDetailLoading />;
  }

  return (
    <div className="movie-detail">
      <div className="movie-detail-infor-box">
        <MovieDetails {...currentMovie} episodes={episodes} />
      </div>
      <div className="movie-detail-episodes-box mt-3">
        <EpisodeList
          server_name={true}
          episode={episodes}
          fullEpisodes={true}
        />
      </div>
      <div className="movie-detail-searchtip-box mt-3">
        <MovieSearchTip />
      </div>
      <div className="movie-detail-content-box mt-3">
        <Content content={movie?.content ?? ""} />
      </div>
      <div className="same-category">
        <MovieFrame
          movie={movies || { items: [], titlePage: "", type_list: "" }}
          title={"common.samecategory"}
          loading={loading}
          hasMore={hasMore[movieCategory ?? ""]}
          loadMore={() => loadMore(movieCategory ?? "")}
        />
      </div>
      <div className="h" style={{ height: "10vh" }}></div>
    </div>
  );
};

export default MovieDetailPage;
