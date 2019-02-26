import React, { Component } from 'react';

import styled from 'styled-components';

const Footer1 = styled.footer`
    width: 100%;
    max-height: auto;
    color: #ffffff;
    background-color: rgba(0, 0, 0, 0.87);
    padding: 0 0 100px;
`;

const Button = styled.button`
    padding: 0;
    color: #f85858;
    cursor: pointer;
    font-family: 'PT Sans';
    font-size: 24px;
    font-weight: bold;
    text-decoration: none;
    border: none;
    border-radius: 20px;
    padding: 0.5em 1em;
    margin: 0 auto;
    width: 170px;
    height: 50px;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
`;

class Footer extends Component {

    render() {
        return (
            <Footer1>
                <div style={{
                    textAlign: 'center', margin: 'auto', padding: '18px', fontSize: '36px', fontWeight: 'normal', fontStyle: 'normal'
                }}>Learn shortcuts with HotKeys!</div>
                <Button>START</Button>
            </Footer1>
        )
    }
}
export default Footer;