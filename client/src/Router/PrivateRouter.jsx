import React from 'react';
import useAuth from '../Hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRouter = ({children}) => {
    const {user,loading} = useAuth()
    const location = useLocation()

    if(user) return children

    if(loading) return (
      <div>
        <span className="loading loading-ring loading-xl"></span>
      </div>
    );
    return <Navigate to={"/login"} state={location?.pathname}></Navigate>
};

export default PrivateRouter;