import * as actionTypes from "../../actions/actionTypes";
import initialState from "../initialState";

function registerReducer(state = initialState.registerResponse, action) {
  switch (action.type) {
    case actionTypes.REGISTER_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}

export default registerReducer;
