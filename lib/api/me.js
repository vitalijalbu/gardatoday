import instance, { setSession, removeSession } from "./api";
import {
  USER_LOADING,
  USER_LOADED,
  USER_REMOVE,
  USER_UPDATED,
  USER_ERROR,
} from "../types";

/* Login API Action */
export const loginAction = (body) => {
  //dispatch({ type: USER_LOADING });
  return instance.post("/api/auth/local", body)
    .then(({ data }) => {
      setSession(data.jwt);
      //console.log('logging', data)
      //dispatch({ type: USER_LOADED, payload: data.data });
      return data;
    })
    .catch((err) => {
      //dispatch({ type: USER_ERROR });
      return Promise.reject(err);
    });
};

/* Reset Password API Action */
export const resetPasswordAction = (body) => {
  return instance.post("/api/auth/reset-password", body);
};

export const updatePasswordAction = (body) => {
  return instance.post("/api/auth/reset-password", body);
};

export const updateProfile = (id, body) => {
  return instance.put(`/api/users/${id}`, body);
};

/* Reset Password API Action */
export const getProfile = () => {
  return instance.get("/api/users/me?populate=*");
};

/* Forgot Password API Action */
export const forgotPasswordAction = (body) => {
  return instance.post("/api/auth/forgot-password", body);
};


export const logoutAction = () => {
  removeSession();
  window.location.pathname = "/login";
}

