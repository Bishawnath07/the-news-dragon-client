import React from 'react';
import Navigationber from '../Pages/Shared/Navigationber/Navigationber';
import { Outlet } from 'react-router-dom';
import useSetTitle from '../Hook/useSetTitle';

const LoginLayout = () => {
    
    return (
        <div>
            <Navigationber></Navigationber>
            <Outlet></Outlet>
        </div>
    );
};

export default LoginLayout;