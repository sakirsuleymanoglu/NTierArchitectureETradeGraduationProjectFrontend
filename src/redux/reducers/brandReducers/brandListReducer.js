import * as actionTypes from "../../actions/actionTypes";
import initialState from "../initialState";

function brandListReducer(state = initialState.brands, action) {
  switch (action.type) {
    case actionTypes.GET_BRANDS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}

export default brandListReducer;
