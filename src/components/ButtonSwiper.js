"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import './ButtonSwiper.css'; // Ensure you have this CSS file for styling

const ButtonSwiper = ({ buttons, activeSwiper, handleButtonClick }) => {
  return (
    <div className="button-swiper-container">
        <Swiper
            modules={[Pagination]}
            spaceBetween={2}
            slidesPerView={'auto'} // Ensure it doesn't take up the entire width
            pagination={{ clickable: true }}
            className="button-swiper"
        >

        {buttons.map((button, index) => (
            <SwiperSlide key={index} className="btn-swiper-slide">
            <button
                className={`button-proj ${activeSwiper === button.index ? 'active' : ''} font-flux-bold`}
                onClick={() => handleButtonClick(button.index)}
            >
                {button.label}
            </button>
            </SwiperSlide>
        ))}
        </Swiper>
    </div>
  );
};

export default ButtonSwiper;
