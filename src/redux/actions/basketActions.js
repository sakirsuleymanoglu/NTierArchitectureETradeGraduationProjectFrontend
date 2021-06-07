import alertify from "alertifyjs";
import axios from "axios";
import * as actionTypes from "./actionTypes";

export function getBasketSuccess(basket) {
  return {
    type: actionTypes.GET_BASKET_SUCCESS,
    payload: basket,
  };
}

export function addSuccess(response) {
  return {
    type: actionTypes.ADD_BASKET_SUCCESS,
    payload: response,
  };
}

export function deleteSuccess(response) {
  return {
    type: actionTypes.DELETE_BASKET_SUCCESS,
    payload: response,
  };
}

export function getBasket(userId) {
  return function (dispatch) {
    let url =
      "https://localhost:44312/api/Baskets/getallwithdetailsbyuser?userId=" +
      userId;
    return axios
      .get(url)
      .then((response) => dispatch(getBasketSuccess(response.data)));
  };
}

export function add(userId, productId) {
  return function (dispatch) {
    let url = "https://localhost:44312/api/Baskets/add";
    return axios.post(url, { userId, productId }).then((response) => {
      dispatch(addSuccess(response));
      alertify.success("Bir adet ürün sepete eklendi");
    });
  };
}

export function deleteOne(userId, productId) {
  return function (dispatch) {
    let url = "https://localhost:44312/api/Baskets/delete";
    return axios.post(url, { userId, productId }).then((response) => {
      dispatch(deleteSuccess(response));
      alertify.success("Bir adet ürün sepetten silindi");
    });
  };
}

export function getTotalPriceSuccess(totalPriceResponse){
  return {
    type:actionTypes.GET_TOTAL_PRICE_SUCCESS,
    payload:totalPriceResponse
  }
}

export function getTotalPrice(userId){
  return function(dispatch){
    let url = "https://localhost:44312/api/Baskets/gettotalprice?userId=" + userId
    return axios.get(url).then((response)=>dispatch(getTotalPriceSuccess(response.data)))
  }
}

export function deleteBasket(basketId){
  return function(dispatch){
    let url = "https://localhost:44312/api/Baskets/deletebasket?basketId=" + basketId
    return axios.post(url, basketId).then((response)=>console.log(response));
  }
}
