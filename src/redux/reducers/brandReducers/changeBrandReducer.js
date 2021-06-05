import * as actionTypes from "../../actions/actionTypes";
import initialState from "../initialState";

function changeBrandReducer(state = initialState.currentBrand, action) {
  switch (action.type) {
    case actionTypes.CHANGE_BRAND:
      return action.payload;
    default:
      return state;
  }
}

export default changeBrandReducer;
