import React, { Component } from 'react';

import { Link } from 'react-router-dom'
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import PriceColumns from '../../components/PriceColumns/PriceColumns';
import './HomePage.css';

const Register = styled.div`
width: 434px;
height: 500px;
margin: 70px 0 30px;
border-radius: 12px;
background-color: rgba(0, 0, 0, 0.87);
`;

const Input = styled.input`
    margin-bottom: 20px;
   // padding-left:20px;

    width: 100%;
    height: 44px;
    border: none;
    border-radius: 4px;
    font-family: Montserrat;
    font-size: 18px; 
    `;
const ModalButton = styled.button`
    margin-bottom: 20px;
    width: 100%;
    height: 44px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    background-color: ${props => props.bgColor}
`;

const Container = styled.div`
    
    padding: ${props => (props.padding ? props.padding : '0 10px')};
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    max-width: ${props => (props.width ? props.width : '1085px')};
    height: ${props => (props.height ? props.height : 'auto')};
    margin: ${props => (props.margin ? props.margin : '0 auto')};

`;

const MainScreen = styled.div`
    background-color: white;
    height: auto;
    min-height: 630px;
    width: 100%;
    text-align: center;
    margin: 0 auto;
    font-family: PT Sans;
    background-image : url("../../assets/images/KeyBoard.svg");
    // background-position: 100% 0;
    // background-size:50%;
    // background-repeat:no-repeat;
    
`;

const Header2 = styled.h2`
  width: 100%;
  height: auto;
  margin: ${props => props.margin ? props.margin : '0px auto 30px'};
  font-family: PT Sans;
  font-weight: bold;
  font-size: ${props => props.fsize ? props.fsize : '48px'};
  color: black;
  text-align: center;
`;

const Paragraph = styled.p`
font-family: ${props => props.ffamily ? props.ffamily : 'PT Sans'};
font-size: ${props => props.fsize ? props.fsize : '24px'};
font-weight: ${props => props.weight ? props.weight : 'normal'};
font-style: normal;
font-stretch: normal;
line-height: normal;
letter-spacing: normal;
text-align: justify;
color: ${props => props.color ? props.color : '#000000'};
margin: ${props => props.margin ? props.margin : '0px'};
width: ${props => props.width ? props.width : 'auto'}; 
padding: ${props => props.padding ? props.padding : 'auto'};
`;

const OrangeRectangle = styled.div`
width: 100%;
  min-height: 345px;
  max-height:auto;
  background-image: linear-gradient(to top, #f6836a, #f85858);
`;

const WhiteRectangle = styled.div`
    width: 100%;
    min-height: 700px;
    max-height:auto;
    background-color: #ffffff;
`;

const HotKeysLogo = styled.span`
width: 37px;
height: 40px;
display: flex;
flex-direction: row;
font-family: Montserrat;
font-size: 40px;
padding-left: ${props => props.paddingL ? props.paddingL : "0"};
margin:${props => props.margin ? props.margin : "0"};
font-weight: ${props => props.weight ? props.weight : 'normal'};
color: ${props => props.color ? props.color : '#000000'};
${props => props.border ? {
        border: "3px solid black"
    } : null}
border-radius: 4px;
`;

const DefaultSpan = styled.span` 
color: ${props => props.color ? props.color : '#ffffff'};
font-family: Montserrat;
  font-size: 18px;
  font-weight: bold;
  display: block;
   margin: 10px auto;
`;

const FlexCenterDiv= styled.div`
    display: flex; 
    flex-wrap: wrap;
    justify-content: center;
     align-items: flex-end; 
`;

const FlexSpaceBetweenDiv= styled.div`
    display: flex; 
    flex-wrap: wrap;
    justify-content: space-between;
    @media  (max-width: 955px) {
        justify-content: center;
    }
`;

const StyledLaptopSection = styled.div`
    
    @media (max-width: 490px){
        display:none;
    }
`;

const Icon = () => <svg width="28px" height="28px" viewBox="0 0 256 262" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid">
    <g>
        <path d="M255.878,133.451 C255.878,122.717 255.007,114.884 253.122,106.761 L130.55,106.761 L130.55,155.209 L202.497,155.209 C201.047,167.249 193.214,185.381 175.807,197.565 L175.563,199.187 L214.318,229.21 L217.003,229.478 C241.662,206.704 255.878,173.196 255.878,133.451" fill="#4285F4"></path>
        <path d="M130.55,261.1 C165.798,261.1 195.389,249.495 217.003,229.478 L175.807,197.565 C164.783,205.253 149.987,210.62 130.55,210.62 C96.027,210.62 66.726,187.847 56.281,156.37 L54.75,156.5 L14.452,187.687 L13.925,189.152 C35.393,231.798 79.49,261.1 130.55,261.1" fill="#34A853"></path>
        <path d="M56.281,156.37 C53.525,148.247 51.93,139.543 51.93,130.55 C51.93,121.556 53.525,112.853 56.136,104.73 L56.063,103 L15.26,71.312 L13.925,71.947 C5.077,89.644 0,109.517 0,130.55 C0,151.583 5.077,171.455 13.925,189.152 L56.281,156.37" fill="#FBBC05"></path>
        <path d="M130.55,50.479 C155.064,50.479 171.6,61.068 181.029,69.917 L217.873,33.943 C195.245,12.91 165.798,0 130.55,0 C79.49,0 35.393,29.301 13.925,71.947 L56.136,104.73 C66.726,73.253 96.027,50.479 130.55,50.479" fill="#EB4335"></path>
    </g>
</svg>;

const Laptop = () => <svg width="458" height="283" viewBox="0 0 458 283" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="path-1-inside-1" fill="white">
<rect y="260.94" width="458" height="22" rx="3"/>
</mask>
<rect y="260.94" width="458" height="22" rx="3" stroke="url(#paint0_linear)" stroke-width="10" mask="url(#path-1-inside-1)"/>
<rect x="192.75" y="264.75" width="72.5" height="3.5" rx="1.75" stroke="url(#paint1_linear)" stroke-width="3.5"/>
<path d="M49.5 11C49.5 6.30558 53.3056 2.5 58 2.5H400C404.694 2.5 408.5 6.30558 408.5 11V259.5H49.5V11Z" stroke="url(#paint2_linear)" stroke-width="5"/>
<path d="M55 13C55 10.2386 57.2386 8 60 8H398C400.761 8 403 10.2386 403 13V262H55V13Z" stroke="url(#paint3_linear)" stroke-width="8"/>
<mask id="path-5-inside-2" fill="white">
<rect x="148.249" y="79.8267" width="40.7278" height="40.7278" rx="2"/>
</mask>
<rect x="148.249" y="79.8267" width="40.7278" height="40.7278" rx="2" stroke="url(#paint4_linear)" stroke-width="6" mask="url(#path-5-inside-2)"/>
<path d="M165.478 102.535H161.926L161.266 104.167H158.842L162.55 95.767H164.89L168.61 104.167H166.138L165.478 102.535ZM164.782 100.783L163.702 98.095L162.622 100.783H164.782ZM169.175 95.263H171.455V104.167H169.175V95.263ZM178.07 103.903C177.878 104.023 177.642 104.115 177.362 104.179C177.09 104.243 176.798 104.275 176.486 104.275C175.638 104.275 174.986 104.067 174.53 103.651C174.074 103.235 173.846 102.615 173.846 101.791V99.607H172.898V97.903H173.846V96.211H176.126V97.903H177.614V99.607H176.126V101.767C176.126 101.999 176.186 102.183 176.306 102.319C176.434 102.447 176.602 102.511 176.81 102.511C177.074 102.511 177.306 102.443 177.506 102.307L178.07 103.903Z" fill="url(#paint5_linear)"/>
<rect x="205.395" y="94.4883" width="2.94983" height="12.6843" rx="1.47492" fill="url(#paint6_linear)"/>
<rect x="213.065" y="99.5029" width="2.94983" height="12.6843" rx="1.47492" transform="rotate(90 213.065 99.5029)" fill="url(#paint7_linear)"/>
<rect x="289.633" y="97.7466" width="2.94983" height="12.6843" rx="1.47492" transform="rotate(90 289.633 97.7466)" fill="url(#paint8_linear)"/>
<rect x="289.633" y="103.056" width="2.94983" height="12.6843" rx="1.47492" transform="rotate(90 289.633 103.056)" fill="url(#paint9_linear)"/>
<mask id="path-11-inside-3" fill="white">
<rect x="224.818" y="79.8267" width="40.7278" height="40.7278" rx="2"/>
</mask>
<rect x="224.818" y="79.8267" width="40.7278" height="40.7278" rx="2" stroke="url(#paint10_linear)" stroke-width="6" mask="url(#path-11-inside-3)"/>
<path d="M247.032 99.787H249.132V103.267C248.652 103.611 248.1 103.875 247.476 104.059C246.852 104.243 246.228 104.335 245.604 104.335C244.724 104.335 243.932 104.151 243.228 103.783C242.524 103.407 241.972 102.887 241.572 102.223C241.172 101.559 240.972 100.807 240.972 99.967C240.972 99.127 241.172 98.375 241.572 97.711C241.972 97.047 242.528 96.531 243.24 96.163C243.952 95.787 244.756 95.599 245.652 95.599C246.436 95.599 247.14 95.731 247.764 95.995C248.388 96.259 248.908 96.639 249.324 97.135L247.812 98.503C247.244 97.879 246.564 97.567 245.772 97.567C245.052 97.567 244.472 97.787 244.032 98.227C243.592 98.659 243.372 99.239 243.372 99.967C243.372 100.431 243.472 100.847 243.672 101.215C243.872 101.575 244.152 101.859 244.512 102.067C244.872 102.267 245.284 102.367 245.748 102.367C246.204 102.367 246.632 102.275 247.032 102.091V99.787Z" fill="url(#paint11_linear)"/>
<path d="M307.421 104.354C307.421 103.394 307.577 102.554 307.889 101.834C308.225 101.09 308.621 100.466 309.077 99.9621C309.557 99.4581 310.181 98.8581 310.949 98.1621C311.909 97.3221 312.617 96.6021 313.073 96.0021C313.529 95.3781 313.757 94.6341 313.757 93.7701C313.757 92.5941 313.301 91.6581 312.389 90.9621C311.477 90.2421 310.217 89.8821 308.609 89.8821C305.801 89.8821 303.653 90.8301 302.165 92.7261L299.537 90.8541C300.545 89.5581 301.829 88.5621 303.389 87.8661C304.973 87.1701 306.797 86.8221 308.861 86.8221C311.477 86.8221 313.553 87.3981 315.089 88.5501C316.625 89.6781 317.393 91.2381 317.393 93.2301C317.393 94.2141 317.225 95.0901 316.889 95.8581C316.577 96.6021 316.193 97.2261 315.737 97.7301C315.281 98.2341 314.669 98.8341 313.901 99.5301C312.917 100.418 312.185 101.198 311.705 101.87C311.249 102.542 311.021 103.37 311.021 104.354H307.421ZM309.257 112.526C308.585 112.526 308.021 112.31 307.565 111.878C307.133 111.422 306.917 110.87 306.917 110.222C306.917 109.574 307.133 109.034 307.565 108.602C308.021 108.146 308.585 107.918 309.257 107.918C309.929 107.918 310.481 108.146 310.913 108.602C311.345 109.034 311.561 109.574 311.561 110.222C311.561 110.87 311.333 111.422 310.877 111.878C310.445 112.31 309.905 112.526 309.257 112.526Z" fill="url(#paint12_linear)"/>
<rect x="164.412" y="144.862" width="128.958" height="8.40378" rx="4.20189" fill="url(#paint13_linear)" stroke="url(#paint14_linear)" stroke-width="3"/>
<rect x="164.411" y="162.782" width="128.958" height="8.40378" rx="4.20189" fill="url(#paint15_linear)" stroke="url(#paint16_linear)" stroke-width="3"/>
<rect x="164.411" y="180.702" width="128.958" height="8.40378" rx="4.20189" fill="url(#paint17_linear)" stroke="url(#paint18_linear)" stroke-width="3"/>
<rect x="164.411" y="198.623" width="128.958" height="8.40378" rx="4.20189" fill="url(#paint19_linear)" stroke="url(#paint20_linear)" stroke-width="3"/>
<rect x="318.142" y="17" width="44.2857" height="10" rx="5" fill="url(#paint21_linear)"/>
<rect x="371.286" y="17" width="17.7143" height="10" rx="5" fill="url(#paint22_linear)"/>
<rect x="265" y="17" width="44.2857" height="10" rx="5" fill="url(#paint23_linear)"/>
<path d="M51 9C51 6.23858 53.2386 4 56 4H402C404.761 4 407 6.23857 407 9V33H51V9Z" stroke="url(#paint24_linear)" stroke-width="2"/>
<circle cx="229" cy="6" r="3" stroke="white" stroke-width="2"/>
<circle cx="229" cy="6" r="0.5" stroke="white"/>
<rect x="72" y="15" width="57" height="45" fill="white"/>
<path d="M100.181 60.4272L76.1807 32.8167L86.4664 19.0115L100.181 17.4272L113.895 19.0115L124.181 32.8167L100.181 60.4272Z" fill="url(#paint25_linear)"/>
<path d="M76.1807 32.8167L100.181 60.4272M76.1807 32.8167L86.4664 19.0115M76.1807 32.8167H85.7807M100.181 60.4272L124.181 32.8167M100.181 60.4272L85.7807 32.8167M100.181 60.4272L114.352 32.8167M124.181 32.8167L113.895 19.0115M124.181 32.8167H114.352M113.895 19.0115L100.181 17.4272M113.895 19.0115L114.352 32.8167M100.181 17.4272L86.4664 19.0115M100.181 17.4272L85.7807 32.8167M100.181 17.4272L114.352 32.8167M86.4664 19.0115L85.7807 32.8167M85.7807 32.8167H114.352" stroke="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M362.559 241L381 223.5L362.559 206V214.609H343V232.391H362.559V241Z" fill="url(#paint26_linear)"/>
<defs>
<linearGradient id="paint0_linear" x1="161.582" y1="273.981" x2="356.554" y2="419.17" gradientUnits="userSpaceOnUse">
<stop stop-color="#F6836A"/>
<stop offset="1" stop-color="#F85858"/>
</linearGradient>
<linearGradient id="paint1_linear" x1="217.813" y1="267.149" x2="261.516" y2="284.122" gradientUnits="userSpaceOnUse">
<stop stop-color="#F6836A"/>
<stop offset="1" stop-color="#F85858"/>
</linearGradient>
<linearGradient id="paint2_linear" x1="175.419" y1="155.301" x2="415.709" y2="167.243" gradientUnits="userSpaceOnUse">
<stop stop-color="#F6836A"/>
<stop offset="1" stop-color="#F85858"/>
</linearGradient>
<linearGradient id="paint3_linear" x1="176.596" y1="159.301" x2="411.631" y2="170.725" gradientUnits="userSpaceOnUse">
<stop stop-color="#F6836A"/>
<stop offset="1" stop-color="#F85858"/>
</linearGradient>
<linearGradient id="paint4_linear" x1="162.618" y1="103.968" x2="189.536" y2="104.931" gradientUnits="userSpaceOnUse">
<stop stop-color="#F6836A"/>
<stop offset="1" stop-color="#F85858"/>
</linearGradient>
<linearGradient id="paint5_linear" x1="163.577" y1="102.975" x2="186.175" y2="103.95" gradientUnits="userSpaceOnUse">
<stop stop-color="#F6836A"/>
<stop offset="1" stop-color="#F85858"/>
</linearGradient>
<linearGradient id="paint6_linear" x1="206.436" y1="102.007" x2="208.388" y2="102.023" gradientUnits="userSpaceOnUse">
<stop stop-color="#F6836A"/>
<stop offset="1" stop-color="#F85858"/>
</linearGradient>
<linearGradient id="paint7_linear" x1="214.106" y1="107.022" x2="216.058" y2="107.038" gradientUnits="userSpaceOnUse">
<stop stop-color="#F6836A"/>
<stop offset="1" stop-color="#F85858"/>
</linearGradient>
<linearGradient id="paint8_linear" x1="290.674" y1="105.265" x2="292.626" y2="105.281" gradientUnits="userSpaceOnUse">
<stop stop-color="#F6836A"/>
<stop offset="1" stop-color="#F85858"/>
</linearGradient>
<linearGradient id="paint9_linear" x1="290.674" y1="110.575" x2="292.626" y2="110.591" gradientUnits="userSpaceOnUse">
<stop stop-color="#F6836A"/>
<stop offset="1" stop-color="#F85858"/>
</linearGradient>
<linearGradient id="paint10_linear" x1="239.186" y1="103.968" x2="266.104" y2="104.931" gradientUnits="userSpaceOnUse">
<stop stop-color="#F6836A"/>
<stop offset="1" stop-color="#F85858"/>
</linearGradient>
<linearGradient id="paint11_linear" x1="240.146" y1="102.975" x2="262.744" y2="103.95" gradientUnits="userSpaceOnUse">
<stop stop-color="#F6836A"/>
<stop offset="1" stop-color="#F85858"/>
</linearGradient>
<linearGradient id="paint12_linear" x1="305.695" y1="104.211" x2="322.939" y2="104.52" gradientUnits="userSpaceOnUse">
<stop stop-color="#F6836A"/>
<stop offset="1" stop-color="#F85858"/>
</linearGradient>
<linearGradient id="paint13_linear" x1="209.467" y1="150.121" x2="284.02" y2="180.98" gradientUnits="userSpaceOnUse">
<stop stop-color="#F6836A"/>
<stop offset="1" stop-color="#F85858"/>
</linearGradient>
<linearGradient id="paint14_linear" x1="209.467" y1="150.121" x2="284.02" y2="180.98" gradientUnits="userSpaceOnUse">
<stop stop-color="#F6836A"/>
<stop offset="1" stop-color="#F85858"/>
</linearGradient>
<linearGradient id="paint15_linear" x1="209.466" y1="168.042" x2="284.019" y2="198.9" gradientUnits="userSpaceOnUse">
<stop stop-color="#F6836A"/>
<stop offset="1" stop-color="#F85858"/>
</linearGradient>
<linearGradient id="paint16_linear" x1="209.466" y1="168.042" x2="284.019" y2="198.9" gradientUnits="userSpaceOnUse">
<stop stop-color="#F6836A"/>
<stop offset="1" stop-color="#F85858"/>
</linearGradient>
<linearGradient id="paint17_linear" x1="209.466" y1="185.962" x2="284.019" y2="216.82" gradientUnits="userSpaceOnUse">
<stop stop-color="#F6836A"/>
<stop offset="1" stop-color="#F85858"/>
</linearGradient>
<linearGradient id="paint18_linear" x1="209.466" y1="185.962" x2="284.019" y2="216.82" gradientUnits="userSpaceOnUse">
<stop stop-color="#F6836A"/>
<stop offset="1" stop-color="#F85858"/>
</linearGradient>
<linearGradient id="paint19_linear" x1="209.466" y1="203.882" x2="284.019" y2="234.74" gradientUnits="userSpaceOnUse">
<stop stop-color="#F6836A"/>
<stop offset="1" stop-color="#F85858"/>
</linearGradient>
<linearGradient id="paint20_linear" x1="209.466" y1="203.882" x2="284.019" y2="234.74" gradientUnits="userSpaceOnUse">
<stop stop-color="#F6836A"/>
<stop offset="1" stop-color="#F85858"/>
</linearGradient>
<linearGradient id="paint21_linear" x1="333.766" y1="22.9275" x2="362.355" y2="27.4564" gradientUnits="userSpaceOnUse">
<stop stop-color="#F6836A"/>
<stop offset="1" stop-color="#F85858"/>
</linearGradient>
<linearGradient id="paint22_linear" x1="377.536" y1="22.9275" x2="389.212" y2="23.6674" gradientUnits="userSpaceOnUse">
<stop stop-color="#F6836A"/>
<stop offset="1" stop-color="#F85858"/>
</linearGradient>
<linearGradient id="paint23_linear" x1="280.624" y1="22.9275" x2="309.213" y2="27.4564" gradientUnits="userSpaceOnUse">
<stop stop-color="#F6836A"/>
<stop offset="1" stop-color="#F85858"/>
</linearGradient>
<linearGradient id="paint24_linear" x1="176.302" y1="21.3754" x2="378.681" y2="104.975" gradientUnits="userSpaceOnUse">
<stop stop-color="#F6836A"/>
<stop offset="1" stop-color="#F85858"/>
</linearGradient>
<linearGradient id="paint25_linear" x1="93.115" y1="42.9157" x2="124.829" y2="44.182" gradientUnits="userSpaceOnUse">
<stop stop-color="#F6836A"/>
<stop offset="1" stop-color="#F85858"/>
</linearGradient>
<linearGradient id="paint26_linear" x1="356.406" y1="226.746" x2="381.516" y2="227.722" gradientUnits="userSpaceOnUse">
<stop stop-color="#F6836A"/>
<stop offset="1" stop-color="#F85858"/>
</linearGradient>
</defs>
</svg>



class HomePage extends Component {

    render() {
        return (
            <div>
                <Container width='1085px'>
                <MainScreen>
                    
                    <FlexSpaceBetweenDiv >
                    <Container width='500px' margin='0px'>
                        <div style={{ display: "flex",margin:'30px 0 0 0' }}>
                            <HotKeysLogo paddingL='3px' border color="#f25634">H</HotKeysLogo>

                            <HotKeysLogo>ot</HotKeysLogo>
                        </div>


                        <div style={{ display: "flex", margin: "0px 0px 30px 45px"}}>
                            <HotKeysLogo paddingL='5px' border color="#f25634">K</HotKeysLogo>

                            <HotKeysLogo>eys</HotKeysLogo>
                        </div>

                        <Header2>Learn shortcuts with HotKeys</Header2>
                        <Paragraph margin='0px 0px 30px 0px'>
                        Hot Keys is a new service for people who want to do their work in programs faster and more efficiently. Find out how it looks in the demo version without registering right in your browser!
                        </Paragraph>


                        <Link to='/try'>
                            <button style={{border:"none", backgroundColor: "transparent", cursor:"pointer", position: 'relative', float: 'right'}}>
                                <svg width="218" height="129" viewBox="0 0 218 129" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M218 119L218 43.9449L218 43.9449L218 10C218 4.47715 213.523 -1.95102e-07 208 -4.35766e-07L115.96 -4.44649e-06C110.437 -4.68716e-06 105.96 4.47714 105.96 9.99999L105.96 43.9449L10 43.9449C4.47716 43.9449 -2.12317e-06 48.4221 -2.36533e-06 53.9449L-5.21781e-06 119C-5.45997e-06 124.523 4.47715 129 9.99999 129L208 129C213.523 129 218 124.523 218 119Z" fill="url(#paint0_linear)"/>
                                <path d="M137.723 87.488C137.723 86.976 137.531 86.56 137.147 86.24C136.779 85.92 136.307 85.632 135.731 85.376C135.171 85.104 134.555 84.832 133.883 84.56C133.227 84.272 132.611 83.928 132.035 83.528C131.475 83.112 131.003 82.6 130.619 81.992C130.251 81.384 130.067 80.608 130.067 79.664C130.067 78.848 130.203 78.144 130.475 77.552C130.747 76.944 131.131 76.44 131.627 76.04C132.139 75.64 132.739 75.344 133.427 75.152C134.115 74.96 134.883 74.864 135.731 74.864C136.707 74.864 137.627 74.952 138.491 75.128C139.355 75.288 140.067 75.528 140.627 75.848L139.595 78.608C139.243 78.384 138.715 78.184 138.011 78.008C137.307 77.816 136.547 77.72 135.731 77.72C134.963 77.72 134.371 77.872 133.955 78.176C133.555 78.48 133.355 78.888 133.355 79.4C133.355 79.88 133.539 80.28 133.907 80.6C134.291 80.92 134.763 81.216 135.323 81.488C135.899 81.76 136.515 82.04 137.171 82.328C137.843 82.616 138.459 82.968 139.019 83.384C139.595 83.784 140.067 84.288 140.435 84.896C140.819 85.488 141.011 86.232 141.011 87.128C141.011 88.024 140.859 88.8 140.555 89.456C140.267 90.096 139.851 90.632 139.307 91.064C138.779 91.496 138.131 91.816 137.363 92.024C136.611 92.232 135.779 92.336 134.867 92.336C133.667 92.336 132.611 92.224 131.699 92C130.787 91.776 130.115 91.552 129.683 91.328L130.739 88.52C130.915 88.616 131.139 88.72 131.411 88.832C131.699 88.944 132.019 89.048 132.371 89.144C132.723 89.24 133.091 89.32 133.475 89.384C133.875 89.448 134.283 89.48 134.699 89.48C135.675 89.48 136.419 89.32 136.931 89C137.459 88.664 137.723 88.16 137.723 87.488ZM155.13 78.128H150.234V92H146.946V78.128H142.026V75.2H155.13V78.128ZM163.247 88.28H158.087L156.815 92H153.527L159.575 75.08H161.999L168.047 92H164.591L163.247 88.28ZM158.927 85.64H162.527L161.279 81.896L160.775 79.256H160.655L160.151 81.92L158.927 85.64ZM169.499 75.368C169.867 75.304 170.259 75.248 170.675 75.2C171.107 75.136 171.531 75.088 171.947 75.056C172.379 75.024 172.795 75 173.195 74.984C173.595 74.968 173.963 74.96 174.299 74.96C175.083 74.96 175.851 75.032 176.603 75.176C177.371 75.32 178.051 75.568 178.643 75.92C179.251 76.272 179.731 76.76 180.083 77.384C180.451 77.992 180.635 78.76 180.635 79.688C180.635 81.064 180.315 82.184 179.675 83.048C179.035 83.912 178.179 84.512 177.107 84.848L178.283 85.592L182.123 92H178.331L174.515 85.424L172.787 85.112V92H169.499V75.368ZM174.539 77.888C174.203 77.888 173.867 77.896 173.531 77.912C173.211 77.928 172.963 77.96 172.787 78.008V82.88H174.179C175.091 82.88 175.819 82.672 176.363 82.256C176.907 81.84 177.179 81.152 177.179 80.192C177.179 79.472 176.955 78.912 176.507 78.512C176.059 78.096 175.403 77.888 174.539 77.888ZM194.692 78.128H189.796V92H186.508V78.128H181.588V75.2H194.692V78.128Z" fill="white"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M117 75H120V92H117H70.25V96.9952L59 90.5L70.25 84.0048V89L117 89V75Z" fill="white"/>
                                <defs>
                                <linearGradient id="paint0_linear" x1="88.7797" y1="45.511" x2="86.9736" y2="130.841" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#F6836A"/>
                                <stop offset="1" stop-color="#F85858"/>
                                </linearGradient>
                                </defs>
                                </svg>
                            </button>
                        </Link>
                    </Container>
                    <Register >
                    
                        <Container width='370px'>

                            <p style={{ color: 'white', fontFamily: 'Montserrat', fontSize: 24, textAlign: 'left', margin: '20px 0 5px 0' }}>Sign up</p>
                            <p style={{ color: 'white', fontFamily: 'Montserrat', marginBottom: '20px', textAlign: 'left' }}>or
                            <a
                                    style={{ color: '#f25634', textDecoration: 'none', cursor: 'pointer' }}
                                    onClick={(event) => { this.closeRgModal(); this.openSignInModal() }}> sign in
                            </a> to your account
                        </p>

                            <Input placeholder="   E-mail" onChange={this.handleChange} />
                            <br />
                            <Input placeholder="   Password" onChange={this.handleChange} />
                            <br />
                            <ModalButton bgColor={'#f25634'} onClick={this.openModal}>
                            <DefaultSpan>CREATE ACCOUNT</DefaultSpan>
                            </ModalButton>
                            <br />
                            <ModalButton bgColor={'#3b5998'} onClick={this.closeModal}>
                            <i class="fab fa-facebook-square fa-3x" style={{color:'white', float:'left', margin: '5px 0px 0px 14px'}}></i>
                            <DefaultSpan>Continue with Facebook</DefaultSpan>
                            </ModalButton>
                            <br />
                            <ModalButton bgColor={'#ffffff'} onClick={this.closeModal}>
                            <div style={{float:'left' , marginLeft: '14px', margin: '6px 0px 0px 14px'}}> <Icon /></div>
                            <DefaultSpan color='black'>Log in with Google</DefaultSpan>
                            </ModalButton>
                            <br />
                            <ModalButton bgColor={'#4680c2'} onClick={this.closeModal}>
                            <i class="fab fa-vk fa-3x" style={{color:'white', float:'left', margin: '5px 0px 0px 14px'}}></i>
                            <DefaultSpan>Continue with VK</DefaultSpan>
                            </ModalButton>
                        </Container>
                    </Register>
                    </FlexSpaceBetweenDiv>
                    
                </MainScreen>
                </Container>
                <OrangeRectangle>
                    <Container width='1085px'>
                    <FlexSpaceBetweenDiv>
                        <div style={{padding:'30px 0 0 0'}}>
                           <svg width="267" height="255" viewBox="0 0 267 255" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="3.5" y="152.5" width="99" height="99" rx="11.5" stroke="white" stroke-width="7"/>
                            <path d="M36.4636 213.42C34.2636 213.42 32.2836 212.96 30.5236 212.04C28.7836 211.1 27.4136 209.8 26.4136 208.14C25.4136 206.48 24.9136 204.6 24.9136 202.5C24.9136 200.4 25.4136 198.52 26.4136 196.86C27.4136 195.2 28.7836 193.91 30.5236 192.99C32.2836 192.05 34.2636 191.58 36.4636 191.58C38.3836 191.58 40.1136 191.92 41.6536 192.6C43.1936 193.28 44.4736 194.26 45.4936 195.54L41.7136 198.96C40.3536 197.32 38.7036 196.5 36.7636 196.5C35.6236 196.5 34.6036 196.75 33.7036 197.25C32.8236 197.75 32.1336 198.46 31.6336 199.38C31.1536 200.28 30.9136 201.32 30.9136 202.5C30.9136 203.68 31.1536 204.73 31.6336 205.65C32.1336 206.55 32.8236 207.25 33.7036 207.75C34.6036 208.25 35.6236 208.5 36.7636 208.5C38.7036 208.5 40.3536 207.68 41.7136 206.04L45.4936 209.46C44.4736 210.74 43.1936 211.72 41.6536 212.4C40.1136 213.08 38.3836 213.42 36.4636 213.42ZM59.092 212.34C58.612 212.64 58.022 212.87 57.322 213.03C56.642 213.19 55.912 213.27 55.132 213.27C53.012 213.27 51.382 212.75 50.242 211.71C49.102 210.67 48.532 209.12 48.532 207.06V201.6H46.162V197.34H48.532V193.11H54.232V197.34H57.952V201.6H54.232V207C54.232 207.58 54.382 208.04 54.682 208.38C55.002 208.7 55.422 208.86 55.942 208.86C56.602 208.86 57.182 208.69 57.682 208.35L59.092 212.34ZM66.72 198.69C67.3 197.95 68.05 197.4 68.97 197.04C69.91 196.66 70.98 196.47 72.18 196.47V201.6C71.66 201.54 71.23 201.51 70.89 201.51C69.67 201.51 68.71 201.84 68.01 202.5C67.33 203.16 66.99 204.17 66.99 205.53V213H61.29V196.74H66.72V198.69ZM74.5321 190.74H80.2321V213H74.5321V190.74Z" fill="white"/>
                            <rect x="129" y="106" width="10" height="43" rx="3" fill="white"/>
                            <rect x="155" y="123" width="10" height="43" rx="3" transform="rotate(90 155 123)" fill="white"/>
                            <rect x="164.5" y="3.5" width="99" height="99" rx="11.5" stroke="white" stroke-width="7"/>
                            <path d="M215.895 68.3967C213.108 68.3967 210.6 67.8141 208.371 66.6487C206.167 65.4581 204.431 63.8114 203.165 61.7087C201.898 59.6061 201.265 57.2247 201.265 54.5647C201.265 51.9047 201.898 49.5234 203.165 47.4207C204.431 45.3181 206.167 43.6841 208.371 42.5187C210.6 41.3281 213.108 40.7327 215.895 40.7327C218.327 40.7327 220.518 41.1634 222.469 42.0247C224.419 42.8861 226.041 44.1274 227.333 45.7487L222.545 50.0807C220.822 48.0034 218.732 46.9647 216.275 46.9647C214.831 46.9647 213.539 47.2814 212.399 47.9147C211.284 48.5481 210.41 49.4474 209.777 50.6127C209.169 51.7527 208.865 53.0701 208.865 54.5647C208.865 56.0594 209.169 57.3894 209.777 58.5547C210.41 59.6947 211.284 60.5814 212.399 61.2147C213.539 61.8481 214.831 62.1647 216.275 62.1647C218.732 62.1647 220.822 61.1261 222.545 59.0487L227.333 63.3807C226.041 65.0021 224.419 66.2434 222.469 67.1047C220.518 67.9661 218.327 68.3967 215.895 68.3967Z" fill="white"/>
                            </svg>
                        </div>
                    
                        <Paragraph ffamily='Montserrat' padding='30px 0px 0px 10px' width='600px'>
                            Why HotKeys? Whether you are a programmer or designer, or just often work in text editors - speed is important for you. And HotKeys are the thing that helps speed up any task. Helping you remember shortcuts is the task of our project and this is how it works.
                        <br/>
                        <Paragraph ffamily='Montserrat' color='#ffffff' weight='bold' padding='25px 0'>
                        <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="21.5" cy="21.5" r="21.5" fill="white"/>
                        <path d="M30.5957 21.4998L16.9515 31.5257L16.9515 11.4739L30.5957 21.4998Z" fill="#F25634"/>
                        </svg>
                        <span style={{margin:'0 20px', paddingBottom:'1em'}}>That’s how HotKeys works</span>
                            </Paragraph>
                        </Paragraph>

                    </FlexSpaceBetweenDiv> 
                    </Container>    
                    </OrangeRectangle>

                
                <WhiteRectangle>
                    <Container width='1085px' margin='30px auto'>
                        <Header2 margin='60px auto 90px'>How can you learn and play at one time? </Header2>
                        <FlexCenterDiv>
                        <Container width='290px' height='500px' margin='0'>
                        <div style={{ display: "flex",flexDirection: 'column', alignContent:'space-between'}}>
                            

                            <Paragraph fsize='16px' margin='0px auto 100px'>
                            <Header2 fsize='24px' margin='0 auto 5px'>Lorem ipsum dolor sit amet</Header2>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </Paragraph>

                            
                            <Paragraph fsize='16px' margin='0px auto 100px'>
                            <Header2 fsize='24px' margin='0 auto 5px'>Lorem ipsum dolor sit amet</Header2>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </Paragraph>
                        </div>
                        </Container>
                        <StyledLaptopSection>
                        <Container width='478px' height='auto' margin='0' padding='0px 10px 100px'>
                        <Laptop />
                        </Container>
                        </StyledLaptopSection>
                        <Container width='290px' height='500px' margin='0'>
                            <div style={{ display: "flex",flexDirection: 'column', alignContent:'space-between'}}>
                                <Paragraph fsize='16px' margin='0px auto 100px'>
                                <Header2 fsize='24px' margin='0 auto 5px'>Lorem ipsum dolor sit amet</Header2>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </Paragraph>
                                
                                <Paragraph fsize='16px' margin='0px auto 100px'>
                                <Header2 fsize='24px' margin='0 auto 5px'>Lorem ipsum dolor sit amet</Header2>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </Paragraph>
                            </div>
                        </Container>
                        </FlexCenterDiv>
                    </Container>
                
                </WhiteRectangle>
                
                <OrangeRectangle>
                dfghjkl;
                </OrangeRectangle>
                
                <WhiteRectangle>
                        <Container padding='30px 10px 10px'>
                            <Header2>
                                Сhoose your training format!
                            </Header2>
                            <Container>
                            <FlexCenterDiv>
                                <PriceColumns /> 
                            </FlexCenterDiv>
                            </Container>
                        </Container>
                </WhiteRectangle>

                        


            </div>
        )
    }
}           
export default HomePage;