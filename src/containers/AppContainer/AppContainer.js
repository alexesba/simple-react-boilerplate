import { connect } from "react-redux";
import App from "../../components/App";
import { changeColor } from "../../actions/app";

const mapStateToProps = (state) => {
  return {
    color: state.app.color
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
