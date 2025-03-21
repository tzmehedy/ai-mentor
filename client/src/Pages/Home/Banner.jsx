import React from 'react'
import bannerImg from "../../assets/images/home-bg-png (1).png"

const Banner = () => {
    return (
      <div className="h-[600px] flex flex-col-reverse lg:flex-row">
        <div className=" lg:w-1/2 flex flex-col justify-center px-20 text-white font-bold space-y-5">
          <h1 className="text-5xl">
            The <span className="text-[#3500FC]">Future</span> in Al Graphic{" "}
            <br /> Generator
          </h1>
          <p className="text-xl">
            A prompt is Essential for a paint Generation
          </p>
          <button className="bg-[#3500FC] px-3 py-4 w-40 rounded-xl">Get Started</button>
        </div>
        <div className="lg:w-1/2">
          <img className='w-full h-full' src={bannerImg} alt="" />
        </div>
      </div>
    );
};

export default Banner;