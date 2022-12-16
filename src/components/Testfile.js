import React, { useEffect, useState } from 'react';
import '../mycss/likeanimation.css'
import img1 from '../mycss/img.png'
const Testfile = () => {
    const [active, setActive] = useState(false);
    useEffect(() => {
        // const content = document.querySelector('.content');
        // const text = document.querySelector('.text');
        // const numb = document.querySelector('.numb');
        // const heart = document.querySelector('.heart');
        console.log("Horw")
    }, []);
    const handleLike = () => {
        console.log("Clicked");
        if (active) {
            setActive(false);
        }
        else {
            setActive(true);
        }
    }
    return (
        <>
            <div className="heart-btn">
                <div className={active ? 'heart-active content' : 'content'} onClick={handleLike}>
                    <span className={active ? 'heart-active heart' : 'heart'}></span>
                    <span className={active ? 'heart-active text' : 'text'}>Like</span>
                    <span className={active ? 'heart-active numb' : 'numb'}></span>
                </div>


            </div>
        </>
    );
}

export default Testfile;
