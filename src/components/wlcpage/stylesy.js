import React from 'react';
import './wlc.css';
import logo from './logo.svg';
import { Link } from 'react-router-dom';
import headavatar from './headavatar.png'
import tst from './trst.png';
function stylesy() {
  return (
    <div className='wrapper'>
        <div className='headerstyle'>
            <div className='headerss'>
                <div className='headavatar'><img src={headavatar} alt=''/></div>
                <div className='headname'>
                    <p className='uname'>Your name</p>
                    <div className='name'><p>OLEG</p></div>
                </div>
            </div>
        </div>
        <div className='stylecontainer'>
            <p>You can choose a different avatar</p>
            <span className='choose'>
                <button><img className='activecheck' src={tst}/><img className='baseimg' src={headavatar} alt=''></img></button>
                <button><img src={headavatar} alt=''></img></button>
                <button><img src={headavatar} alt=''></img></button>
                <button><img src={headavatar} alt=''></img></button>
                <button><img src={headavatar} alt=''></img></button>
            </span>
            <span className='choose'>
                <button><img src={headavatar} alt=''></img></button>
                <button><img src={headavatar} alt=''></img></button>
                <button><img src={headavatar} alt=''></img></button>
                <button><img src={headavatar} alt=''></img></button>
                <button><img src={headavatar} alt=''></img></button>
            </span>
            <span className='choose'>
                <button><img src={headavatar} alt=''></img></button>
                <button><img src={headavatar} alt=''></img></button>
                <button><img src={headavatar} alt=''></img></button>
                <button><img src={headavatar} alt=''></img></button>
                <button><img src={headavatar} alt=''></img></button>
            </span>
            <span className='choose'>
                <button><img src={headavatar} alt=''></img></button>
                <button><img src={headavatar} alt=''></img></button>
                <button><img src={headavatar} alt=''></img></button>
                <button><img src={headavatar} alt=''></img></button>
                <button><img src={headavatar} alt=''></img></button>
            </span>
            
        </div>
        <div className='saved'>
            <Link to='/'><button><p>Save</p></button></Link>
        </div>


      <div className='fotlogo'>
        <img src = {logo} alt='logo'></img>
      </div>
    </div>
  );
}

export default stylesy;
