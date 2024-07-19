import React from 'react';
import '../styles/home.css'
import avatar from '../components/wlcpage/headavatar.png'
import { Link } from 'react-router-dom';
import tg from '../imgs/tg.svg';
import logofot from '../imgs/logofot.svg';
import fotlogo from '../imgs/fotlogo.svg'
import fotlogo2 from '../imgs/fotlogo2.svg'
import fotlogo3 from '../imgs/fotlogo3.svg'
function Home() {
    return (
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
                        <button>
                            <p>Connect wallet</p>
                        </button>
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
                        <button>Social acttivity</button>
                        <button>Manual verification</button>
                    </div>
                </div>
                
                <div className='switchcontent'>
                    <div className='tasking'>
                        <img src={tg}></img>
                        <div className='tskk'><p className='typetask'>Manual verification</p><p className='tsk'>Subscribe on telegram</p></div>

                        <div className='valuetask'><p>50 coins</p><button className='claimbtn'>claim</button></div>


                    </div>
                    <div className='tasking'>
                        <img src={tg}></img>
                        <div className='tskk'><p className='typetask'>Manual verification</p><p className='tsk'>Subscribe on telegram</p></div>

                        <div className='valuetask'><p>50 coins</p><button className='claimbtn'>claim</button></div>


                    </div>
                    <div className='tasking'>
                        <img src={tg}></img>
                        <div className='tskk'><p className='typetask'>Manual verification</p><p className='tsk'>Subscribe on telegram</p></div>

                        <div className='valuetask'><p>50 coins</p><button className='claimbtn'>claim</button></div>


                    </div>
                    <div className='tasking'>
                        <img src={tg}></img>
                        <div className='tskk'><p className='typetask'>Manual verification</p><p className='tsk'>Subscribe on telegram</p></div>

                        <div className='valuetask'><p>50 coins</p><button className='claimbtn'>claim</button></div>


                    </div>
                    <div className='tasking'>
                        <img src={tg}></img>
                        <div className='tskk'><p className='typetask'>Manual verification</p><p className='tsk'>Subscribe on telegram</p></div>

                        <div className='valuetask'><p>50 coins</p><button className='claimbtn'>claim</button></div>


                    </div>
                    <div className='tasking'>
                        <img src={tg}></img>
                        <div className='tskk'><p className='typetask'>Manual verification</p><p className='tsk'>Subscribe on telegram</p></div>

                        <div className='valuetask'><p>50 coins</p><button className='claimbtn'>claim</button></div>


                    </div>
                    <div className='tasking'>
                        <img src={tg}></img>
                        <div className='tskk'><p className='typetask'>Manual verification</p><p className='tsk'>Subscribe on telegram</p></div>

                        <div className='valuetask'><p>50 coins</p><button className='claimbtn'>claim</button></div>


                    </div>
                    <div className='tasking'>
                        <img src={tg}></img>
                        <div className='tskk'><p className='typetask'>Manual verification</p><p className='tsk'>Subscribe on telegram</p></div>

                        <div className='valuetask'><p>50 coins</p><button className='claimbtn'>claim</button></div>


                    </div>

                </div>

            </div>

            <div className='fot'>
                <div><img src={logofot} /></div>
                <div className='fotcont'>


                    <Link to='/'><button className='activebtn'><img src={fotlogo}></img></button></Link>
                    <Link to='/Contact'><button><img src={fotlogo2}></img></button></Link>
                    <Link to='/about'><button><img src={fotlogo3}></img></button></Link>

                </div>

            </div>


        </div>
    );
}

export default Home;
