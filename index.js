import React, { Component } from "react";
import { render } from "react-dom";
import Router from "./src/routes";
import store from "./src/store";

render(Router(store), document.getElementById("App"));

