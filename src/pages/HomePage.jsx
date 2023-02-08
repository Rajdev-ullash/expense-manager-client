import React, { Fragment } from "react";
import Home from "../components/Home/Home";
import Sidebar from "../Layouts/Sidebar";

const HomePage = () => {
  return (
    <Fragment>
      <Sidebar>
        <Home />
      </Sidebar>
    </Fragment>
  );
};

export default HomePage;
