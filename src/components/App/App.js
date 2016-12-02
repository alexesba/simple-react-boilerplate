import React, { Component } from "react";
import CSSModules from "react-css-modules";
import s from "./App.scss";
class App extends Component {
  render() {
    return (
      <div styleName="img">
        <h1 styleName="h1"> Hola ke ase demo demo</h1>
      </div>
    );
  }
};

export default CSSModules(App, s);
