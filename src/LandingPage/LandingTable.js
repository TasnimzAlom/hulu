import React from 'react'
import styled from 'styled-components'
import { MdCheck } from 'react-icons/md';
import { BsDashLg} from 'react-icons/bs';
import Footer from '../Footer';



const Planner =styled.section`
background:whitesmoke;
color:black;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
// padding:1rem;
`;

const SelPlan = styled.div``;

const TableHead = styled.div`
text-align: center;
`;

const Table =styled.div`
justify-content:center;


`; 
const TableWrap =styled.div`


`; 

const TableSect =styled.div`
padding:1rem ;
text-align:center;
display:grid;
grid-template-columns: 1fr 1fr 1fr;
padding:1rem 2rem;
justify-content:center;

p{
font-size:.8rem;
color:rgb(58, 58, 58);
font-weight:500;

}
`; 

const TableRow =styled.div`
text-align:center;
border-top:1px solid gray;
padding:1rem ;
display:grid;
grid-template-rows:1fr 1fr;
justify-content:center;
font-size:.8rem;
color:rgb(58, 58, 58);
font-weight:500;


`; 

const Check = styled(MdCheck)`
padding:0 2rem;
font-size:1.5rem;
`;

const Dash = styled(BsDashLg )`
padding:0 2rem;
font-size:1rem;
color:rgb(58, 58, 58);
`;

const SelectPlan = styled.h1`
text-align:center;
font-size:2rem;
font-weight:900;
padding-bottom:1rem;
`;

const HideFees = styled.p`
text-align:center;
padding-bottom:.5rem;

`;

const SwitchPlans =styled.p`
text-align:center;
font-weight:900;
padding-bottom:2rem;

`;

const BundleLogos = styled.img`
max-width:100%;
height:1.8rem;

`;

const BandSave = styled.div`
padding: 1rem;
padding-bottom:2rem;

`;

const Radio = styled.div`
width:100%;
display:flex;
justify-content:center;
align-items:center;
`;


const IncludeH =styled.p`
font-size:.7rem;
padding: .5rem 0;

`;

const BundleSave = styled.h2`
font-size:1rem;
padding: .5rem 0;
`;

const Popular = styled.div`
display:grid;
grid-template-columns: 1fr 1fr 1fr;

`;

const BundleSect = styled.div`
display:grid;
grid-template-rows:1fr 1fr 1fr;
padding:.5rem;
`;

const Bundle1 = styled.img`
height:1.6rem;
width:80%;
`;

const Bundle2 = styled.p`
text-align:center;
`;

const Bundle3 = styled.p`
text-align:center;
`;

const Bundle4 = styled.p`
text-align:center;
`;


const GetBundle = styled.button`
font-size:.8rem;
font-weight:800;
background:black;
color:white;
border:none;
border-radius:4px;
padding:.5rem;

`;

const Then64 =styled.div`
border: 1px solid grey;
padding: 1.5rem;
font-size: .7rem;
`;



const LandingTable = () => {
    return (
        <Planner>
            <SelPlan>
               <SelectPlan>
                Select Your Plan
                </SelectPlan>
                <HideFees>No hidden fees, equipment rentals, or installation appointments.</HideFees>
                <SwitchPlans>Switch plans or cancel anytime.^^</SwitchPlans>
            </SelPlan>
            <TableHead>
            <BandSave>
                <BundleSave>BUNDLE & SAVE</BundleSave>
            <BundleLogos src="https://i.ibb.co/wR2vYFz/Group-1-1.png" alt="Group-1-1" />
            <IncludeH>Includes Hulu (plan of your choice), Disney+, and ESPN+.</IncludeH>
         </BandSave>
        
        
           <Radio>
               
            </Radio>

        

            </TableHead> 
            <Popular>
                <BundleSect>
                <Bundle1 src="https://i.ibb.co/jLfL4PL/Group-1-5.png"  alt="Group-1-1" />
                <Bundle2>Hulu</Bundle2>
                <GetBundle>GET BUNDLE</GetBundle>
                </BundleSect>

                <BundleSect>
                
                <Bundle1 src="https://i.ibb.co/jLfL4PL/Group-1-5.png"  alt="Group-1-1" />
                <Bundle3>Hulu (No Ads)</Bundle3>
                <GetBundle>GET BUNDLE</GetBundle>
                </BundleSect>

                <BundleSect>

                <Bundle1 src="https://i.ibb.co/jLfL4PL/Group-1-5.png"  alt="Group-1-1" />
                <Bundle4>Hulu + Live TV</Bundle4>
                <GetBundle>GET BUNDLE</GetBundle>
                </BundleSect>


          

            </Popular>
           
            <Table>
                <TableWrap>
                  
                <TableRow>Monthly price after free trial</TableRow>  
                <TableSect>
                <p>$6.99/mo</p>
                <p>$12.99/mo</p>
                <p>$54.99/mo for 3 mo. Save $10/month*</p>
                    </TableSect>


                
                <TableRow>Streaming Library with thousands of TV episodes and movies</TableRow>
                <TableSect>
                <Check/>
                <Check/>
                <Check/>
                </TableSect>
                <TableRow>Most new episodes the day after they air^</TableRow>
                <TableSect>
                <Check/>
                <Check/>
                <Check/>
                </TableSect>
                <TableRow>Access to award-winning Hulu Originals</TableRow>
                <TableSect>
                <Check/>
                <Check/>
                <Check/>
                </TableSect>
                <TableRow>Watch on your TV, laptop, phone, or tablet</TableRow>
                <TableSect>
                <Check/>
                <Check/>
                <Check/>
                </TableSect>
                <TableRow>Up to 6 user profiles</TableRow>
                <TableSect>
                <Check/>
                <Check/>
                <Check/>
                </TableSect>
                <TableRow>Watch on 2 different screens at the same time</TableRow>
                <TableSect>
                <Check/>
                <Check/>
                <Check/>
                </TableSect>
                <TableRow>No ads in streaming library</TableRow>
                <TableSect>
                <Dash/>
                <Check/>
                <Dash/>
                </TableSect>
                <TableRow>Download and watch</TableRow>
                <TableSect>
                <Dash/>
                <Check/>
                <Dash/>
                </TableSect>
                <TableRow>Live TV with 75+ top channels. No cable required.</TableRow>
                <TableSect>
                <Dash/>
                <Dash/>
                <Check/>
                </TableSect>
                <TableRow>Live TV guide to navigate channels</TableRow>
                <TableSect>
                <Dash/>
                <Dash/>
                <Check/>
                </TableSect>
                <TableRow>Record Live TV with 50 hours of Cloud DVR storage</TableRow>
                <TableSect>
                <Dash/>
                <Dash/>
                <Check/>
                </TableSect>
                </TableWrap>
                <div>
               <Then64>
               *Then $64.99/month. New and eligible returning subscribers only.
                ^For current-season shows in the streaming library only
                ^^Switches from Live TV to Hulu take effect as of the next billing cycle


                   </Then64>
                
                
              
                </div>
            </Table>
            <Footer/>
        </Planner>
    )
}

export default LandingTable
