import * as actionTypes from "../../actions/actionTypes";
import initialState from "../initialState";

function addOrDeleteReducer(state = initialState.basketResponse, action) {
  switch (action.type) {
    case actionTypes.ADD_BASKET_SUCCESS:
      return action.payload;
    case actionTypes.DELETE_BASKET_SUCCESS:
        return action.payload
    default:
      return state;
  }
}

export default addOrDeleteReducer;
