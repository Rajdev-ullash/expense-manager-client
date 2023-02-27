/* eslint-disable jsx-a11y/alt-text */
import React, { Fragment } from "react";
import { NavLink, useNavigation } from "react-router-dom";
import { toast } from "../../helper/CogoToastHelper";
import {
  getUserInfo,
  removeToken,
  removeUserInfo,
} from "../../helper/LocalStorageHelper";
const Navbar = () => {
  const userInfo = getUserInfo("userInfo");

  let navigate = useNavigation();

  const handleLogout = () => {
    toast("Logout Successfully", "success");
    removeUserInfo("userInfo");
    removeToken("token");
    return window.location.reload();
  };

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
                <img src={userInfo?.image} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              {userInfo.email ? (
                <>
                  <li className="px-1 py-1 rounded-full hover:none">
                    <NavLink
                      to="/profile"
                      className=" text-green-500 font-semibold text-normal"
                    >
                      Profile
                    </NavLink>
                  </li>
                  <li
                    className="px-1 py-1 rounded-full hover:none mt-2"
                    onClick={handleLogout}
                  >
                    <h3 className=" text-green-500 font-semibold text-normal">
                      Logout
                    </h3>
                  </li>
                </>
              ) : (
                <li className="px-1 py-1 rounded-full hover:none">
                  <NavLink
                    to="/login"
                    className=" text-green-500 font-semibold text-normal"
                  >
                    Login
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Navbar;
