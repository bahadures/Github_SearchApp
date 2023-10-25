import React from 'react';
import styled from 'styled-components'
import Table from './Table';


const columns = [
    { label: "avtar", accessor: "avtar", sortable: true },
    { label: "name", accessor: "name", sortable: true },
    { label: "stars", accessor: "stars", sortable: true },
    { label: "description", accessor: "description", sortable: true },
    { label: "language", accessor: "language", sortable: true },
];

function ContactCard({ card }) {
    console.log("card", card)
    return (
        <>
            <Table
                caption="Your Search results shows following"
                data={card}
                columns={columns}
            /> 

        </>
    )
}

export default ContactCard

const Card = styled.div`
display: flex;
flex-direction:column;
width: 485px;
height: 590.326px;
padding: 116.923px;
justify-content: center;
align-items: center;
/* gap: 7.795px; */
flex-shrink: 0;
background-color:white;
/* margin:0 auto; */
border-radius:12px;

img{
width: 243.977px;
height: 243.977px;
flex-shrink: 0;
border-radius: 243.977px;
background: linear-gradient(90deg, rgba(9, 30, 58, 0.20) 0%, rgba(47, 128, 237, 0.20) 50%, rgba(45, 158, 224, 0.20) 100%), url(<path-to-image>), lightgray 50% / cover no-repeat;

}
h1{
color: #1D57A5;
font-family: Helvetica;
font-size: 49.019px;
font-style: normal;
font-weight: 700;
line-height: normal;
}

.role{
width: 218.542px;
height: 44.934px;
flex-shrink: 0;
color: #1D69CF;
text-align: center;
font-family: Montserrat;
font-size: 36.764px;
font-style: normal;
font-weight: 400;
line-height: normal;
}
.id{
color: #7774EA;
font-family: Montserrat;
font-size: 34.297px;
font-style: normal;
font-weight: 400;
line-height: normal;
}

button{
display: flex;
width: 409.015px;
height: 90.335px;
padding: 23.443px 93.313px 24.099px 93.008px;
justify-content: center;
align-items: center;
flex-shrink: 0;
border-radius: 104.798px;
background: linear-gradient(90deg, #091E3A 0%, #2F80ED 50%, #2D9EE0 100%);

color: #FFF;
font-family: Montserrat;
font-size: 34.933px;
font-style: normal;
font-weight: 600;
line-height: normal;
}

`