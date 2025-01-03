"use client"

import { useState } from 'react';
import ImageSwiper from '../../components/ImageSwiper';

const images1 = [ 
  '/images/javascript/website_and_management_system/caballus_1.png', 
  '/images/javascript/website_and_management_system/caballus_2.png', 
  '/images/javascript/website_and_management_system/caballus_3.png',
  '/images/javascript/website_and_management_system/caballus_4.png',
  '/images/javascript/website_and_management_system/caballus_5.png',
  '/images/javascript/website_and_management_system/caballus_6.png',
  '/images/javascript/website_and_management_system/caballus_7.png',
  '/images/javascript/website_and_management_system/caballus_8.png',
  '/images/javascript/website_and_management_system/caballus_9.png',
  '/images/javascript/website_and_management_system/caballus_10.png',
  '/images/javascript/website_and_management_system/caballus_11.png',
  '/images/javascript/website_and_management_system/caballus_12.png',
  '/images/javascript/website_and_management_system/caballus_13.png',
  '/images/javascript/website_and_management_system/caballus_14.png',
  '/images/javascript/website_and_management_system/caballus_15.png',
  '/images/javascript/website_and_management_system/caballus_16.png',
  '/images/javascript/website_and_management_system/caballus_17.png',
  '/images/javascript/website_and_management_system/caballus_18.png',
  '/images/javascript/website_and_management_system/caballus_19.png',
  '/images/javascript/website_and_management_system/caballus_20.png',
  '/images/javascript/website_and_management_system/caballus_21.png',
  '/images/javascript/website_and_management_system/caballus_22.png',
  '/images/javascript/website_and_management_system/caballus_23.png',
  '/images/javascript/website_and_management_system/caballus_24.png',
  '/images/javascript/website_and_management_system/caballus_25.png',
  '/images/javascript/website_and_management_system/caballus_26.png', 
];

const Javascript = () => {

  const [activeSwiper, setActiveSwiper] = useState(1); 
  
  const handleButtonClick = (index: number) => { 
    setActiveSwiper(index); 
  };

    return (
      <div className="p-4">
        <h1 className="font-neutraface-bold">Javascript stuff</h1>
        <br></br>

        <button 
          className={`button-proj ${activeSwiper === 1 ? 'active' : ''} font-neutraface-bold`} 
          onClick={() => handleButtonClick(1)}
        >
          HTML + CSS + JQuery + Bootstrap + MySQL
        </button> 

        {activeSwiper === 1 && ( 
          <> 
            <h3 className='font-neutraface-bold'>Website & Website Management System</h3> 
            <ImageSwiper images={images1} /> 
          </> 
        )} 

      </div>
    );
  };
  
  export default Javascript;
  