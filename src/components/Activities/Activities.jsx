import React from "react";
import { data1 } from "../../data/data1";
const Activities = () => {
  return (
    <div className="  w-full h-full bg-white  p-4 flex flex-col items-center">
      <div className=" w-full flex flex-col justify-center">
        <h1 className=" text-sm font-medium mb-2">Todays Highlights (14)</h1>
        <p className=" text-xs text-slate-600">19 Mar 2024</p>
        <div className=" w-full flex justify-between">
          <div className=" border border-slate-400 p-2 rounded-md">
            <p className=" text-xs text-slate-600">Income</p>
            <h1 className=" text-[#148714]">100000 CAD</h1>
            <p className=" text-xs">2 payments received</p>
          </div>
          <div className="border border-slate-400 p-2 rounded-md">
            <p className=" text-xs text-slate-600">Expenses</p>
            <h1 className=" text-[#D04141]">50000 CAD</h1>
            <p className=" text-xs">5 payments received</p>
          </div>
        </div>
      </div>
      <div className=" flex justify-between w-full mt-4">
        <h1 className=" text-sm font-medium mb-2">Completed Activies (14)</h1>
        <h1 className=" text-xs underline">View All</h1>
      </div>
      <div className=" w-full h-max  border border-slate-600 rounded-md">
        {data1.map((c) => (
          <p className=" border border-y-neutral-400 text-[10px] text-slate-600 p-4">
            {c}
          </p>
        ))}
      </div>
      <div className=" flex justify-between w-full mt-4">
        <h1 className=" text-sm font-medium mb-2">Scheduled Activies (14)</h1>
        <h1 className=" text-xs underline">View All</h1>
      </div>
      <div className=" w-full h-max  border border-slate-600 rounded-md">
        {data1.map((c) => (
          <p className=" border border-y-neutral-400 text-[10px] text-slate-600 p-4">
            {c}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Activities;
