import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import productsReducer from "../reducers/productReducers";

const rootReducer = combineReducers({
  products: productsReducer
});
// export default createStore(rootReducer, applyMiddleware(thunk));
export default createStore(rootReducer, applyMiddleware(logger, thunk));
