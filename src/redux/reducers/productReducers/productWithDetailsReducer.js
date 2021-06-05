import * as actionTypes from "../../actions/actionTypes";
import initialState from "../initialState";

function productWithDetailsReducer(state = initialState.productWithDetails, action) {
  switch (action.type) {
    case actionTypes.GET_PRODUCT_WITH_DETAILS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}

export default productWithDetailsReducer;
