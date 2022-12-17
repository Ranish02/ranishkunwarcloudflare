import React, { useState, useEffect } from 'react';
import { BsPersonCircle } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';
import { TbSend } from 'react-icons/tb';
import { FaRegComment } from 'react-icons/fa';
import { BsTag } from 'react-icons/bs';
import { BsThreeDots } from 'react-icons/bs';
import Imagesslider from '../Slider/Imagesslider';
import '../../mycss/likeanimation.css'

const Instagrampost = () => {
    const [likective, setLikeactive] = useState(false);
    const [showlike, setShowlike] = useState(false);
    const handleLike = () => {
        //console.log("Clicked");
        if (likective) {
            setLikeactive(false);
        }
        else {
            setShowlike(true);
            setLikeactive(true);
        }
    }
    useEffect(() => {

        setTimeout(() => {
            console.log("2 sec")
            setShowlike(false)
        }, 1600);


    }, [likective]);
    return (
        <div className='flex justify-center h-full mb-4 mt-2'>
            <div className='w-[470px] border-x-[1px] border-y-[1px] border-[#9e9e9e]'>
                <div className='w-full flex justify-between px-4 my-auto pl-4 h-[47px]'>
                    <div className='flex my-auto'>
                        <BsPersonCircle size={30} />
                        <div className='pl-2  my-auto'>
                            Shrinkhala_K20
                        </div>
                        <div className='pl-2 text-sm font-bold text-[#0084ff] my-auto'>
                            Follow
                        </div>
                    </div>
                    <div className='my-auto'>
                        <BsThreeDots size={20} />
                    </div>
                </div>
                <div className='relative content'>
                    {showlike ?
                        (
                            <div className={likective ? 'z-20 absolute w-[470px] h-[470px] heart-active heart scale-50' : 'z-20 absolute w-[470px] h-[470px] heart scale-50'}>
                            </div>
                        )
                        :
                        ('')
                    }

                    {/* <img src="https://cdn.discordapp.com/attachments/979623779477123122/1052895289901592586/IMG-20220926-WA0000.jpg" alt="" className='' /> */}
                    <Imagesslider />
                </div>

                <div className='w-full flex my-auto px-4 pt-4 justify-between'>
                    <div className='flex h-[50px]'>
                        {likective ?
                            (
                                <>
                                    {showlike ?
                                        (
                                            <div className=' w-[50px]' onClick={handleLike}>
                                                <div className={likective ? 'heart-active h-full w-full heart' : 'heart h-full w-full scale-150'}></div>
                                            </div>
                                        ) :
                                        (
                                            <div className='my-auto w-[50px]'>
                                                <AiOutlineHeart size={35} className="mx-auto text-[#ff3333]" onClick={handleLike} />
                                            </div>
                                        )}



                                </>
                            ) :
                            (
                                <>

                                    <div className='my-auto w-[50px]'>
                                        <AiOutlineHeart size={35} className="mx-auto" onClick={handleLike} />
                                    </div>






                                </>
                            )
                        }


                        <div className='my-auto'>
                            <FaRegComment size={30} className="ml-2 " />
                        </div>
                        <div className='my-auto'>
                            <TbSend size={30} className="ml-4" />
                        </div>


                        {/* <div className={likective ? 'heart-active content' : 'content'} onClick={handleLike}>
                            <span className={likective ? 'heart-active heart' : 'heart'}></span>
                            <span className={likective ? 'heart-active text' : 'text'}>Like</span>
                            <span className={likective ? 'heart-active numb' : 'numb'}></span>



                        </div> */}


                    </div>
                    <div>
                        <BsTag size={35} />
                    </div>

                </div>
                <div className='w-full flex my-auto pl-4 pt-2 font-bold text-sm'>
                    10,528 <div className='ml-2'>
                        likes
                    </div>
                </div>
                <div className='w-full text-xs flex my-auto pl-4  pt-2'>
                    <div className='font-bold'>
                        Shrinkhala_K20
                    </div>
                    <div className='flex pl-2'>
                        Two Souls... <div className='font-thin pl-1'>more</div>
                    </div>
                </div>
                <div className='w-full text-xs font-thin flex my-auto pl-4  pt-2'>
                    MAY 5
                </div>

            </div>

        </div>
    );
}

export default Instagrampost;
