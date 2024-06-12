import { theme } from "twin.macro";
import styled, { css, keyframes }  from 'styled-components'

export const IconButton = styled.div`
width: 480px;
height: 50px;
left: 825px;
top: 616px;
background: #1767FE;
border-radius: 20px;
width: 100%;

p{
  padding-top: 18px;
  font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 22px;
text-align: center;
color: #FFFFFF;
}

`;

const loaderAnimation = keyframes`
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
  `;

export const ButtonSpinner = styled.span`
  
  display: inline-block;
  position: relative;
  margin-right: 10px;
  border: 3px solid rgba(255, 255, 255, 0.2);
  border-left: 3px solid #ffffff;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation: ${loaderAnimation} 1.1s infinite linear;
  animation: ${loaderAnimation} 1.1s infinite linear;

  border-radius: 50%;
     width: 32px;
    height: 32px;
    margin-top: 8px;

  &:after {
    border-radius: 50%;
    width: 18px;
    height: 18px;
  }
`;