import React from 'react'
import styled from 'styled-components'
import {ImFacebook, ImTwitter, ImYoutube  } from 'react-icons/im';
import { IoLogoInstagram} from 'react-icons/io';




const FooterArea = styled.section`
width:100%;
`;

const FooterIcons = styled.div`
color:#656B7B;
width:169px;
display:flex;
justify-content:space-between;
padding:2rem;

@media only screen and (min-width: 300px) {

    padding-bottom:.3rem;
}


`;

const Ficon1 = styled(ImFacebook)`
font-size:1.5rem;
cursor:pointer;

`;

const Ficon2 = styled(ImTwitter)`
font-size:1.5rem;
cursor:pointer;

`;

const Ficon3 = styled(ImYoutube)`
font-size:1.5rem;
cursor:pointer;

`;

const Ficon4 = styled(IoLogoInstagram)`
font-size:1.5rem;
cursor:pointer;

`;

const FooterLinks =styled.div`
color:#656B7B;
font-size:12px;
padding:1rem;

@media only screen and (min-width: 390px) {
    display:flex;
    justify-content:space-between;
    padding-top:0;
}

`;

const FootLink =styled.p`
padding:1rem;
cursor:pointer;

&:hover{
    color:#73a9c2;
}

`;


const Footer = () => {
    return (
        <FooterArea className="secondary">
            <FooterIcons>
                <Ficon1/>
                <Ficon2/>
                <Ficon3/>
                <Ficon4/>

            </FooterIcons>
            <FooterLinks>
                <FootLink>About Ads</FootLink>
                <FootLink>Terms of Use</FootLink>
                <FootLink>Do Not Sell My Personal Information</FootLink>
                <FootLink>Your California Privacy Rights</FootLink>
                <FootLink>TV Parental Guidelines</FootLink>
                <FootLink>Sitemap</FootLink>
                <FootLink>© 2021 Tasnim Alom</FootLink>
               

            </FooterLinks>
        </FooterArea>
      
    )
}

export default Footer
