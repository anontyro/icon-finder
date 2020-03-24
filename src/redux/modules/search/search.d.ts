export interface MovieItem {
  popularity: number;
  id: number;
  video: boolean;
  vote_count: number;
  vote_average: number;
  title: string;
  release_date: string;
  original_language: string;
  original_title: string;
  genre_ids: number[];
  backdrop_path: string;
  adult: boolean;
  overview: string;
  poster_path: string;
}

export interface BaseMovieSearchState {
  page: number;
  totalPages: number;
  totalResults: number;
  results: MovieItem[];
  lastQuery: string | null;
}

export interface MovieSearchState extends BaseMovieSearchState {
  isBusy: boolean;
}

export interface MovieSearchResponse {
  page: number;
  total_results: number;
  total_pages: number;
  results: MovieItem[];
}
