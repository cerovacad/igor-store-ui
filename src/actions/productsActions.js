import { createAction } from "redux-actions";
import axios from "axios";

export const setProducts = createAction("SET_PRODUCTS");

export const fetchProducts = () => {
  return async dispatch => {
    try {
      const products = await axios.get("/products");
      dispatch(setProducts(products.data));
    } catch (err) {
      console.log("Fetching products error", err);
    }
  };
};
