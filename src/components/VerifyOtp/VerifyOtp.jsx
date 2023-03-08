import React, { Fragment, useState } from "react";
import OtpInput from "react18-input-otp";
import Swal from "sweetalert2";
import { getVerifyOTPEmail, verifyOTP } from "../../helper/LocalStorageHelper";
import { useUserVerifyOTPMutation } from "../../redux/features/api/apiSlice";
import { useNavigate } from "react-router-dom";
let defaultInputStyle = {
  fontFamily: "monospace",
  MozAppearance: "textfield",
  margin: "4px",
  paddingLeft: "8px",
  width: "45px",
  borderRadius: "3px",
  height: "45px",
  fontSize: "32px",
  border: "1px solid lightskyblue",
  boxSizing: "border-box",
  color: "black",
  backgroundColor: "white",
  borderColor: "green",
  focus: {
    borderColor: "green",
  },
};

const VerifyOtp = () => {
  const [verifyOTPData, { isLoading, error }] = useUserVerifyOTPMutation({
    refetchOnMountOrArgChange: true,
  });
  let navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const handleChange = (enteredOtp) => {
    setOtp(enteredOtp);
    console.log(enteredOtp);
  };
  let getOTPEmail = getVerifyOTPEmail("getVerifyOTPEmail");

  const submitOTP = (e) => {
    e.preventDefault();
    if (otp.length === 6) {
      verifyOTPData({
        email: getOTPEmail,
        otp: otp,
      }).then((res) => {
        console.log(res);
        if (res.data?.success === true) {
          Swal.fire({
            title: "Success",
            text: res.data?.message,
            icon: "success",
            // confirmButtonText: "Ok",
            timer: 5000,
          }).then(() => {
            verifyOTP(otp);
            navigate("/reset-password", { replace: true });
          });
        }

        if (res.error.status === 400) {
          Swal.fire({
            title: "Error",
            text: res.error?.data?.msg,
            icon: "error",
            // confirmButtonText: "Ok",
            timer: 5000,
          });
        }
      });
    } else {
      alert("Please enter a valid OTP");
    }
  };

  return (
    <Fragment>
      <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100 sm:px-6 lg:px-8">
        <div className="w-full max-w-md bg-white shadow-lg py-6 px-2">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Verify OTP
            </h2>
          </div>
          <div className="mt-4">
            <div className="mt-6">
              <div className="mt-6">
                <label
                  htmlFor="otp"
                  className="block text-sm font-medium text-gray-700 text-center"
                >
                  A 6 Digit verification code has been sent to your email
                  address.
                </label>
                <div className="mt-3">
                  <OtpInput
                    value={otp}
                    onChange={handleChange}
                    numInputs={6}
                    separator={<span>-</span>}
                    containerStyle="flex justify-center"
                    inputStyle={defaultInputStyle}
                    isInputNum={true}
                    // isInputSecure={true}
                  />
                </div>
                {/* create a next button */}
                <div className="mt-6 mb-3">
                  {isLoading ? (
                    <button
                      type="submit"
                      className="w-full flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-500 hover:bg-gray-700 focus:outline-none "
                    >
                      Loading...
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="group relative w-full flex justify-center py-2 px-8 border border-transparent text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-700 focus:outline-none "
                      onClick={(e) => submitOTP(e)}
                    >
                      Next
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

export default VerifyOtp;
