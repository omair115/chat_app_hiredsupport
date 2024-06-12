import { theme } from "twin.macro";
import styled from 'styled-components'

export const ChatRight = styled.div`
display: inline-block;
max-width: 60%;
min-height:50px;
height: auto;
background: #0C1525;
border-radius: 10px;
p {
padding: 14px;
font-style: normal;
font-weight: 400;
font-size: 14px;
color: #818A9C;
word-wrap: break-word
}
`;

export const ChatLeft = styled.div`
display: inline-block;
max-width: 70%;
min-height:50px;
height: auto;
background: #1767FE;
border-radius: 20px;
}

p {
padding: 14px;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 150%;
color: #FFFFFF;
}
`;

export const ChatFooter = styled.div`
margin-top: auto;
background: #09101C;
box-shadow: 0px -21px 30px rgba(0, 0, 0, 0.25);
`;

export const Header = styled.div`
position: fixed;
top: 0;
right: 0;
width: 100%;
height: 80px;
background: black;
box-shadow: 0px -21px 30px rgba(0, 0, 0, 0.25);

img {
     position: absolute;
     margin-top:16px;
     margin-right: 16px;
     top: 0;
     right: 0;
}

p {
    padding-top:16px;
    padding-left: 16px;
    position: absolute;
    top: 0;
    left: 0;
    color: white;
font-style: normal;
font-weight: 700;
font-size: 22px;
line-height: 27px;
}
`;







