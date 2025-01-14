import { createContext } from "react";
import { Item } from "../../interfaces/Movie";

interface MovieGenresContextType {
  movieGenres: Item[];
  setMoviesGenres: React.Dispatch<React.SetStateAction<Item[]>>;
  title: string;
  loading: boolean | false;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  handleGetMoviesByCategory: (item: string, title: string) => Promise<void>;
}

export const MovieGenresContext = createContext<
  MovieGenresContextType | undefined
>(undefined);
