import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
      <div className='fixed z-40 w-full px-20  flex justify-between items-center border-2 border-red-500'>
        <div>
          <h1 className="text-[#00FCDB] text-2xl">
            Ai <span className='text-white'>Mentor</span>
          </h1>
        </div>

        <div className='text-white'>
          <ul className='flex space-x-10'>
            <li><NavLink to={"/"}>Home</NavLink></li>
            <li><NavLink to={"/paintings"}>Paintings</NavLink></li>
            <li><NavLink to={"/generate-painting"}>Generate Painting</NavLink></li>
          </ul>
        </div>

        <div className='text-white'>
          <button className='btn border-none shadow-none'>Login</button>
        </div>
      </div>
    );
};

export default NavBar;