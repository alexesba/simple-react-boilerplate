import React, { Component } from "react";
import CSSModules from "react-css-modules";
import { Link } from "react-router";
import style from "./style.scss";
import { routeFor } from "../../common";

class NotFound extends Component {

  constructor(props) {
    super(props);
  }

  static defaultProps = {
    message: "not found"
  }
  render() {
    const { location: { pathname } } =  this.props;
    return(
      <div styleName="_404">
        Page: <span> { pathname } </span> {this.props.message }
        <Link to={ routeFor("/") }> Home </Link>
      </div>
    );
  }
}

export default CSSModules(NotFound, style);
