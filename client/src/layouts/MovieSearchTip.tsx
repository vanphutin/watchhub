import React from "react";
import { IoWarningSharp } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import "../assets/style/layout/_movieSearchTip.scss";

const MovieSearchTip = () => {
  const { t } = useTranslation();

  return (
    <div className="movie-search-tip">
      <div className="tip-icon">
        <IoWarningSharp height={100} />
      </div>
      <div className="tip-msg">
        {t("movie.movieSearchTip.message")}{" "}
        <span className="syntax">{t("movie.movieSearchTip.syntax")}</span>.{" "}
        {t("movie.movieSearchTip.example")}{" "}
        <span className="name">{t("movie.movieSearchTip.movieName")}</span>,{" "}
        {t("movie.movieSearchTip.domain")}. {t("movie.movieSearchTip.website")}{" "}
        {t("movie.movieSearchTip.commentNote")}
      </div>
    </div>
  );
};

export default MovieSearchTip;
