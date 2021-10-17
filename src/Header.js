import React, {useState} from 'react'
import styled from 'styled-components'
import { VscMenu } from 'react-icons/vsc';
import { FiSearch} from 'react-icons/fi';
// import { HiUser} from 'react-icons/hi';
import {Link} from "react-router-dom";
import { Avatar, Menu, MenuList } from '@material-ui/core';



const Navbar = styled.div`
background: rgb(0,0,0);
// background: linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.2883362502194522) 22%, rgba(0,0,0,0.5832800704441714) 40%, rgba(0,0,0,0.8950778232531601) 66%, rgba(0,0,0,1) 88%, rgba(0,0,0,1) 100%);
height:4rem;
z-index:15;
color:white;
font:size: 14px;
display:flex;
align-items:center;
justify-content:space-between;
padding:0 20px;
z-index:10;
p{
    padding:25px 0;

    &:hover{
        color: #dcdcdc;
    }
}
`;

const Burger = styled(VscMenu )`
font-size:1.5rem;
display:none;

@media screen and (max-width: 768px) {
    display:block;
    // color:whitesmoke;
    height:25px;
    width:25px;
    margin:1px 0;
    cursor:pointer;
    
}
`;

const HeaderMenu =styled.div`
display:flex;
justify-content:space-around;

`;

const MenuItems =styled(Link)`
padding:0 1rem;
font-weight:500;
font-size:.8rem;
`;

const Logo = styled.img`
height:18px;
width: 55px;
`;

const EndIcons =styled.div`
font-size:1.4rem;
width:4.3rem;
display:flex;
justify-content:space-between;
`;

// const Avatar = styled(HiUser)`
// font-size:1.1rem;
// color:white;
// background:#4C4E52;
// border-radius:50%;
// border:3px solid #4C4E52;


// `;




const Header = ({toggle}) => {
    const [anchorEl, setAnchorEl ] = useState(null);


    const handleOpenMenu = e => {
        setAnchorEl(e.currentTarget);
    }

    const handleCloseMenu = e => {
        setAnchorEl(null);
        
    }

    return (
        <Navbar 
        
        >
            <Logo src="https://i.ibb.co/m4W4jb1/Group-1.png" alt= "tulu logo"/>
            <HeaderMenu>
            <MenuItems to="/Home">HOME</MenuItems>
            <MenuItems>TV</MenuItems>
            <MenuItems>MOVIES</MenuItems>
            <MenuItems>HULUWEEN</MenuItems>
            <MenuItems>MY STUFF</MenuItems>
            <MenuItems>HUBS</MenuItems>

            </HeaderMenu>
            <EndIcons>
            <FiSearch/>



<div>
            <Avatar
            onMouseOver={handleOpenMenu}
            onClick={handleOpenMenu}
            aria-controls="menu"
            />
            <Menu
            id="menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClick={handleCloseMenu}
            onMouseLeave={handleCloseMenu}
            

            >
                <MenuList>
                    Manage Profiles
                </MenuList>
                <MenuList>
                   Account
                </MenuList>
                <MenuList>
                    Help Center
                </MenuList>
                <MenuList>
                    Log Out
                </MenuList>
            </Menu>
           </div>





         
            </EndIcons>
            <Burger onClick={toggle}/> 
            {/* <AcctDrop>   </AcctDrop> */}
        </Navbar>
    )
}

export default Header
