import React, { Fragment, useState } from "react";

const CreateCategory = () => {
  return (
    <Fragment>
      {/** Create Category Form with icon field & Name filed */}
      <div className="flex justify-center items-center h-screen ">
        <div className="w-[520px]">
          <div className="bg-white rounded-lg shadow-2xl p-4">
            <div className="flex justify-center items-center">
              <span className="text-2xl font-bold text-green-500">
                Create Category
              </span>
            </div>
            <div className="mt-5">
              <label className="block text-green-500 text-sm font-bold mb-2">
                Icon
              </label>
              <input
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Icon"
              />
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
            {/* Remember Me & register here */}

            <div className="mt-5">
              <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full">
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CreateCategory;
