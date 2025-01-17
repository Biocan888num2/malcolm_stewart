"use client"

import { useState } from 'react';
import ImageSwiper from '../../components/ImageSwiper';
import ProjectDropdown from '../../components/ProjectDropdown'; // Import the new dropdown component 

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

const projects = [
  { label: 'SDK Java', index: 1, url: 'https://github.com/Biocan888num2/gym_member_entry' },
];

const Android = () => {

  const [activeSwiper, setActiveSwiper] = useState<number>(1);

  /**
   * @param {number} index
   */
  const handleProjectSelect = (index: number) => {
    setActiveSwiper(index);
  };
    return (
      <div className="p-4">
        <h1 className="font-droid-sans-pro">Android stuff</h1>

        <div className="button-div"> 
          <ProjectDropdown 
            projects={projects} 
            onProjectSelect={handleProjectSelect} 
            activeSwiper={activeSwiper} 
            fontClass="font-droid-sans-pro" 
          /> 
          <a 
            href={projects[activeSwiper - 1]?.url} 
            className="button-git font-droid-sans-pro" 
            target="_blank" 
            rel="noopener noreferrer"  
          > View code 
          </a> 
        </div>

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
  