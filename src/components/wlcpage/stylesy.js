import React, { useState, useEffect } from 'react';
import './wlc.css';
import logo from './logo.svg';
import { Link } from 'react-router-dom';
import headavatar from './headavatar.png';
import tst from './trst.png';

function Stylesy() {
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [username, setUsername] = useState('');
  const [nickname, setNickname] = useState('');
  const avatars = new Array(20).fill(headavatar);

  useEffect(() => {
    if (window.Telegram && window.Telegram.WebApp && window.Telegram.WebApp.initDataUnsafe && window.Telegram.WebApp.initDataUnsafe.user) {
      const tgUser = window.Telegram.WebApp.initDataUnsafe.user;
      const defaultUsername = tgUser.username || `${tgUser.first_name} ${tgUser.last_name || ''}`;
      setUsername(defaultUsername);
      setNickname(defaultUsername);
    } else {
      console.warn('Telegram WebApp object is not available');
    }
  }, []);

  const handleAvatarClick = (index) => {
    setSelectedAvatar(index);
  };

  const handleNicknameChange = (event) => {
    setNickname(event.target.value);
  };

  return (
    <div className='wrapper'>
      <div className='headerstyle'>
        <div className='headerss'>
          <div className='headavatar'><img src={headavatar} alt='' /></div>
          <div className='headname'>
            <p className='uname'>{username}</p>
            <div className='name'>
              <input 
                type='text' 
                placeholder='Nickname' 
                value={nickname} 
                onChange={handleNicknameChange} 
              />
            </div>
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
