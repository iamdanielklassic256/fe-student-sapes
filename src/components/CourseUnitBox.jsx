import React from "react";

const CourseUnitBox = ({ name, code, }) => {
  return (
    <div className={` flex flex-col  items-center flex-1 rounded-lg md:pt-4 pt-2 md:pb-4 pb-2 md:w-auto w-64 `} 
    // style={{backgroundColor: color}}
    >
      <div className="text-white  md:items-center p-2">
        <h1 className=" font-bold text-xl ">{code}</h1>
      </div>
      <p className="text-white">{name}</p>
    </div>
  );
};

export default CourseUnitBox;
