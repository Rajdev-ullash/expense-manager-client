/* eslint-disable jsx-a11y/alt-text */
import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <Fragment>
      <div className="navbar bg-orange-400">
        <div className="flex-1">
          <NavLink
            to="/"
            className="btn btn-ghost normal-case text-xl text-white font-semibold"
          >
            Expense Manager
          </NavLink>
        </div>
        <div className="flex-none gap-2">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li className="bg-gray-200 px-1 py-1 rounded-full hover:none">
                <NavLink
                  to="/login"
                  className=" text-green-500 font-semibold text-normal"
                >
                  Profile
                </NavLink>
              </li>
              <li className="bg-gray-200 px-1 py-1 rounded-full hover:none mt-2">
                <NavLink
                  to="/login"
                  className=" text-green-500 font-semibold text-normal"
                >
                  Login
                </NavLink>
              </li>
              <li className="bg-gray-200 px-1 py-1 rounded-full hover:none mt-2">
                <NavLink
                  to="/login"
                  className=" text-green-500 font-semibold text-normal"
                >
                  Logout
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Navbar;
