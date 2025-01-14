interface TmdbDetails {
  type: string | null;
  id: number | null;
  season: number | null;
  vote_average: number;
  vote_count: number;
}

interface ImdbDetails {
  id: string | null;
}

interface Created {
  time: string; // Use Date type if needed for specific date operations
}

interface Modified {
  time: string; // Use Date type if needed for specific date operations
}

export interface Category {
  id: string;
  name: string;
  slug: string;
}

interface Country {
  id: string;
  name: string;
  slug: string;
}

export interface Actor {
  name: string; // Assuming name is available, can be adjusted based on actual data
}

interface Director {
  name: string; // Assuming name is available, can be adjusted based on actual data
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
  _id?: string;
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
  actor: Actor[];
  director: Director[];
  category: Category[];
  country: Country[];
  tmdb: TmdbDetails;
  imdb: ImdbDetails;
  created: Created;
  modified: Modified;
  episodes: Episode[];
}

export interface ApiResponseMovieDetail {
  status: boolean;
  msg: string;
  movie: Movie;
  episodes?: Episode[]; // Optional episodes array if not always present
}
