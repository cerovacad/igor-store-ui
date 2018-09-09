import { createAction } from "redux-actions";
// import axios from "axios";

export const addToCart = createAction("ADD_TO_CART"),
  removeFromCart = createAction("REMOVE_FROM_CART");
