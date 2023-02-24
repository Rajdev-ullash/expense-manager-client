import React, { Fragment } from "react";
import ReactPaginate from "react-paginate";
const Pagination = ({ pageTotal, handlePageClick }) => {
  return (
    <Fragment>
      <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        pageCount={pageTotal}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={"pagination flex justify-center space-x-2"}
        pageClassName={"rounded-full"}
        pageLinkClassName={
          "bg-orange-400 hover:bg-orange-600 py-2 px-4 rounded-full"
        }
        activeClassName={`bg-orange-500 text-white `}
        previousClassName={"rounded-full"}
        previousLinkClassName={
          "bg-orange-400 hover:bg-orange-600 py-2 px-4 rounded-full"
        }
        nextClassName={"rounded-full"}
        nextLinkClassName={
          "bg-orange-400 hover:bg-orange-600 py-2 px-4 rounded-full"
        }
        breakClassName={"rounded-full"}
        breakLinkClassName={
          "bg-orange-400 hover:bg-orange-600 py-2 px-4 rounded-full"
        }
      />
    </Fragment>
  );
};

export default Pagination;
