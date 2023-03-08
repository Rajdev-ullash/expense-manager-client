import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { resetPasswordForm } from "../../helper/AuthFormHelper";
import {
  getVerifyOTP,
  getVerifyOTPEmail,
  removeVerifyOTP,
  removeVerifyOTPEmail,
} from "../../helper/LocalStorageHelper";
import { useUserResetPasswordMutation } from "../../redux/features/api/apiSlice";
import { setData } from "../../redux/features/auth/authSlice";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const navigate = useNavigate();
  let resetPasswordEmail = getVerifyOTPEmail("getVerifyOTPEmail");
  let resetPasswordOTP = getVerifyOTP("getVerifyOTP");
  const dispatch = useDispatch();
  const getFormData = useSelector((state) => state.auth.data);

  const [resetPasswordFormData, { isLoading }] = useUserResetPasswordMutation({
    refetchOnMountOrArgChange: true,
  });

  let onSubmitForm = (e) => {
    e.preventDefault();
    resetPasswordForm(getFormData.password, getFormData.confirmPassword).then(
      (res) => {
        console.log(res);
        if (res === true) {
          resetPasswordFormData({
            email: resetPasswordEmail,
            otp: resetPasswordOTP,
            password: getFormData.password,
          })
            .unwrap()
            .then((res) => {
              if (res.success === true) {
                Swal.fire({
                  icon: "success",
                  title: "Password Reset Successfully",
                  showConfirmButton: false,
                  timer: 3500,
                }).then(() => {
                  removeVerifyOTP("removeVerifyOTP");
                  removeVerifyOTPEmail("removeVerifyOTPEmail");
                  return navigate("/login", { replace: true });
                });
              }
            })
            .catch((err) => {
              console.log(err);
              if (err?.status === 400) {
                Swal.fire({
                  icon: "error",
                  title: `${err?.data.msg}`,
                  showConfirmButton: true,
                  confirmButtonText: "Ok",
                }).then(() => {
                  removeVerifyOTP("removeVerifyOTP");
                  removeVerifyOTPEmail("removeVerifyOTPEmail");
                  return navigate("/login", { replace: true });
                });
              }
            });
        }
      }
    );
  };
  return (
    <Fragment>
      <div>
        <div className="flex justify-center items-center h-screen bg-gray-300">
          <div className="w-1/3">
            <div className="bg-white rounded-lg shadow-2xl p-4">
              <div className="flex justify-center items-center">
                <span className="text-2xl font-bold text-green-500">
                  Reset Password
                </span>
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
              <div className="mt-5">
                <button
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                  onClick={(e) => onSubmitForm(e)}
                >
                  Reset Password
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* create a button to submit the form */}
    </Fragment>
  );
};

export default ResetPassword;
