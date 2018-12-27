import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux';

import './Header.css'

const Header = () => {
    return <nav className="Header">
        <ul className="HeaderTabs">
            <li className="Logo">Hot!<br/>Keys</li>
            <li className="Login"> Регистрация</li>
            <li className="Login">Вход </li>
        </ul>
    </nav>
}

export default Header;