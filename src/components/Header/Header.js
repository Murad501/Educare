import { Button, Navbar } from "flowbite-react";
import React, { useContext } from "react";
import { useState } from "react";
import { FaBookOpen, FaSun, FaMoon } from "react-icons/fa";
import { Link } from "react-router-dom";
import { authContext } from "../../Context/UserContext";
import "./Header.css"
import ReactTooltip from 'react-tooltip';

const Header = () => {
  const [lightMode, setLightMode] = useState(true);

  const { user, logOut } = useContext(authContext);

  const handleLogOut = () => {
    logOut()
    .then(()=>{
      console.log('user log out successful')
    })
    .catch(error=>{
      console.error(error)
    })
  }

  const setMode = () => {
    setLightMode(!lightMode);
  };
  return (
    <Navbar className="py-7 flex justify-center items-center">
      <Link className="flex justify-center items-center" to="/">
        <FaBookOpen className="mr-3 h-6 sm:h-9 text-2xl"></FaBookOpen>
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Educare
        </span>
      </Link>
      <Navbar.Toggle />
      <Navbar.Collapse className="nav-menu">
        <Link to='courses'>Courses</Link>
        <Link to='faq'>FAQ</Link>
        <Link to='blog'>Blog</Link>
        <Link onClick={setMode}>
          {lightMode ? (
            <div className="flex justify-center items-center gap-2 border p-2 w-20 mx-auto">
              Light <FaSun></FaSun>
            </div>
          ) : (
            <div className="flex justify-center items-center gap-2 border p-2 w-20 mx-auto">
              Dark <FaMoon></FaMoon>
            </div>
          )}
        </Link>
        <div className="flex justify-center items-center">
         {
         user?.uid ? 
            <div className="flex gap-3">
                <img data-tip={user.name}  src={user.photoURL} className="mr-3 h-6 sm:h-9 rounded-full" alt="" />
                <ReactTooltip></ReactTooltip>
                <Button onClick={handleLogOut}>Log Out</Button>
            </div>
          :
            <Link to="login">Login</Link>
          } 
        </div>  
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
