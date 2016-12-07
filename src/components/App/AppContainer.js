import { connect } from "react-redux";
import App from "./App";
import { changeColor } from "./AppActions";

const mapStateToProps = (state) => {
  return {
    color: state.AppReducer.color
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeColor: () => dispatch(changeColor()),
  }
}

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
