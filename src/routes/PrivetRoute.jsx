import React, { Children, useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivetRoute = ({children}) => {
    const {user , loading} = useContext(AuthContext);
    const location = useLocation()
    
    if(loading){
        return <Spinner anreturnimation="border" />;

    }
    
    if(user){
        return children;
    }
    return <Navigate state={{from: location}} to ="/login" replace ></Navigate>;
};

export default PrivetRoute;