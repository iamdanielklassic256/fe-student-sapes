import React, { useEffect, useRef, useState } from "react";
import Logo from "../../assets/images/gulogo.png";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const loginUrl = "http://localhost:5000/login";

const Login = () => {
  const { setAuth } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");

  // useEffect(() => {
  //     userRef.current.focus()
  // });

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(user, pwd)
    if (validate()) {
      try {
        const response = await axios.post(
          loginUrl,
          JSON.stringify({ user, pwd }),
          {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
          }
        );
        // console.log(response?.data);
        // console.log(response?.accessToken);
        // console.log(JSON.stringify(response))
        const accessToken = response?.accessToken?.accessToken;
        const roles = response?.data?.roles;
        setAuth({ user, pwd, roles, accessToken });
        setUser("");
        setPwd("");
        // setSuccess(true);
        navigate(from, { replace: true });
        setIsLoading(false);
        toast.success(`Student logged in successfully`);
      } catch (err) {
        if (err?.response) {
          setErrMsg("No Server Response");
          toast.error(`Invalid  Username/Password`);
        } else if (err.response?.status === 400) {
          setErrMsg("Invalid User or Password");
          toast.error(`Invalid User or Password`);
        } else if (err.response?.status === 401) {
          setErrMsg("Unauthorized");
          toast.error(`Unauthorized`);
        } else {
          setErrMsg("Login Failed");
          toast.success(`Logged in successfully`);
        }
        setErrMsg.current.focus();
      }
    }
  };

  const validate = () => {
    let login = true;
    if (user === "" || user === null || pwd === "" || pwd === null) {
      login = false;
      toast.warning("Invalid username/password!");
    }
    return login;
  };

  return (
    <div className="grid md:grid-cols-2 grid-cols-1 h-screen w-full">
      {/* image section */}
      <div className="hidden lg:flex flex-col justify-center">
        <img
          src={Logo}
          className="w-60 flex items-center justify-center mx-44 "
        />
        <div className="mx-4 flex items-center justify-center text-center flex-col">
          <h1 className="text-3xl text-[#081A51] font-extrabold">
            STUDENT ACADEMIC PERFORMACE EVALUATION SYSTEM{" "}
          </h1>
          <h1 className="font-bold text-xl">(SAPES)</h1>
        </div>
      </div>
      {/* sigin section */}
      <div className="bg-[#081A51]  flex flex-col justify-center ">
        <form
          className="max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg"
          onSubmit={handleSubmit}
        >
          <h2 className="text-4xl text-white font-bold text-center">
            STUDENT PORTAL LOGIN
          </h2>
          {/* username or email */}
          <div className="flex flex-col text-gray-400 py-2">
            <label htmlFor="user">Username</label>
            <input
              type="text"
              className="input__field"
              ref={userRef}
              margin="normal"
              // required
              fullwidth="true"
              id="text"
              name="user"
              autoComplete="off"
              autoFocus
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
          </div>
          {/* password */}
          <div className="flex flex-col text-gray-400 py-2">
            <label htmlFor="pwd">Password</label>
            <input
              type="password"
              className="input__field"
              // required
              fullwidth="true"
              name="pwd"
              id="pwd"
              value={pwd}
              onChange={(e) => setPwd(e.target.value)}
            />
          </div>
          <div className="flex justify-between text-gray-400 py-2">
            <p className="flex items-center">
              <input type="checkbox" name="" id="" className="mr-2  " />
              Remember Me
            </p>
            <p>Forgot Password </p>
          </div>
          <button
            type="submit"
            className="uppercase w-full bg-[#081A51] shadow-lg shadow-[#081A51]  rounded px-4 text-white py-2 text-xl my-5"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
