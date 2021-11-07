import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';
import Row from './HomePage/Row';

import requests from './requests'

const TuluHubs = styled.section`
padding:2rem;
`;

const HubImg = styled.img`
height:30rem;
width:100%;
padding:1rem;
`;

const ImgBox = styled.div`
padding:5px;
`;

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots:false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    ]
}

const Hubs = () => {


  
    

    return (
        <TuluHubs>
             <Slider {...settings}>
                 <ImgBox>
             <HubImg src="https://i.ibb.co/g9KwxyC/Screenshot-66.png" alt="hub poster"/>
             </ImgBox>
             <ImgBox>
             <HubImg src="https://i.ibb.co/LPc848J/Screenshot-74.png" alt="hub poster"/>
             </ImgBox>
             <ImgBox>

             <HubImg src="https://i.ibb.co/n8zXCF7/Screenshot-73.png"  alt="hub poster"/>
             </ImgBox>

             <ImgBox>

             <HubImg src="https://i.ibb.co/Dz2n6gv/Screenshot-65.png" alt="hub poster"/>
             </ImgBox>

             <ImgBox>

             <HubImg src="https://i.ibb.co/ZMfyYLX/Screenshot-69.png"  alt="hub poster"/>
             </ImgBox>

             <ImgBox>

             <HubImg src="https://i.ibb.co/7gHv168/Screenshot-67.png"  alt="hub poster"/>
             </ImgBox>

             </Slider>

             <Row title="Kids Tv Shows " fetchUrl={requests.fetchKidsTv} />
            
            <Row title="Soaps" fetchUrl={requests.fetchSoapTv} />
            <Row title="Reality Tv " fetchUrl={requests.fetchRealityTv} />
        </TuluHubs>



    )
    }
export default Hubs
