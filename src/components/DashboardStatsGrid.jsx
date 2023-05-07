import React, { useEffect, useState } from "react";
import { IoBagHandle, IoPieChart, IoPeople, IoCart } from "react-icons/io5";
import BoxWrapper from "./BoxWrapper";
import { Link } from "react-router-dom";
import axios from "axios";

const SingUserApi = `http://localhost:5000/users/6457a1719c13f15d1d99d024/results`

export default function DashboardStatsGrid() {

  const [results, setResults] = useState([])


  useEffect(() => {
    axios
      .get(`${SingUserApi}`)
      .then((response) => setResults(response.data))
      .catch((error) => console.error(error));
  }, [results]); 
  

  console.log('final results loading',results);
  return (
    <div className="grid grid-cols-3 gap-6 mt-4">
      {results?.map((data) => (
          <Link to={`/results/${data._id}`} className="flex flex-1 " key={data._id}>
            <BoxWrapper 
              courseName={data.course_name}
              test={data.test}
              assignment={data.assignment}
              assessment={data.assessment}
              presentation={data.presentation}
              code={data.code}
            />
          </Link>
      ))}
      {/* <BoxWrapper>
				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-orange-600">
					<IoPeople className="text-2xl text-white" />
				</div>
				<div className="pl-4">
					<span className="text-sm  font-light">Total Lecturers</span>
					<div className="flex items-center">
						<strong className="text-xl text-gray-100 font-semibold">3423</strong>
					</div>
				</div>
			</BoxWrapper>
			<BoxWrapper>
				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-yellow-400">
					<IoPeople className="text-2xl text-white" />
				</div>
				<div className="pl-4">
					<span className="text-sm  font-light">Total Customers</span>
					<div className="flex items-center">
						<strong className="text-xl  font-semibold">12313</strong>
					</div>
				</div>
			</BoxWrapper> */}
    </div>
  );
}
