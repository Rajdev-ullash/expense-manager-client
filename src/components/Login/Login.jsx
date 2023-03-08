import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { loginForm } from "../../helper/AuthFormHelper";
import { setToken, setUserInfo } from "../../helper/LocalStorageHelper";
import { useUserLoginMutation } from "../../redux/features/api/apiSlice";
import { setData } from "../../redux/features/auth/authSlice";
const Login = () => {
  // const navigate = useNavigate();
  const dispatch = useDispatch();
  const getLoginFormData = useSelector((state) => state.auth.data);

  const [loginFormData, { isLoading, error }] = useUserLoginMutation({
    refetchOnMountOrArgChange: true,
  });

  const handleLogin = (e) => {
    e.preventDefault();
    loginForm(getLoginFormData.email, getLoginFormData.password).then((res) => {
      if (res) {
        if (res === true) {
          loginFormData({
            email: getLoginFormData.email,
            password: getLoginFormData.password,
          })
            .unwrap()
            .then((res) => {
              if (res?.success === true) {
                setToken(res?.token);
                setUserInfo(res?.data);
                new Swal({
                  title: "Success",
                  text: "Login Successfully",
                  icon: "success",
                  timer: 2000,
                  showConfirmButton: false,
                }).then(() => {
                  return window.location.replace("/");
                });
              }
            })
            .catch((err) => {
              console.log(err);
              if (err?.status === 400) {
                new Swal({
                  title: "Error",
                  text: `${err?.data.msg}`,
                  icon: "error",
                  showConfirmButton: true,
                  confirmButtonText: "Ok",
                });
              }
            });
        }
      }
    });

    // dispatch(loginUser(getLoginFormData));
  };
  return (
    <Fragment>
      {/** Login Form */}
      <div className="flex justify-center items-center h-screen bg-gray-300">
        <div className="w-1/3">
          <div className="bg-white rounded-lg shadow-2xl p-4">
            <div className="flex justify-center items-center">
              <span className="text-2xl font-bold text-green-500">Login</span>
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
              {isLoading ? (
                <div
                  className="
                flex justify-center items-center
                "
                >
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-green-500"></div>
                </div>
              ) : (
                <button
                  onClick={(e) => handleLogin(e)}
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full"
                >
                  Login
                </button>
              )}
              {/* Forget Password */}
              <div className="flex justify-center items-center mt-5">
                <NavLink
                  to="/forget-password"
                  className="text-green-500 hover:text-green-700"
                >
                  Forget Password?
                </NavLink>
              </div>
              <div className="flex justify-center items-center mt-3">
                <NavLink
                  to="/register"
                  className="text-green-500 hover:text-green-700 ml-5"
                >
                  Already have an account?
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
