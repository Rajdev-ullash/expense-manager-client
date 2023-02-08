import React, { Fragment } from "react";
import CreateCategory from "../components/Category/CreateCategory";
import Sidebar from "../Layouts/Sidebar";

const CreateCategoryPage = () => {
  return (
    <Fragment>
      <Sidebar>
        <CreateCategory />
      </Sidebar>
    </Fragment>
  );
};

export default CreateCategoryPage;
