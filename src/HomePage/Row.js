import React, {useState, useEffect} from 'react'
import styled from 'styled-components';
import axios from "../axios"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {BsFillArrowRightCircleFill} from "react-icons/bs"
import {BiDotsVerticalRounded} from "react-icons/bi"
import {IoIosArrowForward} from "react-icons/io"
import Skeletons from '../Skeletons';



const StyledRow = styled.div`
display:flex;
flex-direction:column;

margin: 0 2rem;


`;

const TitlesRow = styled.div`
min-width:100%;
display:flex;
justify-content: space-between;
position:relative;
top:2rem;
left:1rem;
`;

const StyledTitle = styled.h2`
font-size:1rem;
font-weight:500;

text-transform:Uppercase;
`;

const ViewMoreRow = styled.h3`
font-size:.7rem;
position:relative;
right:2.5rem;
font-weight:400;
color:rgba(255, 255, 255, 0.575);


`;

const RowPosters = styled.div`
display:flex;
flex-direction:column;
width:100%;
height:100%;
padding: 0 ;
`;

const PosterBox = styled.div`
transition:0.9s ease-in-out;
cursor:pointer;
&:hover h2 {
   opacity:100%;
transition:0.9s ease-in-out;
   
}

&:hover #icon {
   opacity:100%;
   transition:0.5s ease-in-out;

}
`;

const RowPosterImg = styled.img`
object-fit:contain;
width:100%;
max-height:158px;
// padding-right: 1rem;
// margin:.5rem;



`;

const PosterTitle = styled.h2`
text-shadow:black 2px 2px 2px;

font-size:1rem;
font-weight:500;
// left:2rem;
// width:90%;
padding-left:1.3rem;
position:relative;
bottom:2.2rem;
opacity:0%;
`;

const ArrowCircle = styled(BsFillArrowRightCircleFill)`
font-size:2rem;
position:relative;
top:6rem;
left:8rem;
opacity:0%;
`;

const Dots = styled(BiDotsVerticalRounded)`
font-size:1.5rem;
position:relative;
top:2rem;
right:2rem;

&:hover{
    color:grey;
   transition:0.5s ease-in-out;

}
`;
const ArrowView = styled(IoIosArrowForward)`
font-size:.9rem;
position:relative;
top:3px;
// left:8rem;

`;


const base_url = "https://image.tmdb.org/t/p/original";

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
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



function Row ({ title, fetchUrl }) {
    const [movies, setMovies] = useState([]);
    

    useEffect(() => {
        async function fetchData() {
          const request = await axios.get(fetchUrl);
          setMovies(request.data.results);
          return request;
        }
        fetchData();
      }, [fetchUrl]);
    
      console.log(movies)



    return (
       <>
        {!movies ? <Skeletons/> :   
        <StyledRow>
         
            <TitlesRow>
            <StyledTitle>{title}</StyledTitle>  
            <ViewMoreRow>VIEW MORE <ArrowView/></ViewMoreRow>   
            </TitlesRow>
             <RowPosters>
                 <Slider {...settings}>

                     {movies.map(movie => {
                            return   <PosterBox> 
                                
                                <Dots/>
                                    <ArrowCircle id="icon"/>

                                <RowPosterImg
                                className="rowimg"
                                    key={movie.id}
                                    src={`${base_url}${movie.backdrop_path || movie.poster_path}`}
                                    alt={movie.name} />
                                    <PosterTitle>{movie.title || movie.name || movie.original_title}</PosterTitle>
                                    </PosterBox>
                        })}
                 </Slider>
             </RowPosters>  
    
         
        </StyledRow>
                    }
                    </>
    )
}

export default Row

