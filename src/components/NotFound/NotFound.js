import React, { Component } from "react";
import CSSModules from "react-css-modules";
import { Link } from "react-router";
import style from "./style.scss";

class NotFound extends Component {
  render() {
    return(
      <div styleName="_404">
        Page not found :(
        <Link to="/"> Home </Link>
      </div>
    );
  }
}

export default CSSModules(NotFound, style);
