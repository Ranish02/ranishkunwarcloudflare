import React, { useState } from 'react';
import LanguagesSlider from './Slider/LanguagesSlider';
import { HiViewList } from 'react-icons/hi';
import { MdViewWeek } from 'react-icons/md';
import { BiGridHorizontal } from 'react-icons/bi';
import LanguageGrid from './GridView/LanguageGrid';

const Languages = () => {
    // 1363DF
    //B A0E4CB
    // <button className={view == 'slider' ? 'px-2  py-2 mx-1 bg-[#87b7ff]' : 'px-2 mx-1 pt-2 pb-1 bg-[#0a9dff]'} onClick={handleToggle}>
    //                             <MdViewWeek size={20} />
    const [view, setview] = useState('slider');
    const handleToggle = () => {
        console.log(view);
        if (view == 'slider') {
            setview('list');
        }
        else {
            setview('slider');
        }
    }
    return (
        <div className='flex justify-center  items-center snap-start'>
            <div className='w-screen h-screen  bg-[#1363DF] text-white pt-[50px] pl-4'>
                <div className='w-screen h-screen text-white pt-[50px] px-4'>
                    <div className='grid grid-cols-1 md:grid-cols-2'>
                        <div className='flex justify-center text-center px-10 items-center' >
                            <div>
                                <div className=' text-4xl md:text-8xl headings font-semibold p-4'>
                                    LANGUAGES
                                </div>
                                <div className='p-4 text-sm md:text-base'>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus quisquam, cumque sapiente enim iure nisi rerum. Id libero mollitia dolorem eos laborum. Numquam, veniam itaque ipsam eligendi eos dolores dolore.
                                    <br />
                                </div>
                            </div>

                        </div>
                        <div className='flex justify-center items-center'>
                            <div>
                                <img src="https://cdn.discordapp.com/attachments/979623779477123122/1052897107117350913/IMG20220414160748.jpg" alt="" className='rounded-full overflow-hidden cropped' />
                            </div>

                        </div>

                    </div>
                    <div className='w-full flex justify-end mt-4 pr-8 mb-[-2px] '>
                        <div className='border-[#A0E4CB] border-2 pt-1'>
                            {/* <button className='px-2 py-2 mx-1 bg-[#e5c5ff]'><HiViewList size={20} /></button> */}
                            <button className={view == 'slider' ? 'px-2 py-2 mx-1 bg-[#87b7ff]' : 'px-2 pt-2 pb-1 mx-1 bg-[#0a9dff]'} onClick={handleToggle}>
                                <MdViewWeek size={20} />
                            </button>
                            <button className={view == 'slider' ? 'px-2 pt-2 pb-1 mx-1 bg-[#0a9dff]' : 'px-2 py-2 mx-1 bg-[#87b7ff]'} onClick={handleToggle}>
                                <HiViewList size={20} />
                            </button>


                            {/* <button className='px-2 py-2 mx-1 bg-[#D09CFA]' onClick={handleToggle}><MdViewWeek size={20} /></button> */}
                        </div>


                    </div>
                    <div className=' p-4 text-black border-[#87b7ff] border-2 mr-8 rounded-l-md rounded-b-md'>
                        {view == 'slider' ? <>
                            <LanguagesSlider />
                        </> :
                            <>
                                <LanguageGrid />
                            </>}

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Languages;
