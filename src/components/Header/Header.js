import { Navbar } from "flowbite-react";
import React from "react";
import { useState } from "react";
import { FaBookOpen, FaSun, FaMoon } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
    const [lightMode, setLightMode] = useState(true)

    const setMode = () =>{
        setLightMode(!lightMode)
    }
  return (
    <Navbar className="py-7 bg-slate-400">
      <Link className="flex justify-center items-center" to='/'>
        <FaBookOpen className="mr-3 h-6 sm:h-9 text-2xl"></FaBookOpen>
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Educare
        </span>
      </Link>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Link>Courses</Link>
        <Link>FAQ</Link>
        <Link>Blog</Link>
        <Link onClick={setMode}>
        {
            lightMode ? 
            <div className="flex justify-center items-center gap-2 border px-2 w-20 mx-auto">Light <FaSun></FaSun></div>
            :
            <div className="flex justify-center items-center gap-2 border px-2 w-20 mx-auto">Dark <FaMoon></FaMoon></div>
        }
        </Link>
        <Link to='login'>Login</Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
