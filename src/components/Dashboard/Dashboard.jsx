import React from "react";
import Chart from "react-apexcharts";
import "./dashboard.css";
const Card = ({ value }) => {
  const options = {
    chart: {
      type: "donut",
      width: 250, // Adjust the overall width of the chart
      height: 250, // Adjust the overall height of the chart
    },
    series: [25, 25, 50],

    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    plotOptions: {
      pie: {
        donut: {
          size: "65%", // Adjust the size of the donut hole (inner radius)
          labels: {
            show: true,
            name: {
              show: true,
            },
            total: {
              show: true,
              label: "Total",
              showAlways: true,
              fontSize: "10px",
              fontWeight: "bold",
              lineHeight: "0px",
              padding: "0px",
              color: "#373d3f",
              formatter: () => {
                // Calculate the total value and return it

                return 12345;
              },
            },
            value: {
              show: true,
              fontSize: "10px",
              fontWeight: "bold",
              color: "#373d3f",
            },
          },
        },
      },
    },

    colors: ["#FFCB49", "#7464FF", "#4FD2B5"],
  };
  const series = [25, 25, 50];

  return (
    <div className=" w-[180px] h-[250px] flex flex-col mx-2 bg-white  mt-4 rounded-md p-3">
      <div className="">
        <h1 className=" text-sm font-medium">{value.type}</h1>
      </div>
      <div className=" w-full h-max  flex justify-center">
        <Chart
          options={options}
          series={series}
          type="donut"
          width={130}
          height={130}
        />
      </div>
      <div className=" flex flex-col justify-center">
        <div className=" upcoming flex justify-between items-center rounded-md px-2 text-xs py-1">
          <h1>Upcoming</h1>
          <p>{value.Upcoming}</p>
        </div>
        <div className=" ongoing flex justify-between items-center rounded-md px-2 text-xs my-2 py-1">
          <h1>Ongoing</h1>
          <p>{value.Upcoming}</p>
        </div>
        <div className=" completed flex justify-between items-center rounded-md px-2 text-xs py-1">
          <h1>Completed</h1>
          <p>{value.Upcoming}</p>
        </div>
      </div>
    </div>
  );
};
const Dashboard = () => {
  const values = [
    { type: "Orders", Upcoming: 50, Ongoing: 100, Completed: 50 },
    { type: "Trips", Upcoming: 50, Ongoing: 100, Completed: 50 },
    { type: "Revenue", Upcoming: 50, Ongoing: 100, Completed: 50 },
    { type: "Expences", Upcoming: 50, Ongoing: 100, Completed: 50 },
  ];
  const quickactions = [
    "Create Indents",
    "Add vehicle",
    "Add Trailer",
    "Add Driver",
    "Add indents",
  ];
  return (
    <div className=" w-full h-full bg-slate-100  p-4 flex flex-col items-center ">
      <div className="topbar flex w-full justify-between items-center">
        <div className="">
          <h1 className=" text-xl font-semibold">Dashboard</h1>
        </div>
        <div className=" bg-white rounded-full  px-4 py-1 flex justify-center items-center">
          <button>
            {" "}
            <img src="./search.png" alt="" />{" "}
          </button>
          <button className=" mx-4">
            <img src="./bell.png" alt="" />
          </button>
          <button>
            <img src="./settings.png" alt="" />
          </button>
        </div>
      </div>
      <div className=" flex w-full h-max items-center">
        {values.map((c) => (
          <Card value={c} />
        ))}
      </div>
      <div className=" flex flex-col justify-center w-full mt-4">
        <h1 className=" text-sm font-medium mb-2">Quick Actions</h1>
        <div className=" w-full h-max flex justify-around items-center bg-white px-4 rounded-md py-4">
          {quickactions.map((c) => (
            <div className=" flex flex-col justify-center items-center mx-8">
              <button className=" w-[20px] h-[20px]">
                <img src={`./${c}.png`} alt="" />
              </button>
              <h1 className=" text-xs">{c}</h1>
            </div>
          ))}
        </div>
      </div>
      <div className=" flex flex-col justify-center w-full mt-4">
        <div className=" flex justify-between">
          <h1 className=" text-sm font-medium mb-2">
            High Priority alerts (14)
          </h1>
          <h1>View all</h1>
        </div>
        <div className=" w-full flex justify-between items-center">
          <div className=" w-[48%] h-max flex flex-col justify-between items-center bg-white px-2 rounded-md py-2">
            <div className=" flex justify-between  w-full  h-max">
              <div className=" flex items-center  ml-2">
                <div className=" w-auto h-max bg-slate-200 flex justify-center items-center m-2">
                  <img src="./Add Driver.png" alt="" />
                </div>
                <div className=" flex flex-col">
                  <h1 className=" text-sm font-medium">
                    Driver Raised Concern
                  </h1>
                  <p className=" text-xs">
                    Load No : 12454, Bill To : RoaDo demo Bangalore
                  </p>
                </div>
              </div>
              <div className=" flex justify-end text-right items-start ">
                <h1 className=" text-xs">13 Feb 24</h1>
              </div>
            </div>
            <div className=" mt-4">
              <p className=" text-xs">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eius mod tempor incididunt ut labore et dolore magna aliqua
              </p>
            </div>
            <div className=" w-full flex justify-end mt-4">
              <div className=" w-1/3 flex justify-between items-center">
                <a className=" underline text-xs" href="">
                  Ignore
                </a>
                <button className=" bg-[#1A3875] w-max px-2 py-1 text-xs text-white rounded-md">
                  Resolve
                </button>
              </div>
            </div>
          </div>
          <div className=" w-[48%] h-max flex flex-col justify-between items-center bg-white px-2 rounded-md py-2">
            <div className=" flex justify-between  w-full  h-max">
              <div className=" flex items-center  ml-2">
                <div className=" w-auto h-max bg-slate-200 flex justify-center items-center m-2">
                  <img src="./temp.png" alt="" />
                </div>
                <div className=" flex flex-col">
                  <h1 className=" text-sm font-medium">
                    Reefer Temp. out of range
                  </h1>
                  <p className=" text-xs">
                    Load No : 12454, Bill To : RoaDo demo Bangalore
                  </p>
                </div>
              </div>
              <div className=" flex justify-end text-right items-start ">
                <h1 className=" text-xs">13 Feb 24</h1>
              </div>
            </div>
            <div className=" mt-4">
              <p className=" text-xs">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eius mod tempor incididunt ut labore et dolore magna aliqua
              </p>
            </div>
            <div className=" w-full flex justify-end mt-4">
              <div className=" w-1/3 flex justify-between items-center">
                <a className=" underline text-xs" href="">
                  Ignore
                </a>
                <button className=" bg-[#1A3875] w-max px-2 py-1 text-xs text-white rounded-md">
                  Resolve
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
