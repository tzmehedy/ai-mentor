import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../Shared/NavBar';
import Footer from '../Shared/Footer';


const Root = () => {
    return (
      <div className="font-[Poppins] bg-[#0D0D0D]">
        <div className="">
          <NavBar></NavBar>
        </div>
        <Outlet></Outlet>
        <div>
          <Footer></Footer>
        </div>
      </div>
    );
};

export default Root;