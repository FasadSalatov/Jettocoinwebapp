import React from 'react';
import '../styles/home.css'
import avatar from '../components/wlcpage/headavatar.png'
import { Link } from 'react-router-dom';
import tg from '../imgs/tg.svg';
import logofot from '../imgs/logofot.svg';
import fotlogo from '../imgs/fotlogo.svg';
import fotlogo2 from '../imgs/fotlogo2.svg';
import fotlogo3 from '../imgs/fotlogo3.svg';
import arrow from '../imgs/arrow.svg';
import term from '../imgs/terms.svg';
function About() {
    return (
        <div className="container">
            <div className='headerr'>
                <div className='nae'>
                    <p className='refh1 btntop'>Statistics</p>
                    <span className='headbtnsset'>

                        <div className='btnset '><p className='piset'>Tasks completed</p><p className='pset'>15</p></div>
                        <div className='btnset'><p className='piset'>Tasks completed</p><p className='pset'>15</p></div>
                        <div className='btnset'><p className='piset'>Tasks completed</p><p className='pset'>15</p></div>
                        <div className='btnset btnbot'><p className='piset'>Tasks completed</p><p className='pset'>15</p></div>


                    </span>
                    
                    
                    
                </div>
            </div>



            <div className='maincontent mainheight'>
                
            <button className='setbtn'>
                  <span>
                    <p className='hh1set'>Change the language</p>
                    <p className='hh2set'>English</p>
                  </span>
                  <img src={arrow}/>
                </button>
                <button className='setbtn'>
                  <span>
                    <p className='hh1set'>Change the language</p>
                    <p className='hh2set'>English</p>
                  </span>
                  <img src={arrow}/>
                </button>

                <div class="notification-container">
                  <span class="notification-text">Notification</span>
                  <label class="switch">
                    <input type="checkbox"/>
                    <span class="slider"></span>
                  </label>
                </div>
                

                <button className='setbtn'>
                  <span>
                    <p className='hh1set'>Change the language</p>
                    <p className='hh2set'>English</p>
                  </span>
                  <img src={arrow}/>
                </button>

                <img src={term} className='term'></img>
    
            </div>

            <div className='refcontainer'>
                <p className='refh1'>Any questions?<p className='alysil'>manager@jettonwallet.com</p></p>
                
                <span className='btnsharegroup'>
                 
                  <button className='supbtn'><p>Support</p></button>
                </span>
            </div>

            <div className='fot'>
                <div><img src={logofot}/></div>
                <div className='fotcont'>
                    
                    
                        <Link to='/'><button ><img src={fotlogo}></img></button></Link>
                        <Link to='/Contact'><button><img src={fotlogo2} ></img></button></Link>
                        <Link to='/about'><button className='activebtn'><img src={fotlogo3}></img></button></Link>
                    
                </div>
                
            </div>


        </div>
    );
}

export default About;
