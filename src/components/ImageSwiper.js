"use client";

import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'; 
import 'swiper/css'; 
import 'swiper/css/navigation'; 
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import '../styles/ImageSwiper.css'; // Import the CSS file 

const ImageSwiper = ({ images }) => {

  const [modalImage, setModalImage] = useState(null); 
  
  const handleImageClick = (src) => { 
    setModalImage(src); 
  }; 
  
  const closeModal = () => { 
    setModalImage(null); 
  };

  const handleModalClick = (e) => { 
    if (e.target === e.currentTarget) { 
      closeModal(); 
    } 
  };

  // const handleImageClick = (src) => { 
  //   window.open(src, '_blank'); 
  // };

  return (
    <>
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
      {modalImage && ( 
        <div className="modal visible" onClick={handleModalClick}> 
          <div className="modal-content"> 
            <img src={modalImage} alt="Full size view" /> 
            <button className="close-button" onClick={closeModal}>×</button> 
          </div> 
        </div>
      )}
    </>
  );
};

export default ImageSwiper;
