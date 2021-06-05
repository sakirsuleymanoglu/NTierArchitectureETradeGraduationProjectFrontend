import * as actionTypes from "./actionTypes";

export function changePrice(p) {
  return { type: actionTypes.CHANGE_PRICE, payload: p };
}
