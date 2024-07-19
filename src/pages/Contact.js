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



            <div className='maincontent mainheight'>
                <p className='refh1'>My referrals</p>
                <div className='switchcontent'>
                <div className='tasking'>
                        <img src={avatar} width='36px'></img>
                        <div className='tskk'><p className='typetask'></p><p className='tskkk'>OLEG</p></div>
                            
                            <div className='valuetask'> <g>Profit:</g> <p className='fivetoten'>5/10</p></div>
                            
                        
                    </div>
                    <div className='tasking'>
                        <img src={avatar} width='36px'></img>
                        <div className='tskk'><p className='typetask'></p><p className='tskkk'>OLEG</p></div>
                            
                            <div className='valuetask'> <g>Profit:</g> <p className='fivetoten'>5/10</p></div>
                            
                        
                    </div>
                    <div className='tasking'>
                        <img src={avatar} width='36px'></img>
                        <div className='tskk'><p className='typetask'></p><p className='tskkk'>OLEG</p></div>
                            
                            <div className='valuetask'> <g>Profit:</g> <p className='fivetoten'>5/10</p></div>
                            
                        
                    </div>
                    <div className='tasking'>
                        <img src={avatar} width='36px'></img>
                        <div className='tskk'><p className='typetask'></p><p className='tskkk'>OLEG</p></div>
                            
                            <div className='valuetask'> <g>Profit:</g> <p className='fivetoten'>5/10</p></div>
                            
                        
                    </div>
                    <div className='tasking'>
                        <img src={avatar} width='36px'></img>
                        <div className='tskk'><p className='typetask'></p><p className='tskkk'>OLEG</p></div>
                            
                            <div className='valuetask'> <g>Profit:</g> <p className='fivetoten'>5/10</p></div>
                            
                        
                    </div>
                    <div className='tasking'>
                        <img src={avatar} width='36px'></img>
                        <div className='tskk'><p className='typetask'></p><p className='tskkk'>OLEG</p></div>
                            
                            <div className='valuetask'> <g>Profit:</g> <p className='fivetoten'>5/10</p></div>
                            
                        
                    </div>
                    <div className='tasking'>
                        <img src={avatar} width='36px'></img>
                        <div className='tskk'><p className='typetask'></p><p className='tskkk'>OLEG</p></div>
                            
                            <div className='valuetask'> <g>Profit:</g> <p className='fivetoten'>5/10</p></div>
                            
                        
                    </div>
                    <div className='tasking'>
                        <img src={avatar} width='36px'></img>
                        <div className='tskk'><p className='typetask'></p><p className='tskkk'>OLEG</p></div>
                            
                            <div className='valuetask'> <g>Profit:</g> <p className='fivetoten'>5/10</p></div>
                            
                        
                    </div>
                    <div className='tasking'>
                        <img src={avatar} width='36px'></img>
                        <div className='tskk'><p className='typetask'></p><p className='tskkk'>OLEG</p></div>
                            
                            <div className='valuetask'> <g>Profit:</g> <p className='fivetoten'>5/10</p></div>
                            
                        
                    </div>


                </div>
    
            </div>

            <div className='refcontainer'>
                <p className='refh1'>Referral link</p>
                <span className='btnsharegroup'>
                  <button className='shareclaimbtn'><p>Copy</p></button>
                  <button className='sharebtn'><p>Share</p></button>
                </span>
            </div>

            <div className='fot'>
                <div><img src={logofot}/></div>
                <div className='fotcont'>
                    
                    
                        <Link to='/'><button ><img src={fotlogo}></img></button></Link>
                        <Link to='/Contact' ><button className='activebtn'><img src={fotlogo2}></img></button></Link>
                        <Link to='/about'><button><img src={fotlogo3}></img></button></Link>
                    
                </div>
                
            </div>


        </div>
    );
}

export default Home;
