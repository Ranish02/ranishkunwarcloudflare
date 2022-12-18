import React, { useEffect, useState } from 'react';
import '../mycss/likeanimation.css'
import img1 from '../mycss/img.png'
import { useDoubleTap } from 'use-double-tap';
const Testfile = () => {
    const [active, setActive] = useState(false);
    const handleLike = () => {
        console.log("Clicked");
        if (active) {
            setActive(false);
        }
        else {
            setActive(true);
        }
    }
    // const handledoubletap = () => {
    //     console.log("ok");
    // }
    const bind = useDoubleTap((event) => {

        console.log('Double tapped');
    });

    return (
        <>
            <div className='h-screen w-screen bg-white flex'>
                <div className="heart-btn">
                    <div className={active ? 'heart-active content' : 'content'} onClick={handleLike}>
                        <span className={active ? 'heart-active heart' : 'heart'}></span>
                        <span className={active ? 'heart-active text' : 'text'}>Like</span>
                        <span className={active ? 'heart-active numb' : 'numb'}></span>
                    </div>


                </div>
                <div className='h-[100px] w-[100px] bg-purple-400' {...bind}>
                    <button >Helo</button>
                    Click me |
                </div>
                <div className='h-[100px] w-[100px] bg-green-400'>
                    Double Tap
                </div>
            </div>

        </>
    );
}

export default Testfile;
