import axios from 'axios';
import React, { useEffect, useState } from 'react'

const WelcomeMessage = ({ welcome }) => {

  
  const [newYear, setNewYear] = useState([])


  useEffect(() => {
    axios
      .get(`http://localhost:5000/academic-year`)
      .then((response) => setNewYear(response.data))
      .catch((error) => console.error(error));
  }, [newYear]);
  return (
    <div className="bg-[#081A51] text-white rounded-lg p-4 flex-1 border border-gray-200 flex items-center">
       <div className="flex flex-col space-y-2">
       <div className='flex '>
            <p className='font-extrabold'>{welcome}</p>
        </div>
        <div className="bg-white rounded-sm flex items-start flex-col text-[#081A51] p-2 px-8">
        {newYear.map(year => (
                  <>
               <div key={year._id}>
               <h1 className='font-extrabold'>Academic Year: {year.name}</h1>
                <p className='font-extrabold uppercase'>{year.semester}</p>
               </div>
                  </>
                ))}
        </div>
       </div>
    </div>
  )
}

export default WelcomeMessage