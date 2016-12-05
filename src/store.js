import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from "redux-thunk";
import { browserHistory } from 'react-router'
import { routerMiddleware } from "react-router-redux";

// Import reducers
import  app  from "./reducers/app";

const reactRouterReduxMiddleware = routerMiddleware(browserHistory);

let createStoreWithMiddleware = applyMiddleware(
  thunk, reactRouterReduxMiddleware
)(createStore);

let reducers = combineReducers({
  app
});

export default createStoreWithMiddleware(reducers);

