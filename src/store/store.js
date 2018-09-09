import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import productsReducer from "../reducers/productReducers";
import favoritesReducer from "../reducers/favoritesReducer";
import cartReducer from "../reducers/cartReducer";

const rootReducer = combineReducers({
  products: productsReducer,
  favorites: favoritesReducer,
  cart: cartReducer
});
export default createStore(rootReducer, applyMiddleware(thunk, logger));
