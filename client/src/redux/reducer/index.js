import { combineReducers } from "redux";
import usersReducer from "./user.reducer.js";
import favoriteReducer from "./favorite.reducer";

export const rootReducer = combineReducers({
  usersReducer,
  favoriteReducer,
});
