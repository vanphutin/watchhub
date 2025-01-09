import { createContext } from "react";
import { Item } from "../../interfaces/Movie";

export interface MovieContextType {
  phimLe: { items: Item[]; titlePage: string; type_list: string };
  phimBo: { items: Item[]; titlePage: string; type_list: string };
  hoatHinh: { items: Item[]; titlePage: string; type_list: string };
  tvShows: { items: Item[]; titlePage: string; type_list: string };
  loading: boolean;
  hasMore: { [key: string]: boolean };
  loadMore: (key: string) => void;
  fetchMovies: (type: string, page: number) => void;
}

export const MovieContext = createContext<MovieContextType | undefined>(
  undefined
);
