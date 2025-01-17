"use client"

import { useState } from 'react';
import ImageSwiper from '../../components/ImageSwiper';
import ProjectDropdown from '../../components/ProjectDropdown'; // Import the new dropdown component 

const images1 = [ 
  '/images/vb_net/movie_rental_crm/movie_crm_0.png', 
  '/images/vb_net/movie_rental_crm/movie_crm_1.png', 
  '/images/vb_net/movie_rental_crm/movie_crm_2.png', 
  '/images/vb_net/movie_rental_crm/movie_crm_3.png',
  '/images/vb_net/movie_rental_crm/movie_crm_4.png',
  '/images/vb_net/movie_rental_crm/movie_crm_5.png',
  '/images/vb_net/movie_rental_crm/movie_crm_6.png', 
  '/images/vb_net/movie_rental_crm/movie_crm_8.png',
  '/images/vb_net/movie_rental_crm/movie_crm_9.png',
  '/images/vb_net/movie_rental_crm/movie_crm_10.png',
  '/images/vb_net/movie_rental_crm/movie_crm_11.png', 
  '/images/vb_net/movie_rental_crm/movie_crm_12.png', 
  '/images/vb_net/movie_rental_crm/movie_crm_13.png',
  '/images/vb_net/movie_rental_crm/movie_crm_14.png',
  '/images/vb_net/movie_rental_crm/movie_crm_15.png',
  '/images/vb_net/movie_rental_crm/movie_crm_16.png', 
  '/images/vb_net/movie_rental_crm/movie_crm_17.png',
  '/images/vb_net/movie_rental_crm/movie_crm_18.png', 
  '/images/vb_net/movie_rental_crm/movie_crm_19.png', 
  '/images/vb_net/movie_rental_crm/movie_crm_20.png',
  '/images/vb_net/movie_rental_crm/movie_crm_21.png',
  '/images/vb_net/movie_rental_crm/movie_crm_22.png',
  '/images/vb_net/movie_rental_crm/movie_crm_23.png', 
  '/images/vb_net/movie_rental_crm/movie_crm_24.png', 
  '/images/vb_net/movie_rental_crm/movie_crm_25.png',
  '/images/vb_net/movie_rental_crm/movie_crm_26.png',
  '/images/vb_net/movie_rental_crm/movie_crm_27.png',
  '/images/vb_net/movie_rental_crm/movie_crm_28.png', 
  '/images/vb_net/movie_rental_crm/movie_crm_29.png', 
  '/images/vb_net/movie_rental_crm/movie_crm_30.png',
  '/images/vb_net/movie_rental_crm/movie_crm_31.png',
  '/images/vb_net/movie_rental_crm/movie_crm_32.png',
  '/images/vb_net/movie_rental_crm/movie_crm_33.png', 
  '/images/vb_net/movie_rental_crm/movie_crm_34.png',
  '/images/vb_net/movie_rental_crm/movie_crm_35.png', 
  '/images/vb_net/movie_rental_crm/movie_crm_36.png', 
  '/images/vb_net/movie_rental_crm/movie_crm_37.png',
  '/images/vb_net/movie_rental_crm/movie_crm_38.png',
  '/images/vb_net/movie_rental_crm/movie_crm_39.png',
  '/images/vb_net/movie_rental_crm/movie_crm_40.png', 
  '/images/vb_net/movie_rental_crm/movie_crm_41.png',   
];

const images2 = [ 
  '/images/vb_net/words_and_hangman/hang_1.png', 
  '/images/vb_net/words_and_hangman/hang_2.png', 
  '/images/vb_net/words_and_hangman/hang_3.png',
  '/images/vb_net/words_and_hangman/hang_4.png',
  '/images/vb_net/words_and_hangman/hang_5.png',
  '/images/vb_net/words_and_hangman/hang_6.png', 
  '/images/vb_net/words_and_hangman/hang_8.png',
  '/images/vb_net/words_and_hangman/hang_9.png',
  '/images/vb_net/words_and_hangman/hang_10.png',
  '/images/vb_net/words_and_hangman/hang_11.png', 
  '/images/vb_net/words_and_hangman/hang_12.png', 
  '/images/vb_net/words_and_hangman/hang_13.png',
  '/images/vb_net/words_and_hangman/hang_14.png',
  '/images/vb_net/words_and_hangman/hang_15.png',
  '/images/vb_net/words_and_hangman/hang_16.png', 
  '/images/vb_net/words_and_hangman/hang_17.png',
  '/images/vb_net/words_and_hangman/hang_18.png', 
  '/images/vb_net/words_and_hangman/hang_19.png', 
  '/images/vb_net/words_and_hangman/hang_20.png',
  '/images/vb_net/words_and_hangman/hang_21.png',
  '/images/vb_net/words_and_hangman/hang_22.png',
  '/images/vb_net/words_and_hangman/hang_23.png', 
  '/images/vb_net/words_and_hangman/hang_24.png', 
  '/images/vb_net/words_and_hangman/hang_25.png',
  '/images/vb_net/words_and_hangman/hang_26.png',
  '/images/vb_net/words_and_hangman/hang_27.png',
  '/images/vb_net/words_and_hangman/hang_28.png', 
  '/images/vb_net/words_and_hangman/hang_29.png', 
  '/images/vb_net/words_and_hangman/hang_30.png',
  '/images/vb_net/words_and_hangman/hang_31.png',
  '/images/vb_net/words_and_hangman/hang_32.png',
  '/images/vb_net/words_and_hangman/hang_33.png', 
  '/images/vb_net/words_and_hangman/hang_34.png', 
];

const projects = [
  { label: 'PHP + MySQL', index: 1, url: 'https://github.com/Biocan888num2/movies_crm' },
  { label: 'JSON + .txt', index: 2, url: 'https://github.com/Biocan888num2/word_games' },
];

const VBNet = () => {

  const [activeSwiper, setActiveSwiper] = useState<number>(1);

  /**
   * @param {number} index
   */
  const handleProjectSelect = (index: number) => {
    setActiveSwiper(index);
  };

    return (
      <div className="p-4">
        <h1 className="font-segoe-ui-reg">VB.Net stuff</h1>

        <div className="button-div"> 
          <ProjectDropdown 
            projects={projects} 
            onProjectSelect={handleProjectSelect} 
            activeSwiper={activeSwiper} 
            fontClass="font-segoe-ui-reg" 
          /> 
          <a 
            href={projects[activeSwiper - 1]?.url} 
            className="button-git font-segoe-ui-reg" 
            target="_blank" 
            rel="noopener noreferrer"  
          > View code 
          </a> 
        </div>
        
        {activeSwiper === 1 && ( 
          <> 
            <h3 className='font-segoe-ui-reg'>Movie Rental CRM</h3> 
            <ImageSwiper images={images1} /> 
          </> 
        )} 
      
        {activeSwiper === 2 && ( 
          <> 
            <h3 className='font-segoe-ui-reg'>Word Scramble & Hangman</h3> 
            <ImageSwiper images={images2} /> 
          </> 
        )} 

      </div>
    );
  };
  
  export default VBNet;
  