import React, {useState} from 'react'
import {Snackbar } from '@material-ui/core';
import {GrClose} from "react-icons/gr"
import styled, {keyframes} from 'styled-components'
import { BsChevronDown } from 'react-icons/bs';
import {Link} from 'react-scroll'



const Part2 = styled.section`
background:#151516;

`;

const Limited =styled.div`
padding:3rem  1rem 1rem 1rem;
margin:1rem;
text-align:center;
border:4px solid #1CE783;
border-radius:16px;
box-sizing:border-box;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
height:100%;

@media only screen and (min-width: 700px) {
    margin:2.5rem 1rem;
   padding:100px;
  }

  @media only screen and (min-width: 1200px) {
    padding:2rem 15rem;
   
   }
`;

const LimitedTxt = styled.p`
color: #00ED82;
`;

const LimitedTxt1 = styled.h1`
font-size:2rem;
font-weight:900;
padding:1rem 0;

@media only screen and (min-width: 700px) {
    font-size:3rem;
   }

@media only screen and (min-width: 1200px) {
   font-size:3.5rem;
  }
`;

const LimitedTxt2 =styled.p`
font-weight:400;
line-height:1.5rem;
padding:1rem 0rem;

@media only screen and (min-width: 700px) {
    font-size:1rem;
   }

@media only screen and (min-width: 1200px) {
    font-size:1.5rem;
    text-align:center;

   }
`;

const LimitedTxt5 =styled.p`
font-weight:400;
line-height:1.5rem;
padding:1rem 0rem;

@media only screen and (min-width: 700px) {
    font-size:1rem;
   }

@media only screen and (min-width: 1200px) {
    font-size:1.5rem;
    padding:1rem 10rem;
    padding-left:0;
    text-align:left;

   }
`;

const LimitedTxt3 =styled.p`
font-size:10px;
line-height:1rem;
padding:1rem 0;

span{
    text-decoration:underline;
    

}

@media only screen and (min-width: 1200px) {
    line-height:2rem;
    // padding:1rem 10rem;
   }
`;

const LimitedTxt4 =styled.p`
font-size:10px;
line-height:1rem;
padding-bottom:13rem;
span{
    text-decoration:underline;
    cursor:pointer;

}
`;


const ViewChan = styled.p`
text-decoration:underline;
font-size:12px;
font-weight:400;
padding-bottom:2rem;
cursor:pointer;

&:hover{
    color:grey;
}

@media only screen and (min-width: 1200px) {
    font-size:1.1rem;
    padding-bottom:5rem;
   }
`;

const BounceAnimation = keyframes`
  0% {bottom: 0; }
  50% { bottom: 10px }
  100% { bottom: 0 }



`;

const Arrow = styled.div`
position:relative;
animation:${BounceAnimation} .99s linear infinite;
font-size:1.5rem;
cursor:pointer;



`;



const Sports = styled.section`
background-image: url("https://i.ibb.co/d20y7ht/newball.png");
background-repeat:no-repeat;
background-size:cover;
display:flex;
justify-content:center;
flex-direction:column;
padding:.3rem 1rem;
text-align:center;



@media only screen and (min-width: 390px) {
    background-image: url("https://i.ibb.co/Z2d5xxn/d56f7c84-2513-454b-af35-171501309edc.png");
    background-size:100% ;
  }

  @media only screen and (min-width: 700px) {
    background-image: url("https://i.ibb.co/6PKWKCS/a2b6156e-a467-4461-9743-bd9712baf4f1.png");
    background-size:100% ;
    display:grid;
    grid-template-columns: .5fr 1fr 1fr;
    text-align:left;
    align-items:flex-end;
    
 

  }

`;



const SportCircle =styled.img`
background:white;
height:35px;
width:35px;
border-radius:50%;
padding:8px;
margin:10px;


`;

const Circles =styled.div`
display:flex;
justify-content:center;
flex-direction:row;

@media only screen and (min-width: 700px) {
    display:flex;
    justify-content: flex-start;

  }
`;

const SportLinks = styled.div`
display:flex;
justify-content:center;
font-size:13px;
align-items:center;
padding:1.5rem 0;

span{
    border-bottom:6px white solid;
    padding-bottom:.5rem;
}

@media only screen and (min-width: 700px) {
    display:flex;
    justify-content: flex-start;

  }
`;

const LiveLink = styled.h3`
padding:1rem;
cursor:pointer;

&:hover{
    color:grey;
}

`;

const Landing2 = () => {
    const [open, setOpen] =useState(false);

    const handleClick = () => {
      setOpen(true);
    };
  
    const handleClose = ( reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };


    const action = (
        <React.Fragment>
          
         
            <GrClose fontSize="small" onClick={handleClose} />
          
        </React.Fragment>
      );

     

    return (
        <Part2 >
      
            <Limited>
                <LimitedTxt>Tulu + LIVE TV</LimitedTxt>
                <LimitedTxt1>Limited-Time Savings</LimitedTxt1>
                <LimitedTxt2>Save $10/month for 3 months on Tulu + Live TV. Just $54.99/mo for your first 3 months (after 7 day free trial, if eligible), then $64.99/mo. Cancel anytime.</LimitedTxt2>
                <LimitedTxt3>Offer for Tulu (ad-supported) + Live TV plan only. $54.99/month for 3 months, then $64.99/month. Ends 11:59 PM PST on 10/28/21. Tulu + Live TV discount offer valid for new and eligible returning subscribers (who have not had Tulu in the past 3 months) only. Tulu + Live TV free trial offer valid for new and eligible returning subscribers (who have not taken a free trial of Tulu in the past 12 months) only.<span> Additional terms apply.</span></LimitedTxt3>
                <ViewChan onClick={handleClick}>VIEW CHANNELS IN YOUR AREA →</ViewChan>
                <Snackbar
                className="snackbar"
                  open={open}
                  autoHideDuration={3000}
                  onClose={handleClose}
                  message="Just Kidding"
                  action={action}
                  severity="success"
                  sx={{
                    background: "success.main",
                  }}
                />
                <Arrow>
                  <Link 
                  to="sports-section" 
                  spy={true} 
                  smooth={true}
                  > 
                  <BsChevronDown/>
                  </Link>
                </Arrow>

            </Limited>
            <Sports id="sports-section">
                <div></div>
                <div>
                <SportLinks>
                <LiveLink onClick={handleClick}><span>Live Sports</span></LiveLink>
                <LiveLink onClick={handleClick}>Breaking News</LiveLink>
                


                </SportLinks>
            <LimitedTxt1>Live Sports</LimitedTxt1>
            <LimitedTxt5>Catch your games at home or on the go. Stream live games from major college and pro leagues including the NCAA®, NBA, NHL, NFL, and more.</LimitedTxt5>
            <Circles>
            <SportCircle src= "https://i.ibb.co/09vrGPN/cka35rzv205t90wgfxa4wz4q5-cbs-sports-network-logo-1.png" alt="sports channel"/>


            <SportCircle src=    "https://i.ibb.co/yhr8SNd/cka358szb054x0whh8qejv0m9-espn-network-logo.png"  alt="sports channel"/>

            
            <SportCircle src= 
            "https://i.ibb.co/jHV2gy2/cka359p4o05660whhop9o5lt5-nbc-sports-network-logo.png" alt="sports channel"/>

            
            <SportCircle src= "https://i.ibb.co/K9SgyNY/cka35sg0905yv0wgp4ip87r7u-golf-channel-logo-0.png"  alt="sports channel"/>
         
            </Circles>

           <LimitedTxt4>Live TV plan required. Regional restrictions, blackouts and additional terms apply. <span onClick={handleClick}> See details </span></LimitedTxt4>
        </div>
            </Sports>
         
        </Part2>
    )
}

export default Landing2
