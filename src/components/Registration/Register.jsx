import React, { Fragment, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { registrationForm } from "../../helper/AuthFormHelper";
import { uploadImage } from "../../helper/FormHelper";
import { useUserRegistrationMutation } from "../../redux/features/api/apiSlice";
import {
  setData,
  toggleImageLoader,
} from "../../redux/features/auth/authSlice";
const Register = () => {
  const formRef = useRef();
  const dispatch = useDispatch();

  const imageLoader = useSelector((state) => state.auth.imageLoader);
  console.log(imageLoader);

  /* image preview */
  const [image, setImage] = useState(null);

  const [preview, setPreview] = useState(null);

  const [error, setError] = useState(null);

  const types = ["image/png", "image/jpeg", "image/jpg"];

  const handleChange = (e) => {
    dispatch(toggleImageLoader());
    let selected = e.target.files[0];
    if (selected && types.includes(selected.type)) {
      setImage(selected);
      setPreview(URL.createObjectURL(selected));
      setError("");
      uploadImage(e.target.files[0]).then((res) => {
        dispatch(toggleImageLoader());
        dispatch(setData({ name: "imageUrl", value: res.data?.display_url }));
        console.log(imageLoader);
      });
    } else {
      setImage(null);
      setPreview(null);
      setError("Please select an image file (png or jpeg or jpg)");
    }
    // dispatch({ type: "auth/setImageLoader", payload: false });
  };

  const getFormData = useSelector((state) => state.auth.data);

  const [registrationFormData, { isLoading }] = useUserRegistrationMutation({
    refetchOnMountOrArgChange: true,
  });

  const navigate = useNavigate();

  const handleRegistration = (e) => {
    e.preventDefault();
    // console.log(getFormData);
    registrationForm(
      getFormData.name,
      getFormData.email,
      getFormData.password,
      getFormData.confirmPassword,
      getFormData.imageUrl
    ).then((res) => {
      // console.log(res);
      if (res) {
        if (res === true) {
          registrationFormData({
            name: getFormData.name,
            email: getFormData.email,
            password: getFormData.password,
            image: getFormData.imageUrl,
          }).then((res) => {
            console.log(res.data);
            if (res) {
              if (res.data?.success === true) {
                Swal.fire({
                  icon: "success",
                  title: "Registration Successful",
                  showConfirmButton: false,
                  timer: 1500,
                })
                  /* after timer left we will show another swal */
                  .then(() => {
                    Swal.fire({
                      position: "top-center",
                      icon: "warning",
                      title: "verify your email",
                      html: `We have sent a verification link to your email <b>${getFormData.email}</b>. Please verify your email to login.`,
                      showConfirmButton: true,
                      confirmButtonText: "Ok",
                    }).then((result) => {
                      if (result.isConfirmed) {
                        return navigate("/login", { replace: true });
                      }
                    });
                  });

                formRef.current.reset();
                setImage(null);
                setPreview(null);
                setError("");
              } else {
                Swal.fire({
                  icon: "error",
                  title: "Registration Failed",
                  text: res.data?.message,
                });
              }
            }
          });
        }
      }
    });
  };

  return (
    <Fragment>
      {/* input field with name, email,preview image, image, password, confirm password  */}
      <form ref={formRef}>
        <div className="flex justify-center items-center h-screen bg-gray-300">
          <div className="w-1/3">
            <div className="bg-white rounded-lg shadow-2xl p-4">
              <div className="flex justify-center items-center">
                <span className="text-2xl font-bold text-green-500">
                  Register
                </span>
              </div>
              {/* <form ref={formRef}> */}
              <div className="mt-5">
                <label className="block text-green-500 text-sm font-bold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Name"
                  name="name"
                  onChange={(e) =>
                    dispatch(
                      setData({ name: e.target.name, value: e.target.value })
                    )
                  }
                />
              </div>
              <div className="mt-5">
                <label className="block text-green-500 text-sm font-bold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Email"
                  name="email"
                  onChange={(e) =>
                    dispatch(
                      setData({ name: e.target.name, value: e.target.value })
                    )
                  }
                />
              </div>
              {/** Image Preview */}
              {preview && (
                <div className="mt-5">
                  <div className="flex justify-center items-center">
                    <img
                      src={preview}
                      alt="preview"
                      className="w-20 h-20 rounded-full"
                    />
                  </div>
                </div>
              )}

              {/** Image Upload */}
              <div className="mt-5">
                <label className="block text-green-500 text-sm font-bold mb-2">
                  Image Upload
                </label>
                <input
                  type="file"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Image"
                  name="image"
                  onChange={handleChange}
                />
              </div>
              <div className="mt-5">
                <label className="block text-green-500 text-sm font-bold mb-2">
                  Password
                </label>
                <input
                  type="password"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Password"
                  name="password"
                  onChange={(e) =>
                    dispatch(
                      setData({ name: e.target.name, value: e.target.value })
                    )
                  }
                />
              </div>
              <div className="mt-5">
                <label className="block text-green-500 text-sm font-bold mb-2">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  onChange={(e) =>
                    dispatch(
                      setData({ name: e.target.name, value: e.target.value })
                    )
                  }
                />
              </div>
              {/* Already have an account */}
              <div className="mt-5">
                <NavLink to="/login" className="text-green-500">
                  Already have an account?
                </NavLink>
              </div>

              <div className="mt-5">
                {imageLoader ? (
                  <div className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full">
                    <div className="flex justify-center items-center">
                      <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-5 w-5"></div>
                    </div>
                  </div>
                ) : isLoading ? (
                  <div className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full">
                    <div className="flex justify-center items-center">
                      <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-5 w-5"></div>
                    </div>
                  </div>
                ) : (
                  <button
                    onClick={(e) => handleRegistration(e)}
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full"
                  >
                    Registration
                  </button>
                )}
              </div>
              {/* </form> */}
            </div>
          </div>
        </div>
      </form>
    </Fragment>
  );
};

export default Register;
