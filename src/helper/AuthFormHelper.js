import { toast } from "./CogoToastHelper";
import {
  checkConfirmationPassword,
  checkEmail,
  checkName,
  checkPassConfirmPassword,
  checkPassword,
} from "./FormHelper";

let registrationForm = (name, email, password, confirmPassword, imageUrl) => {
  /* check validation  */
  return new Promise((resolve, reject) => {
    if (name === "") {
      toast("Please enter your name", "error");
      reject(false);
    } else if (!checkName(name)) {
      toast("Please enter valid name", "error");
      reject(false);
    } else if (email === "") {
      toast("Please enter your email", "error");
      reject(false);
    } else if (!checkEmail(email)) {
      toast("Please enter valid email", "error");
      reject(false);
    } else if (password === "") {
      toast("Please enter your password", "error");
      reject(false);
    } else if (!checkPassword(password)) {
      toast("Please enter a password at least 6 character", "error");
      reject(false);
    } else if (confirmPassword === "") {
      toast("Please enter your confirm password", "error");
      reject(false);
    } else if (!checkConfirmationPassword(confirmPassword)) {
      toast("Please enter a confirm password at least 6 character", "error");
      reject(false);
    } else if (!checkPassConfirmPassword(password, confirmPassword)) {
      toast("Password and confirm password are not same", "error");
      reject(false);
    } else if (imageUrl === "") {
      toast("Please select your image", "error");
      reject(false);
    } else {
      resolve(true);
    }
  });
};

let loginForm = (email, password) => {
  /* check validation  */
  return new Promise((resolve, reject) => {
    if (email === "") {
      toast("Please enter your email", "error");
      reject(false);
    } else if (!checkEmail(email)) {
      toast("Please enter valid email", "error");
      reject(false);
    } else if (password === "") {
      toast("Please enter your password", "error");
      reject(false);
    } else if (!checkPassword(password)) {
      toast("Please enter a password at least 6 character", "error");
      reject(false);
    } else {
      resolve(true);
    }
  });
};

let forgetPasswordForm = (email) => {
  /* check validation  */
  return new Promise((resolve, reject) => {
    if (email === "") {
      toast("Please enter your email", "error");
      reject(false);
    } else if (!checkEmail(email)) {
      toast("Please enter valid email", "error");
      reject(false);
    } else {
      resolve(true);
    }
  });
};

let resetPasswordForm = (password, confirmPassword) => {
  /* check validation  */
  return new Promise((resolve, reject) => {
    if (password === "") {
      toast("Please enter your password", "error");
      reject(false);
    } else if (!checkPassword(password)) {
      toast("Please enter a password at least 6 character", "error");
      reject(false);
    } else if (confirmPassword === "") {
      toast("Please enter your confirm password", "error");
      reject(false);
    } else if (!checkConfirmationPassword(confirmPassword)) {
      toast("Please enter a confirm password at least 6 character", "error");
      reject(false);
    } else if (!checkPassConfirmPassword(password, confirmPassword)) {
      toast("Password and confirm password are not same", "error");
      reject(false);
    } else {
      resolve(true);
    }
  });
};

let createCategoryForm = (name, icon) => {
  /* check validation  */
  return new Promise((resolve, reject) => {
    if (name === "") {
      toast("Please enter your Category Name", "error");
      reject(false);
    } else if (icon === "") {
      toast("Please enter your icon name", "error");
      reject(false);
    } else if (!checkName(name)) {
      toast("Please enter valid Category Name", "error");
      reject(false);
    } else if (!checkName(icon)) {
      toast("Please enter valid icon name", "error");
      reject(false);
    } else {
      resolve(true);
    }
  });
};

export {
  registrationForm,
  loginForm,
  forgetPasswordForm,
  resetPasswordForm,
  createCategoryForm,
};
