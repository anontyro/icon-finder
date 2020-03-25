import { UserState } from "./reducer";
import {
  SET_USER,
  RESET_USER,
  ADD_TO_FAVOURITES,
  REMOVE_FROM_FAVOURITES
} from "./consts";
import { MovieItem } from "../search/search";

interface SetUser {
  payload: UserState;
  type: SET_USER;
}

interface ResetUser {
  type: RESET_USER;
}

interface AddToFavourites {
  type: ADD_TO_FAVOURITES;
  payload: MovieItem;
}

interface RemoveFromFavourites {
  type: REMOVE_FROM_FAVOURITES;
  payload: {
    id: number;
  };
}

export type UserActions =
  | SetUser
  | ResetUser
  | AddToFavourites
  | RemoveFromFavourites;

export const addUser = (user: UserState): SetUser => ({
  type: SET_USER,
  payload: user
});

export const resetUser = (): ResetUser => ({
  type: RESET_USER
});

export const addToFavourites = (movie: MovieItem): AddToFavourites => ({
  type: ADD_TO_FAVOURITES,
  payload: movie
});

export const removeFromFavourites = (id: number): RemoveFromFavourites => ({
  type: REMOVE_FROM_FAVOURITES,
  payload: { id }
});
