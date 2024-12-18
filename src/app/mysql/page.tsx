"use client"

import { useState } from 'react';
import ImageSwiper from '../../components/ImageSwiper'; 

const images1 = [ 
  '/images/mysql/cascading_db_creation/cascading_1.png', 
  '/images/mysql/cascading_db_creation/cascading_2.png', 
  '/images/mysql/cascading_db_creation/cascading_3.png',
  '/images/mysql/cascading_db_creation/cascading_5.png',
  '/images/mysql/cascading_db_creation/cascading_6.png', 
  '/images/mysql/cascading_db_creation/cascading_7.png', 
  '/images/mysql/cascading_db_creation/cascading_8.png',
  '/images/mysql/cascading_db_creation/cascading_9.png',
  '/images/mysql/cascading_db_creation/cascading_10.png',
  '/images/mysql/cascading_db_creation/cascading_11.png', 
  '/images/mysql/cascading_db_creation/cascading_12.png', 
  '/images/mysql/cascading_db_creation/cascading_13.png',
  '/images/mysql/cascading_db_creation/cascading_14.png',
  '/images/mysql/cascading_db_creation/cascading_15.png',
  '/images/mysql/cascading_db_creation/cascading_16.png', 
  '/images/mysql/cascading_db_creation/cascading_17.png',
  '/images/mysql/cascading_db_creation/cascading_18.png', 
  '/images/mysql/cascading_db_creation/cascading_19.png', 
  '/images/mysql/cascading_db_creation/cascading_20.png',
  '/images/mysql/cascading_db_creation/cascading_21.png',
  '/images/mysql/cascading_db_creation/cascading_22.png',
  '/images/mysql/cascading_db_creation/cascading_23.png', 
  '/images/mysql/cascading_db_creation/cascading_24.png', 
  '/images/mysql/cascading_db_creation/cascading_25.png',
  '/images/mysql/cascading_db_creation/cascading_26.png',
  '/images/mysql/cascading_db_creation/cascading_27.png',
  '/images/mysql/cascading_db_creation/cascading_28.png', 
  '/images/mysql/cascading_db_creation/cascading_29.png', 
  '/images/mysql/cascading_db_creation/cascading_30.png',
  '/images/mysql/cascading_db_creation/cascading_31.png',
  '/images/mysql/cascading_db_creation/cascading_32.png', 
];

const images2 = [ 
  '/images/mysql/database_caballus/db_caballus_1.png', 
  '/images/mysql/database_caballus/db_caballus_2.png', 
  '/images/mysql/database_caballus/db_caballus_3.png',
  '/images/mysql/database_caballus/db_caballus_4.png',
  '/images/mysql/database_caballus/db_caballus_5.png',
  '/images/mysql/database_caballus/db_caballus_6.png', 
  '/images/mysql/database_caballus/db_caballus_7.png', 
  '/images/mysql/database_caballus/db_caballus_8.png',
  '/images/mysql/database_caballus/db_caballus_9.png',
  '/images/mysql/database_caballus/db_caballus_10.png',
];

const images3 = [ 
  '/images/mysql/database_blockbusted/db_blockbusted_1.png', 
  '/images/mysql/database_blockbusted/db_blockbusted_2.png', 
  '/images/mysql/database_blockbusted/db_blockbusted_3.png',
  '/images/mysql/database_blockbusted/db_blockbusted_4.png',
  '/images/mysql/database_blockbusted/db_blockbusted_5.png',
  '/images/mysql/database_blockbusted/db_blockbusted_6.png', 
  '/images/mysql/database_blockbusted/db_blockbusted_7.png', 
  '/images/mysql/database_blockbusted/db_blockbusted_8.png',
];

const MySQL = () => {

  const [activeSwiper, setActiveSwiper] = useState(1); 
  
  const handleButtonClick = (index: number) => { 
    setActiveSwiper(index); 
  };

    return (
      <div className="p-4">
        <h1 className="font-shary-med">MySQL stuff</h1>
        <br></br>

        <button 
          className={`button-proj-sm ${activeSwiper === 1 ? 'active' : ''} font-shary-med`} 
          onClick={() => handleButtonClick(1)}
        >
          Cascading
        </button> 
      
        <button 
          className={`button-proj-sm ${activeSwiper === 2 ? 'active' : ''} font-shary-med`} 
          onClick={() => handleButtonClick(2)}
        >
          Website DB
        </button>

        <button 
          className={`button-proj-sm ${activeSwiper === 3 ? 'active' : ''} font-shary-med`} 
          onClick={() => handleButtonClick(3)}
        >
          CRM DB
        </button>

        {activeSwiper === 1 && ( 
          <> 
            <h3 className='font-shary-med'>Student Registration Database</h3> 
            <ImageSwiper images={images1} /> 
          </> 
        )} 
      
        {activeSwiper === 2 && ( 
          <> 
            <h3 className='font-shary-med'>Caballus Website</h3> 
            <ImageSwiper images={images2} /> 
          </> 
        )} 
      
        {activeSwiper === 3 && ( 
          <> 
            <h3 className='font-shary-med'>Blockbusted CRM</h3> 
            <ImageSwiper images={images3} /> 
          </> 
        )} 

      </div>
    );
  };
  
  export default MySQL;
  