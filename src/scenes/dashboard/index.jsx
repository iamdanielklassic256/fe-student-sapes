import React, { useEffect, useState } from "react";
import DashboardStatsGrid from "../../components/DashboardStatsGrid";
import WelcomeMessage from "../../components/WelcomeMessage";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { selectCurrentToken, selectCurrentUser } from "../../feature/auth/authSlice";
import { useSelector } from "react-redux";

// import TransactionChart from '../../components/TransactionChart'

const Dashboard = () => {
  const user = useSelector(selectCurrentUser)
	const token = useSelector(selectCurrentToken)


	const welcome = user ? `Welcome ${user}!` : `Welcome`;
	const tokenAbbr = `${token.slice(0, 9) }...`
  return (
    <>
      <div>
        <WelcomeMessage welcome={welcome} key={welcome._id}/>
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
