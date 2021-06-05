import * as actionTypes from "./actionTypes";

export function changeBrand(brand) {
  return { type: actionTypes.CHANGE_BRAND, payload: brand };
}

export function getBrandSuccess(brands) {
  return { type: actionTypes.GET_BRANDS_SUCCESS, payload: brands };
}

export function getBrands() {
  return function (dispatch) {
    let url = "https://localhost:44312/api/Brands/getall";
    return fetch(url)
      .then((respnse) => respnse.json())
      .then((result) => dispatch(getBrandSuccess(result.data)));
  };
}
