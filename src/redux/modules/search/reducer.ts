import { MovieSearchState } from "./search";
import { SearchActions } from "./actions";
import { SEARCHING_MOVIE, SEARCHED_MOVIE } from "./consts";

export const INITIAL_STATE: MovieSearchState = {
  page: 0,
  totalPages: 0,
  totalResults: 0,
  results: [],
  isBusy: false,
  lastQuery: null
};

const searchMovie = (
  state: MovieSearchState = INITIAL_STATE,
  action: SearchActions
) => {
  switch (action.type) {
    case SEARCHING_MOVIE:
      return {
        ...state,
        isBusy: true
      };
    case SEARCHED_MOVIE:
      return {
        ...state,
        ...action.payload,
        isBusy: false
      };
    default:
      return state;
  }
};

export default searchMovie;
