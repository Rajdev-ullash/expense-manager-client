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

export { setToken, getToken, removeToken };
