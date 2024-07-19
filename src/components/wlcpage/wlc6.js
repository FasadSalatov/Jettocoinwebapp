
import React from 'react';
import './wlc.css';
import Header from '../Header';
import { Link } from 'react-router-dom';
import wlcc1 from './wlc6.png'
import arrow from './arrow.svg'
function wlc1() {
  return (
    <div className='wrap'>
      <Header />
      <div className='container'>
        <img src={wlcc1} alt='wlc1'></img>
      </div>
      <div className='fot'>
        <div className='svgcom'><svg width="156" height="12" viewBox="0 0 156 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="6" cy="6" r="6" fill="white" />
          <circle cx="30" cy="6" r="6" fill="white" />
          <circle cx="54" cy="6" r="6" fill="white" />
          <circle cx="78" cy="6" r="6" fill="white" />
          <circle cx="102" cy="6" r="6" fill="white" />
          <circle cx="126" cy="6" r="6" fill="#3481DC" />
          <circle cx="150" cy="6" r="6" fill="white" />
        </svg></div>
        <div className='footerr'>

          <div className='btn-group'>
            <Link to="/stylesy"><button className='skip-btn'><p>Skip</p></button></Link>
            <div className='margin'></div>
            <Link to="/wlc7"><button className='next-btn'><p>Next</p><img src={arrow} alt=''></img></button></Link>
          </div>
        </div>
      </div>

    </div>
  );
}

export default wlc1;
