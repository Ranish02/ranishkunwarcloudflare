import React from 'react';
import { AiOutlineDown } from 'react-icons/ai';
import { CiSearch } from 'react-icons/ci';
import { IoMdHome } from 'react-icons/io';
import { RiMessengerLine } from 'react-icons/ri';
import { BsPlusSquare } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsPersonCircle } from 'react-icons/bs';
import { IoCompassOutline } from 'react-icons/io5';

import Instagrampost from './components/items/Instagrampost';

// import { AiOutlineDown } from 'react-icons/bi';
// import { AiOutlineDown } from 'react-icons/bi';
const PotatoGram = () => {
    const handleLike = () => {
        console.log("Liking");
    }
    return (
        <>
            <div className='w-screen snap-start '>
            </div>
            <div className='h-full bg-white mt-[50px] px-4 '>
                <div className='border-b-[1px] border-black flex justify-around'>
                    <div className='flex justify-between w-[975px]'>
                        <div className='flex'>
                            <img src="https://cdn.discordapp.com/attachments/979623779477123122/1053283751003697152/New_Project.png" alt="" className='h-[70px]' />
                            <AiOutlineDown size={20} className="my-auto" />
                        </div>
                        <div className='my-auto hidden md:flex'>
                            <div className='my-2 flex'>
                                <CiSearch size={20} className="my-auto mr-[-30px] z-10 " />
                                <input type="text" className='bg-[#efefef] rounded-md py-2 px-4 pl-8' placeholder="Search" />
                            </div>
                        </div>
                        <div className='my-auto flex'>
                            <IoMdHome size={30} className="ml-4 my-auto" onClick={handleLike} />
                            <RiMessengerLine size={27} className="ml-4 my-auto" />
                            <BsPlusSquare size={22} className="ml-4 my-auto" />
                            <IoCompassOutline size={27} className="ml-4 my-auto" />
                            <AiOutlineHeart size={27} className="ml-4 my-auto" />
                            <BsPersonCircle size={27} className="ml-4 my-auto" />
                        </div>
                    </div>
                </div>
                <div className='overflow-y-scroll h-[800px]'>
                    <Instagrampost />
                    <Instagrampost />
                </div>
            </div>
        </>

    );
}

export default PotatoGram;
