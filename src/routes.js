import React from "react";
import { Router, Route, browserHistory } from "react-router";
import { AppContainer } from "./components/App";
import NotFound from "./components/NotFound";
import Profile from "./components/Profile";
import { routeFor } from "./common";
import { Provider } from "react-redux";

export default (store) => {
  return (
    <Provider store={ store }>
      <Router history={ browserHistory }>
        <Route path={ routeFor("/") } component={ AppContainer }/>
        <Route path={ routeFor("profile") } component={ Profile } />
        <Route path={ routeFor("*") } component={ NotFound }/>
      </Router>
    </Provider>
  );
}
