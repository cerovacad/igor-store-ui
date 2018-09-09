import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import productsReducer from "../reducers/productReducers";
import favoritesReducer from "../reducers/favoritesReducer";

const rootReducer = combineReducers({
  products: productsReducer,
  favorites: favoritesReducer
});
// export default createStore(rootReducer, applyMiddleware(thunk));
export default createStore(rootReducer, applyMiddleware(logger, thunk));
