import React from "react";
import styled from "styled-components";
import logo from './Logo.svg';

const Main = styled.div `
align-items: center;
background-color: black;
color: white;
display: flex;
flex-direction: column;
padding: 10px;
`;

const Logo = styled.img `
max-width: 250px;
`;

function Header (){
    return (
        <Main>
            <Logo src={logo}/>
        </Main>
    );
};

export default Header;