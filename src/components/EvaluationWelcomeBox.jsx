import React from 'react'

const EvaluationWelcomeBox = () => {
  return (
    <div className='bg-[#081A51] text-white rounded-lg p-4 flex-1 border border-gray-200 flex items-center'>
       <div className="flex flex-col space-y-2">
       <div className='flex mt-4 mb-4'>
            <p className='font-extrabold'>You are Most Welcome here you can evaluate student basing on each student!</p>
        </div>
        {/* <div className="bg-white rounded-sm flex items-start flex-col text-[#081A51] p-2 px-8">
                <h1 className='font-extrabold'>Academic Year: 2023/2024</h1>
                <p className='font-extrabold'>Semester Two</p>
                <p className='text-md text-base'>Evaluation Status: <span className='text-green-500'>ongoing</span></p>
        </div> */}
       </div>
    </div>
  )
}

export default EvaluationWelcomeBox