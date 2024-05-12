import React, { useState } from "react";
import Home from "./Home";
import pic from "../components/anemia-test.webp";
import { Link } from "react-router-dom";

const Landing = () => {
  const [active,setActive] = useState("user");
  const handleCallback = (childData) => {
    setActive(childData);
    console.log(active)
  }
  
  return (
    <>
      <div className="h-[75dvh] flex items-center ">
        {/* <img className="h-full w-1/2" src={pic} /> */}
        <div className="justify-center items-center px-10 flex flex-auto">
          <p>{active}</p>
          <Link
            onClick={() => console.log("hello")}
            class=" w-full text-center py-3 px-4 text-lg mx-3 rounded-xl bg-gray-500 text-white focus:outline-none"
            to={`${active === "user" ? "login" : "userlogin"}`}
          >
            LogIn
          </Link>
          <Link
            class=" w-full bg-black text-white text-lg mx-3 rounded-xl text-center py-3 px-4 focus:outline-none"
            to={"Signup"}
          >
            SignUp
          </Link>
        </div>
      </div>
      <Home handleCallback={handleCallback} />
    </>
  );
};

export default Landing;
