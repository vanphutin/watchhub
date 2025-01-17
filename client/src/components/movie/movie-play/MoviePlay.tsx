// MoviePlay.tsx
import React, { useState } from "react";
import VideoPlayer from "../video-card/VideoPlayer";
import Heading from "../../common/heading/Heading";
import { EpisodeListType } from "../../../context/episodeContext/EpisodeContext";
import Button from "../../common/button/Button";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { useTranslation } from "react-i18next";

interface MoviePlayProps {
  episodeUrl: EpisodeListType | null; // Lấy episodeUrl từ props
  handleNextEpisode: () => void;
  handlePrevEpisode: () => void;
}
const MoviePlay: React.FC<MoviePlayProps> = ({
  episodeUrl,
  handleNextEpisode,
  handlePrevEpisode,
}) => {
  const [autoNext, setAutoNext] = useState<boolean>(true);
  const { t } = useTranslation();

  return (
    <div>
      {episodeUrl && (
        <>
          <VideoPlayer src={episodeUrl?.link_m3u8} autoNext={autoNext} />{" "}
          <div className=" btn-event d-flex gap-3 justify-content-center align-items-center">
            <button onClick={handlePrevEpisode} className="btn btn-info btn-sm">
              <GrFormPrevious /> {t("common.eventvideo.prev")}
            </button>
            <Button
              onClick={() => setAutoNext((prev) => !prev)}
              text={
                t("common.eventvideo.noit") +
                `: ${autoNext ? t("common.yes") : t("common.no")}`
              }
              className="btn btn-dark btn-sm"
            />
            <button onClick={handleNextEpisode} className="btn btn-info btn-sm">
              {t("common.eventvideo.next")}
              <MdNavigateNext />
            </button>
          </div>
          <Heading context={episodeUrl?.filename} className="fs-0" />
        </>
      )}
    </div>
  );
};

export default MoviePlay;
