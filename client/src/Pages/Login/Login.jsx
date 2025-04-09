import React from 'react';
import { FaArrowLeft, FaTwitter } from "react-icons/fa";
import { Link, NavLink } from 'react-router-dom';
import { MdOutlineEmail } from "react-icons/md";
import { IoMdKey, IoLogoFacebook } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import useAuth from '../../Hooks/useAuth';


const Login = () => {
  const {signInWithGoogle} = useAuth()

  const handelLoginWithGoogle = ()=>{
    signInWithGoogle()
  }



  
    return (
      <div className="bg-[#0D0D0D] min-h-screen">
        <div className="text-white text-xl flex">
          <NavLink to={"/"} className="flex items-center justify-between p-2">
            <FaArrowLeft></FaArrowLeft>{" "}
            <span className="ml-2">Back To Home</span>
          </NavLink>
        </div>

        <div className="container mx-auto md:p-20">
          <div>
            <div className="text-white border-l-4 border-l-[#3500FC] p-3">
              <h1 className="text-5xl font-bold">Login Now</h1>
            </div>

            <div className="flex flex-col md:flex-row justify-between mt-10 ">
              <div className="bg-black shadow-2xl text-white md:w-1/2 p-10 space-y-10">
                <p className="text-xl">
                  Don&apos;t have an account?{" "}
                  <Link to={"/register"} className="text-[#3500FC] underline">
                    Register
                  </Link>
                </p>

                <form className="space-y-10">
                  <div className="flex items-center space-x-3">
                    <label htmlFor="email" className="text-5xl">
                      <MdOutlineEmail></MdOutlineEmail>
                    </label>
                    <input
                      className="border-b-2 border-[#3500FC] w-full px-3 py-2 bg-none"
                      type="email"
                      name="email"
                      required
                      id=""
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="flex items-center space-x-3">
                    <label htmlFor="password" className="text-5xl">
                      <IoMdKey></IoMdKey>
                    </label>
                    <input
                      className="border-b-2 border-[#3500FC] w-full px-3 py-2"
                      onFocus={false}
                      type="password"
                      name="password"
                      required
                      id=""
                      placeholder="Enter your password"
                    />
                  </div>

                  <div>
                    <input
                      className="btn w-full border-0 shadow-none bg-[#3500FC] text-white text-lg"
                      type="submit"
                      value="Login"
                    />
                  </div>
                </form>
              </div>
              <div className="md:w-1/2 text-white flex flex-col items-center justify-center space-y-10">
                <h1 className="text-3xl underline text-[#00FCDB]">
                  Login With
                </h1>
                <div className='flex justify-between space-x-5'>
                    <button onClick={handelLoginWithGoogle} className='text-3xl cursor-pointer'><FcGoogle></FcGoogle></button>
                    <button className='text-3xl cursor-pointer text-blue-600'><IoLogoFacebook></IoLogoFacebook></button>
                    <button className='text-3xl cursor-pointer text-sky-600'><FaTwitter></FaTwitter></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;