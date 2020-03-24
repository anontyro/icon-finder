import { SEARCHING_MOVIE, SEARCHED_MOVIE } from "./consts";
import { BaseMovieSearchState, MovieSearchResponse } from "./search";
import { ThunkDispatch } from "redux-thunk";
import { RootState } from "../..";
import { MOVIE_DB_KEY_V3 } from "../../../keys";

const BASE_URI = "https://api.themoviedb.org/3/";
const MOVIE_SEARCH = "search/movie/";

export interface SearchingMovie {
  type: SEARCHING_MOVIE;
}

export interface SearchedMovie {
  type: SEARCHED_MOVIE;
  payload: BaseMovieSearchState;
}

export type SearchActions = SearchingMovie | SearchedMovie;

const fetchData = async (
  query: string,
  page: number = 1
): Promise<BaseMovieSearchState> => {
  const url = `${BASE_URI}${MOVIE_SEARCH}?api_key=${MOVIE_DB_KEY_V3}&&query=${encodeURI(
    query
  )}&&page=${page}`;
  try {
    const response: any = await fetch(url);
    const json: MovieSearchResponse = await response.json();
    return {
      page: json.page,
      totalPages: json.total_pages,
      totalResults: json.total_results,
      lastQuery: query,
      results: json.results
    };
  } catch (err) {
    console.error(`An error occured when trying to fetch: ${url}`, err);
    return Promise.reject(`An error occured when trying to fetch: ${url}`);
  }
};

const searchingMovie = (): SearchingMovie => ({
  type: SEARCHING_MOVIE
});

const searchedMovie = (movieSearch: BaseMovieSearchState): SearchedMovie => ({
  type: SEARCHED_MOVIE,
  payload: movieSearch
});

export const searchMovie = (query: string, page: number = 1) => {
  return async (
    dispatch: ThunkDispatch<unknown, undefined, SearchActions>,
    getState: any
  ) => {
    const state: RootState = getState();
    const { results } = state.searchMovie;
    if (results.length > 0) {
      return;
    }
    dispatch(searchingMovie());
    const movieSearch = await fetchData(query);
    dispatch(searchedMovie(movieSearch));
  };
};

// get next page
