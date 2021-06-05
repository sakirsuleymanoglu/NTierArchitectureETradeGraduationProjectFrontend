import * as actionTypes from "../../actions/actionTypes";
import initialState from "../initialState";

function searchProductReducer(state = initialState.searchProductNameValue, action) {
  switch (action.type) {
    case actionTypes.SEARCH_PRODUCT_NAME:
      return action.payload;
    default:
      return state;
  }
}

export default searchProductReducer;
