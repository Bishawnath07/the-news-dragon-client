import React from 'react';
import Navigationber from '../Pages/Shared/Navigationber/Navigationber';
import { Outlet } from 'react-router-dom';

const LoginLayout = () => {
    return (
        <div>
            <Navigationber></Navigationber>
            <Outlet></Outlet>
        </div>
    );
};

export default LoginLayout;