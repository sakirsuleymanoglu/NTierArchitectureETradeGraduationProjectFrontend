import * as actionTypes from "./actionTypes";

export function getProductsSuccess(products) {
  return { type: actionTypes.GET_PRODUCTS_SUCCESS, payload: products };
}

export function getProductWithDetailsSuccess(product) {
  return {
    type: actionTypes.GET_PRODUCT_WITH_DETAILS_SUCCESS,
    payload: product,
  };
}

const parameters = {
  categoryName: "",
  brandName: "",
  begin: 0,
  end: 0,
  searchProductNameValue: "",
};

export function getProductWithDetails(productId) {
  return function (dispatch) {
    let url =
      "https://localhost:44312/api/Products/getwithdetailsbyid?productId=" +
      productId;
    return fetch(url)
      .then((response) => response.json())
      .then((result) => dispatch(getProductWithDetailsSuccess(result.data)));
  };
}

export function getProducts(params = parameters) {
  return function (dispatch) {
    let url = "https://localhost:44312/api/Products/getallwithdetails";
    if (params.categoryName) {
      url =
        "https://localhost:44312/api/Products/getallwithdetailsbycategoryname?categoryName=" +
        params.categoryName;
    } else if (params.brandName) {
      url =
        "https://localhost:44312/api/Products/getallwithdetailsbybrandname?brandName=" +
        params.brandName;
    } else if (params.begin && params.end) {
      console.log(params.begin);

      url =
        "https://localhost:44312/api/Products/getallwithdetailsbyprice?begin=" +
        params.begin +
        "&end=" +
        params.end;
    } else if (params.searchProductNameValue) {
      url =
        "https://localhost:44312/api/Products/getallwithdetailsbysearchvalue?value=" +
        params.searchProductNameValue;
    }
    return fetch(url)
      .then((response) => response.json())
      .then((result) => dispatch(getProductsSuccess(result.data)));
  };
}
