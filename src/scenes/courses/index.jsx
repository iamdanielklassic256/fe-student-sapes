
import AddCourseUnit from '../../components/AddCourseUnit'
import CourseTable from '../../components/CourseTable'
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CourseUnitBox from '../../components/CourseUnitBox';
import axios from 'axios';

const dummyCourseUnits = [
  {
    name: 'Advanced Database',
    code: 'GCS3201',
    color: '#081A51'
  },
  {
    name: 'Prolog Programming',
    code: 'GCS3202',
    color: '#081A34'
  },
  {
    name: 'Parallel Computing',
    code: 'GCS3203',
    color: '#081A51'
  },
  {
    name: 'Capstone Project',
    code: 'GCS3204',
    color: '#041A51'
  },
  {
    name: 'Mobile Web Application',
    code: 'GCS3205',
    color: '#047A51'
  },
  {
    name: 'Emerging Trends',
    code: 'GCS3208',
    color: '#093A51'
  },
]

const Courses = () => {
  const [showModal, setShowModal] = useState(false);
  const [toggle, setToggle] = useState(true);
  const [courseunits, setCourseUnits] = useState(null)

  useEffect(() => {
    axios
      .get(`http://localhost:5000/course-units`)
      .then((response) => setCourseUnits(response.data))
      .catch((error) => console.error(error));
  }, [courseunits]);

  console.log("courseunits data...", courseunits)
  return (
    <div>
      {/* heading */}
      <div className="">
        <h1 className='text-3xl font-extrabold text-[#081A51]'>Course Units</h1>
        <div className="md:flex items-center">
          <p className='flex flex-1'>Managing course units</p>
          <p className='flex font-extrabold'>Semester Two Year Three</p>
        </div>
      </div>
      {/* course unit section */}
      <div className="grid grid-cols-3 gap-2 space-x-2">
        {/* single course unit here */}
        {courseunits?.map(courseunit => {
          const { code, name, _id } = courseunit
          console.log('vddbdbd', code)
          return (
            <>
              <Link key={_id} to={_id}>
                <div className="flex flex-col  items-center flex-1 rounded-lg md:pt-4 pt-2 md:pb-4 pb-2 h-36 lg:w-64 md:w-52 w-64 bg-indigo-500">
                  <div className="text-white mx-4 items-center p-2 px-4">
                    <h1 className=" font-bold text-xl ">{code}</h1>
                  </div>
                  <p className="text-white text-center">{name}</p>
                </div>
              </Link>
            </>
          )
        })}

      </div>
    </div>
  )
}

export default Courses