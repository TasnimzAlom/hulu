import React from 'react'
import styled from 'styled-components'
import { VscMenu } from 'react-icons/vsc';

const Navbar = styled.div`
background: rgb(0,0,0);
background: linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.2883362502194522) 22%, rgba(0,0,0,0.5832800704441714) 40%, rgba(0,0,0,0.8950778232531601) 66%, rgba(0,0,0,1) 88%, rgba(0,0,0,1) 100%);
height:4rem;
z-index:15;
color:white;
font:size: 14px;
display:flex;
align-items:center;
justify-content:flex-end;
padding:0 20px;

p{
    padding:25px 0;

    &:hover{
        color: #dcdcdc;
    }
}
`;

const Burger = styled(VscMenu )`
font-size:1.5rem;
`;

const Header = () => {
    return (
        <Navbar >
            <Burger/>
            {/* <FiSearch/> */}
        </Navbar>
    )
}

export default Header
