import React, { Fragment } from "react";

const Table = ({ item, index }) => {
  return (
    <Fragment>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{index + 1}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{item.name}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{item.email}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span
          className={
            item.isVerified == true
              ? "px-4 py-1 bg-green-500 text-white rounded-full text-xs font-semibold"
              : "px-4 py-1 bg-red-500 text-white rounded-full text-xs font-semibold"
          }
        >
          {item.isVerified == true ? "Active" : "Inactive"}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        <div className="flex-shrink-0 h-10 w-10">
          <img className="h-10 w-10 rounded-full" src={item.image} alt="" />
        </div>
      </td>
    </Fragment>
  );
};

export default Table;
