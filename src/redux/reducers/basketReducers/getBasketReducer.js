import * as actionTypes from "../../actions/actionTypes";
import initialState from "../initialState";

function getBasketReducer(state = initialState.basket, action) {
  switch (action.type) {
    case actionTypes.GET_BASKET_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}

export default getBasketReducer;
