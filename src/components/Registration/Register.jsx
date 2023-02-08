import React, { Fragment, useState } from "react";
import { NavLink } from "react-router-dom";
const Register = () => {
  /* image preview */
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [error, setError] = useState(null);
  const types = ["image/png", "image/jpeg"];
  const handleChange = (e) => {
    let selected = e.target.files[0];
    if (selected && types.includes(selected.type)) {
      setImage(selected);
      setPreview(URL.createObjectURL(selected));
      setError("");
    } else {
      setImage(null);
      setPreview(null);
      setError("Please select an image file (png or jpeg)");
    }
  };
  return (
    <Fragment>
      {/* input field with name, email,preview image, image, password, confirm password  */}
      <div className="flex justify-center items-center h-screen bg-gray-300">
        <div className="w-1/3">
          <div className="bg-white rounded-lg shadow-2xl p-4">
            <div className="flex justify-center items-center">
              <span className="text-2xl font-bold text-green-500">
                Register
              </span>
            </div>
            <div className="mt-5">
              <label className="block text-green-500 text-sm font-bold mb-2">
                Name
              </label>
              <input
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Name"
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
              />
            </div>
            {/* Already have an account */}
            <div className="mt-5">
              <NavLink to="/login" className="text-green-500">
                Already have an account?
              </NavLink>
            </div>

            <div className="mt-5">
              <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full">
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Register;
