"use client";

import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'; 
import 'swiper/css'; 
import 'swiper/css/navigation'; 
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import '../styles/ImageSwiper.css'; // Import the CSS file 

const ImageSwiper = ({ images }) => {

  const [isZoomed, setIsZoomed] = useState(false); 
  
  useEffect(() => { 
    const handleDoubleClick = (e) => { 
      e.preventDefault(); 
      
      if (!isZoomed) { 
        document.body.style.transform = 'scale(1.5)'; // Adjust zoom scale as necessary 
        document.body.style.transformOrigin = 'center center'; 
        
        // document.body.style.overflow = 'hidden';
        // Prevent scrolling while zoomed 
        
      } else { 
        document.body.style.transform = 'scale(1)'; 
        
        // document.body.style.overflow = 'auto'; 
        // Restore scrolling 
      }  
      setIsZoomed(!isZoomed); 
    }; 
    
    document.addEventListener('dblclick', handleDoubleClick); 
    
    return () => { 
      document.removeEventListener('dblclick', handleDoubleClick); 
    
    }; 
  }, [isZoomed]);

  const handleTouchEnd = (event) => { 
    if (event.detail === 2) { 
      handleDoubleClick(event); 
    } 
  };

  const handleImageClick = (src) => { 
    window.open(src, '_blank'); 
  };

  return (  
    <div onTouchEnd={handleTouchEnd} ref={handleTouchEnd}>
      <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          className="swiper" // Apply the swiper class
          // touchEventsTarget="wrapper" // Ensure touch events are handled
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
    </div>  
  );
};

export default ImageSwiper;
