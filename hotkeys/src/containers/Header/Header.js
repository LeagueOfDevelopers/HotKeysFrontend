import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux';

import './Header.css'

const Header = () => {
    return <div id="Header">
        <ul className="header-tabs">
            <li className="logo">Hot!<br />Keys</li>
            <li className='right'><button className="login">Регистрация</button></li>
            <li className='right'><button
                className="login"
                style={{backgroundColor: 'transparent'}}>
                Войти
                </button>
            </li>
        </ul>
    </div>
}

export default Header;