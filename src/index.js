import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import AppRouter from "./router/router";
import axios from "axios";
axios.defaults.baseURL =
  "https://igor-store-api-v1.herokuapp.com";

const App = () => (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById("root"));
