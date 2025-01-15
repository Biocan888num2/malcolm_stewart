"use client";

import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'; 
import 'swiper/css'; 
import 'swiper/css/navigation'; 
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import '../styles/ImageSwiper.css'; // Import the CSS file 

const ImageSwiper = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleImageClick = (src) => { 
    window.open(src, '_blank'); 
  };

  useEffect(() => { 
    const swiper = document.querySelector('.swiper').swiper; 
    const updatePagination = () => { 
      const paginationEl = document.querySelector('.custom-swiper-pagination'); 
      paginationEl.innerHTML = renderCustomPagination(swiper.activeIndex); 
    }; 
    
    swiper.on('slideChange', () => { 
      setActiveIndex(swiper.activeIndex); 
      updatePagination(); 
    }); 
    
    updatePagination(); 
  }, [images]);

  const renderCustomPagination = (index) => { 
    const totalImages = images.length; 
    if (totalImages === 1) { 
      return `<span class="swiper-pagination-bullet swiper-pagination-bullet-active"></span>`; 
    } 
    
    if (totalImages === 2) { 
      return ` 
        <span class="swiper-pagination-bullet ${index === 0 ? 'swiper-pagination-bullet-active' : ''}"></span> 
        <span class="swiper-pagination-bullet ${index === 1 ? 'swiper-pagination-bullet-active' : ''}"></span> 
      `; 
    } 
    
    return ` 
      <span class="swiper-pagination-bullet ${index === 0 ? 'swiper-pagination-bullet-active' : ''}"></span> 
      <span class="swiper-pagination-bullet ${index > 0 && index < totalImages - 1 ? 'swiper-pagination-bullet-active' : ''}"></span> 
      <span class="swiper-pagination-bullet ${index === totalImages - 1 ? 'swiper-pagination-bullet-active' : ''}"></span> 
    `; 
  };

  return (
    <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ 
          clickable: true, 
          el: '.custom-swiper-pagination', 
          renderBullet: () => '', 
          // Ensure custom pagination is handled 
        }}
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
      <div className="custom-swiper-pagination"></div>
    </Swiper>
  );
};

export default ImageSwiper;

