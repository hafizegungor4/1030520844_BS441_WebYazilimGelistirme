import React from 'react';
import {Link} from "react-router-dom";
import tas from './images/tas.png'
import kagit from './images/kagit.png'
import makas from './images/makas.png'

function MainPage() {
        return (
            <div className='main'>
                <div>
                    <h2>TAŞ KAĞIT MAKAS</h2>
                </div>
                <div className='header'>
                    <img src= {tas} alt="tas" style={{width: '75px',height:'75px'}}/>
                    <img src={kagit} alt="kagit" style={{width: '75px',height:'75px'}} />
                    <img src={makas} alt="makas" style={{width: '75px',height:'75px'}} />
                </div>
                <br/>
                <div className='button'>
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
                            Oynama Başla
                        </Link>
                    </button>
                    <br/>
                    <button>
                        <Link
                            to='/AgainstTime'
                            className='press'
                            style={{
                                color: 'black',
                                textDecoration: 'none',
                                fontSize: '20px',
                            }}
                        >
                            Zamana Karşı Olarak Oyna
                        </Link>
                    </button>
                </div>
            </div>
        );
    }


export default MainPage;