import axios from "axios";
import * as actionTypes from "./actionTypes";
import alertify from 'alertifyjs';

export function getUserSuccess(user) {
  return {
    type: actionTypes.GET_USER_SUCCESS,
    payload: user,
  };
}

export function updateUserSuccess(user) {
  return {
    type: actionTypes.UPDATE_USER_SUCCESS,
    payload: user,
  };
}

export function getUser(email) {
  return function (dispatch) {
    let url = "https://localhost:44312/api/Users/getbymail?email=" + email;
    return axios.get(url).then((response) => {
      dispatch(getUserSuccess(response.data.data));
    });
  };
}

export function updateUser(firstName, lastName, email, password, userId) {
  return function (dispatch) {
    let url = "https://localhost:44312/api/Users/update?userId=" + userId;
    return axios
      .post(url, { firstName, lastName, email, password })
      .then((response) => {
        dispatch(updateUserSuccess(response.data.data));
        localStorage.setItem("email", email);
        window.location.reload();
      },(err)=>{
          alertify.error("E-posta adresi zaten alınmış");
      });
  };
}
