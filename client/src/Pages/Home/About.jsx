import React from 'react';
import aboutImg1 from "../../assets/images/shoes-img-249x300.jpg"

const About = () => {
    return (
      <div className="container md:mx-auto flex flex-col md:flex-row p-2 space-y-5">
        <div className="md:w-1/2">
          <img className="w-full md:w-2/3" src={aboutImg1} alt="" />
        </div>
        <div className="md:w-1/2 flex flex-col justify-center text-white space-y-5">
          <h1 className="text-[#00FCDB] text-lg uppercase">About Us</h1>
          <h1 className="text-white text-4xl font-bold">
            Architecting the Digital Future
          </h1>
          <p className="opacity-80">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
            voluptates sunt sint esse cumque quaerat asperiores. Excepturi
            consequuntur facilis ipsum itaque deleniti numquam doloribus
            pariatur corrupti libero! Voluptate, aliquam quo!
          </p>
          <button className="bg-[#3500FC] w-40 px-3 py-4 rounded-lg text-xl font-bold cursor-pointer hover:bg-[#00FCDB]">
            About Us
          </button>
        </div>
      </div>
    );
};

export default About;