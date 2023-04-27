import React from "react";
import { IoBagHandle, IoPieChart, IoPeople, IoCart } from "react-icons/io5";
import BoxWrapper from "./BoxWrapper";
import { Link } from "react-router-dom";

const DummyData = [
  {
    title: "Course Unit",
    number: 6,
	link: '/courses'
  },
  {
    title: "Retakes",
    number: 0,
	link: '/retakes'
  },
  {
    title: "CGPA",
    number: 3.6,
  },
];

export default function DashboardStatsGrid() {
  return (
    <div className="flex gap-4">
      {DummyData.map((data, index) => {
        const { title, number, link } = data;
        console.log(title, number);
        return (
          <Link to={link} className="flex flex-1 ">
            <BoxWrapper title={title} number={number} />
          </Link>
        );
      })}
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
