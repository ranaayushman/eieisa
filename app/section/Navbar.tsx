import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <nav className='z-[100] sticky h-20 inset-x-0 top-0 w-full transition-all px-5'>
            <div className='flex p-8 gap-x-20 justify-between'>
                <div>
                    <Image
                     src="/img/logo.png" 
                     width={36}
                     height={10}
                     alt=""
                     
                     />
                </div>
                <div className='flex gap-x-4 justify-between
                '>
                    <h3>About</h3>
                    <h3>Events</h3>
                    <h3>ISA </h3>
                    <h3>Option 4</h3>
                </div>
            </div>
        </nav>
    )
}

export default Navbar