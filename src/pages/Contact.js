import React, { useState, useEffect } from 'react';
import '../styles/home.css';
import avatar from '../components/wlcpage/headavatar.png';
import { Link } from 'react-router-dom';
import tg from '../imgs/tg.svg';
import logofot from '../imgs/logofot.svg';
import fotlogo from '../imgs/fotlogo.svg';
import fotlogo2 from '../imgs/fotlogo2.svg';
import fotlogo3 from '../imgs/fotlogo3.svg';
import Modal from '../components/modal2.js';
import '../components/wlcpage/modal2.css';

function Contact() {
    const [showModal, setShowModal] = useState(false);
    const [tasksVisible, setTasksVisible] = useState(true);

    useEffect(() => {
        const savedTasksVisibility = localStorage.getItem('tasksVisible');
        if (savedTasksVisibility !== null) {
            setTasksVisible(JSON.parse(savedTasksVisibility));
        }
    }, []);

    const handleCopyClick = () => {
        // Логика копирования ссылки в буфер обмена
        navigator.clipboard.writeText('https://t.me/FasadFinder_bot/JettoCoin')
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

    const handleHideTasks = () => {
        setTasksVisible(false);
        localStorage.setItem('tasksVisible', JSON.stringify(false));
    };

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

            {tasksVisible && (
                <div className='tasks'>
                    <h1>
                        Tasks
                        <button onClick={handleHideTasks} className='close-btn'>×</button>
                    </h1>
                    <p>Some text Some text Some text Some text Some text Some text</p>
                </div>
            )}

            <div className='maincontent'>

                <div className='switchfix'>

                    <p className='refh1'>My referrals</p>



                    <div className='switchcontact'>
                        <div className='tasking'>
                            <img src={avatar} width='36px' alt='Avatar'></img>
                            <div className='tskk'><p className='typetask'></p><p className='tskkk'>OLEG</p></div>
                            <div className='valuetask'> <g>Profit:</g> <p className='fivetoten'>5/10</p></div>
                        </div>
                        <div className='tasking'>
                            <img src={avatar} width='36px' alt='Avatar'></img>
                            <div className='tskk'><p className='typetask'></p><p className='tskkk'>OLEG</p></div>
                            <div className='valuetask'> <g>Profit:</g> <p className='fivetoten'>5/10</p></div>
                        </div>
                        <div className='tasking'>
                            <img src={avatar} width='36px' alt='Avatar'></img>
                            <div className='tskk'><p className='typetask'></p><p className='tskkk'>OLEG</p></div>
                            <div className='valuetask'> <g>Profit:</g> <p className='fivetoten'>5/10</p></div>
                        </div>
                        <div className='tasking'>
                            <img src={avatar} width='36px' alt='Avatar'></img>
                            <div className='tskk'><p className='typetask'></p><p className='tskkk'>OLEG</p></div>
                            <div className='valuetask'> <g>Profit:</g> <p className='fivetoten'>5/10</p></div>
                        </div>
                        <div className='tasking'>
                            <img src={avatar} width='36px' alt='Avatar'></img>
                            <div className='tskk'><p className='typetask'></p><p className='tskkk'>OLEG</p></div>
                            <div className='valuetask'> <g>Profit:</g> <p className='fivetoten'>5/10</p></div>
                        </div>
                        <div className='tasking'>
                            <img src={avatar} width='36px' alt='Avatar'></img>
                            <div className='tskk'><p className='typetask'></p><p className='tskkk'>OLEG</p></div>
                            <div className='valuetask'> <g>Profit:</g> <p className='fivetoten'>5/10</p></div>
                        </div>
                        <div className='tasking'>
                            <img src={avatar} width='36px' alt='Avatar'></img>
                            <div className='tskk'><p className='typetask'></p><p className='tskkk'>OLEG</p></div>
                            <div className='valuetask'> <g>Profit:</g> <p className='fivetoten'>5/10</p></div>
                        </div>
                        <div className='tasking'>
                            <img src={avatar} width='36px' alt='Avatar'></img>
                            <div className='tskk'><p className='typetask'></p><p className='tskkk'>OLEG</p></div>
                            <div className='valuetask'> <g>Profit:</g> <p className='fivetoten'>5/10</p></div>
                        </div>
                    </div>
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
