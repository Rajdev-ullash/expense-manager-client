import React, { Fragment } from "react";
import { BallTriangle } from "react-loader-spinner";

const Loader = () => {
  return (
    <Fragment>
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#fff"
        ariaLabel="ball-triangle-loading"
        wrapperClass={{}}
        wrapperStyle=""
        visible={true}
      />
    </Fragment>
  );
};

export default Loader;
