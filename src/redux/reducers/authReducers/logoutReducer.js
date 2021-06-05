import * as actionTypes from "../../actions/actionTypes";
import initialState from "../initialState";

function logoutReducer(state = initialState.loginResponse, action) {
  switch (action.type) {
    case actionTypes.LOGOUT_SUCCESS:
      return null;
    default:
      return state;
  }
}

export default logoutReducer;
