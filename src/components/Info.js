import React, { useState } from 'react';
import SkillsSlider from './Slider/SkillsSlider';
import { HiViewList } from 'react-icons/hi';
import { MdViewWeek } from 'react-icons/md';
import SkillsGrid from './GridView/SkillsGrid';



const Info = () => {
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
        <div className='flex justify-center languages items-center snap-start'>
            <div className='w-full h-screen  bg-[#A555EC] text-white pt-[50px] md:pl-0'>
                <div className='w-screen h-screen text-white md:pt-[50px] px-4'>
                    <div className='grid grid-cols-1 md:grid-cols-2'>
                        <div className='flex justify-center text-center px-2 items-center' >
                            <div>
                                <div className='text-4xl md:text-6xl xl:text-8xl headings font-semibold'>
                                    FRAMEWORKS
                                </div>
                                <div className='p-4 text-sm md:text-base'>
                                    Here are a few notable framework that I been using to create apps.
                                    <br />
                                </div>
                            </div>

                        </div>
                        <div className='flex justify-center items-center'>
                            <div>
                                <img src="https://cdn.discordapp.com/attachments/979623779477123122/1053339351079211019/IMG-20220411-WA0032.jpg" alt="" className='rounded-full overflow-hidden cropped' />
                            </div>

                        </div>

                    </div>
                    <div className='md:pr-8'>
                        <div className='scale-75 md:scale-100 mt-[-40px] sm:mt-4 border-[#A0E4CB] border-2'>
                            <div>
                                <div className=' pt-1 flex justify-end '>
                                    {/* <button className='px-2 py-2 mx-1 bg-[#e5c5ff]'><HiViewList size={20} /></button> */}
                                    <button className={view === 'slider' ? 'px-2 py-2 mx-1 bg-[#e5c5ff]' : 'px-2 pt-2 pb-1 mx-1 bg-[#D09CFA]'} onClick={handleToggle}>
                                        <MdViewWeek size={20} />
                                    </button>
                                    <button className={view === 'slider' ? 'px-2 pt-2 pb-1 mx-1 bg-[#D09CFA]' : 'px-2 py-2 mx-1 bg-[#e5c5ff]'} onClick={handleToggle}>
                                        <HiViewList size={20} />
                                    </button>


                                    {/* <button className='px-2 py-2 mx-1 bg-[#D09CFA]' onClick={handleToggle}><MdViewWeek size={20} /></button> */}
                                </div>
                                <div className=' p-2 md:p-4 text-black border-[#87b7ff] border-t-2  rounded-l-md rounded-b-md'>
                                    {view === 'slider' ? <>
                                        <SkillsSlider />
                                    </> :
                                        <>
                                            <SkillsGrid />
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

export default Info;
