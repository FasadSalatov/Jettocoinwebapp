import React, { useState } from 'react';
import '../styles/home.css'
import avatar from '../components/wlcpage/headavatar.png'
import { Link } from 'react-router-dom';
import tg from '../imgs/tg.svg';
import logofot from '../imgs/logofot.svg';
import fotlogo from '../imgs/fotlogo.svg'
import fotlogo2 from '../imgs/fotlogo2.svg'
import fotlogo3 from '../imgs/fotlogo3.svg'
import Modal from '../components/modal2.js';
import '../components/wlcpage/modal2.css';
function Contact() {
    const [showModal, setShowModal] = useState(false);

    const handleCopyClick = () => {
        // Логика копирования ссылки в буфер обмена
        navigator.clipboard.writeText('https://t.me/FasadFinder_bot/JettoCoin')
            .then(() => {
                setShowModal(true);
            });
    }

    const handleCloseModal = () => {
        setShowModal(false);
    }

    return (
        <div className="container">
            <div className='headerr'>
                <div className='nae'>
                    <p className='refh1'>Available for the claim</p>
                    <span className='headbtnsref'>
                        
                            <p className='refhh1'>1 000 000 coins</p>
                            <button className='btnref'>
                              <p>Claim</p>
                            </button>
                    </span>
                    <p className='bbh2'>By inviting friends, you get 10% of their balance and 2.5% of their referrals' balance</p>
                </div>
            </div>

            <div className='maincontent'>
                <p className='refh1'>My referrals</p>
                <div className='switchcontent'>
                    <div className='tasking'>
                        <img src={avatar} width='36px' alt='Avatar'></img>
                        <div className='tskk'><p className='typetask'></p><p className='tskkk'>OLEG</p></div>
                        <div className='valuetask'> <g>Profit:</g> <p className='fivetoten'>5/10</p></div>
                    </div>
                    {/* Повторяющиеся элементы */}
                </div>
            </div>

            <div className='refcontainer'>
                <p className='refh1'>Referral link</p>
                <span className='btnsharegroup'>
                  <button className='shareclaimbtn' onClick={handleCopyClick}><p>Copy</p></button>
                  <Link to='https://telegram.me/share/url?url=https://t.me/FasadFinder_bot/JettoCoin'>
                    <button className='sharebtn'><p>Share</p></button>
                  </Link>
                </span>
            </div>

            <div className='fot'>
                <div><img src={logofot} alt='Logo'/></div>
                <div className='fotcont'>
                    <Link to='/'><button ><img src={fotlogo} alt='Home'></img></button></Link>
                    <Link to='/Contact' ><button className='activebtn'><img src={fotlogo2} alt='Contact'></img></button></Link>
                    <Link to='/about'><button><img src={fotlogo3} alt='About'></img></button></Link>
                </div>
            </div>

            <Modal show={showModal} handleClose={handleCloseModal} />
        </div>
    );
}

export default Contact;
