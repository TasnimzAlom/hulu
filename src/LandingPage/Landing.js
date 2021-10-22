import {  Snackbar } from '@material-ui/core';
import React,{useState} from 'react';
import styled from 'styled-components';
import Landing2 from './Landing2';
import LandingTable from './LandingTable';
import {GrClose} from "react-icons/gr";





const LandingBg = styled.section`

color: white;
font-weight:600;



`;



const HeroLand = styled.div`
// background:rgba(27, 26, 26, 0.383);
background-image: url("https://i.ibb.co/FJbPDJg/Group-2.png") ;
background-repeat:no-repeat;
height:100%;
background-size:cover;
height:100vh;
width:100vw;
display:flex;
justify-content:center;
flex-direction:column;
text-align:center;

`;


const MobileText = styled.p`
color: #00ED82;
padding:1rem 0;


`;
const MobileText2 = styled.p`
color: #whitesmoke;

`;

const MobileText3 = styled.p`
color:whitesmoke;
font-weight:400;
font-size:15px;

`;

const LandBox1 = styled.div`
padding:.2rem 1rem;
margin:1rem;
text-align:center;
height:100vh;

`;

const LandBox2 = styled.div`
padding:.3rem 1rem;
text-align:center;
background:rgba(27, 26, 26, 0.383);
height:100vh;




`;

const BundleImg = styled.img`
max-width:100%;
`;

const BundleImg2 = styled.img`
// max-width:100%;
height:1.5rem;
padding:1.5rem;
`;

const BundleBtn = styled.button`
max-width:100%;
padding:10px 30px;
margin:20px 0;
font-weight:600;
font-size:14px;
border-radius:3px;
border:none;
cursor:pointer;

&:hover{
    background:rgba(255, 255, 255, 0.815);
}
`;

const BundleBtn2 = styled.button`
max-width:100%;
padding:10px 30px;
margin:20px 0;
border:2px solid white;
background:none;
border-radius:3px;
margin-bottom:1rem;
color:white;
font-weight:600;
font-size:14px;
cursor:pointer;
 
&:hover{
    border: 2px solid grey;
}
`;

const DetailTxt = styled.p`
color: #dcdcdc;
font-size:11px;
padding-bottom:2rem;

span{
    text-decoration:underline;
    cursor:pointer;

}
`;

const TvLand =styled.div`
padding:.5rem 1.2rem;
text-align:center;
background:#000000;
padding-bottom:2rem;

`;

const TvTitle = styled.h1`
font-weight:900;
font-size:2rem;
padding-bottom:1rem;
`;



const Landing = () => {
  const [open, setOpen] = useState(false);


  
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
    
        <LandingBg> 
            <HeroLand>  
                {/* <Header/> */}
                <LandBox1>
                <MobileText>BUNDLE WITH ANY TULU PLAN & SAVE</MobileText>
                <BundleImg src="https://i.ibb.co/wSjsZs9/Group-1.png" alt="Group-1"/>
                <MobileText2>Get endless entertainment, live sports, and the shows and movies you love.</MobileText2>
                <BundleBtn onClick={handleClick}>
                    GET THE DISNEY BUNDLE
                </BundleBtn>
                <Snackbar
                  open={open}
                  autoHideDuration={3000}
                  onClose={handleClose}
                  message="JUST KIDDING!"
                  action={action}
                
                  >
           
                
                </Snackbar>
                <DetailTxt ><span onClick={handleClick}>See details</span> and <span onClick={handleClick}>Bundle terms</span>.</DetailTxt>
                </LandBox1>
                <LandBox2>
                <MobileText>TRY UP TO ONE MONTH FREE</MobileText>
                <BundleImg2 src="https://i.ibb.co/HPcgh3J/Group.png" alt="Group"/>
                <MobileText3>Here just for Tulu? Get thousands of TV shows and movies.</MobileText3>
                <BundleBtn2 onClick={handleClick}>
                    START YOUR FREE TRIAL
                </BundleBtn2>
              
                </LandBox2>
            </HeroLand>
            <TvLand>
                <MobileText>
                    INCLUDED IN ALL PLANS
                </MobileText>
                <TvTitle>
                    All The TV You Love
                </TvTitle>
                <MobileText3>
                Stream full seasons of exclusive series, current-season episodes, hit movies, Tulu Originals, kids shows, and more.
                </MobileText3>
            </TvLand>
            <Landing2/>
            <LandingTable/>
        </LandingBg>
    )
}
export default Landing
