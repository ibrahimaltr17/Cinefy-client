import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../shared/Navbar/Navbar';
import Footer from '../shared/Footer/Footer';
import Dock from '../shared/Dock/Dock';

const RootLayout = () => {
    return (
        <div className='max-w-7xl text-white bg-[#140f1f]'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            <div className='block md:hidden'>
                <Dock></Dock>
            </div>
        </div>
    );
};

export default RootLayout;