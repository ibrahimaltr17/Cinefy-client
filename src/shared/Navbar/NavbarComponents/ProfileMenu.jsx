import React from 'react';
import { CiUser } from "react-icons/ci";
import { MdOutlineReviews } from "react-icons/md";
import { CiBookmark } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { RiLogoutBoxLine } from "react-icons/ri";
import useAuth from '../../../hooks/useAuth';

const ProfileMenu = () => {

    const {logOut}=useAuth()

    const handleLogOut=()=>{
        logOut()
        .then(result=>{
            console.log(result)
        })
        .catch(error=>{
            console.log(error)
        })
    }


    return (
        <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
            </div>

            <ul
                tabIndex={0}
                className="menu dropdown-content mt-4 w-64 rounded-2xl border border-white/10 bg-[#1a1325]/95 backdrop-blur-xl p-2 shadow-2xl z-[100]"
            >

                <li>
                    <a className='text-gray-300 hover:text-white hover:bg-white/5 rounded-xl py-3 transition-all duration-200'>
                        <CiUser className='text-2xl' />
                        <span className='text-sm font-medium'>Profile</span>
                    </a>
                </li>

                <li>
                    <a className='text-gray-300 hover:text-white hover:bg-white/5 rounded-xl py-3 transition-all duration-200'>
                        <MdOutlineReviews className='text-xl' />
                        <span className='text-sm font-medium'>My Reviews</span>
                    </a>
                </li>

                <li>
                    <a className='text-gray-300 hover:text-white hover:bg-white/5 rounded-xl py-3 transition-all duration-200'>
                        <CiBookmark className='text-2xl' />
                        <span className='text-sm font-medium'>My Collections</span>
                    </a>
                </li>

                <li>
                    <a className='text-gray-300 hover:text-white hover:bg-white/5 rounded-xl py-3 transition-all duration-200'>
                        <IoSettingsOutline className='text-xl' />
                        <span className='text-sm font-medium'>Settings</span>
                    </a>
                </li>

                <div className='border-t border-white/10 my-2'></div>

                <li>
                    <a className='text-gray-400 hover:text-red-400 hover:bg-red-500/5 rounded-xl py-3 transition-all duration-200'>
                        <RiLogoutBoxLine className='text-xl' />
                        <span onClick={handleLogOut} className='text-sm font-medium'>Logout</span>
                    </a>
                </li>

            </ul>
        </div>
    );
};

export default ProfileMenu;