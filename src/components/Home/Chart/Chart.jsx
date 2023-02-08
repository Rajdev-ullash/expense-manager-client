import React, { Fragment } from "react";
import { BarChart, Bar } from "recharts";
const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
const Chart = () => {
  return (
    <Fragment>
      {/** TinyBarChart for monthly income */}

      <div className="mt-10">
        {/** Bar Chart on card */}
        <div className="flex gap-1 overflow-hidden">
          <div className="basis-1/2">
            <div className="card bg-white shadow-xl">
              <div className="card-body">
                <div className="card-title text-gray-600 font-semibold">
                  Total Monthly Income
                </div>
                <BarChart
                  width={500}
                  height={300}
                  data={data}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <Bar dataKey="pv" fill="#22c55e" />
                </BarChart>
              </div>
            </div>
          </div>
          <div className="basis-1/2">
            <div className="card bg-white shadow-xl">
              <div className="card-body">
                <div className="card-title text-gray-600 font-semibold">
                  Total Monthly Expense
                </div>
                <BarChart
                  width={500}
                  height={300}
                  data={data}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <Bar dataKey="pv" fill="#22c55e" />
                </BarChart>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Chart;
