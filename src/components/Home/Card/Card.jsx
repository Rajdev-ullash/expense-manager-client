import React, { Fragment } from "react";

const Card = () => {
  return (
    <Fragment>
      <div className="grid grid-cols-3 gap-2 mt-5">
        {/* Total Transaction Card */}
        <div className="bg-white rounded-lg shadow-lg p-4">
          <div className="flex justify-between">
            <div className="flex flex-col">
              <span className="text-green-400 font-semibold text-normal">
                Total Transaction
              </span>
              <span className="text-2xl font-bold">$ 1,000</span>
            </div>
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-100">
              <span className="text-green-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
        {/* Total Expense Transaction Card */}
        <div className="bg-white rounded-lg shadow-lg p-4">
          <div className="flex justify-between">
            <div className="flex flex-col">
              <span className="text-red-400 font-semibold text-normal">
                Total Expense
              </span>
              <span className="text-2xl font-bold">$ 1,000</span>
            </div>
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-100">
              <span className="text-red-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
        {/* Total Income Transaction Card */}
        <div className="bg-white rounded-lg shadow-lg p-4">
          <div className="flex justify-between">
            <div className="flex flex-col">
              <span className="text-blue-400 font-semibold text-normal">
                Total Income
              </span>
              <span className="text-2xl font-bold">$ 1,000</span>
            </div>
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100">
              <span className="text-blue-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Card;
