import React, { Component } from "react";
import { render } from "react-dom";
import Router from "./src/routes";
import store from "./src/store";

const run = () => {
  render(Router(store), document.getElementById("App"));
}

if (["complete", "loaded", "interactive"].includes(document.readyState) && document.body) {
  run();
} else {
  document.addEventListener("DOMContentLoaded", run, false);
}


