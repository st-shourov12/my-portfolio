import React from 'react';
import { Link, NavLink } from 'react-router';

const Header = () => {
   
    return (

        <nav className="navbar bg-[#0d001f] text-white shadow-sm fixed z-50">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
                <ul
                    tabIndex="-1"
                    className="menu bg-purple-900 menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow">
                    <li><NavLink to={'/'}>Home</NavLink></li>
                    <li><a href={'#about'}>About</a></li>
                    <li><a href={'#skills'}>Skills</a></li>
                    <li><a href={'#projects'}>Projects</a></li>
                    <li><a href={'#contact'}>Contact</a></li>
                    
                    
                </ul>
                </div>
                <Link to={'/'} class="text-2xl font-bold text-[#FFF]"><span class="text-[#BE4BFF]">&lt;<span className='text-white'>Shourov</span>/&gt;</span></Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink to={'/'} className="text-lg font-semibold">Home</NavLink></li>
                    <li><a href={'#about'} className="text-lg font-semibold">About</a></li>
                    <li><a href={'#skills'} className="text-lg font-semibold">Skills</a></li>
                    <li><a href={'#projects'} className="text-lg font-semibold">Projects</a></li>
                    <li><a href={'#contact'} className="text-lg font-semibold">Contact</a></li>
                </ul>
            </div>
            
        </nav>
    );
};

export default Header;