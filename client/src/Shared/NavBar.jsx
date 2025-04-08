import React from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineMenuFold } from "react-icons/ai";

const NavBar = () => {
    return (
      <div className="fixed z-40 w-full px-10 lg:px-20  flex justify-between items-center mt-10">
        <div>
          <h1 className="text-[#00FCDB] text-4xl">
            Ai <span className="text-white">Mentor</span>
          </h1>
        </div>

        <div className="text-white hidden lg:inline-block">
          <ul className="flex space-x-10 text-xl">
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/paintings"}>Paintings</NavLink>
            </li>
            <li>
              <NavLink to={"/generate-painting"}>Generate Painting</NavLink>
            </li>
          </ul>
        </div>

        <div className="text-white text-lg hidden lg:inline-block">
          <button className="transition-all duration-300 border-2 border-white px-5 py-2 rounded-lg cursor-pointer hover:bg-[#3500FC] hover:border-[#3500FC]">
            Login
          </button>
        </div>

        <div className='lg:hidden text-white text-4xl'>
          <AiOutlineMenuFold></AiOutlineMenuFold>
        </div>
      </div>
    );
};

export default NavBar;