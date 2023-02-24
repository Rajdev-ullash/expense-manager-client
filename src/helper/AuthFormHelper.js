import { toast } from "./CogoToastHelper";
import {
  checkConfirmationPassword,
  checkEmail,
  checkImageType,
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

export { registrationForm };
