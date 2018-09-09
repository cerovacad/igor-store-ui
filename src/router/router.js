import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../containers/Home";
import NotFound from "../components/NotFound";
import Nav from "../layout/Nav";
import Main from "../layout/Main";
import Footer from "../layout/Footer";

const AppRouter = () => (
  <Router>
    <div>
      <Nav />
      <Main>
        <Switch>
          <Route path="/" component={Home} exact={true} />
          <Route component={NotFound} />
        </Switch>
      </Main>
      <Footer />
    </div>
  </Router>
);

export default AppRouter;
