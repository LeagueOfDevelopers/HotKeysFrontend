import React from 'react';

import styled from 'styled-components';

const Header2 = styled.h2`
  width: 100%;
  height: auto;
  margin: 0px auto 30px;
  font-family: PT Sans;
  font-weight: bold;
  font-size: ${props => props.size ? props.size : '48px'};
  color: ${props => (props.white ? 'white' : 'black')};
  //text-align: center;
`;

const BarElement = styled.div`
font-family: PT Sans;
    font-size: 24px;
    height: 100%;
    max-width: 291px;
    min-width: 291px;
    display: flex;
    flex-basis: 30%;
    flex-direction: column;
    padding: 20px 20px 0;
    color: ${props => (!props.first&&!props.last ? 'white' : 'black')};
    margin: ${props => (props.white ? '0 0 20px 0' : '5px')};
    background-image: ${props => (props.white ? 'white' : 'linear-gradient(to top, #f6836a, #f85858)')};
    border: 3px solid #f85858;
    @media (min-width: 721px){
        border-right: ${props => (props.first ? 'none' : '')};
    }
    @media (min-width: 1055px){
        border-left: ${props => (props.last ? 'none' : '')};
    }
  border-radius: 3px;
  text-align: center;
`;

const Column = styled.div`
min-width: 291px;
max-width: 291px;
height: ${props => (props.height ? props.height : 'auto')};
  `;

const Lis = styled.li`
font-family: PT Sans;
    font-size: 16px;
list-style: disc inside;

margin: 0 auto;
margin-bottom: 30px;
`;

const Button = styled.button`
    width: 207px;
    height: 46px;
    border-radius: 3px;
    background-image: ${props => (props.white ? 'white' : 'linear-gradient(to top, #f6836a, #f85858)')};
    cursor: pointer;
    font-family: 'PT Sans';
    font-size: 24px;
    font-weight: bold;
    text-decoration: none;
    border: none;
    padding: 0.5em 1em;
    margin: 30px auto;
    color: ${props => (!props.white ? 'white' : '#f85858')};
`;
const PriceColumns = (props) => {

    return (
    <>
        <BarElement white first>
        <div style={{borderBottom:'3px solid #f85858', marginBottom:'30px'}}>
            <Header2 size='24px'>Lorem ipsum dolor sit</Header2>
        </div>
            
            <Column >
            <ol >
                <Lis >
                Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.
                </Lis>
                <Lis>Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.

                </Lis>
                <Lis>
                Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.
                </Lis>
                <Lis>
                Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.
                </Lis>
            </ol>
            </Column>
            <Button href='/'>TRY FOR FREE!</Button>
        </BarElement>

        <BarElement >
        <div style={{borderBottom:'3px solid #ffffff', marginBottom:'30px'}}>
            <Header2 size='24px' white>Lorem ipsum dolor sit</Header2>
        </div>
            <Column height='350px'>
            <ul >
                <Lis >
                    Lorem ipsum dolor sit amet.
                </Lis>
                <Lis>
                    Lorem ipsum dolor sit amet.
                </Lis>
                <Lis>
                    Lorem ipsum dolor sit amet.
                </Lis>
                <Lis>
                    Lorem ipsum dolor sit amet.
                </Lis>
                <Lis >
                    Lorem ipsum dolor sit amet.
                </Lis>
                <Lis>
                    Lorem ipsum dolor sit amet.
                </Lis>
                <Lis>
                    Lorem ipsum dolor sit amet.
                </Lis>
                <Lis>
                    Lorem ipsum dolor sit amet.
                </Lis>
            </ul>
            </Column>
            <Button white href='/'>BUY</Button>
        </BarElement>

        <BarElement white last>
        <div style={{borderBottom:'3px solid #f85858', marginBottom:'30px'}}>
            <Header2 size='24px'>Lorem ipsum dolor sit</Header2>
        </div>
            <Column >
            <ol >
                <Lis >
                Lorem ipsum dolor sit amet.
                </Lis>
                <Lis>Lorem ipsum dolor sit amet.

                </Lis>
                <Lis>
                Lorem ipsum dolor sit amet.
                </Lis>
                <Lis>
                Lorem ipsum dolor sit amet.
                </Lis>
            </ol>
            </Column>
            <Button href='/'>BUY</Button>
        </BarElement>
    </>
    )
}

export default PriceColumns;