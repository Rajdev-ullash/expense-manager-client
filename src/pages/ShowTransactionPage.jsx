import React, { Fragment } from "react";
import ShowTransaction from "../components/Transaction/ShowTransaction";
import Sidebar from "../Layouts/Sidebar";

const ShowTransactionPage = () => {
  return (
    <Fragment>
      <Sidebar>
        <ShowTransaction />
      </Sidebar>
    </Fragment>
  );
};

export default ShowTransactionPage;
