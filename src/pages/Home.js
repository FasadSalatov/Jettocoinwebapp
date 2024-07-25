import React, { useState, useRef, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';
import '../styles/home.css';
import defaultAvatar from '../components/wlcpage/headavatar.png';
import { Link } from 'react-router-dom';
import tg from '../imgs/tg.svg';
import fotlogo from '../imgs/fotlogo.svg';
import fotlogo2 from '../imgs/fotlogo2.svg';
import fotlogo3 from '../imgs/fotlogo3.svg';
import Modal from '../components/modal.js';
import wltlogo from '../imgs/wallet.svg';
import { TonConnectUIProvider, useTonConnectUI, useTonWallet, useTonAddress } from '@tonconnect/ui-react';
import useTelegramUser from '../hooks/useTelegramUser';
import { useTaskContext } from '../context/TaskContext.js';
import Stylesy from '../components/wlcpage/stylesy.js';

function Home() {
  const [showModal, setShowModal] = useState(false);
  const [taskInfo, setTaskInfo] = useState('');
  const [walletModalVisible, setWalletModalVisible] = useState(false);
  const [filter, setFilter] = useState('all');
  const [profileEditModalVisible, setProfileEditModalVisible] = useState(false);
  const { tasksVisible, handleHideTasks } = useTaskContext();
  const [tonConnectUI] = useTonConnectUI();
  const wallet = useTonWallet();
  const user = useTelegramUser();
  const userFriendlyAddress = useTonAddress();
  const rawAddress = useTonAddress(false);

  const [username, setUsername] = useState(user ? user.username : '');
  const [avatar, setAvatar] = useState(localStorage.getItem('avatar') || defaultAvatar);

  const [springProps, api] = useSpring(() => ({
    y: 0,
    config: { tension: 300, friction: 20 },
  }));

  const scrollRef = useRef(null);
  const [isAtBottom, setIsAtBottom] = useState(false);

  const handleScroll = (e) => {
    const scrollElement = e.target;
    const scrollTop = scrollElement.scrollTop;
    const maxScrollTop = scrollElement.scrollHeight - scrollElement.clientHeight;

    if (scrollTop >= maxScrollTop) {
      setIsAtBottom(true);
      api.start({ y: (scrollTop - maxScrollTop) * 0.3 });
    } else {
      setIsAtBottom(false);
      api.start({ y: 0 });
    }
  };

  const handleScrollRelease = () => {
    if (isAtBottom) {
      api.start({ y: 0 });
    }
  };

  useEffect(() => {
    const scrollElement = scrollRef.current;
    scrollElement.addEventListener('scroll', handleScroll);
    scrollElement.addEventListener('touchend', handleScrollRelease);
    scrollElement.addEventListener('mouseup', handleScrollRelease);

    return () => {
      scrollElement.removeEventListener('scroll', handleScroll);
      scrollElement.removeEventListener('touchend', handleScrollRelease);
      scrollElement.removeEventListener('mouseup', handleScrollRelease);
    };
  }, [isAtBottom]);

  useEffect(() => {
    if (user) {
      setUsername(user.username);
    }
  }, [user]);

  useEffect(() => {
    localStorage.setItem('username', username);
    localStorage.setItem('avatar', avatar);
  }, [username, avatar]);

  const handleClaimClick = (info) => {
    setTaskInfo(info);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleConnectWallet = async () => {
    try {
      await tonConnectUI.connectWallet();
    } catch (error) {
      console.error('Ошибка подключения кошелька:', error);
    }
  };

  const handleWalletClick = () => {
    setWalletModalVisible(true);
  };

  const handleCopyWallet = () => {
    if (userFriendlyAddress) {
      navigator.clipboard.writeText(userFriendlyAddress);
      setWalletModalVisible(false);
    }
  };

  const handleDisconnectWallet = async () => {
    try {
      await tonConnectUI.disconnect();
      setWalletModalVisible(false);
    } catch (error) {
      console.error('Ошибка отключения кошелька:', error);
    }
  };

  const maskWallet = (address) => {
    if (!address) return '';
    return `${address.slice(0, 3)}****${address.slice(-3)}`;
  };

  const closeWalletModal = () => {
    setWalletModalVisible(false);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result);
        localStorage.setItem('avatar', reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleProfileEditClick = () => {
    setProfileEditModalVisible(true);
  };

  const closeProfileEditModal = () => {
    setProfileEditModalVisible(false);
  };

  const tasks = [
    { id: 1, type: 'Social activity', description: 'Subscribe on telegram', reward: 50 },
    { id: 2, type: 'Manual verification', description: 'Verify your email', reward: 50 },
    { id: 3, type: 'Manual verification', description: 'Verify your email', reward: 50 },
    { id: 4, type: 'Manual verification', description: 'Verify your email', reward: 50 },
    { id: 5, type: 'Manual verification', description: 'Verify your email', reward: 50 },
    { id: 6, type: 'Manual verification', description: 'Verify your email', reward: 50 },
    { id: 7, type: 'Manual verification', description: 'Verify your email', reward: 50 },
  ];

  const filteredTasks = tasks.filter(task => {
    if (filter === 'all') return true;
    return task.type.toLowerCase() === filter.toLowerCase();
  });

  return (
    <TonConnectUIProvider manifestUrl="https://jettocoinwebapp.vercel.app/tonconnect-manifest.json">
      <div className="container">
        <div className='ttt'>
          <p>Some text Some text Some text Some text Some text Some text</p>
        </div>
        <div className='headerr'>
          <div className='nae'>
            <span className='nameava'>
              <span className='imgheader'>
              <Link to='/stylesy'><img src={avatar} alt='Avatar' /></Link>
                <p>{username}</p>
                
              </span>
              <span className='frenhead'>
                <p>5 friends</p>
              </span>
            </span>
            <span className='headbtns'>
              {wallet ? (
                <div className='wallet-container'>
                  <button className='wallet-button' onClick={handleWalletClick}>
                    {maskWallet(userFriendlyAddress)}<img src={wltlogo} alt=''/>
                  </button>
                  <div className='coins'>
                    <p>1 000 000 coins</p>
                  </div>
                </div>
              ) : (
                <div className='wallet-container'>
                  <button onClick={handleConnectWallet} className="wallet-button">
                    Connect wallet
                  </button>
                  <div className='coins'>
                    <p>1 000 000 coins</p>
                  </div>
                </div>
              )}
            </span>
          </div>
        </div>

        <div className='cher'></div>

        <Modal show={showModal} onClose={handleCloseModal} taskInfo={taskInfo} />

        {walletModalVisible && (
          <div className="modal2">
            <div className="modal-content">
              <button onClick={handleCopyWallet}>Copy Wallet Address</button>
              <button onClick={handleDisconnectWallet}>Disconnect Wallet</button>
              <button onClick={closeWalletModal}>Close</button>
            </div>
          </div>
        )}

        {profileEditModalVisible && (
          <div className='profile-edit-modal'>
            <input type="text" value={username} onChange={handleUsernameChange} placeholder="Enter new username" />
            <input type="file" accept="image/*" onChange={handleAvatarChange} />
            <button onClick={closeProfileEditModal}>Close</button>
          </div>
        )}

        {tasksVisible && (
          <div className='tasks'>
            <h1>
              Tasks 
              <button onClick={handleHideTasks} className='close-btn'>×</button>
            </h1>
            <p>Some text Some text Some text Some text Some text Some text</p>
          </div>
        )}

        <div className={`maincontent mainheight pad ${!tasksVisible ? 'expanded' : ''}`}>
          <div className='switchfix'>
            <div className='switches'>
              <button className='btn1'>Tasks</button>
              <p className='ras'>|</p>
              <Link to='/leaders'><button className='btn2'>Leaders</button></Link>
            </div>

            <div className='miniswitch'>
              <button className={`minibtn ${filter === 'all' ? 'minibtnactive' : ''}`} onClick={() => setFilter('all')}>All</button>
              <p className='ras'>|</p>
              <button className={`minibtn ${filter === 'social activity' ? 'minibtnactive' : ''}`} onClick={() => setFilter('social activity')}>Social activity</button>
              <p className='ras'>|</p>
              <button className={`minibtn ${filter === 'manual verification' ? 'minibtnactive' : ''}`} onClick={() => setFilter('manual verification')}>Manual verification</button>
            </div>
          </div>

          <animated.div
            className='switchcontent'
            ref={scrollRef}
            style={{ transform: springProps.y.to(y => `translateY(${y}px)`) }}
          >
            {filteredTasks.map(task => (
              <div className='tasking' key={task.id}>
                <img className='tskimg' src={tg} alt='Telegram' />
                <div className='tskk'>
                  <p className='tsk'>{task.description}</p>
                </div>
                <div className='valuetask'>
                 
                  <button className='claimbtn' onClick={() => handleClaimClick(`${task.description} - ${task.reward} coins`)}><p>{task.reward} to claim</p></button>
                </div>
              </div>
            ))}
          </animated.div>

          {/* Blur overlay */}
          <div className={`blur-overlay ${showModal || walletModalVisible || profileEditModalVisible ? 'show' : 'show'}`} />

        </div>
        <div className='fot'>
          <div className='fotcont'>
            <Link to='/'><button className='activebtn'><img src={fotlogo} alt='Home'/></button></Link>
            <Link to='/Contact'><button ><img src={fotlogo2} alt='Contact'/></button></Link>
            <Link to='/about'><button><img src={fotlogo3} alt='About'/></button></Link>
          </div>
        </div>
      </div>
    </TonConnectUIProvider>
  );
}

export default Home;
