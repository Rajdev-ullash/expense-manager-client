import React, { Fragment, useState } from "react";
import { BiAccessibility } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { MdOutlineModeEditOutline, MdOutlineDelete } from "react-icons/md";
const ShowCategory = () => {
  const [dropdown, setDropdown] = useState(false);
  return (
    <Fragment>
      {/* Responsive Tailwind Table with pagination search & filter */}
      <div className="flex flex-col">
        {/* search bar & filter */}
        <div className="flex flex-row justify-between items-center">
          <div className="">
            <input
              type="text"
              placeholder="Search"
              className="border border-gray-300 rounded-md px-2 py-1"
            />
          </div>
          <div className="flex flex-row gap-2 items-center">
            <div className="h-10 w-10 mr-5 mt-1">
              <select
                aria-label="Selected tab"
                className="form-select form-select-sm rounded-md text-sm text-gray-500 px-2 py-2 mr-2"
              >
                <option className="px-2 py-1">10</option>
                <option>25</option>
                <option>50</option>
                <option>100</option>
              </select>
            </div>
          </div>
        </div>

        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 mt-2">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Sl No
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Icon
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">1</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {/** Icon */}
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <BiAccessibility size={20} />
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">Category Name</div>
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap text-start text-sm font-medium">
                      {/** Edit & Delete icon */}
                      <div className="flex flex-row gap-4">
                        <NavLink to="#">
                          <MdOutlineModeEditOutline
                            size={20}
                            className="text-green-500"
                          />
                        </NavLink>
                        <NavLink to="#">
                          <MdOutlineDelete size={20} className="text-red-500" />
                        </NavLink>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">2</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {/** Icon */}
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <BiAccessibility size={20} />
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">Category Name</div>
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap text-start text-sm font-medium">
                      {/** Edit & Delete icon */}
                      <div className="flex flex-row gap-4">
                        <NavLink to="#">
                          <MdOutlineModeEditOutline
                            size={20}
                            className="text-green-500"
                          />
                        </NavLink>
                        <NavLink to="#">
                          <MdOutlineDelete size={20} className="text-red-500" />
                        </NavLink>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">3</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {/** Icon */}
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <BiAccessibility size={20} />
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">Category Name</div>
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap text-start text-sm font-medium">
                      {/** Edit & Delete icon */}
                      <div className="flex flex-row gap-4">
                        <NavLink to="#">
                          <MdOutlineModeEditOutline
                            size={20}
                            className="text-green-500"
                          />
                        </NavLink>
                        <NavLink to="#">
                          <MdOutlineDelete size={20} className="text-red-500" />
                        </NavLink>
                      </div>
                    </td>
                  </tr>

                  {/* More items... */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* Pagination */}
        <div className="mt-3 rounded-lg bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
          <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between rounded-sm">
            <div>
              <p className="text-sm text-gray-700">
                Showing
                <span className="font-medium ml-1 mr-1">1</span>
                to
                <span className="font-medium ml-1 mr-1">10</span>
                of
                <span className="font-medium ml-1 mr-1">97</span>
                results
              </p>
            </div>
            <div>
              <nav
                className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
                aria-label="Pagination"
              >
                <NavLink
                  to="#"
                  className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                  <span className="sr-only">Previous</span>
                  <svg
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 7.293a1 1 0 011.414 0L12 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </NavLink>
                <NavLink
                  to="#"
                  aria-current="page"
                  className="z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                >
                  1
                </NavLink>
                <NavLink
                  to="#"
                  className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  2
                </NavLink>
                <NavLink
                  to="#"
                  className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  3
                </NavLink>
                <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
                  ...
                </span>
                <NavLink
                  to="#"
                  className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  8
                </NavLink>
                <NavLink
                  to="#"
                  className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  9
                </NavLink>
                <NavLink
                  to="#"
                  className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  10
                </NavLink>
                <NavLink
                  to="#"
                  className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                  <span className="sr-only">Next</span>
                  <svg
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.707 7.293a1 1 0 00-1.414 0L8 10.586 4.707 7.293a1 1 0 10-1.414 1.414l4 4a1 1 0 001.414 0l4-4a1 1 0 000-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </NavLink>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ShowCategory;
