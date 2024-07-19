import React from 'react';
import '../styles/home.css'
import avatar from '../components/wlcpage/headavatar.png'

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

        </div>
    );
}

export default Home;
