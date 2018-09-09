import { createAction } from "redux-actions";
// import axios from "axios";

export const addToFavorites = createAction("ADD_TO_FAVORITES"),
  removeFromFavorites = createAction("REMOVE_FROM_FAVORITES");
