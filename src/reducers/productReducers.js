import { handleActions } from "redux-actions";
import { setProducts } from "../actions/productsActions";

const defaultState = [];
export default handleActions(
  {
    [setProducts]: (state, { payload }) => {
      return payload;
    },
  },
  defaultState
);
