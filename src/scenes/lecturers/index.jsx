import React from 'react'
import AddLecturer from '../../components/AddLecturer'
import LecturerTable from '../../components/LecturerTable'

const LecturerPage = () => {
  return (
    <div>
      {/* heading */}
      <div className="">
        <h1 className='text-3xl font-extrabold text-[#081A51]'>Lecturers</h1>
        <div className="flex items-center">
        <p className='flex flex-1'>Managing Lecturers</p>
        <button className='bg-[#081A51] rounded-lg text-sm px-4 p-2 text-white hover:bg-[#17295e]'>
        <AddLecturer />
        </button>
        </div>
      </div>
      {/* popup modal for registering students */}
      {/* table for viewing studnts */}
      <div className="relative flex flex-col  shadow-lg mt-10 bg-gray-500   rounded mx-0 justify-start self-start">
          <table className=''>
            <thead className='bg-[#081A51] rounded-b-xl mx-10'>
              <tr className=' text-white font-extrabold'>
                <th className="text-md px-6  py-3">Name</th>
                <th className="text-md px-6  py-3">Email</th>
                <th className="text-md px-6  py-3">Number</th>
                <th className="text-md px-6  py-3">Faculty</th>
              </tr>
            </thead>
            <tbody className=''>
              <LecturerTable />
              <LecturerTable />
              <LecturerTable />
              <LecturerTable />
              <LecturerTable />
              <LecturerTable />
              <LecturerTable />
              <LecturerTable />
              <LecturerTable />
              <LecturerTable />
              <LecturerTable />
              <LecturerTable />
            </tbody>
          </table>
      </div>
    </div>
  )
}

export default LecturerPage