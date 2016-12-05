import React, { Component } from "react";
import CSSModules from "react-css-modules";
import { Link } from "react-router";
import s from "./App.scss";
import InlineSVG from 'svg-inline-react';

class App extends Component {

  render() {
    const { onChangeColor, color} = this.props;
    return (
      <a>
        <div styleName="react-logo" onClick={ onChangeColor } style={{ backgroundColor: color}}>
        </div>
        <p style={{color}}>Awesome react!</p>
      </a>
    );
  }

};

export default CSSModules(App, s);
