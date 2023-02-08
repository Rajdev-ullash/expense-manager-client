import React, { Fragment } from "react";
import Card from "./Card/Card";
import Chart from "./Chart/Chart";
import PieCharts from "./PieCharts/PieCharts";

const Home = () => {
  return (
    <Fragment>
      <h1 className="text-xl font-semibold text-white">Dashboard</h1>
      <Card />
      <Chart />
      <PieCharts />
    </Fragment>
  );
};

export default Home;
