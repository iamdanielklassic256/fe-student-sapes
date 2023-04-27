import React, { useState } from "react";
import { Link } from "react-router-dom";
import TrackAttendance from "../../components/TrackAttendance";
import AttendanceRow from "../../components/AttendanceRow";
import { Document, PDFDownloadLink, Page, Text, View } from "@react-pdf/renderer";
import AttendanceForm, { DownloadButton } from "../../components/AttendanceForm";

const CourseUnitAttendance = () => {

  return (
    <div>
      {/* heading */}
      <div className="">
        <h1 className="text-3xl font-extrabold text-[#081A51]">
          Students Attendance
        </h1>
        <div className="flex items-center">
          <p className="flex flex-1">Managing students attendance </p>
        </div>
      </div>
     <div className="mt-6">
     {/* <PDFDownloadLink document={<AttendanceForm />} filename="attendance"> */}
      {/* {({loading}) => (loading ? <p>Loading Document...</p> :       */}
      {/* <button>Download</button> 
      </PDFDownloadLink> */}
      <AttendanceForm />
     </div>
     {/* <div className="absolute bg-[#081A51] text-white p-1 px-2 font-medium rounded-lg top-32 right-8 cursor-pointer">
      <DownloadButton onClick={downloadFile}/>
     </div> */}
    </div>
  );
};
export default CourseUnitAttendance;
