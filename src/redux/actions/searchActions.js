import * as actionTypes from "./actionTypes";

export function changeValue(value) {
  return { type: actionTypes.SEARCH_PRODUCT_NAME, payload: value };
}
