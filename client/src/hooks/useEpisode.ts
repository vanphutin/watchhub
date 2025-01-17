import { useContext } from "react";
import { EpisodeContext } from "../context/episodeContext/EpisodeContext";

export const useEpisode = () => {
  const context = useContext(EpisodeContext);
  if (!context) {
    throw new Error("useEpisode must be used within an EpisodeProvider");
  }
  return context;
};
