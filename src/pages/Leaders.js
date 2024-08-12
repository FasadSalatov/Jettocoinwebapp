import React, { useState, useRef, useEffect } from 'react';
import '../styles/home.css';
import avatar from '../components/wlcpage/headavatar.png';
import { Link } from 'react-router-dom';
import Modal from '../components/modal.js';
import fotlogo from '../imgs/fotlogo.svg';
import fotlogo2 from '../imgs/fotlogo2.svg';
import fotlogo3 from '../imgs/fotlogo3.svg';
import { TonConnectUIProvider, useTonConnectUI, useTonWallet } from '@tonconnect/ui-react';
import useTelegramUser from '../hooks/useTelegramUser';
import { useTaskContext } from '../context/TaskContext';
import { useSpring, animated } from '@react-spring/web';

function Leaders() {
  const [profileEditModalVisible, setProfileEditModalVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [taskInfo, setTaskInfo] = useState('');
  const [walletModalVisible, setWalletModalVisible] = useState(false);
  const [filter, setFilter] = useState('all');
  const { tasksVisible, handleHideTasks } = useTaskContext();
  const [tonConnectUI] = useTonConnectUI();
  const wallet = useTonWallet();
  const user = useTelegramUser();

  // Load username and balance from localStorage
  const [username, setUsername] = useState(localStorage.getItem('nickname') || (user ? user.username : ''));
  const [balance, setBalance] = useState(Number(localStorage.getItem('balance')) || 1000000);

  const [springProps, api] = useSpring(() => ({ y: 0, config: { tension: 300, friction: 20 } }));
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
  
  const handleProfileEditClick = () => {
    setProfileEditModalVisible(true);
  };

  const closeProfileEditModal = () => {
    setProfileEditModalVisible(false);
  };

  const handleWalletClick = () => {
    setWalletModalVisible(true);
  };

  const handleCopyWallet = () => {
    if (wallet?.account) {
      navigator.clipboard.writeText(wallet.account.address);
      setWalletModalVisible(false);
      alert('Wallet number copied!');
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
    return `${address.slice(2, 5)}****${address.slice(-2)}`;
  };

  const closeWalletModal = () => {
    setWalletModalVisible(false);
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
    <div className="container">
      <div className='ttt'>
        <p>Some text Some text Some text Some text Some text Some text</p>
      </div>
      <div className='headerr'>
        <div className='nae'>
          <span className='nameava'>
            <span className='imgheader'>
            <Link to='/stylesy'><img src={avatar} alt='Avatar' /></Link>
              <p>{username}</p> {/* Display the loaded username */}
            </span>
            <span className='frenhead'>
              <p>5 friends</p>
            </span>
          </span>
          <span className='headbtns'>
            <div className='coinss'>
              <p>{balance.toLocaleString()} coins</p> {/* Display the loaded balance */}
            </div>
          </span>
        </div>
      </div>

      <div className='cher'></div>
      {tasksVisible && (
        <div className='tasks'>
          <h1>
            Tasks
            <button onClick={handleHideTasks} className='close-btn'>×</button>
          </h1>
          <p>Some text Some text Some text Some text Some text Some text</p>
        </div>
      )}

      <div className='maincontent leadhei'>
        <div className='switchfix'>
          <div className='switches'>
            <Link to='/' className='linkbtn'><button className='btn2'>Tasks</button></Link>
            
            <Link><button className='btn3'>Leaders</button></Link>
          </div>
        </div>

        <animated.div
          className='switchcontent padd'
          ref={scrollRef}
          style={{ transform: springProps.y.to(y => `translateY(${y}px)`) }}
        >
          {[...Array(12)].map((_, index) => (
            <div className='tasking' key={index}>
              <img src={avatar} width='36px' alt='avatar' className='amg'/>
              <div className='tskk'>
                <p className='typetask'></p>
                <p className='tskkk'>Oleg</p>
              </div>
              <div className='valuetask'>
                <g>Сoins:</g>
                <p className='fivetoten color'>50</p>
              </div>
            </div>
          ))}
        </animated.div>
        <div className={`blur-overlay ${showModal || walletModalVisible || profileEditModalVisible ? 'show' : 'show'}`} />
      </div>

      <div className='fot'>
        <div className='fotcont'>
          <Link to='/'><button><img src={fotlogo} alt='Home'/></button></Link>
          <Link to='/Contact'><button><img src={fotlogo2} alt='Contact'/></button></Link>
          <Link to='/about'><button><img src={fotlogo3} alt='About'/></button></Link>
        </div>
      </div>
    </div>
  );
}

export default Leaders;
