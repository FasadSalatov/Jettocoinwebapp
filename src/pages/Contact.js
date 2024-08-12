import React, { useState, useEffect } from 'react';
import '../styles/home.css';
import avatar from '../components/wlcpage/headavatar.png';
import { Link } from 'react-router-dom';
import logofot from '../imgs/logofot.svg';
import fotlogo from '../imgs/fotlogo.svg';
import fotlogo2 from '../imgs/fotlogo2.svg';
import fotlogo3 from '../imgs/fotlogo3.svg';
import Modal from '../components/modal2.js';
import '../components/wlcpage/modal2.css';

function Contact() {
    const [walletModalVisible, setWalletModalVisible] = useState(false);
    const [profileEditModalVisible, setProfileEditModalVisible] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [tasksVisible, setTasksVisible] = useState(true);
    const [claimed, setClaimed] = useState(localStorage.getItem('claimed') === 'true');
    const [balance, setBalance] = useState(Number(localStorage.getItem('balance')) || 1000000); // Load balance from localStorage
    const [referrals, setReferrals] = useState(JSON.parse(localStorage.getItem('referrals')) || [
        { name: 'Oleg', profit: '5/10' },
        { name: 'Ivan', profit: '3/10' },
        { name: 'Anna', profit: '8/10' },
        { name: 'Sergey', profit: '4/10' },
        { name: 'Maria', profit: '7/10' },
    ]);

    useEffect(() => {
        localStorage.setItem('claimed', claimed);
        localStorage.setItem('balance', balance);
        localStorage.setItem('referrals', JSON.stringify(referrals));
    }, [claimed, balance, referrals]);

    const handleClaimClick = () => {
        setBalance(prevBalance => prevBalance + 1000000); // Add 1,000,000 to the balance
        setClaimed(true);
    };

    const handleCopyClick = () => {
        navigator.clipboard.writeText('https://t.me/JWApp_bot?TGID')
            .then(() => {
                setShowModal(true);
            })
            .catch(err => {
                console.error('Failed to copy text: ', err);
            });
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div className="container">
            <div className='maincontent refcontenter'>
                <div className='switchfix'>
                    <p className='refh1 myref'>My referrals</p>
                    <div className='switchcontact'>
                        {referrals.map((referral, index) => (
                            <div className='tasking' key={index}>
                                <img src={avatar} width='36px' alt='Avatar' className='amg'></img>
                                <div className='tskk'>
                                    <p className='typetask'></p>
                                    <p className='tskkk'>{referral.name}</p>
                                </div>
                                <div className='valuetask'>
                                    <g>Profit:</g>
                                    <p className='fivetoten'>{referral.profit}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={`blur-overlay ${showModal || walletModalVisible || profileEditModalVisible ? 'show' : 'show'}`} />
            </div>

            <div className='headerr'>
                <div className='nae'>
                    <p className='refh1'>Available for the claim</p>
                    <span className='headbtnsref'>
                        <p className='refhh1'>{balance.toLocaleString()} coins</p> {/* Display the balance */}
                        <button
                            className={`btnref ${claimed ? 'inactive' : ''}`}
                            onClick={handleClaimClick}
                            disabled={claimed}
                        >
                            <p>{claimed ? 'Claimed' : 'Claim'}</p>
                        </button>
                    </span>
                    <p className='bbh2'>By inviting friends, you get 10% of their balance and 2.5% of their referrals' balance</p>
                </div>
            </div>

            <div className='refcontainer'>
                <p className='refh1'>Referral link</p>
                <span className='btnsharegroup'>
                    <button className='shareclaimbtn' onClick={handleCopyClick}><p>Copy</p></button>
                    <Link to='https://telegram.me/share/url?url=https://t.me/JWApp_bot?TGID'>
                        <button className='sharebtn'><p>Share</p></button>
                    </Link>
                </span>
            </div>

            <div className='fot'>
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
