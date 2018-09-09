import { createAction } from "redux-actions";
import axios from "axios";

export const setProducts = createAction("SET_PRODUCTS");

export const fetchProducts = () => {
  return dispatch => {
    axios.get("/products").then(products => {
      dispatch(setProducts(products.data));
    }).catch((err) => {
      console.log('Fetching products error', err)
    });
  };
};
