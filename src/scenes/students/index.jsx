import React from 'react'
import AddStudent from '../../components/AddStudent'
import StudentTable from '../../components/StudentTable'

const StudentPage = () => {
  return (
    <div>
      {/* heading */}
      <div className="">
        <h1 className='text-3xl font-extrabold text-[#081A51]'>Students</h1>
        <div className="flex items-center">
        <p className='flex flex-1'>Managing Students</p>
        <button className='bg-[#081A51] rounded-lg text-sm px-4 p-2 text-white hover:bg-[#17295e]'>
        <AddStudent />
        </button>
        </div>
      </div>
      {/* popup modal for registering students */}
      {/* table for viewing studnts */}
      <div className="relative flex flex-col  shadow-lg mt-10 bg-gray-500   rounded mx-0 justify-start self-start">
          <table className=''>
            <thead className='bg-[#081A51] rounded-b-xl mx-10'>
              <tr className=' text-white font-extrabold'>
              <th className="text-md px-6  py-3">Std No</th>
                <th className="text-md px-6  py-3">Name</th>
                <th className="text-md px-6  py-3">Email</th>
                <th className="text-md px-6  py-3">Number</th>
                <th className="text-md px-6  py-3">Course</th>
                <th className="text-md px-6  py-3">CGPA</th>
              </tr>
            </thead>
            <tbody className=''>
              <StudentTable />
              <StudentTable />
              <StudentTable />
              <StudentTable />
              <StudentTable />
              <StudentTable />
              <StudentTable />
              <StudentTable />
              <StudentTable />
              <StudentTable />
              <StudentTable />
              <StudentTable />
              <StudentTable />
              <StudentTable />
              <StudentTable />
              <StudentTable />
              <StudentTable />
              <StudentTable />
            </tbody>
          </table>
      </div>
    </div>
  )
}

export default StudentPage