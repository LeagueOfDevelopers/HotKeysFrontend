import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux';

import LeftButtons from '../../components/LeftButtons/LeftButtons'
import Login from '../../components/Login/Login'

import './Header.css'

const Header = () => {
    return <nav className="Header">
        <ul className="HeaderTabs">
            <li className="LeftTabs">HotKeys</li>
            <li className="LeftTabs">Home</li>
            <li className="LeftTabs">About us</li>
            <li className="Login"> Create an account!</li>
            <li className="Login"> or </li>
            <li className="Login">Sign in </li>
        </ul>
    </nav>
}

export default Header;