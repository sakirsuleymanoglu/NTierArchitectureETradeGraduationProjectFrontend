import * as actionTypes from "../../actions/actionTypes";
import initialState from "../initialState";

function changeImageReducer(state = initialState.currentImage, action) {
  switch (action.type) {
    case actionTypes.CHANGE_IMAGE:
      return action.payload;
    default:
      return state;
  }
}

export default changeImageReducer;
