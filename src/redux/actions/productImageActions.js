import * as actionTypes from "./actionTypes";

export function getFirstImageByProductSuccess(image) {
    return {
      type: actionTypes.GET_FIRST_IMAGE_BY_PRODUCT,
      payload: image,
    };
  }
  
  export function getFirstImageByProduct(productId){
    return function(dispatch){
      let url = "https://localhost:44312/api/ProductImages/getfirstimagebyproduct?productId=" + productId
      return fetch(url)
      .then((response) => response.json())
      .then((result) => dispatch(getFirstImageByProductSuccess(result.data)));  
    }
  }

export function changeImage(image) {
  return {
    type: actionTypes.CHANGE_IMAGE,
    payload: image,
  };
}

export function getImageByIdSuccess(image) {
  return {
    type: actionTypes.GET_IMAGE_BY_ID_SUCCESS,
    payload: image,
  };
}

export function getImageById(imageId) {
  return function (dispatch) {
    let url = "https://localhost:44312/api/ProductImages/getbyid?id=" + imageId;
    return fetch(url)
      .then((response) => response.json())
      .then((result) => dispatch(getImageByIdSuccess(result.data)));
  };
}

export function getProductImagesSuccess(images) {
  return {
    type: actionTypes.GET_PRODUCT_IMAGES_SUCCESS,
    payload: images,
  };
}

export function getProductImages(productId) {
  return function (dispatch) {
    let url =
      "https://localhost:44312/api/ProductImages/getallbyproduct?productId=" +
      productId;
    return fetch(url)
      .then((response) => response.json())
      .then((result) => dispatch(getProductImagesSuccess(result.data)));
  };
}
