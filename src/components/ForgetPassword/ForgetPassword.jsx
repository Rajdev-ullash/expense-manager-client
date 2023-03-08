import React, { Fragment } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import { forgetPasswordForm } from "../../helper/AuthFormHelper";
import { useUserForgetPasswordMutation } from "../../redux/features/api/apiSlice";
import { setData } from "../../redux/features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { verifyOTPEmail } from "../../helper/LocalStorageHelper";

const ForgetPassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const getForgetPasswordFormData = useSelector((state) => state.auth.data);
  const [forgetPasswordData, { isLoading, error }] =
    useUserForgetPasswordMutation({
      refetchOnMountOrArgChange: true,
    });

  const handleForgetPassword = (e) => {
    e.preventDefault();
    forgetPasswordForm(getForgetPasswordFormData.email).then((res) => {
      if (res) {
        if (res === true) {
          forgetPasswordData({
            email: getForgetPasswordFormData.email,
          })
            .unwrap()
            .then((res) => {
              console.log(res);
              if (res?.success === true) {
                new Swal({
                  title: "Success",
                  text: "6 digit code has been sent to your email address and it will expire in 15 minutes, please check your inbox & spam folder.",
                  icon: "success",
                  showConfirmButton: true,
                })
                  .then((result) => {
                    if (result.isConfirmed) {
                      // window.location.href = "/reset-password";
                      verifyOTPEmail(getForgetPasswordFormData.email);
                      return navigate("/verify-otp", { replace: true });
                    }
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              }
            })
            .catch((err) => {
              console.log(err);
              if (err?.status === 400) {
                new Swal({
                  title: "Error",
                  text: `${err?.data?.msg}`,
                  icon: "error",
                  showConfirmButton: true,
                  confirmButtonText: "Ok",
                });
              }
            });
        }
      }
    });
  };
  return (
    <Fragment>
      <div>
        <div className="flex justify-center items-center h-screen bg-gray-300">
          <div className="w-1/3">
            <div className="bg-white rounded-lg shadow-2xl p-4">
              <div className="flex justify-center items-center">
                <span className="text-2xl font-bold text-green-500">
                  Forget Password
                </span>
              </div>
              <div className="mt-5">
                <label className="block text-green-500 text-sm font-bold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-1"
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
                <div className="flex justify-center">
                  {isLoading ? (
                    <button className="bg-green-500 text-white px-4 py-2 rounded-md focus:outline-none">
                      Sending Email ...
                    </button>
                  ) : (
                    <button
                      className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-2"
                      onClick={(e) => handleForgetPassword(e)}
                    >
                      Send
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ForgetPassword;
