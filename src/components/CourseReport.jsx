import React from "react";
import ReportTable from "./ReportTable";

const CourseReport = ({ name, year, courseName, code }) => {
  return (
    <div className="">
      <div className="relative flex justify-start gap-52">
        <h1 className="flex flex-1 font-bold text-[12px] items-center text-center gap-2">
          Faculty: <span className="font-normal">{name}</span>
        </h1>
        <h1 className="justify-end font-bold text-[12px] items-center text-end self-end space-x-2">
          Academic Year: <span className="font-normal">{year}</span>
        </h1>
      </div>
      <div className="relative flex justify-start gap-52">
        <h1 className="flex flex-1 font-bold text-[12px] items-center text-center gap-2">
          Course Code: <span className="font-normal text-xs">{code}</span>
        </h1>
        <h1 className="justify-end font-bold text-[12px] items-center text-end self-end ">
          Course Name: <span className="font-normal text-sm">{courseName}</span>
        </h1>
      </div>
      <div className="relative flex justify-start gap-52">
        <h1 className="flex flex-1 font-bold text-[12px] items-center text-center gap-2">
          Semester: <span className="font-normal">two</span>
        </h1>
        <h1 className="justify-end font-bold text-[12px] items-center text-end self-end space-x-2">
          Lecuterer Name: <span className="font-normal">Ogenrwot Daniel</span>
        </h1>
      </div>
      {/* list here */}
      <div className="mt-2">
        <div className="relative flex flex-col  shadow-lg mt-10 bg-gray-500   rounded mx-0 justify-start self-start">
          <table className="">
            <thead className="bg-[#081A51] rounded-b-xl">
              <tr className=" text-white font-extrabold">
                <th className="text-md text-start self-start px-2">
                  Student No
                </th>
                <th className="text-md ">Attendance</th>
                <th className="text-md ">Test</th>
                <th className="text-md ">Course</th>
                <th className="text-md ">Total</th>
              </tr>
            </thead>
            <tbody className="">
              <ReportTable />
              <ReportTable />
              <ReportTable />
              <ReportTable />
              <ReportTable />
              <ReportTable />
              <ReportTable />
              <ReportTable />
              <ReportTable />
              <ReportTable />
              <ReportTable />
              <ReportTable />
              <ReportTable />
              <ReportTable />
              <ReportTable />
              <ReportTable />
              <ReportTable />
              <ReportTable />
              <ReportTable />
              <ReportTable />
              <ReportTable />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CourseReport;
