import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function AddLecturer() {
  const [showModal, setShowModal] = useState(false);
  const [faculty, setFaculty] = useState("");
  return (
    <>
      <button className="" type="button" onClick={() => setShowModal(true)}>
        Add a Lecturer
      </button>
      {showModal ? (
        <>
          <div className="bg-black bg-opacity-5 backdrop-blur-sm justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative lg:w-7/12 w-full my-10 mx-24 max-w-3xl lg:mt-[-150px]">
              {/*content*/}
              <div className="border-0 lg:rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start flex-1 mx-10 m-10">
                  <h3 className=" font-extrabold text-black text-3xl">
                    Create an account for lecturers or admin only
                  </h3>
                </div>
                {/*body*/}
                <div className="mx-4 mb-4">
                  <form
                    className="space-y-6"
                    // onSubmit={handleSubmit}
                  >
                    <div className="">
                      <input
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Name"
                      />
                    </div>
                    <div className="flex space-x-2">
                      <input
                        className="w-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                        type="text"
                        id="student-no"
                        name="student-no"
                        placeholder="Email"
                      />
                      <input
                        className="w-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                        type="text"
                        id="student-no"
                        name="student-no"
                        placeholder="Contact"
                      />
                    </div>
                    <div className="flex space-x-2">
                      <select
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5"
                        value={faculty}
                        onChange={(e) => setValue(e.target.value)}
                      >
                        <option value="">-- Select Faculty --</option>
                        <option value="fos">Faculty of Science</option>
                        <option value="feh">
                          Faculty of Education & Humanity
                        </option>
                        <option value="fom">Faculty of Medicine</option>
                        <option value="fol">Faculty of Law</option>
                        <option value="fbds">
                          Faculty of Business and Development Studies
                        </option>
                      </select>
                      <input
                        className="w-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#081A51] focus:border-[#081A51] block p-2.5"
                        type="text"
                        id="password"
                        name="password"
                        placeholder="Password"
                      />
                    </div>
                    <div className="mt-2 flex gap-72">
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
}
