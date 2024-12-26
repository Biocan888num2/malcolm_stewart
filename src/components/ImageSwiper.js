"use client";

import { useState, useRef, useEffect } from 'react'; // Import useEffect for cleanup
import { Swiper, SwiperSlide } from 'swiper/react'; 
import 'swiper/css'; 
import 'swiper/css/navigation'; 
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import '../styles/ImageSwiper.css'; // Import the CSS file 

const ImageSwiper = ({ images }) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const zoomRef = useRef(null);

  const handleDoubleClick = (e) => {
    e.stopPropagation();
    const imgElement = e.target;
    if (!isZoomed) {
      imgElement.style.transform = 'scale(2)'; // Adjust zoom scale as necessary
      imgElement.style.transformOrigin = 'center center'; // Center the zoom
    } else {
      imgElement.style.transform = 'scale(1)';
    }
    setIsZoomed(!isZoomed);
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
          <div
            className={`swiper-zoom-container ${isZoomed ? 'zoomed' : ''}`}
            onDoubleClick={handleDoubleClick}
            onTouchEnd={(event) => {
              if (event.detail === 2) {
                handleDoubleClick(event);
              }
            }}
          >
            <img 
              ref={zoomRef}
              src={image} 
              alt={`Slide ${index}`} 
              className="swiper-image"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageSwiper;
