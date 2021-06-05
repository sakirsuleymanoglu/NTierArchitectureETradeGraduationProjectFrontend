import * as actionTypes from "../../actions/actionTypes";
import initialState from "../initialState";

function changePriceReducer(state = initialState.currentPrice, action) {
  switch (action.type) {
    case actionTypes.CHANGE_PRICE:
      return action.payload;
    default:
      return state;
  }
}

export default changePriceReducer;
