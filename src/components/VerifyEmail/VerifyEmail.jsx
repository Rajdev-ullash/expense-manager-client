import React, { Fragment, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Loader from "../Loader/Loader";
import { HiOutlineLockClosed } from "react-icons/hi2";
import { useUserMailVerificationMutation } from "../../redux/features/api/apiSlice";
import Swal from "sweetalert2";
const VerifyEmail = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const [verifyEmails, { isLoading, isError, error }] =
    useUserMailVerificationMutation();

  const verifyEmail = (e) => {
    e.preventDefault();
    console.log("verify email");
    verifyEmails({ token: token }).then((res) => {
      console.log(res);

      if (res.data?.success === true) {
        Swal.fire({
          title: "Success !",
          text: res.data?.message,
          icon: "success",
          confirmButtonText: "Ok",
        }).then((result) => {
          if (result.isConfirmed) {
            return navigate("/login", { replace: true });
          }
        });
      } else if (res.error.status === 400) {
        Swal.fire({
          title: "Warning",
          text: res.error?.data?.msg,
          icon: "warning",
          confirmButtonText: "Ok",
        }).then((result) => {
          if (result.isConfirmed) {
            return navigate("/login", { replace: true });
          }
        });
      } else if (res.error.status === 404) {
        Swal.fire({
          title: "Error !",
          text: res.error?.data?.msg,
          icon: "error",
          confirmButtonText: "Ok",
        }).then((result) => {
          if (result.isConfirmed) {
            return navigate("/register", { replace: true });
          }
        });
      } else if (res.error.status === 500) {
        Swal.fire({
          title: "Error !",
          text: res.error?.data?.msg,
          icon: "error",
          confirmButtonText: "Ok",
        }).then((result) => {
          if (result.isConfirmed) {
            return navigate("/register", { replace: true });
          }
        });
      }
    });
  };

  return (
    <Fragment>
      {/* Verification mail card in tailwind design */}
      <div className="flex flex-col items-center justify-center min-h-screen py-12 bg-gray-200 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 bg-white rounded-lg shadow-lg">
          <div className="px-4 py-12">
            <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt="Workflow"
            />

            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Verify your email
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              click on the verify button to verify your email.
            </p>
            <div className="mt-6">
              {isLoading ? (
                <div className="flex justify-center items-center h-screen">
                  <Loader />
                </div>
              ) : (
                <button
                  onClick={(e) => verifyEmail(e)}
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <span className="absolute left-36 inset-y-0 flex items-center pl-3">
                    <HiOutlineLockClosed
                      className="h-5 w-5 text-white- group-hover:text-indigo-400"
                      aria-hidden="true"
                    />
                  </span>
                  Verify
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default VerifyEmail;
