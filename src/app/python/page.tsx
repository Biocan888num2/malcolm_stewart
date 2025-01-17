"use client";

import { useState } from 'react';
import ImageSwiper from '../../components/ImageSwiper';
import ProjectDropdown from '../../components/ProjectDropdown'; // Import the new dropdown component

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

const projects = [
  { label: 'Django', index: 1, url: 'https://github.com/Biocan888num2/real_estate_management' },
  { label: 'Selenium', index: 2, url: 'https://github.com/Biocan888num2/automated_rental_checker' },
  { label: 'APIs', index: 3, url: 'https://github.com/Biocan888num2/automated_flight_search' },
  { label: 'Pandas + Tkinter', index: 4, url: 'https://github.com/Biocan888num2/hebrew_flashcards' },
];

const Python = () => {
  const [activeSwiper, setActiveSwiper] = useState<number>(1);

  /**
   * @param {number} index
   */
  const handleProjectSelect = (index: number) => {
    setActiveSwiper(index);
  };

  return (
    <div className="p-4">
      <h1 className="font-flux-bold">Python stuff</h1>

      <div className="button-div"> 
        <ProjectDropdown 
          projects={projects} 
          onProjectSelect={handleProjectSelect} 
          activeSwiper={activeSwiper} 
          fontClass="font-flux-bold" 
        /> 
        <a 
          href={projects[activeSwiper - 1]?.url} 
          className="button-git font-flux-bold" 
          target="_blank" 
          rel="noopener noreferrer"  
        > View code 
        </a> 
      </div>

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
