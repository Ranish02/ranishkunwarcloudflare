import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation, Thumbs } from 'swiper';
//import required modules
import { Pagination } from 'swiper';
//import data
import { languagesData } from '../data/languagesdata'

const LanguagesSlider = () => {
    return (
        <>
            <Swiper
                // modules={[Navigation, Thumbs]}
                grabCursor={true}
                navigation={true}
                // pagination={{ clickable: true }}
                // scrollbar={{ draggable: true }}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 18,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    1376: {
                        slidesPerView: 5,
                        spaceBetween: 30,
                        // pagination: {
                        //     clickable: true,
                        // }
                    }
                }}>
                {languagesData.map((slide, index) => {
                    const { description, image, name, email } = slide;
                    //rounded-lg p-4 w-[100px] lg:p-6 min-h-[280px] bg-gradient-to-r from-[#434242] via-[#D09CFA] to-[#D09CFA] '
                    return (
                        <SwiperSlide
                            className='rounded-lg p-4 w-[100px] lg:p-6 min-h-[280px] bg-[#9ce2fd] text-black'
                            key={index}
                        >
                            <div className='flex justify-center'>
                                <div>
                                    <div>
                                        <img className='mb-3 md:mb-0  h-[100px]' src={image} alt='' />
                                    </div>
                                    <div className='text-center font-semibold mt-4'>
                                        {name}
                                    </div>
                                </div>
                            </div>
                            <p className='mb-8 min-h-[100px] text-[15px] text-center p-4'>"{description}"</p>

                            <div className='flex flex-col gap-x-4 md:flex-row md:items-center'>
                                <div className='w-14'>
                                </div>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>

        </>
    );
}

export default LanguagesSlider;
