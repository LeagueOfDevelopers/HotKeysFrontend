import React, { Component } from 'react';

import PriceColumns from '../../components/PriceColumns/PriceColumns';
import './HomePage.css';

import hotkeys_mobile from '../../assets/images/HotKeys_mobile.png';

class HomePage extends Component {

    render() {
        return (
            <div className='homePage'>
                <div className='main-screen'>
                    <h1 className='hotKeys'>HOT! KEYS</h1>
                    <p className='start'>Начните изучать горячие клавиши прямо сейчас!</p>
                    <button className='btn'>Начать</button>
                </div>
                <div className='container'>
                    <div className='grey-wrapper introduction'>
                        <div className='quarter'>
                            <h1>Почему Hot!Keys</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            <a href='#'>ПОПРОБОВАТЬ</a>
                        </div>
                        <div class="quarter" style={{backgroundColor: '#2e2e2e'}}>

                        </div>
                        <div class="quarter" style={{backgroundColor: '#2e2e2e'}}>

                        </div>
                        <div class="quarter">
                            <h1>Программы</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            <a href='#'>ПОСМОТРЕТЬ ВСЕ</a>
                        </div>
                    </div>

                    <div className='grey-wrapper'>
                        <h1 style={{fontFamily: 'Montserrat', fontSize: '36px', textAlign: 'center'}}>Ценовая политика</h1>
                        <div className='price'>
                        <PriceColumns />
                        <PriceColumns />
                        <PriceColumns />
                        </div>
                    </div>

                    <div className='grey-wrapper tryMobile'>
                        <div className='half'>
                            <h1 className='tryMobile__text'>Попробуйте Hot!Keys на телефоне</h1>
                            <button className='tryMobile__btn'>AppStore</button>
                            <button className='tryMobile__btn'>GooglePlay</button>
                        </div>
                        <div className='half'>
                        <img className=' mobileImage' src={hotkeys_mobile} alt='hotkeys_mobile' />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default HomePage;