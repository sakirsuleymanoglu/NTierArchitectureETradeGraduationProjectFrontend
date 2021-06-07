import * as actionTypes from "../../actions/actionTypes";
import initialState from "../initialState";

function getTotalPriceReducer(state = initialState.totalPriceResponse, action) {
  switch (action.type) {
    case actionTypes.GET_TOTAL_PRICE_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}

export default getTotalPriceReducer;
