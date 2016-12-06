import React from "react";
import {Router, Route, browserHistory } from "react-router";
import { AppContainer } from "./components/App";
import NotFound from "./components/NotFound";

import { Provider } from "react-redux";

export default (store) => {
  return (
    <Provider store={ store }>
      <Router history={ browserHistory }>
        <Route path="/" component={ AppContainer }/>
        <Route path="*" component={ NotFound }/>
      </Router>
    </Provider>
  );
}
