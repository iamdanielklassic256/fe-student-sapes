import React from 'react'

const WelcomeMessage = ({name, email}) => {
  return (
    <div className="bg-[#081A51] text-white rounded-lg p-4 flex-1 border border-gray-200 flex items-center">
       <div className="flex flex-col space-y-2">
       <div className='flex '>
            <p className='font-extrabold'>Welcome {name}!</p>
        </div>
        <div className="bg-white rounded-sm flex items-start flex-col text-[#081A51] p-2 px-8">
                <h1 className='font-extrabold'>Academic Year: 2023/2024</h1>
                <p className='font-extrabold'>Semester Two</p>
        </div>
       </div>
    </div>
  )
}

export default WelcomeMessage