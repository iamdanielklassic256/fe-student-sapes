import React, { useState } from 'react'
import { Link } from "react-router-dom";
import AddAcademicYear from '../../components/AddAcademicYear';
import AcademicYearTable from '../../components/AcademicYearTable';

const AcademicYear = () => {
  const [showModal, setShowModal] = useState(false);
    const [toggle, setToggle] = useState(true);
  return (
    <div>
      {/* heading */}
      <div className="">
        <h1 className='text-3xl font-extrabold text-[#081A51]'>Academic Year</h1>
        <div className="flex items-center">
        <p className='flex flex-1'>Managing academic years</p>
        <button className='bg-[#081A51] rounded-lg text-sm px-4 p-2 text-white hover:bg-[#17295e]'>
        <AddAcademicYear />
        </button>
        </div>
      </div>
      {/* popup modal for registering students */}
      {/* table for viewing studnts */}
      <div className="relative flex flex-col  shadow-lg mt-10 bg-gray-500   rounded mx-0 justify-start self-start">
          <table className=''>
            <thead className='bg-[#081A51] rounded-b-xl mx-10'>
              <tr className=' text-white font-extrabold'>
                <th className="text-md ">ID</th>
                <th className="text-md ">Name</th>
                <th className="text-md ">Semester</th>
                <th className="text-md text-end selft-end">Evaluation Status</th>
              </tr>
            </thead>
            <tbody className=''>
              <AcademicYearTable />
              <AcademicYearTable />
              <AcademicYearTable />
              <AcademicYearTable />
              <AcademicYearTable />
              <AcademicYearTable />
              <AcademicYearTable />
              <AcademicYearTable />
              <AcademicYearTable />
              <AcademicYearTable />
              <AcademicYearTable />
              <AcademicYearTable />
              <AcademicYearTable />
              <AcademicYearTable />
              <AcademicYearTable />
              <AcademicYearTable />
            </tbody>
          </table>
      </div>
    </div>
  )
}

export default AcademicYear;