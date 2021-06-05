import * as actionTypes from "../../actions/actionTypes";
import initialState from "../initialState";

function updateUserReducer(state = initialState.updatedUser, action) {
  switch (action.type) {
    case actionTypes.UPDATE_USER_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}

export default updateUserReducer;
