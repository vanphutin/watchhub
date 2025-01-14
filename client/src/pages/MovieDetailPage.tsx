import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "../services/apiMovie";
import { Episode, Movie } from "../interfaces/MoiveDetail";
import MovieDetails from "../components/movie/movie-detail/MovieDetails";
import EpisodeList from "../components/movie/movie-detail/EpisodeList";
import MovieSearchTip from "../layouts/MovieSearchTip";
import Content from "../components/movie/movie-detail/Content";
import useCategoryMovie from "../hooks/useCategoryMovie";
import { useMovies } from "../hooks/useMovies";
import MovieFrame from "../components/movie/movie-frame/MovieFrame";
import MovieDetailLoading from "../components/movie/movie-detail/MovieDetailLoading";

const MovieDetailPage = () => {
  const { id } = useParams();
  const { phimLe, phimBo, hoatHinh, tvShows, loading, hasMore, loadMore } =
    useMovies();

  const [movie, setMovie] = useState<Movie | null>(null);
  const movieCategory = useCategoryMovie(movie?.type ?? "");
  // console.log("movieType", movieCategory);

  const typeMovie = (
    category: "hoat-hinh" | "phim-le" | "tv-shows" | "phim-bo" | null
  ) => {
    if (category === "hoat-hinh") {
      return hoatHinh;
    } else if (category === "phim-le") {
      return phimLe;
    } else if (category === "tv-shows") {
      return tvShows;
    } else if (category === "phim-bo") {
      return phimBo;
    }
    return null;
  };
  const movies = typeMovie(movieCategory);

  // console.log("Movies for category:", movies);
  const [episodes, setEpisodes] = useState<Episode[] | null>(null); // Quản lý episodes
  // console.log("Component Render movie:", movie);
  // console.log("Component Render episode:", episodes);
  const handleApi = async (id: string) => {
    try {
      const apiData = await getMovieDetails(id);
      if (apiData?.status === true) {
        setMovie(apiData.movie);
        setEpisodes(apiData.episodes ?? null);
      }
    } catch (error) {
      console.error("Error fetching movie details:", error);
    }
  };

  useEffect(() => {
    if (id) {
      handleApi(id);
    }
  }, [id]);

  if (!movie && !episodes) {
    return <MovieDetailLoading />;
  }

  return (
    <div className="movie-detail ">
      <div className="movie-detail-infor-box">
        {movie && episodes && (
          <MovieDetails
            name={movie?.name}
            year={movie.year}
            actor={movie.actor}
            lang={movie?.lang}
            origin_name={movie?.origin_name}
            chieurap={movie?.chieurap}
            director={movie.director}
            time={movie.time}
            country={movie.country}
            poster_url={movie.poster_url}
            episodes={episodes}
            category={movie.category}
            episode_current={movie.episode_current}
            type={movie.type}
          />
        )}
      </div>
      <div className="movie-detail-episodes-box  mt-3">
        {episodes && (
          <EpisodeList
            server_name={true}
            episode={episodes}
            fullEpisodes={true}
          />
        )}
      </div>
      <div className="movie-detail-searchtip-box   mt-3">
        <MovieSearchTip />
      </div>
      <div className="movie-detail-content-box   mt-3">
        {movie && <Content content={movie?.content ?? ""} />}
      </div>
      <div className="same-category">
        <div className="cartoon">
          <MovieFrame
            movie={
              movies ? movies : { items: [], titlePage: "", type_list: "" }
            }
            title={"common.samecategory"}
            loading={loading}
            hasMore={hasMore[movieCategory ?? ""]}
            loadMore={() => loadMore(movieCategory ?? "")}
          />
        </div>
      </div>
      <div className="h" style={{ height: "10vh" }}></div>
    </div>
  );
};

export default MovieDetailPage;
