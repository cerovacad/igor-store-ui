import { handleActions } from "redux-actions";
import {
  addToCart,
  removeFromCart
} from "../actions/cartActions";

const defaultState = [];
export default handleActions(
  {
    [addToCart]: (state, { payload }) => {
      return [...state, payload];
    },
    [removeFromCart]: (state, { payload }) => {
      return state.filter((id) => {
        return id !== payload
      })
    }
  },
  defaultState
);
