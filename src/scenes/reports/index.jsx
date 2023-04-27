import React from "react";
import WelcomeReport from "../../components/WelcomeReport";
import ReportRow from "../../components/ReportRow";
import { AreaChart, CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const Report = () => {
  return (
    <div className="flex flex-col gap-4">
      <WelcomeReport />
      {/* <DashboardStatsGrid /> */}
      <div className="mt-10 grid grid-cols-2 gap-8">
        {/* one */}
        {/* <ReportRow /> */}
        <div className="bg-gray-500 w-[100%] h-[260px] rounded-lg px-2 p-1">
          {/* heading */}
          <div className="">
            <h1 className="text-white font-bold text-2xl">
              {" "}
              Student Attendance
            </h1>
            <div className="flex text-white font-medium text-xs">
              <p className="flex flex-1">
                General Attendance for all courseunits
              </p>
              <p className="text-xl text-red-700">+4%</p>
            </div>
          </div>
          <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={400}
            // data={data}
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
              dataKey="GC3201"
              stroke="#8884d8"
              // stroke={palette.tertiary[500]}
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="GCS3201"
              stroke="#081A51"
            />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="GC3202"
              stroke="#8884d8"
              // stroke={palette.tertiary[500]}
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="GCS3203"
              stroke="#081A51"
            /><Line
            yAxisId="left"
            type="monotone"
            dataKey="GC3204"
            stroke="#8884d8"
            // stroke={palette.tertiary[500]}
          />
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="GCS3205"
            stroke="#081A51"
          />
          </LineChart>
        </ResponsiveContainer>
        </div>
        <div className="bg-gray-500 w-[100%] h-[260px]">hll</div>
        <div className="bg-gray-500 w-[100%] h-[260px]">hll</div>
        <div className="bg-gray-500 w-[100%] h-[260px]">hll</div>
      </div>
    </div>
  );
};

export default Report;
