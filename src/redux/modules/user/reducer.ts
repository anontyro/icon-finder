import { UserActions } from "./actions";
import {
  SET_USER,
  RESET_USER,
  ADD_TO_FAVOURITES,
  REMOVE_FROM_FAVOURITES
} from "./consts";
import { MovieItem } from "../search/search";

export interface UserState {
  username: string | null;
  favourites: MovieItem[];
}

export const INITIAl_STATE: UserState = {
  username: null,
  favourites: []
};

const user = (state: UserState = INITIAl_STATE, action: UserActions) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        ...action.payload
      };
    case RESET_USER:
      return {
        ...INITIAl_STATE
      };
    case ADD_TO_FAVOURITES:
      return {
        ...state,
        favourites: [...state.favourites, action.payload]
      };
    case REMOVE_FROM_FAVOURITES:
      const list = state.favourites.filter(
        (item: MovieItem) => item.id !== action.payload.id
      );
      return {
        ...state,
        favourites: [...list]
      };
    default:
      return state;
  }
};

export default user;
