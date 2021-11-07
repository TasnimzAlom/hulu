import React from 'react'
import styled from 'styled-components'
import {IoIosAddCircleOutline} from "react-icons/io"
import LoggedFooter from './LoggedFooter';

const MyStuffSect = styled.section`
display:grid;
grid-template-rows:1fr 1fr 1fr;
`;

const MyStuffDiv = styled.div`
padding:3rem;
`;

const StuffContent = styled.div`
height:100%;
padding:3rem;
`;

const StuffTitle = styled.p`
font-size:3rem;
font-weight:200;
padding-bottom:5px;
`;

const StuffText1 = styled.p`
font-size:1rem;
display:flex;
align-items:center;
`;

const StuffText2 = styled.p``;

const AddButton = styled(IoIosAddCircleOutline)`
font-size:1.3rem;
padding: 0 .4rem;
`;


const MyStuff = () => {
    return (
        <>
        <MyStuffSect>
            <MyStuffDiv className="secondary">
              <StuffTitle>
                  My Stuff                        
              </StuffTitle>
                <StuffText1>
                    Use the <AddButton/> to add content you want to keep track of.
                </StuffText1>
              
            </MyStuffDiv>
            <StuffContent>
                   <StuffText2>
                   No Content has been added.
                   </StuffText2>
            </StuffContent>
            <StuffContent>

            </StuffContent>
           
        </MyStuffSect>
       <LoggedFooter/>
        </>
    )
}

export default MyStuff
