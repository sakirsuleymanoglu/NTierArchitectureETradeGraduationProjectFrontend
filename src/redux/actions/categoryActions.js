import * as actionTypes from "./actionTypes";

export function changeCategory(category) {
  return { type: actionTypes.CHANGE_CATEGORY, payload: category };
}

export function getCategoriesSuccess(categories) {
  return { type: actionTypes.GET_CATEGORIES_SUCCESS, payload: categories };
}

export function getCategories() {
  return function (dispatch) {
    let url = "https://localhost:44312/api/Categories/getall";
    return fetch(url)
      .then((respnse) => respnse.json())
      .then((result) => dispatch(getCategoriesSuccess(result.data)));
  };
}
