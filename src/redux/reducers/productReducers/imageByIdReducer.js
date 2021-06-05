import * as actionTypes from "../../actions/actionTypes";
import initialState from "../initialState";

function imageByIdReducer(state = initialState.currentImage, action) {
  switch (action.type) {
    case actionTypes.GET_IMAGE_BY_ID_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}

export default imageByIdReducer;
