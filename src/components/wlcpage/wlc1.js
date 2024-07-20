import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import { Link, useNavigate } from 'react-router-dom';
import './wlc.css';
import Header from '../Header';
import arrow from './arrow.svg';
import wlc1 from './wlc1.png';
import wlc2 from './wlc2.png';
import wlc3 from './wlc3.png'; // Import all your images similarly
import wlc4 from './wlc4.png';
import wlc5 from './wlc5.png';
import wlc6 from './wlc6.png';
import wlc7 from './wlc7.png';

const images = [wlc1, wlc2, wlc3, wlc4, wlc5, wlc6, wlc7]; // Add all your images here

function Wlc1() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate(); // Hook to access navigation

  const handlers = useSwipeable({
    onSwipedLeft: () => handleSwipeLeft(),
    onSwipedRight: () => handleSwipeRight(),
  });

  const handleSwipeLeft = () => {
    if (currentIndex === images.length - 1) {
      navigate('/'); // Redirect to main page
    } else {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }
  };

  const handleSwipeRight = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div {...handlers}>
      <Header />
      <div className='container'>
        <img src={images[currentIndex]} alt={`wlc${currentIndex + 1}`} />
      </div>
      <div className='fot'>
        <div className='svgcom'>
          <svg width="156" height="12" viewBox="0 0 156 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            {images.map((_, index) => (
              <circle key={index} cx={6 + 24 * index} cy="6" r="6" fill={currentIndex === index ? "#3481DC" : "white"} />
            ))}
          </svg>
        </div>
        <div className='footerr'>
          <div className='btn-group'>
            <Link to="/stylesy">
              <button className='skip-btn'><p>Skip</p></button>
            </Link>
            <div className='margin'></div>
            <button className='next-btn' onClick={handleSwipeLeft}>
              <p>Next</p><img src={arrow} alt='' />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wlc1;
