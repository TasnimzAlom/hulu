import React from 'react'
import Footer from './Footer'
import styled from 'styled-components';


const StyledFooter = styled.section`

`;

const LogFooter = styled.div`

display:flex;
justify-content:space-between;
padding:2rem;
padding-right:5rem;
font-size:.6rem;
`;

const LogDiv = styled.div`
display: flex;
flex-direction:column;

`;

const LogFooterText = styled.p`
padding: .5rem 0;
font-weight:300;

&:hover{
    color:#808080;
    cursor:pointer;

}
`;

const LoggedTitles = styled.p`
font-size:.7rem;
font-weight:500;
padding-bottom:.3rem;
`;

const LoggedFooter = () => {
    return (
        <StyledFooter>
            <LogFooter className="secondary">
               
                <LogDiv>
                <LoggedTitles>BROWSE</LoggedTitles>
                    <LogFooterText>Streaming Library</LogFooterText>
                    <LogFooterText>Live TV</LogFooterText>  
                    <LogFooterText>Live News</LogFooterText>
                    <LogFooterText>Live Sports</LogFooterText>
                </LogDiv>
                <LogDiv>
                    <LogFooterText>TV Shows</LogFooterText>
                    <LogFooterText>Movies</LogFooterText>
                    <LogFooterText>Originals</LogFooterText>
                    <LogFooterText>Networks</LogFooterText>
                    <LogFooterText>Kids</LogFooterText>
                    <LogFooterText>FX on Tulu</LogFooterText>
                </LogDiv>
                <LogDiv>
                    <LogFooterText>HBO Max™</LogFooterText>
                    <LogFooterText>Cinemax</LogFooterText>
                    <LogFooterText>Showtime</LogFooterText>
                    <LogFooterText>STARZ</LogFooterText>
                </LogDiv>
                <LogDiv>
                    <LogFooterText>Tulu, Disney+, and ESPN+</LogFooterText>
                    <LogFooterText>Disney bundle with Tulu (No Ads)</LogFooterText>
                    <LogFooterText>Disney bundle with Tulu + Live TV</LogFooterText>
                    <LogFooterText>Student Discount</LogFooterText>  

                </LogDiv> 
                <LogDiv>
                <LoggedTitles>HELP</LoggedTitles>
                     <LogFooterText>Account & Billing</LogFooterText> 
                    <LogFooterText>Plans & Pricing</LogFooterText>  
                    <LogFooterText>Supported Devices</LogFooterText>  
                    <LogFooterText>Accessibility</LogFooterText>
                    </LogDiv>
                    <LogDiv>  
                    <LoggedTitles>ABOUT US</LoggedTitles>
                    <LogFooterText>Press</LogFooterText>  
                    <LogFooterText>Jobs</LogFooterText>  
                    <LogFooterText>Contact</LogFooterText>  
                    </LogDiv>
                </LogFooter>
            <Footer/>
        </StyledFooter>
    )
}

export default LoggedFooter
