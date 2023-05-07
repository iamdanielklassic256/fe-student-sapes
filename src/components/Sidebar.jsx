import React, { useState, useEffect } from "react";
import { BiChevronDown, BiMenu } from "react-icons/bi";
import { AiFillEnvironment, AiFillPieChart, AiFillProfile, AiOutlineLogin } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";
import { RiDashboardFill } from "react-icons/ri";
import { BsFillHousesFill } from "react-icons/bs";
import { FaDiscourse, FaUserAlt } from "react-icons/fa";
import { SiGoogleclassroom } from "react-icons/si";
import { GiCalendarHalfYear } from "react-icons/gi";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { logOut } from "../feature/auth/authSlice";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [isActive, setIsActive] = useState(false);
  const [userData, setUserData] = useState(null);
  const studentno = localStorage.getItem("_id");


  const navigate = useNavigate()
	const dispatch = useDispatch()

    const signout = async() => {
        await dispatch(logOut())
		toast.warning("Logout successfully")
        navigate('/login')
  }


  // useEffect(() => {
  //   axios
  //     .get(proc)
  //     .then((response) => setUserData(response.data))
  //     .catch((error) => console.error(error));
  // }, [studentno]);

  // menu
  const Menu = [
    {
      id: 1,
      title: "Dashboard",
      icon: <RiDashboardFill />,
      link: '/',
    },
    {id: 2,
      title: "Profile",
      icon: <AiFillProfile />,
      link: '/user-profile',
      spacing: true,
    },
    // {
    //   title: "Evaluation",
    //   icon: <AiFillPieChart />,
    //   link: "/evaluation",
    // },
    // {
    //   title: "Results",
    //   icon: <AiFillPieChart />,
    //   link: "/results",
    // },
    // {
    //   title: "Reports",
    //   icon: <AiFillPieChart />,
    //   link: "/reports",
    // },
  ];
  return (
    <div
      className={`relative  bg-[#081A51]  p-5 pt-8 ${
        open ? "md:w-64 w-56" : "md:w-24 w-20"
      } duration-300`}
    >
      <BiMenu
        className="bg-white text-[#081A51] text-3xl absolute -right-1 top-8  cursor-pointer"
        onClick={() => setOpen(!open)}
      />
      <div className="inline-flex items-center">
        {/* <AiFillEnvironment
          className={`bg-amber-600 text-4xl rounded cursor-pointer block float-left mr-2 ${
            open && "rotate-[360deg]"
          }`}
        /> */}
        <h1
          className={`text-white text-4xl pb-2 font-medium ${!open && "scale-0"}`}
        >
          SAPES
        </h1>
      </div>
      <div
        className={`flex items-center justify-center mx-16 ${!open && "hidden"} rounded-full bg-white h-20 w-20`}
      >
        <RxAvatar className="text-[#081A51] text-[5rem] " />
      </div>
     
        {/* {userData &&  */}
         <div className={`flex items-center mx-1 flex-col ${!open && "hidden"}`}>
         <h1 className="text-white flex flex-1 text-xl font-bold pt-4">
            OKello Otim David
         </h1>
         <p className="text-slate-200 font-medium text-lg">210014053</p>
       </div>
        {/* } */}
      <ul className={`pt-20 `}>
        {Menu.map((menu) => (
          <>
            <li
              key={menu.id}
              className=""
            >
              <Link to={menu.link}
                // className="p-1 px-2" activeClassName="bg-yello-800"
                className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-slate-700 rounded-md ${
                    menu.spacing ? "mt-7" : "mt-1 "
                  }`}
                //   activeclassName="bg-yello-800"
            >
                <span className="text-2xl block float-left px-4" >
                  {menu.icon}
                </span>
                <span
                  className={`text-base font-medium flex-1 duration-200 ${
                    !open && "hidden"
                  }`}
                >
                  {menu.title}
                </span>
              </Link>
            </li>
          </>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
