import React from 'react';
import { IoClose } from 'react-icons/io5';

const NavMobile = ({ setNavMobile }) => {
    return (
        <div className='lg:hidden bg-[#251f3f] w-full h-full glass'>
            <div className='mt-4 ml-8'>
                <button onClick={() => setNavMobile(false)} className="border-2 border-[#aaaaaa] " >
                    <IoClose
                        className='text-3xl cursor-pointer text-white' />
                </button>

            </div>
            <ul className='flex flex-col items-center justify-center space-y-8 h-full text-white'>
                <li className='text-lg'><a href='#'>Home</a></li>
                <li className='text-lg'><a href='#'>Company</a></li>
                <li className='text-lg'><a href='#'>Features</a></li>
                <li className='btn'><a href='#'>Sign up</a></li>
            </ul>
        </div>
    );
}

export default NavMobile;
