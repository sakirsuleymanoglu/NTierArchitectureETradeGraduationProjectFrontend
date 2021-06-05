import axios from "axios";
import * as actionTypes from "./actionTypes";

export function registerSuccess(response) {
  return {
    type: actionTypes.REGISTER_SUCCESS,
    payload: response,
  };
}

export function loginSuccess(response) {
  return {
    type: actionTypes.LOGIN_SUCCESS,
    payload: response,
  };
}

export function logoutSuccess() {
  return {
    type: actionTypes.LOGOUT_SUCCESS,
  };
}

export function register(firstName, lastName, email, password) {
  return function (dispatch) {
    let url = "https://localhost:44312/api/Auths/register";
    return axios
      .post(url, { firstName, lastName, email, password })
      .then((response) => {
        dispatch(registerSuccess(response.data));
      }, (err)=>{
        alert("E-posta adresi zaten alınmış")
      });
  };
}

export function login(email, password) {
  return function (dispatch) {
    let url = "https://localhost:44312/api/Auths/login";
    return axios.post(url, { email, password }).then((response) => {
      localStorage.setItem("jwtToken", response.data.data.token);
      localStorage.setItem("email", email);
      dispatch(loginSuccess(response.data));
      window.location.replace("/");
    }, (err)=>{
      alert("E-posta adresi ya da parola hatalı")
    });
  };
}

export function logout() {
  return function (dispatch) {
    localStorage.removeItem("jwtToken");
    localStorage.removeItem("email");
    dispatch(logoutSuccess);
  };
}
