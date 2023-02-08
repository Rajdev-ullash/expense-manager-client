import React, { Fragment } from "react";
import User from "../components/User/User";
import Sidebar from "../Layouts/Sidebar";

const UserPage = () => {
  return (
    <Fragment>
      <Sidebar>
        <User />
      </Sidebar>
    </Fragment>
  );
};

export default UserPage;
