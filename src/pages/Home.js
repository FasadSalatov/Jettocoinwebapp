import React, { useState } from 'react';
import '../styles/home.css';
import avatar from '../components/wlcpage/headavatar.png';
import { Link } from 'react-router-dom';
import tg from '../imgs/tg.svg';
import logofot from '../imgs/logofot.svg';
import fotlogo from '../imgs/fotlogo.svg';
import fotlogo2 from '../imgs/fotlogo2.svg';
import fotlogo3 from '../imgs/fotlogo3.svg';
import Modal from '../components/modal.js';
import { TonConnectUIProvider, TonConnectButton } from '@tonconnect/ui-react';

function Home() {
  const [showModal, setShowModal] = useState(false);
  const [taskInfo, setTaskInfo] = useState('');

  const handleClaimClick = (info) => {
    setTaskInfo(info);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <TonConnectUIProvider manifestUrl="https://jettocoinwebapp.vercel.app/tonconnect-manifest.json">
      <div className="container">
        <div className='headerr'>
          <div className='nae'>
            <span className='nameava'>
              <span className='imgheader'>
                <img src={avatar} alt='' />
                <p>OLEG</p>
              </span>
              <span className='frenhead'>
                <p>5 friends</p>
              </span>
            </span>
            <span className='headbtns'>
              <TonConnectButton className="ton-btn" />
              <div>
                <p>1 000 000 coins</p>
              </div>
            </span>
          </div>
        </div>

        <div className='tasks'>
          <h1>Tasks</h1>
          <p>Some text Some text Some text Some text Some text Some text</p>
        </div>

        <div className='maincontent mainheight pad'>
          <div className='switchfix'>
            <div className='switches'>
              <button className='btn1'>Tasks</button>
              <Link to='/leaders'><button className='btn2'>Leaders</button></Link>
            </div>
            <div className='miniswitch'>
              <button className='minibtnactive'>All</button>
              <button>Social activity</button>
              <button>Manual verification</button>
            </div>
          </div>

          <div className='switchcontent'>
            {[...Array(27)].map((_, index) => (
              <div className='tasking' key={index}>
                <img src={tg} alt='Telegram' />
                <div className='tskk'>
                  <p className='typetask'>Manual verification</p>
                  <p className='tsk'>Subscribe on telegram</p>
                </div>
                <div className='valuetask'>
                  <p>50 coins</p>
                  <button className='claimbtn' onClick={() => handleClaimClick('Subscribe on telegram - 50 coins')}>claim</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className='fot'>
          <div><img src={logofot} alt='Footer Logo' /></div>
          <div className='fotcont'>
            <Link to='/'><button className='activebtn'><img src={fotlogo} alt='Home' /></button></Link>
            <Link to='/Contact'><button><img src={fotlogo2} alt='Contact' /></button></Link>
            <Link to='/about'><button><img src={fotlogo3} alt='About' /></button></Link>
          </div>
        </div>

        <Modal show={showModal} onClose={handleCloseModal} taskInfo={taskInfo} />
      </div>
    </TonConnectUIProvider>
  );
}

export default Home;
