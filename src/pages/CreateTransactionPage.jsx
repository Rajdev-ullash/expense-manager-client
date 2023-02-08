import React, { Fragment } from "react";
import CreateTransaction from "../components/Transaction/CreateTransaction";
import Sidebar from "../Layouts/Sidebar";

const CreateTransactionPage = () => {
  return (
    <Fragment>
      <Sidebar>
        <CreateTransaction />
      </Sidebar>
    </Fragment>
  );
};

export default CreateTransactionPage;
