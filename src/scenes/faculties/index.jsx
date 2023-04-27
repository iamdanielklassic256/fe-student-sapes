import React, { useState } from 'react'
import { AiOutlineClose, AiFillDelete } from "react-icons/ai";
import { GrDocumentText} from 'react-icons/gr'
import { Link } from "react-router-dom";
import AddFaculty from '../../components/AddFaculty';

const Faculties = () => {
  const [showModal, setShowModal] = useState(false);
    const [toggle, setToggle] = useState(true);
  return (
    <div>
      {/* heading */}
      <div className="">
        <h1 className='text-3xl font-extrabold text-[#081A51]'>Faculty</h1>
        <div className="flex items-center">
        <p className='flex flex-1'>Managing Faculty</p>
        <button className='bg-[#081A51] rounded-lg text-sm px-4 p-2 text-white hover:bg-[#17295e]'>
        <AddFaculty />
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
              </tr>
            </thead>
            <tbody className=''>
              <tr className='text-white font-light text-xs py-10 gap-8'>
                <th className="">01</th>
                <th className=" ">Faculty of Science</th>
              </tr>
              <tr className='text-white font-light text-xs py-10 gap-8'>
                <th className="">01</th>
                <th className=" ">Faculty of Science</th>
              </tr>
              <tr className='text-white font-light text-xs py-10 gap-8'>
                <th className="">01</th>
                <th className=" ">Faculty of Science</th>
              </tr>
              
              
            </tbody>
          </table>
      </div>
    </div>
  )
}

export default Faculties