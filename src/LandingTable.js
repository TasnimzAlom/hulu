import React from 'react'
import styled from 'styled-components'
import { MdCheck } from 'react-icons/md';
import { BsDashLg } from 'react-icons/bs';



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
justify-content:center;
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

`; 

const TableRow =styled.div`
text-align:center;
border-top:1px solid gray;
padding:1rem ;
display:grid;
grid-template-rows:1fr 1fr;
justify-content:center;

`; 

const Check = styled(MdCheck)`
padding:0 2rem;
font-size:1.5rem;

`;

const Dash = styled(BsDashLg )`
padding:0 2rem;
font-size:1rem;
color:grey;

`;

const LandingTable = () => {
    return (
        <Planner>
            <SelPlan>

            </SelPlan>
            <TableHead></TableHead>
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
               
                
                
              
                </div>
            </Table>
        </Planner>
    )
}

export default LandingTable
