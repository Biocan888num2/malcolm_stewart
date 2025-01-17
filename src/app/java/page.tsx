"use client"

import { useState } from 'react';
import ImageSwiper from '../../components/ImageSwiper';
import ProjectDropdown from '../../components/ProjectDropdown'; // Import the new dropdown component  

const images1 = [ 
  '/images/java/restaurant_delivery_management_system/fun_free_1.png', 
  '/images/java/restaurant_delivery_management_system/fun_free_2.png', 
  '/images/java/restaurant_delivery_management_system/fun_free_3.png',
  '/images/java/restaurant_delivery_management_system/fun_free_4.png',
  '/images/java/restaurant_delivery_management_system/fun_free_5.png',
  '/images/java/restaurant_delivery_management_system/fun_free_6.png', 
  '/images/java/restaurant_delivery_management_system/fun_free_7.png', 
  '/images/java/restaurant_delivery_management_system/fun_free_8.png',
  '/images/java/restaurant_delivery_management_system/fun_free_9.png',
  '/images/java/restaurant_delivery_management_system/fun_free_10.png',
  '/images/java/restaurant_delivery_management_system/fun_free_11.png', 
  '/images/java/restaurant_delivery_management_system/fun_free_12.png', 
  '/images/java/restaurant_delivery_management_system/fun_free_13.png',
  '/images/java/restaurant_delivery_management_system/fun_free_14.png',
  '/images/java/restaurant_delivery_management_system/fun_free_15.png',
  '/images/java/restaurant_delivery_management_system/fun_free_16.png', 
  '/images/java/restaurant_delivery_management_system/fun_free_17.png', 
  '/images/java/restaurant_delivery_management_system/fun_free_18.png',
  '/images/java/restaurant_delivery_management_system/fun_free_19.png',
  '/images/java/restaurant_delivery_management_system/fun_free_20.png',
  '/images/java/restaurant_delivery_management_system/fun_free_21.png', 
  '/images/java/restaurant_delivery_management_system/fun_free_22.png', 
  '/images/java/restaurant_delivery_management_system/fun_free_23.png',
  '/images/java/restaurant_delivery_management_system/fun_free_24.png',
  '/images/java/restaurant_delivery_management_system/fun_free_25.png',
  '/images/java/restaurant_delivery_management_system/fun_free_26.png', 
  '/images/java/restaurant_delivery_management_system/fun_free_27.png', 
  '/images/java/restaurant_delivery_management_system/fun_free_28.png',
  '/images/java/restaurant_delivery_management_system/fun_free_29.png',
  '/images/java/restaurant_delivery_management_system/fun_free_30.png',
  '/images/java/restaurant_delivery_management_system/fun_free_31.png', 
  '/images/java/restaurant_delivery_management_system/fun_free_32.png', 
];

const projects = [
  { label: 'JSON + .txt', index: 1, url: 'https://github.com/Biocan888num2/fun_free_foods' },
];

const Java = () => {

  const [activeSwiper, setActiveSwiper] = useState<number>(1);

  /**
   * @param {number} index
   */
  const handleProjectSelect = (index: number) => {
    setActiveSwiper(index);
  };

  return (
    <div className="p-4">
      <h1 className="font-sun-semi-bold">Java stuff</h1>

      <div className="button-div"> 
        <ProjectDropdown 
          projects={projects} 
          onProjectSelect={handleProjectSelect} 
          activeSwiper={activeSwiper} 
          fontClass="font-sun-semi-bold" 
        /> 
        <a 
          href={projects[activeSwiper - 1]?.url} 
          className="button-git font-sun-semi-bold" 
          target="_blank" 
          rel="noopener noreferrer"  
        > View code 
        </a> 
      </div>

      {activeSwiper === 1 && ( 
        <> 
          <h3 className='font-sun-semi-bold'>Restaurant & Delivery Management System</h3> 
          <ImageSwiper images={images1} /> 
        </> 
      )} 

      </div>
  );
};
  
  export default Java;
  