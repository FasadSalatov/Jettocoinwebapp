import React, { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import { Link, useNavigate } from 'react-router-dom';
import QRCode from 'qrcode.react';
import './wlc.css';
import Header from '../Header';
import arrow from './arrow.svg';
import wlc1 from './wlc1.png';
import wlc2 from './wlc2.png';
import wlc3 from './wlc3.png';
import wlc4 from './wlc4.png';
import wlc5 from './wlc5.png';
import wlc6 from './wlc6.png';
import wlc7 from './wlc7.png';

const images = [wlc1, wlc2, wlc3, wlc4, wlc5, wlc6, wlc7];

function Wlc1() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    if (/android/i.test(userAgent) || (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream)) {
      setIsMobile(true);
    }
  }, []);

  const handlers = useSwipeable({
    onSwipedLeft: () => handleSwipeLeft(),
    onSwipedRight: () => handleSwipeRight(),
  });

  const handleSwipeLeft = () => {
    if (currentIndex === images.length - 1) {
      navigate('/stylesy');
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
        {isMobile ? (
          <img src={images[currentIndex]} alt={`wlc${currentIndex + 1}`} />
        ) : (
          <div className='qr-container'>
            <h2>Scan the QR code to open the mini app on your phone</h2>
            <QRCode value="https://t.me/FasadFinder_bot/JettoCoin" size={256} />
          </div>
        )}
      </div>
      {isMobile && (
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
      )}
    </div>
  );
}

export default Wlc1;
