import React, { Component } from "react";
import CSSModules from "react-css-modules";
import { Link } from "react-router";
import style from "./style.scss";

class App extends Component {

  render() {
    const { onChangeColor, color } = this.props;
    return (
			<div>
				<a>
					<div styleName="react-logo" onClick={ onChangeColor } style={{ backgroundColor: color}}>
					</div>
				</a>
				<p>
					<Link to="awesome-react" style={{color}}>
						Awesome react!
					</Link>
				</p>
			</div>
    );
  }

};

export default CSSModules(App, style);
