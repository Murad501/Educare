import { Spinner } from 'flowbite-react';
import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { authContext } from '../Context/UserContext';

const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(authContext);
    const location = useLocation()

    if(loading){
        return <div className="text-center">
        <Spinner aria-label="Center-aligned spinner example" />
      </div>
    }

    if(!user){
       return <Navigate to='/login' state={{from: location}} replace></Navigate>
    }

    return children;
};

export default PrivateRoute;