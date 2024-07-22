import React, { useState } from 'react';
import './wlc.css';
import logo from './logo.svg';
import { Link } from 'react-router-dom';
import headavatar from './headavatar.png';
import tst from './trst.png';

function Stylesy() {
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const avatars = new Array(20).fill(headavatar);

  const handleAvatarClick = (index) => {
    setSelectedAvatar(index);
  };

  return (
    <div className='wrapper'>
      <div className='headerstyle'>
        <div className='headerss'>
          <div className='headavatar'><img src={headavatar} alt='' /></div>
          <div className='headname'>
            <p className='uname'>Your name</p>
            <div className='name'><input type='text' placeholder='Nickname' /></div>
          </div>
        </div>
      </div>
      <div className='stylecontainer'>
        <p>You can choose a different avatar</p>
        <div className='avatars'>
          {avatars.map((avatar, index) => (
            <button
              key={index}
              className={`avatar-button ${selectedAvatar === index ? 'selected' : ''}`}
              onClick={() => handleAvatarClick(index)}
            >
              <img className='baseimg' src={avatar} alt='' />
              {selectedAvatar === index && (
                <img className='activecheck' src={tst} alt='' />
              )}
            </button>
          ))}
        </div>
      </div>
      <div className='saved'>
        <Link to='/'><button><p>Save</p></button></Link>
      </div>
      <div className='fotlogo'>
        <img src={logo} alt='logo'></img>
      </div>
    </div>
  );
}

export default Stylesy;
