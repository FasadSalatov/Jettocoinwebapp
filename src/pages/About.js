import React from 'react';
import '../styles/home.css';
import avatar from '../components/wlcpage/headavatar.png';
import { Link } from 'react-router-dom';
import tg from '../imgs/tg.svg';
import logofot from '../imgs/logofot.svg';
import fotlogo from '../imgs/fotlogo.svg';
import fotlogo2 from '../imgs/fotlogo2.svg';
import fotlogo3 from '../imgs/fotlogo3.svg';
import arrow from '../imgs/arrow.svg';
import term from '../imgs/terms.svg';

function About() {
    const handleCopyEmail = () => {
        navigator.clipboard.writeText('manager@jettonwallet.com')
            .then(() => {
                alert('Email copied to clipboard!');
            })
            .catch(err => {
                console.error('Failed to copy text: ', err);
            });
    };

    return (
        <div className="container">
            <div className='headerr'>
                <div className='nae'>
                    <p className='refh1 btntop'>Statistics</p>
                    <span className='headbtnsset'>
                        <div className='btnset '>
                            <p className='piset'>Tasks completed</p>
                            <p className='pset'>15</p>
                        </div>
                        <div className='btnset'>
                            <p className='piset'>Friends invited</p>
                            <p className='pset'>5</p>
                        </div>
                        <div className='btnset'>
                            <p className='piset'>Tasks completed</p>
                            <p className='pset'>15</p>
                        </div>
                        <div className='btnset btnbot'>
                            <p className='piset'>Friends invited</p>
                            <p className='pset'>5</p>
                        </div>
                    </span>
                </div>
            </div>

            <div className='setings'>
                <button className='setbtn'>
                    <span>
                        <p className='hh1set'>Change the language</p>
                        <p className='hh2set'>English</p>
                    </span>
                    <img src={arrow} alt="Arrow" />
                </button>
                <button className='setbtn'>
                    <span>
                        <p className='hh1set'>Change the exchange</p>
                        <p className='hh2set'>Ton Wallet</p>
                    </span>
                    <img src={arrow} alt="Arrow" />
                </button>

                <div className="notification-container">
                    <span className="notification-text">Notification</span>
                    <label className="switch">
                        <input type="checkbox" />
                        <span className="slider"></span>
                    </label>
                </div>

                <button className='setbtn'>
                    <span>
                        <p className='hh1set'>Our website</p>
                    </span>
                    <img src={arrow} alt="Arrow" />
                </button>

                <img src={term} className='term' alt="Terms" />
            </div>

            <div className='refcontainer'>
                <p className='refh1'>Any questions?</p>
                <span className='btnsharegroupsup'>
                    <button className='copy-email' onClick={handleCopyEmail}>
                        manager@jettonwallet.com
                    </button>
                    <Link to='https://telegram.org/support?setln=ru'>
                        <button className='supbtn'>
                            <p>Support</p>
                        </button>
                    </Link>
                </span>
            </div>

            <div className='fot'>
                <div className='fotcont'>
                    <Link to='/'><button><img src={fotlogo} alt='Home'></img></button></Link>
                    <Link to='/Contact' ><button><img src={fotlogo2} alt='Contact'></img></button></Link>
                    <Link to='/about'><button  className='activebtn' ><img src={fotlogo3} alt='About'></img></button></Link>
                </div>
            </div>
            </div>
    );
}

export default About;
