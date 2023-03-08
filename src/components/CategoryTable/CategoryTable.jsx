import React, { Fragment } from "react";
import { IconContext } from "react-icons";
import * as Icons from "react-icons/ai";
const CategoryTable = ({ item, index, rowData }) => {
  const IconComponent = Icons[item.icon];

  return (
    <Fragment>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{rowData + index + 1}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">
          {IconComponent ? (
            <IconContext.Provider value={{ size: "1.5em" }}>
              <IconComponent />
            </IconContext.Provider>
          ) : (
            <div className="text-sm text-gray-900">No Icon</div>
          )}
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{item.name}</div>
      </td>
    </Fragment>
  );
};

export default CategoryTable;
