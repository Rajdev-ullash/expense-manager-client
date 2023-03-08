import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import {
  useGetUsersQuery,
  useDeleteUserMutation,
} from "../../redux/features/api/apiSlice";

import { MdOutlineDeleteOutline } from "react-icons/md";
import Pagination from "../Pagination/Pagination";
import Table from "../Table/Table";
import Loader from "../Loader/Loader";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import { DeleteAlert } from "../../helper/DeleteAlert";

const User = () => {
  const dispatch = useDispatch();

  const search = useSelector((state) => state.user.search);
  const filter = useSelector((state) => state.user.filter);
  const pageNo = useSelector((state) => state.user.pageNo);
  const perPage = useSelector((state) => state.user.perPage);

  const { data, isLoading, isError, error } = useGetUsersQuery(
    //pass the search and filter, pageNo,perPage value to the query
    {
      search: search,
      filter: filter,
      pageNo: pageNo,
      perPage: perPage,
    },
    {
      refetchOnMountOrArgChange: true,
    }
  );

  // console.log(search);
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

  const [deleteUser] = useDeleteUserMutation();

  const handleDelete = (email) => {
    DeleteAlert(deleteUser, email);
  };
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader />
      </div>
    );
  }

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
          <div className="flex flex-row gap-2 items-center mr-16">
            {/* filter with form dropdown */}
            <div className="relative inline-block text-left">
              <select
                aria-label="Selected tab"
                onChange={(e) =>
                  dispatch({ type: "user/setFilter", payload: e.target.value })
                }
                className="form-select form-select-sm rounded-md text-sm text-gray-500 px-2 py-2 cursor-pointer"
              >
                <option value="0">All</option>
                <option value="true">Active</option>
                <option value="false">InActive</option>
              </select>
            </div>
            <div className="h-10 w-10 mr-5 mt-1">
              <select
                aria-label="Selected tab"
                onChange={(e) =>
                  dispatch({ type: "user/setPerPage", payload: e.target.value })
                }
                className="form-select form-select-sm rounded-md text-sm text-gray-500 px-2 py-2 cursor-pointer"
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
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Verified
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      image
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
                        <Table
                          item={item}
                          index={index}
                          rowData={perPage * (pageNo - 1)}
                        />
                        <td className="px-6 py-4 whitespace-nowrap text-start text-sm font-medium">
                          {/* delete icon */}
                          <MdOutlineDeleteOutline
                            size={22}
                            className="text-center ml-3 text-red-600 hover:text-red-900 cursor-pointer"
                            onClick={() => {
                              handleDelete(item.email);
                            }}
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

export default User;
