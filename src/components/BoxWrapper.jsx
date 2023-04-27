import React from 'react'
import { IoBagHandle, IoPieChart, IoPeople, IoCart } from 'react-icons/io5'
import { AiFillPieChart } from 'react-icons/ai'

const BoxWrapper = ({title, number}) => {
  return (
    <div className="bg-[#081A51] text-white rounded-lg p-4 flex-1 border border-gray-200 flex items-center">
       <div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-500">
					<AiFillPieChart className="text-2xl text-white" />
				</div>
				<div className="pl-4">
					<span className="text-md  font-bold">{title}</span>
					<div className="flex items-center">
						<strong className="text-md text-gray-100 font-medium">{number}</strong>
						{/* <span className="text-sm text-green-500 pl-2">+343</span> */}
					</div>
		</div>
    </div>
  )
}

export default BoxWrapper