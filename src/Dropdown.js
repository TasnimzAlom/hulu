import React from 'react'
import styled from "styled-components";
// import {Link} from "react-router-dom";
import { AiOutlineClose } from 'react-icons/ai';

const DropWrapper = styled.div`

`;
const DropContainer = styled.div`
position:fixed;
z-index:999;
width:100%;
height:100%;
background:#000;
display:grid;
align-items:center;
top:0
left:0
transition: 0.3s ease-in-out;
opacity:1;
top:0;

opacity: ${({isOpen}) => (isOpen ? "1" : "0")};

top: ${({isOpen}) => (isOpen ? "0" : "-100%")};
`;

const DropMenu =styled.div`
display:grid;
grid-template-columns:1fr;
grid-template-rows:repeat(4, 80px);
text-align:center;
margin-bottom:4rem;

@media screen and (max-width: 480px ) {
    grid-template-rows:repeat(4, 60px);
}

`;

const Icon = styled.div`
position:absolute;
top:1.2rem;
right:1.5rem;
background:transparent;
font-size:2rem;
cursor:pointer;
outline:none;
color:white;
`;

         
const CloseIcon = styled(AiOutlineClose)`
    color:white;
`;

const MenuOptions =styled.p`
display:flex;
align-items:center;
justify-content-center;
color:#fff;
text-decoration:none;
text-shadow:1px 1px 1px;
font-size:1.5rem;
list-style:none;
cursor:pointer;
transition: 0.2s ease-in-out;
&:hover{
    color:red;
}
`;

const Button= styled.button``;


const Dropdown = ({isOpen, toggle}) => {
    return (
        <DropContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
        <CloseIcon/>
        </Icon >
       
        <DropWrapper>
            <DropMenu>
              <MenuOptions>
                     <Button >
              Get the Hulu app
                </Button>

                <Button >
              Get the Hulu app
                </Button>
              </MenuOptions>
            </DropMenu>
        

             
          
        </DropWrapper>

    </DropContainer>
)
    
}

export default Dropdown
