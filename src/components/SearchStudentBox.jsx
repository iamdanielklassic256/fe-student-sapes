import React, { useState } from 'react'

const SearchStudentBox = () => {
    const [faculty, setFaculty] = useState('');
    const [year, setYear] = useState('');
    const [programme, setProgramme] = useState('');
  return (
    <div className="flex flex-row gap-4 items-center">
      {/* <label className="text-gray-700">Select Faculty:</label> */}
      <select
        className="border border-gray-300 rounded-lg px-3 py-2 w-1/3"
        value={faculty}
        onChange={(e) => setFaculty(e.target.value)}
      >
        <option value="">Select Faculty </option>
        <option value="fos">Faculty of Science</option>
        <option value="feh">Faculty of Education & Humanity</option>
        <option value="fom">Faculty of Medicine</option>
        <option value="fol">Faculty of Law</option>
        <option value="fbds">Faculty of Business and Development Studies</option>
      </select>

      {/* <label className="text-gray-700">Select a course</label> */}
      <select
        className="border border-gray-300 rounded-lg px-3 py-2 w-1/3"
        value={year}
        onChange={(e) => setYear(e.target.value)}
      >
        <option value=""> Select Year </option>
        <option value="one">Year One</option>
        <option value="two">Year Two</option>
        <option value="three">Year Three</option>
      </select>
      <select
        className="border border-gray-300 rounded-lg px-3 py-2 w-1/3"
        value={programme}
        onChange={(e) => setProgramme(e.target.value)}
      >
        <option value="">Select Programme</option>
        <option value="gcs">Bachelor Degree of Science in Computer Science</option>
        <option value="git">Bachelor Degree of Information and Communication Technology</option>
        <option value="gat">Bachelor Degree of Science in Gamming and Animation</option>
        <option value="gbc">Bachelor Degree of Business Computing</option>
        <option value="dgk">Diploma in Computer Science</option>
      </select>
    </div>
  )
}

export default SearchStudentBox