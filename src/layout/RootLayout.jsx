import React from 'react';
import { Outlet } from 'react-router';

const RootLayout = () => {
    return (
        <div className='max-w-7xl'>
            <Outlet></Outlet>
        </div>
    );
};

export default RootLayout;