import React from "react";
import Button from "../../common/button/Button";
import { FaRegCalendarAlt } from "react-icons/fa";
import { CiClock2 } from "react-icons/ci";
import CastList from "./CastList";
import EpisodeList from "./EpisodeList";
import CategoryList from "./CategoryList";
import { Movie } from "../../../interfaces/MoiveDetail";
import "./_movieDetails.scss";
import { FaPlay } from "react-icons/fa";
import useDeviceType from "../../../hooks/useDeviceType";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const MovieDetails: React.FC<Movie> = ({
  poster_url,
  name,
  chieurap,
  time,
  year,
  actor,
  lang,
  category,
  country,
  episodes,
  origin_name,
  episode_current,
}) => {
  const size = useDeviceType();
  const { t } = useTranslation();
  const getLinkView = episodes.map((e) => e.server_data[0].link_embed);
  return (
    <div
      className={`movie-detail-box pt-3 ${
        size === "desktop" ? "container" : ""
      }`}
    >
      <div className="movie-detail row">
        <div className="image-poster my-3 col-md-3 col-12">
          <div className="image-banner">
            {" "}
            <img src={poster_url} alt="" className="img" />
            <Link to={getLinkView.toString()} target="_black">
              <Button
                text={t("common.seenow")}
                className="halim-watch-box"
                icon={<FaPlay />}
              />
            </Link>
          </div>
        </div>
        <div className="movie-info my-3 col-md-9 col-12">
          <h1 className="title mb-title">{name}</h1>
          <h6 className="origin-name  mb-title">
            <i>{origin_name}</i>
          </h6>
          <hr />
          <div className="time mb-title">
            <p className="calendar ">
              <span className="icon">
                <FaRegCalendarAlt />
              </span>
              <span className="color-text">{year}</span>
            </p>

            <div className="lock">
              <span className="icon">
                <CiClock2 />
              </span>
              {time}
            </div>
          </div>
          <div className="cinema mb-title">
            <span>{t("movie.movieDetails.cinema")}: </span>
            {chieurap ? t("common.yes") : t("common.no")}
          </div>
          <div className="lang mb-title">
            <span>{t("movie.movieDetails.language")}: </span>
            {lang}
          </div>
          <div className="episode mb-title">
            <span>{t("movie.movieDetails.episodeStatus")}: </span>
            {episode_current}
          </div>
          <div className="lastEp mb-title cast ">
            <span> {t("movie.movieDetails.newestEpisode")}: </span>
            <EpisodeList fullEpisodes={false} episode={episodes} />
          </div>
          <div className="country mb-title">
            <span>{t("movie.movieDetails.country")}: </span>
            {country?.map((c) => c.name)}
          </div>
          <div className="cast mb-title">
            <span>{t("movie.movieDetails.cast")}: </span>
            <CastList actors={actor} />
          </div>
          <div className="categorty cast mb-title">
            <span>{t("movie.movieDetails.category")}: </span>{" "}
            <CategoryList categories={category} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
