import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import CourseStatistic from "../../components/CourseStatistic";

const CourseResults = () => {
  const [course, setCourse] = useState({});
  let { id } = useParams();

  console.log("......>hello", id);

  const fetchCourses = () => {
    fetch(`http://localhost:5000/course-units/${id}`)
      .then((res) => res.json())
      .then((data) => setCourse(data));
  };
  useEffect(() => {
    fetchCourses();
  });

  console.log("Hello, am new", course);

  const [toggleState, setToggleState] = useState(1);

  const toggleStatement = (index) => {
    setToggleState(index);
  };

  const ArrayList = [
    {
      name: "test",
      mark: 8,
    },
    {
      name: "coursework",
      mark: 6,
    },
    {
      name: "presentation",
      mark: 4,
    },
    {
      name: "attendance",
      mark: 3,
    },
  ];
  return (
    <>
      <div className="flex-1 w-full rounded-lg h-8 flex items-center justify-between text-white font-bold">
        <div
          className={
            toggleState === 1
              ? "bg-[#081A51]  w-1/2 rounded-l-lg px-2 p-1 cursor-pointer"
              : "bg-purple-600 w-1/2 rounded-l-lg px-2 p-1 cursor-pointer"
          }
          onClick={() => toggleStatement(1)}
        >
          View Results
        </div>
        <div
          className={
            toggleState === 2
              ? "bg-[#081A51] w-1/2 rounded-r-lg px-2 p-1 text-end self-end cursor-pointer"
              : "bg-purple-600 w-1/2 rounded-r-lg px-2 p-1 text-end self-end cursor-pointer"
          }
          onClick={() => toggleStatement(2)}
        >
          View Statistic
        </div>
      </div>
      <hr />
      {course && (
        <div className="" key={course._id}>
          <div
            className={
              toggleState === 1 ? "bg-slate-100 cursor-pointer" : "hidden"
            }
          >
            <div className="relative flex flex-col items-center justify-center font-bold mb-4">
              <h1 className="text-3xl leading-tight tracking-widest">
                GULU UNIVERSITY
              </h1>
              <h1 className="text-2xl">FACULTY OF SCIENCE</h1>
              <h1 className="text-xl">DEPARTMENT OF COMPUTER SCIENCE</h1>
            </div>
            <div className="relative flex justify-start gap-52">
              <h1 className="flex flex-1 font-bold text-[12px] items-center text-center gap-2">
                Faculty:
                <span className="font-normal">Science</span>
              </h1>
              <h1 className="justify-end font-bold text-[12px] items-center text-end self-end space-x-2">
                Academic Year: <span className="font-normal">2023/2024</span>
              </h1>
            </div>
            <div className="relative flex justify-start gap-52">
              <h1 className="flex flex-1 font-bold text-[12px] items-center text-center gap-2">
                Course Code:{" "}
                <span className="font-normal text-xs uppercase">
                  {course.code}
                </span>
              </h1>
              <h1 className="justify-end font-bold text-[12px] items-center text-end self-end capitalize">
                Course Name:{" "}
                <span className="font-normal text-sm lowercase">
                  {course.name}
                </span>
              </h1>
            </div>
            <div className="relative flex justify-start gap-52">
              <h1 className="flex flex-1 font-bold text-[12px] items-center text-center gap-2">
                Semester: <span className="font-normal uppercase">two</span>
              </h1>
              <h1 className="justify-end font-bold text-[12px] items-center text-end self-end space-x-2">
                Lecuterer Name:{" "}
                <span className="font-normal">Ogenrwot Daniel</span>
              </h1>
            </div>
            <div className="mt-2">
              <div className="relative flex flex-col  shadow-lg mt-10 bg-gray-500   rounded mx-0 justify-start self-start">
                <table className="">
                  <thead className="bg-[#081A51] rounded-b-xl">
                    <tr className=" text-white font-extrabold">
                      <th className="text-md ">Test(/10)</th>
                      <th className="text-md ">Course Work(/10)</th>
                      <th className="text-md ">Presentation(/5)</th>
                      <th className="text-md ">Attendance(/5)</th>
                      <th className="text-md ">Total</th>
                      <th className="text-md ">Comment</th>
                    </tr>
                  </thead>
                  <tbody className="">
                    <tr className=" text-white font-extrabold">
                      <th className="text-md ">8</th>
                      <th className="text-md ">6</th>
                      <th className="text-md ">4</th>
                      <th className="text-md ">3</th>
                      <th className="text-md ">21</th>
                      <th className="text-md ">Fair</th>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div
            className={
              toggleState === 2 ? " mt-8 flex-1" : "hidden mt-8 flex-1" 
            }
          >
            <div className="w-[100%] h-[460px] bg-slate-300   rounded-lg px-4 p-16 ">
            <div className="">
            <h1 className="text-white font-bold text-2xl">
              {" "}
              Student Attendance
            </h1>
            <div className="flex text-white font-medium text-xs">
              <p className="flex flex-1">
                General Attendance for all courseunits
              </p>
              <p className="text-xl text-[#081A51]">Total: 21</p> 
            </div>
          </div>
              <ResponsiveContainer width="100%" height="100%" >
                <BarChart data={ArrayList} width={400} hieght={400}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="mark" fill="#081A51" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            {/* <BarChart width={600} height={300} course={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <CartesianGrid stroke="#ccc" />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#8884d8" />
            </BarChart> */}
          </div>
        </div>
      )}

      {/* <div key={course._id}>
            <h1>{course.code}</h1>
            <p>{course.name}</p>
        </div> */}
    </>
  );
};
export default CourseResults;
