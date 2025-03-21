import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../Shared/NavBar';


const Root = () => {
    return (
      <div className="font-[Poppins] bg-[#0D0D0D]">
        <div className="">
          <NavBar></NavBar>
        </div>
        <Outlet></Outlet>
      </div>
    );
};

export default Root;