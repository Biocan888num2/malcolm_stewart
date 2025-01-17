"use client"

import { useState } from 'react';
import ImageSwiper from '../../components/ImageSwiper';
// import ButtonSwiper from '../../components/ButtonSwiper'; 

const images1 = [ 
  '/images/python/mproof/mproof_1.png', 
  '/images/python/mproof/mproof_2.png', 
  '/images/python/mproof/mproof_3.png',
  '/images/python/mproof/mproof_4.png',
  '/images/python/mproof/mproof_5.png',
  '/images/python/mproof/mproof_6.png', 
  '/images/python/mproof/mproof_7.png', 
  '/images/python/mproof/mproof_8.png',
  '/images/python/mproof/mproof_9.png',
  '/images/python/mproof/mproof_10.png',
];

const images2 = [ 
  '/images/python/selenium_automated_rentals/rentals_1.png', 
  '/images/python/selenium_automated_rentals/rentals_2.png', 
  '/images/python/selenium_automated_rentals/rentals_3.png',
  '/images/python/selenium_automated_rentals/rentals_4.png',
  '/images/python/selenium_automated_rentals/rentals_5.png',
  '/images/python/selenium_automated_rentals/rentals_6.png', 
  '/images/python/selenium_automated_rentals/rentals_7.png', 
  '/images/python/selenium_automated_rentals/rentals_8.png',
  '/images/python/selenium_automated_rentals/rentals_9.png',
  '/images/python/selenium_automated_rentals/rentals_10.png',
  '/images/python/selenium_automated_rentals/rentals_11.png', 
  '/images/python/selenium_automated_rentals/rentals_12.png', 
];

const images3 = [ 
  '/images/python/flight_deals_finder/flight_search_1.png', 
  '/images/python/flight_deals_finder/flight_search_2.png', 
  '/images/python/flight_deals_finder/flight_search_3.png',
  '/images/python/flight_deals_finder/flight_search_4.png',
  '/images/python/flight_deals_finder/flight_search_5.png',
  '/images/python/flight_deals_finder/flight_search_6.png', 
  '/images/python/flight_deals_finder/flight_search_7.jpg', 
  '/images/python/flight_deals_finder/flight_search_8.png',
  '/images/python/flight_deals_finder/flight_search_9.png',
  '/images/python/flight_deals_finder/flight_search_10.png',
  '/images/python/flight_deals_finder/flight_search_11.png', 
  '/images/python/flight_deals_finder/flight_search_12.png', 
  '/images/python/flight_deals_finder/flight_search_13.png',
  '/images/python/flight_deals_finder/flight_search_14.png',
  '/images/python/flight_deals_finder/flight_search_15.png',
  '/images/python/flight_deals_finder/flight_search_16.png', 
  '/images/python/flight_deals_finder/flight_search_17.jpg', 
];

const images4 = [ 
  '/images/python/learn_hebrew_flashcards/flashcards_1.png', 
  '/images/python/learn_hebrew_flashcards/flashcards_2.png', 
  '/images/python/learn_hebrew_flashcards/flashcards_3.png',
  '/images/python/learn_hebrew_flashcards/flashcards_4.png',
  '/images/python/learn_hebrew_flashcards/flashcards_5.png',
  '/images/python/learn_hebrew_flashcards/flashcards_6.png', 
  '/images/python/learn_hebrew_flashcards/flashcards_7.png', 
  '/images/python/learn_hebrew_flashcards/flashcards_8.png',
  '/images/python/learn_hebrew_flashcards/flashcards_9.png',
  '/images/python/learn_hebrew_flashcards/flashcards_10.png',
];

const Python = () => {
  
  const [activeSwiper, setActiveSwiper] = useState(1); 
  
  const handleButtonClick = (index: number) => { 
    setActiveSwiper(index); 
  };

  // const btns = [ 
  //   { label: 'Django', index: 1 }, 
  //   { label: 'Selenium', index: 2 }, 
  //   { label: 'Multiple APIs', index: 3 }, 
  //   { label: 'Pandas + Tkinter', index: 4 }, 
  // ];

  return ( 
    <div className="p-4"> 
      <h1 className="font-flux-bold">Python stuff</h1>  
      <br></br>

      <button 
          className={`button-proj-sm ${activeSwiper === 1 ? 'active' : ''} font-flux-bold`} 
          onClick={() => handleButtonClick(1)}
        >
          Django
        </button> 
      
        <button 
          className={`button-proj-sm ${activeSwiper === 2 ? 'active' : ''} font-flux-bold`} 
          onClick={() => handleButtonClick(2)}
        >
          Selenium
        </button>

        <button 
          className={`button-proj-sm ${activeSwiper === 3 ? 'active' : ''} font-flux-bold`} 
          onClick={() => handleButtonClick(3)}
        >
          APIs
        </button>

        <button 
          className={`button-proj-sm ${activeSwiper === 4 ? 'active' : ''} font-flux-bold`} 
          onClick={() => handleButtonClick(4)}
        >
          Pandas + Tkinter
        </button>
      
      {activeSwiper === 1 && ( 
        <> 
          <h3 className='font-flux-bold'>MProof - Real Estate Maintenance Automation</h3> 
          <ImageSwiper images={images1} /> 
        </> 
      )} 
      
      {activeSwiper === 2 && ( 
        <> 
          <h3 className='font-flux-bold'>Automated Rental Tracking</h3> 
          <ImageSwiper images={images2} /> 
        </> 
      )} 
      
      {activeSwiper === 3 && ( 
        <> 
          <h3 className='font-flux-bold'>Automated Flight Deals Finder</h3> 
          <ImageSwiper images={images3} /> 
        </> 
      )} 
      
      {activeSwiper === 4 && ( 
        <> 
          <h3 className='font-flux-bold'>Learn Hebrew Flash Cards</h3> 
          <ImageSwiper images={images4} /> 
        </> 
      )} 
    </div> 
  );
};
  
  export default Python;
  