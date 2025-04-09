import React from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineMenuFold } from "react-icons/ai";
import useAuth from '../Hooks/useAuth';
import { toast } from 'react-toastify';

const NavBar = () => {
  const { user, logOut } = useAuth();
  const handelLogout = async() =>{
    await logOut()
    .then(()=>{
      toast.success("Logout Successful")
    })

  }

    return (
      <div className="fixed z-40 w-full px-10 lg:px-20  flex justify-between items-center mt-10">
        <div>
          <h1 className="text-[#00FCDB] text-4xl">
            Ai<span className="text-white">Mentor</span>
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
          {user ? (
            <>
              <div className="dropdown dropdown-end">
                <div tabIndex={0} className=" m-1">
                  <img
                    className="w-10 h-10 rounded-full cursor-pointer"
                    src={user?.photoURL}
                    alt=""
                    title={user?.displayName}
                  />
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-[#0D0D0D] rounded-box z-1 w-40 p-2 shadow-sm"
                >
                  <li onClick={handelLogout}>
                    <button>Logout</button>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <NavLink
              to={"/login"}
              className="transition-all duration-300 border-2 border-white px-5 py-2 rounded-lg cursor-pointer hover:bg-[#3500FC] hover:border-[#3500FC]"
            >
              Login
            </NavLink>
          )}
        </div>

        <div className="lg:hidden text-white text-4xl">
          <AiOutlineMenuFold></AiOutlineMenuFold>
        </div>
      </div>
    );
};

export default NavBar;