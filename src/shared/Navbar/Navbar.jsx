import React from 'react';
import logo from '../../assets/logo with name.png'
import { CiGlobe } from "react-icons/ci";
import { CiCalendar } from "react-icons/ci";
import { MdGroups } from "react-icons/md";
import { BiCategory } from "react-icons/bi";
import { IoIosNotifications } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { NavLink } from 'react-router';


const Navbar = () => {

    const navItems = [
        { path: '/', icon: <CiGlobe />, label: 'Explore' },
        { path: '/scheduled', icon: <CiCalendar />, label: 'Scheduled' },
        { path: '/community', icon: <MdGroups />, label: 'Community' },
        { path: '/category', icon: <BiCategory />, label: 'Category' },
        { path: '/searchPage', icon: <CiSearch />, label: 'Search' }
    ]

    return (

        <div className="navbar bg-[#140f1f] shadow-sm">

            {/* First Half of navbar  */}
            {/* Logo */}
            <div className="flex-1">
                <a className="">
                    <img className='max-w-24' src={logo} alt="Cinefy_Logo" />
                </a>
            </div>

            {/* Second half of Navbar */}
            <div className="flex-none">
                <div className="flex items-center gap-3">

                    {/* Nav Menu */}
                    <div className='flex gap-3 items-center'>
                        <div className='hidden md:block'>
                            <div className='flex gap-3 items-center'>
                                {
                                    navItems.map(item =>
                                        <NavLink
                                            key={item.path}
                                            to={item.path}
                                            className={({ isActive }) =>
                                                `${isActive ? 'text-white' : 'text-gray-400'}   text-2xl flex items-center gap-1`
                                            }
                                        >
                                            {({ isActive }) => (
                                                <>
                                                    <span>{item.icon}</span>
                                                    {isActive && <span className='text-xl'>{item.label}</span>}
                                                </>
                                            )}
                                        </NavLink>
                                    )
                                }
                            </div>
                        </div>

                        {/* Notification Menu Section */}
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="">
                                    <IoIosNotifications className='text-gray-400 text-2xl' />
                                </div>
                            </div>

                            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                <li>
                                    <a className="justify-between">
                                        Profile <span className="badge">New</span>
                                    </a>
                                </li>
                                <li><a>Settings</a></li>
                                <li><a>Logout</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Profile Dropdown (separate!) */}

                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>

                        <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li>
                                <a className="justify-between">
                                    Profile <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Navbar;