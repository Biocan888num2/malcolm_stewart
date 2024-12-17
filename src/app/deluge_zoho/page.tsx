"use client"

import { useState } from 'react';
import ImageSwiper from '../../components/ImageSwiper'; 

const images1 = [ 
  '/images/deluge_zoho/cisco_meraki_calculator/cisco_1.png', 
  '/images/deluge_zoho/cisco_meraki_calculator/cisco_2.png', 
  '/images/deluge_zoho/cisco_meraki_calculator/cisco_3.png',
  '/images/deluge_zoho/cisco_meraki_calculator/cisco_4.png',
  '/images/deluge_zoho/cisco_meraki_calculator/cisco_5.png',
];

const DelugeZoho = () => {

  const [activeSwiper, setActiveSwiper] = useState(1); 
  
  const handleButtonClick = (index: number) => { 
    setActiveSwiper(index); 
  };

    return (
      <div className="p-4">
        <h1 className="font-trade-gothic-bold">Deluge (ZOHO) stuff</h1>
        <br></br>

        <button 
          className={`button-proj ${activeSwiper === 1 ? 'active' : ''} font-trade-gothic-bold`} 
          onClick={() => handleButtonClick(1)}
        >
          Deluge + Zoho Forms + Javascript SDK
        </button> 

        {activeSwiper === 1 && ( 
          <> 
            <h3 className='font-trade-gothic-bold'>Cisco-Meraki Smart Sensors: Estimate Calculator</h3> 
            <ImageSwiper images={images1} /> 
          </> 
        )} 

      </div>
    );
  };
  
  export default DelugeZoho;
  