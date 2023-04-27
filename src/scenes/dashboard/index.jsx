import React, { useEffect, useState } from "react";
import DashboardStatsGrid from "../../components/DashboardStatsGrid";
import WelcomeMessage from "../../components/WelcomeMessage";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

// import TransactionChart from '../../components/TransactionChart'

const Dashboard = () => {
  const [userData, setUserData] = useState(null);
  const studentno = localStorage.getItem("_id");
  const [courseunits, setCourseunits] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/students/642fba044a24ad5e00bf4ec9`)
      .then((response) => setUserData(response.data))
      .catch((error) => console.error(error));
  }, [userData]);

  console.log("User Data:", userData);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/course-units`)
      .then((response) => setCourseunits(response.data))
      .catch((error) => console.error(error));
  }, [courseunits]);

  console.log("courseunits data...", courseunits)
  return (
    <>
      <div>
        {userData && <WelcomeMessage name={userData.name} />}
        <DashboardStatsGrid />
      </div>
      {/* <div className="mt-10 grid grid-cols-2 gap-8"> */}
        {/* one */}
        {/* <ReportRow /> */}
        {/* <div className="bg-gray-500 w-[100%] h-[260px] rounded-lg px-2 p-1"> */}
          {/* heading */}
          {/* <div className="">
            <h1 className="text-white font-bold text-2xl">
              {" "}
              Performance
            </h1>
            <div className="flex text-white font-medium text-xs">
              <p className="flex flex-1">
                General for all courseunits
              </p>
              <p className="text-xl text-red-700">+4%</p>
            </div>
          </div>
        
            <ResponsiveContainer width="100%" height="100%" >
            <LineChart
              width={500}
              height={400}
              data={courseunits}
              margin={{
                top: 20,
                right: 0,
                left: -10,
                bottom: 55,
              }}
            >
              <CartesianGrid 
                vertical={false} 
                // stroke={palette.grey[800]} 
              />
              <XAxis
                dataKey="name"
                tickLine={false}
                style={{ fontSize: "10px" }}
              />
              <YAxis
                yAxisId="left"
                tickLine={false}
                axisLine={false}
                style={{ fontSize: "10px" }}
              />
              <YAxis
                yAxisId="right"
                orientation="right"
                tickLine={false}
                axisLine={false}
                style={{ fontSize: "10px" }}
              />
              <Tooltip />
              <Legend
                height={20}
                wrapperStyle={{
                  margin: "0 0 10px 0",
                }}
              />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="code"
                stroke="#8884d8"
                // stroke={palette.tertiary[500]}
              />
              
            
            </LineChart>
          </ResponsiveContainer>
          
        </div>
        <div className="bg-gray-500 w-[100%] h-[260px]">hll</div>
        <div className="bg-gray-500 w-[100%] h-[260px]">hll</div>
        <div className="bg-gray-500 w-[100%] h-[260px]">hll</div>
      </div> */}
    </>
  );
};

export default Dashboard;
{
  /* <div className="flex flex-col gap-4">
      <WelcomeMessage />
      <DashboardStatsGrid />
	  
      <div className="flex flex-row gap-4 w-full">
      </div>
      <div className="flex flex-row gap-4 w-full">
      </div>
    </div> */
}
