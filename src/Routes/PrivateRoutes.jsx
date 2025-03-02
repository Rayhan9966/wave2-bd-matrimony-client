import { useContext, useLayoutEffect } from 'react';
// import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const PrivateRoutes = ({children}) => {
    // const {user,loading} =useContext(AuthContext);
    const {user,loading} =useAuth()
    const location=useLocation();

    if (loading){
        return <span className="loading loading-spinner loading-lg"></span>
    }
    if (user){
        return children;
    }
    return <Navigate to="/login" state={{from:location}} replace></Navigate>
  
};

export default PrivateRoutes;