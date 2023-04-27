import React from "react";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const AddAcademicYear = () => {
  const [showModal, setShowModal] = useState(false);
  const [toggle, setToggle] = useState(true);
  const [semester, setSemester] = useState('');
  const [status, setStatus] = useState('');
  return (
    <>
      <button className="" type="button" onClick={() => setShowModal(true)}>
        Add New Academic Year
      </button>
      {showModal ? (
        <>
          <div className="bg-black bg-opacity-5 backdrop-blur-sm justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative lg:w-4/12 w-full my-10 mx-24 max-w-3xl lg:mt-[-120px]">
              {/*content*/}
              <div className="border-0 lg:rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start flex-1 mx-10 m-10">
                  <h3 className=" font-extrabold text-black text-2xl">
                    Add New Academic Year
                  </h3>
                </div>
                {/*body*/}
                <div className="mx-4 mb-4">
                  <form
                    className="space-y-6"
                    // onSubmit={handleSubmit}
                  >
                    <div className="flex space-x-2">
                      <input
                        className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                        type="text"
                        id="year"
                        name="year"
                        placeholder="Academic Year. (2022/2023)"
                      />
                    </div>
                    <div className="">
                    <select
                        className="bg-gray-50 border border-gray-300 rounded-lg px-3 py-2 text-gray-900 w-full"
                        value={semester}
                        onChange={(e) => setSemester(e.target.value)}
                      >
                        <option value="">Select Semester </option>
                        <option value="one">Semester One</option>
                        <option value="two">
                        Semester Two
                        </option>
                        <option value="three">Semester Three</option>
                        <option value="recses">Recess Term / School Practice</option>
                        <option value="intern">
                        Internship
                        </option>
                      </select>
                    </div>
                   
                    <div className="flex space-x-2  items-center">
                      <select
                        className="bg-gray-50 border border-gray-300 rounded-lg px-3 py-2 text-gray-900 w-full"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                      >
                        <option value=""> Evaluation Status </option>
                        <option value="pending">pending</option>
                        <option value="progress">progress</option>
                        <option value="success">success</option>
                      </select>
                    </div>
                    <div className="mt-2 flex gap-36">
                      <button
                        className="bg-[#081A51] border border-gray-300 text-white text-sm  focus:ring-[#081A51] focus:border-g[#081A51] block w-1/2 p-2.5 rounded-lg"
                        type="submit"
                      >
                        Add
                      </button>
                      <button
                        className="bg-red-600 border border-gray-300 text-white text-sm  focus:ring-red-600 focus:border-red-600 block w-1/2  rounded-lg"
                        type="submit"
                        onClick={() => setShowModal(false)}
                      >
                        Close
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default AddAcademicYear;
