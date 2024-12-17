"use client";

import { Swiper, SwiperSlide } from 'swiper/react'; 
import 'swiper/css'; 
import 'swiper/css/navigation'; 
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import '../styles/ImageSwiper.css'; // Import the CSS file 

const ImageSwiper = ({ images }) => {

  const handleImageClick = (src) => { 
    window.open(src, '_blank'); 
  };

  return (
    <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        className="swiper" // Apply the swiper class
    >
      {images.map((image, index) => (
        <SwiperSlide key={index} className="swiper-slide">
          <img 
            src={image} 
            alt={`Slide ${index}`} 
            onClick={() => handleImageClick(image)} 
            className="swiper-image"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageSwiper;
