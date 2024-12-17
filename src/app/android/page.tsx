"use client"

import { useState } from 'react';
import ImageSwiper from '../../components/ImageSwiper'; 

const images1 = [ 
  '/images/android/gym_entry_manager/android_caballus_1.jpg', 
  '/images/android/gym_entry_manager/android_caballus_2.jpg', 
  '/images/android/gym_entry_manager/android_caballus_3.jpg',
  '/images/android/gym_entry_manager/android_caballus_4.jpg',
  '/images/android/gym_entry_manager/android_caballus_5.jpg',
  '/images/android/gym_entry_manager/android_caballus_6.jpg',
  '/images/android/gym_entry_manager/android_caballus_7.jpg', 
  '/images/android/gym_entry_manager/android_caballus_8.jpg',
  '/images/android/gym_entry_manager/android_caballus_9.jpg',
  '/images/android/gym_entry_manager/android_caballus_10.jpg',
  '/images/android/gym_entry_manager/android_caballus_11.jpg',
];

const Android = () => {

  const [activeSwiper, setActiveSwiper] = useState(1); 
  
  const handleButtonClick = (index: number) => { 
    setActiveSwiper(index); 
  };

    return (
      <div className="p-4">
        <h1 className="font-droid-sans-pro">Android stuff</h1>
        <br></br>

        <button 
          className={`button-proj ${activeSwiper === 1 ? 'active' : ''} font-droid-sans-pro`} 
          onClick={() => handleButtonClick(1)}
        >
          Android SDK (Java)
        </button> 

        {activeSwiper === 1 && ( 
          <> 
            <h3 className='font-droid-sans-pro'>Gym Entry & Member Management</h3> 
            <ImageSwiper images={images1} /> 
          </> 
        )} 

      </div>
    );
  };
  
  export default Android;
  