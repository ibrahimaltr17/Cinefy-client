import React from 'react';
import { CiGlobe } from "react-icons/ci";
import { CiCalendar } from "react-icons/ci";
import { MdGroups } from "react-icons/md";
import { BiCategory } from "react-icons/bi";
import { Link } from 'react-router';

const Dock = () => {
    return (
        <div className="dock border bg-[#140f1f] text-white">
            <Link to={'/'}>
                <button className='flex flex-col items-center dock-active'>
                    <CiGlobe />
                    <span className="dock-label">Explore</span>
                </button>
            </Link>

            <Link to={'/scheduled'}>
                <button className='dock-active flex flex-col items-center'>
                    <CiCalendar />
                    <span className="dock-label">Scheduled</span>
                </button>
            </Link>

            <Link to={'/category'}>
                <button className='dock-active flex flex-col items-center'>
                    <MdGroups />
                    <span className="dock-label">Community</span>
                </button>
            </Link>

            <Link to={'/community'}>
                <button className='dock-active flex flex-col items-center'>
                    <BiCategory />
                    <span className="dock-label">Community</span>
                </button>
            </Link>

        </div>
    );
};

export default Dock;