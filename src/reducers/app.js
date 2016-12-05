import { CHANGE_COLOR  } from "../actions/app";
import randomColor from "randomcolor";

let DEFAULT_STATE = {
  color: randomColor()
};

export default (state = DEFAULT_STATE, action) => {
  console.log(action);
  switch ( action.type ) {
    case CHANGE_COLOR:
      return { ...state, color: randomColor()};
    default:
      return state;
  }
}
