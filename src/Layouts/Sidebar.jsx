import React, { Fragment } from "react";
import Navbar from "../components/Navbar/Navbar";
import SidebarComponent from "../components/Sidebar/SidebarComponent";

const Sidebar = ({ children }) => {
  return (
    <Fragment>
      <Navbar />
      <section className="flex ">
        <div className="">
          <SidebarComponent />
        </div>
        <div className=" bg-gray-500 h-screen overflow-y-auto no-scrollbar w-full">
          <div className="mx-12 my-2 ">{children}</div>
        </div>
      </section>
    </Fragment>
  );
};

export default Sidebar;
