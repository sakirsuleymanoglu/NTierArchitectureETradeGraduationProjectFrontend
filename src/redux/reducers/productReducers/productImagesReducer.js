import * as actionTypes from "../../actions/actionTypes";
import initialState from "../initialState";

function productImagesReducer(state = initialState.images, action) {
  switch (action.type) {
    case actionTypes.GET_PRODUCT_IMAGES_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}

export default productImagesReducer;
