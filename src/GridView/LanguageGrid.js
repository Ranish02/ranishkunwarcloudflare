import React from 'react';
import { languagesData } from '../data/languagesdata'
const LanguageGrid = () => {
    return (
        <div className='rounded-lg p-4 lg:p-6 min-h-[280px] text-black'>
            <div className='grid grid-cols-2 md:grid-cols-4 w-full'>
                {languagesData.map((slide, index) => {
                    const { description, image, name, remarks } = slide;
                    return (
                        <>
                            <div className='bg-[#87b7ff] h-[60px] md:h-[100px]  p-2 rounded-lg m-2 flex items-center text-center'>
                                <div className='md:flex w-full items-center'>
                                    <div className=''>
                                        <img src={image} alt="" className='w-[30px] mx-auto md:mx-0 md:w-[70px]' />
                                    </div>
                                    <div className='flex w-full'>
                                        <div className='text-center font-medium my-auto text-sm sm:text-base md:text-xl w-full'>
                                            {name}
                                        </div>
                                        <div className='my-auto font-normal text-xs w-full mx-auto p-2 border border-[#9c9c9c] rounded-md hidden md:flex'>
                                            {/* <div className='w-full p-1'> {description}</div> */}
                                            <div> -"{remarks}"</div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )

                })}


            </div>
        </div>
    );
}

export default LanguageGrid;
