import * as actionTypes from "../../actions/actionTypes";
import initialState from "../initialState";

function firstImageByProductReducer(state = initialState.firstImage, action) {
  switch (action.type) {
    case actionTypes.GET_FIRST_IMAGE_BY_PRODUCT:
      return action.payload;
    default:
      return state;
  }
}

export default firstImageByProductReducer;
