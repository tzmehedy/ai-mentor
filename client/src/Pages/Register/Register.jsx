import React from 'react';
import { FaArrowLeft, FaRegImage } from "react-icons/fa";
import { MdOutlineEmail } from 'react-icons/md';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { IoPerson } from "react-icons/io5";
import axios from 'axios';
import useAuth from '../../Hooks/useAuth';
import { toast } from 'react-toastify';
import { IoMdKey } from 'react-icons/io';

const url = `https://api.imgbb.com/1/upload?key=${
  import.meta.env.VITE_ImageBB_API
}`;

const Register = () => {
    const {createUser,updateUser,setLoading} = useAuth()
    const navigate = useNavigate()
    const handelRegister = async(e) =>{
        e.preventDefault()
        const form = e.target 
        const name = form.name.value 
        const photo = form.photo.files[0] 
        const email = form.email.value 
        const password = form.password.value 

        const formData = new FormData()
        formData.append("image", photo)

        const {data} = await axios.post(url,formData)

        if(data.data.display_url){
            try{
               await createUser(email,password)
               await updateUser(name, data.data.display_url)
               setLoading(false)
               toast.success("Registration Successfully Completed")
               navigate("/")
            }
            catch(err){
                setLoading(false)
                toast.error(err.message)
            }
        }

    }
    return (
      <div className="bg-[#0D0D0D] min-h-screen">
        <div className="text-white text-xl flex">
          <NavLink to={"/"} className="flex items-center justify-between p-2">
            <FaArrowLeft></FaArrowLeft>{" "}
            <span className="ml-2">Back To Home</span>
          </NavLink>
        </div>

        <div className="container mx-auto p-10 md:p-20">
          <div className="flex flex-col items-center">
            <div className="text-white border-l-4 border-l-[#3500FC] p-3">
              <h1 className="text-5xl font-bold">Join With Us</h1>
            </div>

            <div className=" mt-10 ">
              <div className="bg-black shadow-2xl text-white p-10 space-y-10">
                <p className="text-xl">
                  Already Have An Account? Please{" "}
                  <Link to={"/login"} className="text-[#3500FC] underline">
                    Login
                  </Link>
                </p>

                <form onSubmit={handelRegister} className="space-y-10">
                  <div className="flex items-center space-x-3">
                    <label htmlFor="name" className="text-5xl">
                      <IoPerson></IoPerson>
                    </label>
                    <input
                      className="border-b-2 border-[#3500FC] w-full px-3 py-2 bg-none"
                      type="text"
                      name="name"
                      id=""
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="flex items-center space-x-3">
                    <label htmlFor="name" className="text-5xl">
                      <FaRegImage></FaRegImage>
                    </label>
                    <input
                      className="border-2 border-[#3500FC] w-full px-3 py-2 bg-none cursor-pointer"
                      type="file"
                      name="photo"
                      id=""
                      placeholder="Enter your name"
                    />
                  </div>

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
                      value="Register"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Register;