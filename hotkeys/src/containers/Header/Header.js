import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import Modal from 'react-modal';

import './Header.css'

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};



class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalIsOpen: false
        }
    }

    openModal = () => {
        this.setState({ modalIsOpen: true });
    }

    closeModal = () => {
        this.setState({ modalIsOpen: false });
    }

    render() {
        return (
            <div>
                <div id="Header">
                    <ul className="header-tabs">
                        <li className="logo">Hot!<br />Keys</li>
                        <li className='right'><button className="login" onClick={this.openModal}>Регистрация</button></li>
                        <li className='right'><button
                            className='login'
                            style={{ backgroundColor: 'transparent' }}>
                            Войти
                </button>
                        </li>
                    </ul>
                </div>
                <div>
                <Modal
                    isOpen={this.state.modalIsOpen} 
                    style={customStyles}
                    shouldCloseOnOverlayClick={true}
                    shouldCloseOnEsc={true}
                >
                    <p>Modal text!</p>

                    <input
                        type="text"
                        className="Input"
                        placeholder="Login here.."
                        onChange={this.handleChange}
                        style={{ margin: '10px' }} />
                    <br />

                    <input
                        type="text"
                        className="Input"
                        placeholder="Password.."
                        onChange={this.handleChange}
                        style={{ margin: '10px' }} />
                    <br />

                    <button className="Button" onClick={this.openModal}>Login/Sign up</button>
                    <button className="Button" onClick={this.closeModal}>close Modal</button>
                </Modal>
                </div>
            </div>
        )
    }
}

export default Header;