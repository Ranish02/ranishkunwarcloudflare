import React, { useState, useEffect } from 'react';
import { BsPersonCircle } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';
import { TbSend } from 'react-icons/tb';
import { FaRegComment } from 'react-icons/fa';
import { BsTag } from 'react-icons/bs';
import { BsThreeDots } from 'react-icons/bs';
import Imagesslider from '../Slider/Imagesslider';
import '../../mycss/likeanimation.css'
import axios from 'axios';
import { useDoubleTap } from 'use-double-tap';

const Instagrampost = () => {
    const bind = useDoubleTap((event) => {
        if (!showlikeanim) {
            setshowlikeanim(true);
        }
        if (!isLiked) {
            setisLiked(true);
        }
        if (isLiked) {
            setLikeSent(likesent + 1);
            settotallikes(totallikes + 1)
            if (!counting) {
                setcounting(true);
                setTimeout(() => {
                    setcounting(false);
                    sendLikes();
                    //setLikeSent(0);
                }, 3000);
            }
        }

        console.log('Double tapped');
    });
    useEffect(() => {
        var likes;
        axios.get("https://api.countapi.xyz/hit/ranish/").then((res) =>
            settotallikes(res.data.value)
        )
    }, []);

    const sendLikes = () => {

        // call axios methods
        //
        axios.get("https://api.countapi.xyz/hit/ranish/").then((res) =>
            settotallikes(res.data.value)
        )
        console.log("sending Likes");
        console.log(likesent + 1);
        setLikeSent(0);
    }
    const [likesent, setLikeSent] = useState(0);
    const [counting, setcounting] = useState(false);
    const [totallikes, settotallikes] = useState(15560);

    //const [heartscount, setheartscount] = useState(0)
    const [isLiked, setisLiked] = useState(false);
    const [showlikeanim, setshowlikeanim] = useState(false);
    const handleLike = () => {
        //console.log("Clicked");
        if (!isLiked) {
            setshowlikeanim(true);
            setisLiked(true)
            setLikeSent(likesent + 1);
            sendLikes();
            settotallikes(totallikes + 1);
        }

        else {
            setisLiked(false);
        }
    }
    useEffect(() => {
        if (showlikeanim) {
            setTimeout(() => {
                //console.log("2 sec")
                setshowlikeanim(false)
            }, 1600);
        }



    }, [showlikeanim]);
    // useEffect(() => {
    //     console.log(likesent);

    // }, [likesent]);
    return (
        <div className='flex justify-center  w-full'>
            <div className='w-full max-w-[470px] h-full max-h-[680px]  border-x-[1px] border-y-[1px] border-[#9e9e9e] rounded-md '>
                <div className='w-full flex justify-between px-4 my-auto pl-4 h-[47px]'>
                    <div className='flex my-auto'>
                        <BsPersonCircle size={30} />
                        <div className='ml-1 my-auto text-center'>
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
                <div className='relative content w-full' {...bind}>
                    {showlikeanim ?
                        (
                            <div className={isLiked ? 'z-20 absolute w-full h-full heart-active heart scale-50' : 'z-20 absolute w-[470px] h-[470px] heart scale-50'}>
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
                        {isLiked ?
                            (
                                <>
                                    {showlikeanim ?
                                        (
                                            <div className=' w-[50px]' onClick={handleLike}>
                                                <div className={isLiked ? 'heart-active h-full w-full heart' : 'heart h-full w-full scale-150'}></div>
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


                        {/* <div className={isLiked ? 'heart-active content' : 'content'} onClick={handleLike}>
                            <span className={isLiked ? 'heart-active heart' : 'heart'}></span>
                            <span className={isLiked ? 'heart-active text' : 'text'}>Like</span>
                            <span className={isLiked ? 'heart-active numb' : 'numb'}></span>



                        </div> */}


                    </div>
                    {/* <div className='relative w-[40px]'>
                        {likesent}
                    </div> */}
                    <div>
                        <BsTag size={35} />
                    </div>


                </div>
                <div className='w-full flex my-auto pl-4 pt-2 font-bold text-sm '>
                    <div>
                        {totallikes}
                    </div>
                    <div className='ml-2'>
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
                <div className='w-full text-xs font-extralight flex my-auto pl-4  pt-2'>
                    MAY 5
                </div>

            </div>

        </div>
    );
}

export default Instagrampost;
