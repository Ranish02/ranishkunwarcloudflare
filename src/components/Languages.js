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
        if (view === 'slider') {
            setview('list');
        }
        else {
            setview('slider');
        }
    }
    return (
        <div className='flex justify-center languages items-center snap-start'>
            <div className='w-full h-screen  bg-[#1363DF] text-white pt-[50px] md:pl-4'>
                <div className='w-screen h-screen text-white md:pt-[50px] px-4'>
                    <div className='grid grid-cols-1 md:grid-cols-2'>
                        <div className='flex justify-center text-center items-center' >
                            <div>
                                <div className='text-4xl md:text-6xl xl:text-8xl headings font-semibold pt-8'>
                                    LANGUAGES
                                </div>
                                <div className='p-4 text-sm md:text-base'>
                                    Also, here are few languages I use.
                                    Lorem, ipsum dolor sit amet consectetur adipisicing eli
                                    <br />
                                </div>
                            </div>

                        </div>
                        <div className='flex justify-center items-center'>
                            <div>
                                <img src="https://cdn.discordapp.com/attachments/979623779477123122/1052896368907276328/Screenshot_20220731-021934_Gallery.jpg" alt="" className='rounded-full overflow-hidden cropped' />
                            </div>

                        </div>

                    </div>
                    <div className='md:pr-8'>
                        <div className='scale-75 md:scale-100 mt-[-40px] sm:mt-4 border-[#A0E4CB] border-2'>
                            <div>
                                <div className=' pt-1 flex justify-end '>
                                    {/* <button className='px-2 py-2 mx-1 bg-[#e5c5ff]'><HiViewList size={20} /></button> */}
                                    <button className={view === 'slider' ? 'px-2 py-2 mx-1 bg-[#87b7ff]' : 'px-2 pt-2 pb-1 mx-1 bg-[#0a9dff]'} onClick={handleToggle}>
                                        <MdViewWeek size={20} />
                                    </button>
                                    <button className={view === 'slider' ? 'px-2 pt-2 pb-1 mx-1 bg-[#0a9dff]' : 'px-2 py-2 mx-1 bg-[#87b7ff]'} onClick={handleToggle}>
                                        <HiViewList size={20} />
                                    </button>


                                    {/* <button className='px-2 py-2 mx-1 bg-[#D09CFA]' onClick={handleToggle}><MdViewWeek size={20} /></button> */}
                                </div>
                                <div className=' p-2 md:p-4 text-black border-[#87b7ff] border-t-2 sm:mr-8 rounded-l-md rounded-b-md'>
                                    {view === 'slider' ? <>
                                        <LanguagesSlider />
                                    </> :
                                        <>
                                            <LanguageGrid />
                                        </>}
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* section */}
                </div>
            </div>
        </div>
    );
}

export default Languages;
