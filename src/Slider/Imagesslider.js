import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { imagesData } from '../data/Imagesdata'
const Imagesslider = () => {
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
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    1024: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    1376: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    }
                }}>
                {imagesData.map((slide, index) => {
                    const { id, imageUrl } = slide;
                    //rounded-lg p-4 w-[100px] lg:p-6 min-h-[280px] bg-gradient-to-r from-[#434242] via-[#D09CFA] to-[#D09CFA] '
                    return (
                        <SwiperSlide
                            className='rounded-lg w-full min-h-[280px] bg-white text-black flex justify-center'
                            key={index}
                        >
                            <img src={imageUrl} alt="" className='h-[470px]' />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </>
    );
}

export default Imagesslider;
