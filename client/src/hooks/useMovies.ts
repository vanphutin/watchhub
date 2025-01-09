import { useContext } from "react";
import {
  MovieContext,
  MovieContextType,
} from "../context/movieContext/MovieContext";

export const useMovies = (): MovieContextType => {
  const context = useContext(MovieContext);
  if (!context) {
    throw new Error("useMovies must be used within a MovieProvider");
  }

  return context;
};
