import { reactLocalStorage } from "reactjs-localstorage";
// import { imgbbUploader } from "imgbb-uploader";
let EmailRegx = new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/);

/* Name must be at least 3 character */
let NameRegx = new RegExp(/^[a-zA-Z]{3,}$/);

/* Password must be at least 6 character */
let PasswordRegx = new RegExp(/^[a-zA-Z0-9]{6,}$/);

/* image type must be jpg, jpeg, png and image size must be less then 2mb */
let ImageRegx = new RegExp(/(.*?)\.(jpg|jpeg|png)$/);

/* image size must be less then 2mb */
let ImageSizeRegx = new RegExp(/^[0-2]{1,}$/);

/*  confirmation password  */
let ConfirmPasswordRegx = new RegExp(/^[a-zA-Z0-9]{6,}$/);

/* check input is empty or not */
let checkEmpty = (input) => {
  return input.length === 0;
};

/* check email is valid or not */
let checkEmail = (email) => {
  return EmailRegx.test(email);
};

/* check name is valid or not */
let checkName = (name) => {
  return NameRegx.test(name);
};

/* check password is valid or not */
let checkPassword = (password) => {
  return PasswordRegx.test(password);
};

/* check confirmation password is valid or not  */
let checkConfirmationPassword = (confirmationPassword) => {
  return ConfirmPasswordRegx.test(confirmationPassword);
};

/* check image type is valid or not and check image size is valid or not */
let checkImageType = (image) => {
  return ImageRegx.test(image) && ImageSizeRegx.test(image);
};

/* check password & confirmation password is same or not */
let checkPassConfirmPassword = (password, confirmPassword) => {
  return password === confirmPassword;
};

/* file upload in imagebb */
let uploadImage = async (image) => {
  let formData = new FormData();
  formData.append("image", image);
  try {
    const response = await fetch(
      `https://api.imgbb.com/1/upload?key=011f10ea5dfc25b71bac2efa547a3926`,
      {
        method: "POST",
        body: formData,
      }
    );
    const result = await response.json();
    reactLocalStorage.set("deleteUrl", result.data.delete_url);
    return result;
  } catch (error) {
    return console.log("error", error);
  }
};

/* delete image with delete url on imagebb */
let deleteImage = async () => {
  let deleteUrl = reactLocalStorage.get("deleteUrl");
  try {
    const response = await fetch(
      `https://api.imgbb.com/1/delete/${deleteUrl}/011f10ea5dfc25b71bac2efa547a3926`,
      {
        method: "DELETE",
      }
    );
    const result_1 = await response.json();
    return result_1;
  } catch (error) {
    return console.log("error", error);
  }
};

export {
  checkEmpty,
  checkEmail,
  checkName,
  checkPassword,
  checkConfirmationPassword,
  checkImageType,
  checkPassConfirmPassword,
  uploadImage,
  deleteImage,
};
