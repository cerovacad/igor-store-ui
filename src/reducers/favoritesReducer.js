import { handleActions } from "redux-actions";
import {
  addToFavorites,
  removeFromFavorites
} from "../actions/favoritesActions";

const defaultState = [];
export default handleActions(
  {
    [addToFavorites]: (state, { payload }) => {
      return [...state, payload];
    },
    [removeFromFavorites]: (state, { payload }) => {
      return state.filter((id) => {
        return id !== payload
      })
      // console.log(arr)
      // return state
    }
  },
  defaultState
);
