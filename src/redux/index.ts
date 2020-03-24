import { combineReducers } from "redux";
import user from "./modules/user/reducer";
import searchMovie from "./modules/search/reducer";

const rootReducer = combineReducers({
  user,
  searchMovie
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
