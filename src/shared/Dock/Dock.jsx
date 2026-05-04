import React from 'react';
import { CiGlobe, CiCalendar } from "react-icons/ci";
import { MdGroups } from "react-icons/md";
import { BiCategory } from "react-icons/bi";
import { NavLink } from 'react-router';

const Dock = () => {
    const dockItems = [
        { path: '/', label: 'Explore', icon: CiGlobe },
        { path: '/scheduled', label: 'Scheduled', icon: CiCalendar },
        { path: '/category', label: 'Category', icon: MdGroups },
        { path: '/community', label: 'Community', icon: BiCategory },
    ];

    return (
        <div className="dock border bg-[#140f1f] text-gray-400">
            {dockItems.map((item) => {
                const Icon = item.icon;

                return (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) =>
                            `flex flex-col items-center ${isActive ? 'text-white' : ''
                            }`
                        }
                    >
                        <Icon />
                        <span className="dock-label">{item.label}</span>
                    </NavLink>
                );
            })}
        </div>
    );
};

export default Dock;