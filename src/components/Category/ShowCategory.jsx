import React, { Fragment, useState } from "react";
import { BiAccessibility } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { MdOutlineModeEditOutline, MdOutlineDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useGetCategoriesQuery } from "../../redux/features/api/apiSlice";
import Table from "../Table/Table";
import { MdOutlineDeleteOutline } from "react-icons/md";
import Pagination from "../Pagination/Pagination";
import CategoryTable from "../CategoryTable/CategoryTable";
const ShowCategory = () => {
  const dispatch = useDispatch();

  const search = useSelector((state) => state.user.search);
  const pageNo = useSelector((state) => state.user.pageNo);
  const perPage = useSelector((state) => state.user.perPage);

  const { data, isLoading, isError, error } = useGetCategoriesQuery(
    {
      search: search,
      pageNo: pageNo,
      perPage: perPage,
    },
    {
      refetchOnMountOrArgChange: true,
    }
  );
  console.log(data);
  let pageTotal = Math.ceil(data?.data[0]?.Total[0]?.count / perPage);

  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    // alert(selectedPage);
    dispatch({ type: "user/setPageNo", payload: selectedPage + 1 });
  };
  const setSearch = (e) => {
    dispatch({ type: "user/setSearch", payload: e.target.value });
    if (e.target.value.length === 0) {
      dispatch({ type: "user/setSearch", payload: "0" });
    }
  };

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
              onChange={(e) => setSearch(e)}
            />
          </div>
          <div className="flex flex-row gap-2 items-center">
            <div className="h-10 w-10 mr-5 mt-1">
              <select
                aria-label="Selected tab"
                className="form-select form-select-sm rounded-md text-sm text-gray-500 px-2 py-2 mr-2"
                onChange={(e) =>
                  dispatch({ type: "user/setPerPage", payload: e.target.value })
                }
              >
                <option value="5">5 per page</option>
                <option value="10">10 per page</option>
                <option value="25">25 per page</option>
                <option value="50">50 per page</option>
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
                  {data?.data[0]?.Rows.map((item, index) => {
                    return (
                      <tr key={index}>
                        <CategoryTable
                          item={item}
                          index={index}
                          rowData={perPage * (pageNo - 1)}
                        />
                        <td className="px-6 py-4 whitespace-nowrap text-start text-sm font-medium">
                          {/* delete icon */}
                          <MdOutlineDeleteOutline
                            size={22}
                            className="text-center ml-3 text-red-600 hover:text-red-900 cursor-pointer"
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* Pagination */}
        <div className="mt-3 rounded-lg bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
          {/* react-Pagination */}
          {data?.data[0]?.Rows.length > 0 && (
            <div className="flex flex-row justify-between items-center font-semibold">
              <div className="text-sm text-gray-500 mr-3">
                Showing {perPage * (pageNo - 1) + data?.data[0]?.Rows.length} of{" "}
                {data?.data[0]?.Total[0]?.count} entries
              </div>
              <div className="text-sm text-gray-500">
                Page {pageNo} of {pageTotal}
              </div>
            </div>
          )}

          <Pagination pageTotal={pageTotal} handlePageClick={handlePageClick} />
        </div>
      </div>
    </Fragment>
  );
};

export default ShowCategory;
