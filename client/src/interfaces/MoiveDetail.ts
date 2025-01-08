export interface Tmdb {
  type: string | null;
  id: string | null;
  season: string | null;
  vote_average: number;
  vote_count: number;
}

export interface Imdb {
  id: string | null;
}

export interface TimeInfo {
  time: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
}

export interface Country {
  id: string;
  name: string;
  slug: string;
}

export interface Episode {
  server_name: string;
  server_data: {
    name: string;
    slug: string;
    filename: string;
    link_embed: string;
    link_m3u8: string;
  }[];
}

export interface Movie {
  tmdb: Tmdb;
  imdb: Imdb;
  created: TimeInfo;
  modified: TimeInfo;
  _id: string;
  name: string;
  slug: string;
  origin_name: string;
  content: string;
  type: string;
  status: string;
  poster_url: string;
  thumb_url: string;
  is_copyright: boolean;
  sub_docquyen: boolean;
  chieurap: boolean;
  trailer_url: string;
  time: string;
  episode_current: string;
  episode_total: string;
  quality: string;
  lang: string;
  notify: string;
  showtimes: string;
  year: number;
  view: number;
  actor: string[];
  director: string[];
  category: Category[];
  country: Country[];
}

export interface ApiResponseMovieDetail {
  status: boolean;
  msg: string;
  movie: Movie;
  episodes: Episode[];
}
