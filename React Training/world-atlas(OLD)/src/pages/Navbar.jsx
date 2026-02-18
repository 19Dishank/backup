import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import navItems from '../APIs/NavItems.json'

const Navbar = () => {
    
    
    const activeStyle = ({ isActive }) => {

        return `transition-all duration-300 px-1 py-1 uppercase font-bold tracking-wide ${isActive
            ? "text-indigo-500 border-b-2 border-indigo-500"
            : "text-slate-300 hover:text-white hover:border-b-2 hover:border-slate-500"
            }`
    }
    return (
        <div className='w-full h-20  bg-black px-10 sticky top-0 z-50 border-b border-slate-800 '>
            <div className='grid grid-cols-2 text-slate-100 h-20'>
                <div className=' flex items-center italic'>
                    <span className='font-bold text-2xl capitalize'>world</span>
                    <span className='font-extrabold text-2xl capitalize text-indigo-500'>atlas</span>
                </div>
                <div className='flex flex-row justify-end items-center gap-5'>
                    {navItems.map((ele) => {
                        return <NavLink to={ele.location} key={ele.location} className={activeStyle}>{ele.heading}</NavLink>
                    })}
                </div>
            </div>
        </div>
    );
};

export default Navbar;