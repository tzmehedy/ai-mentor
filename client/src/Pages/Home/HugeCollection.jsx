import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import img1 from "../../assets/images/Huge-img-1.png"
import img2 from "../../assets/images/Huge-img-2.png"
import img3 from "../../assets/images/Huge-img-3.png"
import img4 from "../../assets/images/Huge-img-4.png"

const HugeCollection = () => {
    return (
      <div className="p-2 md:p-0">
        <div className="text-center text-white">
          <h1 className="text-[#00FCDB] text-lg uppercase">Huge Collection</h1>
          <p className="text-4xl mt-5">AI-Powered Design</p>
        </div>
        <div className="container mx-auto mt-10 flex flex-col md:flex-row justify-between space-y-4 md:space-y-0">
          <div className="bg-black text-white flex flex-col items-center justify-center p-10 space-y-5 transition-all duration-500 ease-in-out hover:bg-gradient-to-bl from-blue-800 to-sky-400 cursor-pointer rounded-2xl">
            <div>
              <img src={img1} alt="" />
            </div>
            <div className="flex flex-col items-center justify-center space-y-2">
              <h1 className="text-2xl font-bold">Intelligent</h1>
              <p className="text-center opacity-80">
                Adipiscing elit, sed do eiusmod <br /> labore dolore magna
                aliqua.
              </p>
              <p className="text-center">
                <FaArrowRight></FaArrowRight>
              </p>
            </div>
          </div>

          <div className="bg-black text-white flex flex-col items-center justify-center p-10 space-y-5 transition-all duration-500 ease-in-out hover:bg-gradient-to-bl from-blue-800 to-sky-400 cursor-pointer rounded-2xl">
            <div>
              <img src={img2} alt="" />
            </div>
            <div className="flex flex-col items-center justify-center space-y-2">
              <h1 className="text-2xl font-bold">Visualization</h1>
              <p className="text-center opacity-80">
                Adipiscing elit, sed do eiusmod <br /> labore dolore magna
                aliqua.
              </p>
              <p className="text-center">
                <FaArrowRight></FaArrowRight>
              </p>
            </div>
          </div>

          <div className="bg-black text-white flex flex-col items-center justify-center p-10 space-y-5 transition-all duration-500 ease-in-out hover:bg-gradient-to-bl from-blue-800 to-sky-400 cursor-pointer rounded-2xl">
            <div>
              <img src={img3} alt="" />
            </div>
            <div className="flex flex-col items-center justify-center space-y-2">
              <h1 className="text-2xl font-bold">Creativity</h1>
              <p className="text-center opacity-80">
                Adipiscing elit, sed do eiusmod <br /> labore dolore magna
                aliqua.
              </p>
              <p className="text-center">
                <FaArrowRight></FaArrowRight>
              </p>
            </div>
          </div>

          <div className="bg-black text-white flex flex-col items-center justify-center p-10 space-y-5 transition-all duration-500 ease-in-out hover:bg-gradient-to-bl from-blue-800 to-sky-400 cursor-pointer rounded-2xl">
            <div>
              <img src={img4} alt="" />
            </div>
            <div className="flex flex-col items-center justify-center space-y-2">
              <h1 className="text-2xl font-bold">Flexible</h1>
              <p className="text-center opacity-80">
                Adipiscing elit, sed do eiusmod <br /> labore dolore magna
                aliqua.
              </p>
              <p className="text-center">
                <FaArrowRight></FaArrowRight>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default HugeCollection;