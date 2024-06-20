import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Dashboard from "../components/Dashboard/Dashboard";
import Activities from "../components/Activities/Activities";

const Home = () => {
  return (
    <div className=" flex ">
      <Sidebar />
      <div className=" w-[calc(100vw-60px)] h-screen flex items-center justify-between">
        <div className=" w-[70%] h-full">
          <Dashboard />
        </div>
        <div className=" w-[30%] h-full">
          <Activities />
        </div>
      </div>
    </div>
  );
};

export default Home;
