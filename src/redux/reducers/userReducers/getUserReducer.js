import * as actionTypes from "../../actions/actionTypes";
import initialState from "../initialState";

function getUserReducer(state = initialState.user, action) {
  switch (action.type) {
    case actionTypes.GET_USER_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}

export default getUserReducer;
