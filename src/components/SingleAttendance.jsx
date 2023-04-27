import React from 'react'

const SingleAttendance = () => {
  return (
    <div className=''>
        <div className="flex items-center text-gray-700 cursor-pointer space-x-4 hover:bg-gray-300 p-1  ">
            {/* course name */}
            <div className="flex flex-1">
                <h1>Course name:</h1>
            </div>
            {/* message */}
            <div className="">
                <h2>Attendace here.......</h2>
            </div>
            {/* date and time */}
            <div className="">
                <p>Date & Time here</p>
            </div>
        </div>
    </div>
  )
}

export default SingleAttendance