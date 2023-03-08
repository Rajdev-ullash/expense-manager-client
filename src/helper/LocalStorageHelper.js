import { reactLocalStorage } from "reactjs-localstorage";

let setToken = (token) => {
  reactLocalStorage.set("token", token);
};

let getToken = () => {
  return reactLocalStorage.get("token");
};

let removeToken = () => {
  reactLocalStorage.remove("token");
};

let setUserInfo = (userInfo) => {
  reactLocalStorage.setObject("userInfo", userInfo);
};

let getUserInfo = () => {
  return reactLocalStorage.getObject("userInfo");
};

let removeUserInfo = () => {
  reactLocalStorage.remove("userInfo");
};

let verifyOTPEmail = (email) => {
  reactLocalStorage.set("verifyOTPEmail", email);
};

let getVerifyOTPEmail = () => {
  return reactLocalStorage.get("verifyOTPEmail");
};

let removeVerifyOTPEmail = () => {
  reactLocalStorage.remove("verifyOTPEmail");
};

let verifyOTP = (otp) => {
  reactLocalStorage.set("verifyOTP", otp);
};

let getVerifyOTP = () => {
  return reactLocalStorage.get("verifyOTP");
};

let removeVerifyOTP = () => {
  reactLocalStorage.remove("verifyOTP");
};

export {
  setToken,
  getToken,
  removeToken,
  setUserInfo,
  getUserInfo,
  removeUserInfo,
  verifyOTPEmail,
  getVerifyOTPEmail,
  removeVerifyOTPEmail,
  verifyOTP,
  getVerifyOTP,
  removeVerifyOTP,
};
