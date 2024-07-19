import React from 'react';
import '../styles/home.css'
import avatar from '../components/wlcpage/headavatar.png'
import { Link } from 'react-router-dom';
import tg from '../imgs/tg.svg';
import logofot from '../imgs/logofot.svg';
import fotlogo from '../imgs/fotlogo.svg'
import fotlogo2 from '../imgs/fotlogo2.svg'
import fotlogo3 from '../imgs/fotlogo3.svg'
function Leaders() {
    return (
        <div className="container">

                <div className='maincontent leadermain'>
                
                <div className='nae'>
                <div className='switches'>
                    <Link to='/'><button className='btn2'>Tasks</button></Link>
                    <Link to='/leaders'><button className='btn1'>Leaders</button></Link>
                </div>

                <div className='switchcontent'>
               
                <div className='tasking'>
                        <img src={avatar} width='36px'></img>
                        <div className='tskk'><p className='typetask'>Manual verification</p><p className='tsk'>Subscribe on telegram</p></div>
                            
                            <div className='valuetask'> <g>coins</g> <p>50</p></div>
                            
                        
                    </div>
                    <div className='tasking'>
                        <img src={avatar} width='36px'></img>
                        <div className='tskk'><p className='typetask'>Manual verification</p><p className='tsk'>Subscribe on telegram</p></div>
                            
                            <div className='valuetask'> <g>coins</g> <p>50</p></div>
                            
                        
                    </div>
                    <div className='tasking'>
                        <img src={avatar} width='36px'></img>
                        <div className='tskk'><p className='typetask'>Manual verification</p><p className='tsk'>Subscribe on telegram</p></div>
                            
                            <div className='valuetask'> <g>coins</g> <p>50</p></div>
                            
                        
                    </div>
                    <div className='tasking'>
                        <img src={avatar} width='36px'></img>
                        <div className='tskk'><p className='typetask'>Manual verification</p><p className='tsk'>Subscribe on telegram</p></div>
                            
                            <div className='valuetask'> <g>coins</g> <p>50</p></div>
                            
                        
                    </div>
                    <div className='tasking'>
                        <img src={avatar} width='36px'></img>
                        <div className='tskk'><p className='typetask'>Manual verification</p><p className='tsk'>Subscribe on telegram</p></div>
                            
                            <div className='valuetask'> <g>coins</g> <p>50</p></div>
                            
                        
                    </div>
                    <div className='tasking'>
                        <img src={avatar} width='36px'></img>
                        <div className='tskk'><p className='typetask'>Manual verification</p><p className='tsk'>Subscribe on telegram</p></div>
                            
                            <div className='valuetask'> <g>coins</g> <p>50</p></div>
                            
                        
                    </div>
                    <div className='tasking'>
                        <img src={avatar} width='36px'></img>
                        <div className='tskk'><p className='typetask'>Manual verification</p><p className='tsk'>Subscribe on telegram</p></div>
                            
                            <div className='valuetask'> <g>coins</g> <p>50</p></div>
                            
                        
                    </div>
                    <div className='tasking'>
                        <img src={avatar} width='36px'></img>
                        <div className='tskk'><p className='typetask'>Manual verification</p><p className='tsk'>Subscribe on telegram</p></div>
                            
                            <div className='valuetask'> <g>coins</g> <p>50</p></div>
                            
                        
                    </div>
                    <div className='tasking'>
                        <img src={avatar} width='36px'></img>
                        <div className='tskk'><p className='typetask'>Manual verification</p><p className='tsk'>Subscribe on telegram</p></div>
                            
                            <div className='valuetask'> <g>coins</g> <p>50</p></div>
                            
                        
                    </div>
                    <div className='tasking'>
                        <img src={avatar} width='36px'></img>
                        <div className='tskk'><p className='typetask'>Manual verification</p><p className='tsk'>Subscribe on telegram</p></div>
                            
                            <div className='valuetask'> <g>coins</g> <p>50</p></div>
                            
                        
                    </div>

                
    
            </div>
                    
                </div>
            </div>


            

            <div className='fot'>
                <div><img src={logofot}/></div>
                <div className='fotcont'>
                    
                    
                        <Link to='/'><button><img src={fotlogo}></img></button></Link>
                        <Link to='/Contact'><button><img src={fotlogo2}></img></button></Link>
                        <Link to='/about'><button><img src={fotlogo3}></img></button></Link>
                    
                </div>
                
            </div>


        </div>
    );
}

export default Leaders;
