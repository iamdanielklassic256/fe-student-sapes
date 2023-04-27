import React, { useState } from 'react'
import { Link } from "react-router-dom";
import TrackAttendance from '../../components/TrackAttendance';
import AttendanceRow from '../../components/AttendanceRow';
import SingleAttendance from '../../components/SingleAttendance';

const StudentAttendance = () => {
    const [showModal, setShowModal] = useState(false);
    const [toggle, setToggle] = useState(true);
  return (
    <div>
      {/* heading */}
      <div className="">
        <h1 className='text-3xl font-extrabold text-[#081A51]'>Students Attendance</h1>
        <div className="flex items-center">
        <p className='flex flex-1'>Managing students attendance </p>
        <button className='bg-[#081A51] rounded-lg text-sm px-4 p-2 text-white hover:bg-[#17295e]'>
        <TrackAttendance />
        </button>
        </div>
      </div>
      {/* popup modal for registering students */}
      {/* table for viewing studnts */}
      <div className="relative flex flex-col  shadow-lg mt-10 bg-[#081A51] w-full h-4  rounded mx-0 justify-start self-start">
        <div className="mt-4">
        <Link to='/view'>
        <SingleAttendance />
        </Link><Link to='/view'>
        <SingleAttendance />
        </Link><Link to='/view'>
        <SingleAttendance />
        </Link><Link to='/view'>
        <SingleAttendance />
        </Link><Link to='/view'>
        <SingleAttendance />
        </Link><Link to='/view'>
        <SingleAttendance />
        </Link><Link to='/view'>
        <SingleAttendance />
        </Link><Link to='/view'>
        <SingleAttendance />
        </Link><Link to='/view'>
        <SingleAttendance />
        </Link>
        </div>
          
      </div>
      <div className="text-green-500 mt-10 absolute bg-[#081A51] cursor-pointer hover:bg-[#1c2c5c] translate-x-2 transition-all duration-300 animate-pulse  bottom-8 right-6 px-4 p-2 rounded-lg">
            Stop Tracking
    </div>
    </div>
  )
}
export default StudentAttendance;