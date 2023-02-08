import React, { Fragment } from "react";
import ShowCategory from "../components/Category/ShowCategory";
import Sidebar from "../Layouts/Sidebar";

const ShowCategoryPage = () => {
  return (
    <Fragment>
      <Sidebar>
        <ShowCategory />
      </Sidebar>
    </Fragment>
  );
};

export default ShowCategoryPage;
