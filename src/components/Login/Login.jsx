import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
const Login = () => {
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
              />
            </div>
            {/* Remember Me & register here */}
            <div className="mt-5 flex justify-between">
              <div className="flex items-center">
                <input type="checkbox" className="mr-3 cursor-pointer" />
                <span className="text-green-500 text-sm">Remember Me</span>
              </div>

              <div className="flex flex-row items-center">
                <NavLink to="#" className="text-green-500 text-sm">
                  Forgot Password?
                </NavLink>
                <span className="text-green-500 text-sm mr-1 ml-1"> | </span>
                <NavLink to="/register" className="text-green-500 text-sm ml-1">
                  Register Here
                </NavLink>
              </div>
            </div>
            <div className="mt-5">
              <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full">
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
