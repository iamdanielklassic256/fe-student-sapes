import React, { useState } from "react";
import EvaluationWelcomeBox from "../../components/EvaluationWelcomeBox";
import SearchStudentBox from "../../components/SearchStudentBox";
import SingleCourse from "../../components/SingleCourse";
import CourseReport from "../../components/CourseReport";

const DummyCourses = [
  {
    code: "GCS3101",
    name: "ADVANCED DATABASE",
  },
  {
    code: "GCS3102",
    name: "LOGIC PROGRAMMING",
  },
  {
    code: "GCS3103",
    name: "PARALLEL COMPUTATION",
  },
  {
    code: "GCS3104",
    name: "CAPSTONE PROJECT",
  },
  {
    code: "GCS3105",
    name: "EMERGING TRENDS IN COMPUTER SCIENCE",
  },
  {
    code: "GCS3108",
    name: "MOBILE WEB APPLICATION",
  },
];

const DummyResults = [
  {
    faculty_name: "Faculty of Science",
    Academic_Year: "2020-2021 1st Semester",
    code: "GCS3103",
    name: "PARALLEL COMPUTATION",
  },
  {
    faculty_name: "Faculty of Law",
    Academic_Year: "2020-2021 1st Semester",
    code: "GCS3108",
    name: "MOBILE WEB APPLICATION",
  },
  {
    faculty_name: "Faculty of Science",
    Academic_Year: "2020-2021 1st Semester",
    code: "GCS3105",
    name: "EMERGING TRENDS IN COMPUTER SCIENCE",
  },
  {
    faculty_name: "Faculty of Law",
    Academic_Year: "2020-2021 1st Semester",
    code: "GCS3102",
    name: "LOGIC PROGRAMMING",
  },
  {
    faculty_name: "Faculty of Science",
    Academic_Year: "2020-2021 1st Semester",
    code: "GCS3101",
    name: "ADVANCED DATABASE",
  },
  {
    faculty_name: "Faculty of Law",
    Academic_Year: "2020-2021 1st Semester",
    code: "GCS3102",
    name: "LOGIC PROGRAMMING",
  },
];

const Evaluation = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleStatement = (index) => {
    setToggleState(index);
  };

  return (
    <div className="flex flex-col gap-2">
      <EvaluationWelcomeBox />
      <SearchStudentBox />
      <div className="flex flex-row  gap-0 ">
        <div className="border-0 border-l-8 border-[#081A51] text-gray-900 w-4/12">
          <div className=" ">
            {DummyCourses.map((course, index) => (
              <div
                key={index}
                className={
                  toggleState === index + 1
                    ? "bg-[#081A51]  hover:text-white cursor-pointer flex gap-2   px-3 p-2 text-white"
                    : "flex gap-2 cursor-pointer px-3 p-2 hover:bg-[#1b2a55]"
                }
                onClick={() => toggleStatement(index + 1)}
              >
                <SingleCourse code={course.code} name={course.name} />
              </div>
            ))}
          </div>
          {/* critical message */}
          <div className="absolute top-90 left-72 bg-slate-700 pt-2 pb-2 p-10 rounded-lg">
            <div className="flex items-center gap-4 text-white text-sm">
              <p className="bg-red-600 rounded-full w-2 h-2"></p>
              <p>Worst</p>
            </div>
            <div className="flex items-center gap-4 text-white text-sm">
              <p className="bg-yellow-600 rounded-full w-2 h-2"></p>
              <p>Fair</p>
            </div>
            <div className="flex items-center gap-4 text-white text-sm">
              <p className="bg-green-600 rounded-full w-2 h-2"></p>
              <p>Good</p>
            </div>
          </div>
        </div>
        <div className=" text-[#081A51] flex flex-col flex-1 mx-0">
          {/* header section */}
          <div className="flex items-center text-center justify-center mb-4">
            <h1 className="text-center justify-center text-3xl flex items-center mx-36 font-bold">
              Evaluation Report
            </h1>
          </div>
          <hr className="text-[#081A51] " />
          {/* student details */}
          <div className="px-2 mt-4">
            {DummyResults.map((result, index) => (
              <div
                className={
                  toggleState === index + 1
                    ? `flex justify-between font-medium`
                    : "hidden"
                }
                key={index}
              >
                <CourseReport
                  name={result.faculty_name}
                  year={result.Academic_Year}
                  courseName={result.name}
                  code={result.code}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Evaluation;
