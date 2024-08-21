"use client"

import Image from 'next/image';
import React, { useState } from 'react';

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className='h-20 sticky z-[100] inset-x-0 top-0 w-full transition-all px-5 bg-blue-200 shadow-md'>
            <div className='flex items-center justify-between p-4'>
                <div className='flex-shrink-0'>
                    <Image
                        src="/img/logo.png"
                        width={40}
                        height={20}
                        alt="logo"
                        className='flex-shrink-0'
                    />
                </div>
                <div className='hidden md:flex gap-x-8 text-black'>
                    <h3 className="cursor-pointer hover:text-blue-500">About</h3>
                    <h3 className="cursor-pointer hover:text-blue-500">Events</h3>
                    <h3 className="cursor-pointer hover:text-blue-500">Socials</h3>
                </div>
                <div className='md:hidden'>
                    <button className='text-black focus:outline-none' onClick={toggleMenu}>
                        <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16'></path>
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className='md:hidden bg-blue-200 shadow-md'>
                    <ul className='flex flex-col items-start p-4 space-y-2'>
                        <li className='w-full'>
                            <h3 className="cursor-pointer hover:text-blue-500">About</h3>
                        </li>
                        <li className='w-full'>
                            <h3 className="cursor-pointer hover:text-blue-500">Events</h3>
                        </li>
                        <li className='w-full'>
                            <h3 className="cursor-pointer hover:text-blue-500">Socials</h3>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
