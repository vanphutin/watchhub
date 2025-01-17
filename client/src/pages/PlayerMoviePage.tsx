import EpisodeList from "../components/movie/movie-detail/EpisodeList";
import MovieFrame from "../components/movie/movie-frame/MovieFrame";
import MoviePlay from "../components/movie/movie-play/MoviePlay";
import { useEpisode } from "../hooks/useEpisode";

const PlayerMoviePage = () => {
  const {
    handleNextEpisode,
    handlePrevEpisode,
    currentEpisode,
    episodes,
    categoryMovieType,
  } = useEpisode();
  return (
    <div>
      {currentEpisode && episodes && (
        <>
          <MoviePlay
            episodeUrl={currentEpisode}
            handleNextEpisode={handleNextEpisode}
            handlePrevEpisode={handlePrevEpisode}
          />
          <EpisodeList
            episode={episodes}
            fullEpisodes={true}
            server_name={true}
          />
        </>
      )}

      <div className="same-category">
        <MovieFrame
          movie={
            categoryMovieType || { items: [], titlePage: "", type_list: "" }
          }
          title={"common.samecategory"}
          // loading={loading}
          // hasMore={hasMore[movieCategory ?? ""]}
          // loadMore={() => loadMore(movieCategory ?? "")}
        />
      </div>
    </div>
  );
};

export default PlayerMoviePage;
