import { Link, useParams } from "react-router-dom";
import { Episode } from "../../../interfaces/MoiveDetail";
import Button from "../../common/button/Button";
import "./_episodeList.scss";
import { FaServer } from "react-icons/fa";
import { useEpisode } from "../../../hooks/useEpisode";
import { EpisodeListType } from "../../../context/episodeContext/EpisodeContext";

interface EpisodeListProps {
  episode: Episode[];
  fullEpisodes: boolean;
  server_name?: boolean | false;
}

const EpisodeList: React.FC<EpisodeListProps> = ({
  episode,
  fullEpisodes,
  server_name,
}) => {
  const renderTopFive = episode.flatMap((item) => {
    return item.server_data
      .sort((a, b) => b.filename.localeCompare(a.filename))
      .slice(0, 5);
  });
  const { id } = useParams();
  const { setCurrentEpisode } = useEpisode();

  const handleWatchEpisode = (render: EpisodeListType | undefined) => {
    if (render) {
      setCurrentEpisode(render);
    }
  };
  return (
    <div className="episode-list">
      {server_name && (
        <h2 className="server_name">
          <span className="icon">
            <FaServer />
          </span>
          {episode.map((s) => s.server_name)}
        </h2>
      )}
      <>
        {episode && fullEpisodes ? (
          <ul className="full-episodes">
            {episode.map((render) =>
              render.server_data
                .sort((a, b) => a.filename.localeCompare(b.filename))
                .map((render, index) => (
                  <li key={index} className="p-1">
                    <span>
                      <Link
                        to={`/movie-play/${id}/${render.slug}`}
                        onClick={() => handleWatchEpisode(render)}
                      >
                        <Button text={render.name} />
                      </Link>
                    </span>
                  </li>
                ))
            )}
          </ul>
        ) : (
          <ul className="top-five">
            {renderTopFive &&
              renderTopFive.map((render, index) => (
                <li key={index}>
                  <Link
                    to={`/movie-play/${id}/${render.slug}`}
                    onClick={() => handleWatchEpisode(render)}
                  >
                    <Button text={render.name} />
                  </Link>
                </li>
              ))}
          </ul>
        )}
      </>
    </div>
  );
};

export default EpisodeList;
