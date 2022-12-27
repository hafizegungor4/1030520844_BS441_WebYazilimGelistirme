import React from 'react';
import {Link} from "react-router-dom";
import tas from './images/tas.png'
import kagit from './images/kagit.png'
import makas from './images/makas.png'
import './game.css'

function MainPage() {
        return (
            <div className='main'>
                <div>
                    <h1 className='baslik'>ROCK PAPER SCISSORS</h1>
                </div>
                <div className='header'>
                    <img src= {tas} alt="tas" style={{width: '150px',height:'150px'}}/>
                    <img src={kagit} alt="kagit" style={{width: '150px',height:'150px'}}/>
                    <img src={makas} alt="makas" style={{width: '150px',height:'150px'}}/>
                </div>
                <br/>
                <div className='buttom'>
                    <button>
                        <Link
                            to='/Game'
                            className='press'
                            style={{
                                color: 'black',
                                textDecoration: 'none',
                                fontSize: '20px',
                            }}
                        >
                            Play Game
                        </Link>
                    </button>
                    <br/>
                    <br/>
                    <button>
                        <Link
                            to='/AgainstTime'
                            className='buttom'
                            style={{
                                color: 'black',
                                textDecoration: 'none',
                                fontSize: '20px',
                            }}
                        >
                            Play Against Time
                        </Link>
                    </button>
                </div>
            </div>
        );
    }


export default MainPage;