import { createContext, Dispatch, SetStateAction } from "react";
import { Episode, Movie } from "../../interfaces/MoiveDetail";
import { Item } from "../../interfaces/Movie";
export type EpisodeListType = {
  name: string;
  slug: string;
  filename: string;
  link_embed: string;
  link_m3u8: string;
};

export type CategoryMovieType = {
  items: Item[];
  titlePage: string;
  type_list: string;
};

export interface EpisodeContextType {
  currentEpisode: EpisodeListType | null; // URL của tập phim hiện tại
  setCurrentEpisode: (url: EpisodeListType) => void;
  episodes: Episode[]; // Danh sách các tập phim
  setEpisodes: Dispatch<SetStateAction<Episode[]>>;
  currentMovie: Movie | null; // Thông tin của bộ phim hiện tại
  setCurrentMovie: (movie: Movie | null) => void;
  handleNextEpisode: () => void;
  handlePrevEpisode: () => void;
  error: string | null;
  setCategoryMovieType: (data: CategoryMovieType) => void;
  categoryMovieType: CategoryMovieType | null;
}

export const EpisodeContext = createContext<EpisodeContextType | undefined>(
  undefined
);
