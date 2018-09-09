import { handleActions } from "redux-actions";
import { setProducts } from "../actions/productActions";

const defaultState = [];
export default handleActions(
  {
    [setProducts]: (state, { payload }) => {
      return payload;
    },
  },
  defaultState
);
