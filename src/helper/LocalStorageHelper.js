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

export {
  setToken,
  getToken,
  removeToken,
  setUserInfo,
  getUserInfo,
  removeUserInfo,
};
