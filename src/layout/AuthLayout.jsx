import React from 'react';
import PosterSide from '../pages/Authentication/AuthComponents/PosterSide';
import { Outlet } from 'react-router';
import logo from '../assets/logo with name.png'

const AuthLayout = () => {
    return (
        <div className='flex bg-[#140f1f] text-white'>

            {/* Poster Side */}
            <div className='w-1/2 hidden md:block'>
                <PosterSide />
            </div>

            {/* Auth Side */}
            <div className='md:w-1/2 w-full h-screen overflow-y-auto px-6 py-10'>

                {/* Container */}
                <div className='max-w-md mx-auto'>

                    {/* Header */}
                    <div className='mb-2 text-center'>
                        <div className='max-w-[200px] mx-auto'>
                            <img src={logo} alt="" />
                        </div>
                    </div>

                    {/* Form */}
                    <Outlet />

                </div>
            </div>
        </div>
    );
};

export default AuthLayout;