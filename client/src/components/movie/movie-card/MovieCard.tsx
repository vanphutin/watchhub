import React from "react";
import "./_movieCard.scss";
import { Link } from "react-router-dom";

interface MovieDetailProps {
  name: string;
  origin_name: string;
  poster_url: string;
  lang: string;
  quality: string;
  episode_current: string;
  slug: string;
}

const MovieCard: React.FC<MovieDetailProps> = ({
  name,
  origin_name,
  episode_current,
  lang,
  poster_url,
  quality,
  slug,
}) => {
  return (
    <div className="movie-card">
      {/* Khung chính của thẻ phim */}
      <Link to={`/phim/${slug}`}>
        <div className="movie-card-frame">
          {/* Ảnh và trạng thái của thẻ */}
          <div className="card-banner">
            <img
              className="card-banner-image"
              src={`https://phimimg.com/${poster_url}`}
              alt="Movie Poster"
            />
            <div className="card-overlay"></div>
            {/* Các trạng thái phụ như Vietsub, trending */}
            <div className="status-badge-intro">
              <div className="status-badge lang">{lang}</div>
              <div className="status-badge quality">{quality}</div>
            </div>
            <div className="status-badge complete">{episode_current}</div>
          </div>

          {/* Phần chi tiết */}
          <div className="card-details">
            <h1 className="entry-title">{name}</h1>
            <h2 className="original-title">{origin_name}</h2>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
