import axios from "axios";
import * as actionTypes from "./actionTypes";

export function getUserSuccess(user) {
  return {
    type: actionTypes.GET_USER_SUCCESS,
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
