import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../containers/Home";
import NotFound from "../components/NotFound";
import Nav from "../layout/Nav";

const AppRouter = () => (
  <Router>
    <div>
      <Nav />
      <div style={{ width: "70%", margin: "0 auto" }}>
        <Switch>
          <Route path="/" component={Home} exact={true} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
  </Router>
);

export default AppRouter;
