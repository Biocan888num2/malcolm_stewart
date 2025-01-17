"use client"

import { useState } from 'react';
import ImageSwiper from '../../components/ImageSwiper';
import ProjectDropdown from '../../components/ProjectDropdown'; // Import the new dropdown component 

const images1 = [ 
  '/images/deluge_zoho/cisco_meraki_calculator/cisco_1.png', 
  '/images/deluge_zoho/cisco_meraki_calculator/cisco_2.png', 
  '/images/deluge_zoho/cisco_meraki_calculator/cisco_3.png',
  '/images/deluge_zoho/cisco_meraki_calculator/cisco_4.png',
  '/images/deluge_zoho/cisco_meraki_calculator/cisco_5.png',
];

const projects = [
  { label: 'Zoho + JS SDK', index: 1, url: 'https://github.com/Biocan888num2/smart_sensor_estimate' },
];

const DelugeZoho = () => {

  const [activeSwiper, setActiveSwiper] = useState<number>(1);

  /**
   * @param {number} index
   */
  const handleProjectSelect = (index: number) => {
    setActiveSwiper(index);
  };

    return (
      <div className="p-4">
        <h1 className="font-trade-gothic-bold">Deluge (ZOHO) stuff</h1>

        <div className="button-div"> 
          <ProjectDropdown 
            projects={projects} 
            onProjectSelect={handleProjectSelect} 
            activeSwiper={activeSwiper} 
            fontClass="font-trade-gothic-bold" 
          /> 
          <a 
            href={projects[activeSwiper - 1]?.url} 
            className="button-git font-trade-gothic-bold" 
            target="_blank" 
            rel="noopener noreferrer"  
          > View code 
          </a> 
        </div>

        {activeSwiper === 1 && ( 
          <> 
            <h3 className='font-trade-gothic-bold'>Smart Sensors: Estimate Calculator</h3> 
            <ImageSwiper images={images1} /> 
          </> 
        )} 

      </div>
    );
  };
  
  export default DelugeZoho;
  