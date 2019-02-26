import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import Modal from 'react-modal';
import styled from 'styled-components';

import './Header.css';

Modal.setAppElement('#root');

const Input = styled.input`
    margin: 10px;
    width: 347px;
    height: 44px;
    border: none;
    border-radius: 4px;
    `;
const ModalButton = styled.button`
    margin: 10px;
    width: 347px;
    height: 44px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    background-color: ${props => props.bgColor}
`;

const customStyles = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.75)'
    },
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        padding: '35px 43px 35px',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'rgba(0, 0, 0, 0.87)',
        borderRadius: '12px'
    }
};



class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rgModalIsOpen: false,
            signInModalIsOpen: false
        }
    }

    openRgModal = () => {
        this.setState({ rgModalIsOpen: true });
    }

    closeRgModal = () => {
        this.setState({ rgModalIsOpen: false });
    }

    openSignInModal = () => {
        this.setState({ signInModalIsOpen: true });
    }

    closeSignInModal = () => {
        this.setState({ signInModalIsOpen: false });
    }

    render() {
        return (
            <div>
                <div id="Header">
                    <ul className="header-tabs">
                        <li className="logo">Hot!<br />Keys</li>
                        <li className='right'><button className="login" onClick={this.openRgModal}>Регистрация</button></li>
                        <li className='right'><button
                            className='login'
                            onClick={this.openSignInModal}
                            style={{ backgroundColor: 'transparent' }}
                        >
                            Войти
                        </button>
                        </li>
                    </ul>
                </div>
                <div>
                    <Modal
                        isOpen={this.state.rgModalIsOpen}
                        style={customStyles}
                        onRequestClose={this.closeRgModal}
                    >
                        <p style={{ color: 'white', fontFamily: 'Montserrat', fontSize: 24 }}>Sign up</p>
                        <p style={{ color: 'white', fontFamily: 'Montserrat' }}>or
                            <a
                                style={{ color: '#f25634', textDecoration: 'none', cursor: 'pointer' }}
                                onClick={(event) => { this.closeRgModal(); this.openSignInModal() }}> sign in
                            </a> to your account
                        </p>

                        <Input placeholder="   Login here.." onChange={this.handleChange} />
                        <br />
                        <Input placeholder="   Password.." onChange={this.handleChange} />
                        <br />
                        <ModalButton bgColor={'#f25634'} onClick={this.openModal}>CREATE ACCOUNT</ModalButton>
                        <br />
                        <ModalButton bgColor={'#3b5998'} onClick={this.closeModal}>Facebook</ModalButton>
                        <br />
                        <ModalButton bgColor={'#ffffff'} onClick={this.closeModal}>Google</ModalButton>
                        <br />
                        <ModalButton bgColor={'#4680c2'} onClick={this.closeModal}>VK</ModalButton>
                    </Modal>
                </div>
                <div>
                    <Modal
                        isOpen={this.state.signInModalIsOpen}
                        style={customStyles}
                        onRequestClose={this.closeSignInModal}
                    >
                        <p style={{ color: 'white', fontFamily: 'Montserrat', fontSize: 24 }}>Sign in</p>

                        <Input placeholder="   Login here.." onChange={this.handleChange} />
                        <br />
                        <Input placeholder="   Password.." onChange={this.handleChange} />
                        <br />
                        <ModalButton bgColor={'#f25634'} onClick={this.openModal}>SIGN IN</ModalButton>
                    </Modal>
                </div>
            </div>
        )
    }
}

export default Header;