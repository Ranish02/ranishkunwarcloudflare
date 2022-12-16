import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import { AiOutlineMenu } from 'react-icons/ai';
import NavMobile from './NavMobile';
import { Link } from 'react-scroll';

const Nav = () => {
    const [navMobile, setNavMobile] = useState(false);
    return (
        <>
            <div className='flex glass h-[50px] rounded-b-lg mx-4
        justify-between text-white text-center pl-10 pr-4 top-0 z-40 sticky'>
                <div className='flex items-center justify-between md:justify-end font-bold text-2xl'>HOME</div>
                {!navMobile ?
                    <div className="mY-AUTO flex md:hidden">
                        <button onClick={() => setNavMobile(true)}>
                            <AiOutlineMenu size={25} />
                        </button>
                    </div>
                    :
                    <>

                    </>}
                <div className='hidden md:flex justify-end  items-center my-2'>
                    <ul className='flex'>
                        <li className='px-2 md:px-4 font-semibold'><NavLink to="/home">HOME</NavLink></li>
                        <li className='px-2 md:px-4 font-semibold'><NavLink to="/interest">INTEREST</NavLink></li>
                        <li className='px-2 md:px-4 font-semibold'><NavLink to="/skills">SKILLS</NavLink></li>
                        <li className='px-2 md:px-4 font-semibold'><NavLink to="/about">ABOUT</NavLink></li>
                        <li className='px-2 md:px-4 font-semibold'><Link to="info" spy={true} smooth={true} offset={50} duration={500}>
                            Info
                        </Link></li>

                    </ul>
                </div>


            </div >
            <div
                className={`${navMobile ? 'right-0' : '-right-full'} top-0 bottom-0 w-48 transition-all fixed h-screen z-50 `}>
                <NavMobile setNavMobile={setNavMobile} />
            </div>
        </>
    );
}

export default Nav;
