import * as actionTypes from "../../actions/actionTypes";
import initialState from "../initialState";

function loginReducer(state = initialState.loginResponse, action) {
  switch (action.type) {
    case actionTypes.LOGIN_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}

export default loginReducer
