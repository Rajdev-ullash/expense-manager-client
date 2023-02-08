import React, { Fragment } from "react";

const CreateTransaction = () => {
  return (
    <Fragment>
      {/** Create Transaction Form with type, description category field */}
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
                Type
              </label>
              <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                <option value="income">Income</option>
                <option value="expense">Expense</option>
              </select>
            </div>
            <div className="mt-5">
              <label className="block text-green-500 text-sm font-bold mb-2">
                Description
              </label>
              <textarea
                className="
                    shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              ></textarea>
            </div>
            {/* Amount field */}
            <div className="mt-5">
              <label className="block text-green-500 text-sm font-bold mb-2">
                Amount
              </label>
              <input
                type="number"
                className="
                        shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mt-5">
              <label className="block text-green-500 text-sm font-bold mb-2">
                Category
              </label>
              <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                <option value="income">Income</option>
                <option value="expense">Expense</option>
              </select>
            </div>
            {/* Create button */}
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

export default CreateTransaction;
