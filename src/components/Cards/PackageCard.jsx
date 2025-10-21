import React from 'react'
import styled from 'styled-components'


const Button = styled.button`
    &:hover {
        display: block; /* Show on hover */
    }
    width: 100%;
    padding: 10px;
    background-color: 'skyblue';
    color: '#fff';
    font-size: 14px;
    font-weight: 700;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.8s ease-in-out;
`
// const Card = styled.div`
//     width: 330px;
//     height: 730px;
//     background-color: ${({ theme }) => theme.card};
//     cursor: pointer;
//     border-radius: 10px;
//     box-shadow: 0 0 12px 4px rgba(0,0,0,0.4);
//     overflow: hidden;
//     padding: 26px 20px;
//     display: flex;
//     flex-direction: column;
//     gap: 14px;
//     transition: all 0.5s ease-in-out;
//     &:hover {
//         transform: translateY(-10px);
//         box-shadow: 0 0 50px 4px rgba(0,0,0,0.6);
//         filter: brightness(1.1);
//     }
//     &:hover ${Button} {
//         display: block;
//     }
// `

const Card = styled.div`
    width: 330px;
    min-height: 200px; /* Set a minimum height */
    background-color: ${({ theme }) => theme.card};
    cursor: pointer;
    border-radius: 10px;
    box-shadow: 0 0 12px 4px rgba(0,0,0,0.4);
    overflow: hidden;
    padding: 26px 20px;
    display: flex;
    flex-direction: column;
    gap: 14px;
    transition: all 0.5s ease-in-out;
    &:hover {
        transform: translateY(-10px);
        box-shadow: 0 0 50px 4px rgba(0,0,0,0.6);
        filter: brightness(1.1);
    }
    &:hover ${Button} {
        display: block;
    }
`;


const Details = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0px;
    padding: 0px 2px;
    padding: 10px; /* Added padding */
    border-radius: 10px; /* Rounded corners */
`
const Title = styled.div`
    -webkit-appearance: button;
    -moz-appearance: button;
    appearance: button;
    text-decoration: none;
    width: 95%;
    max-width: 300px;
    text-align: center;
    padding: 16px 0;
    color:${({ theme }) => theme.white};
    border-radius: 20px;
    cursor: pointer;
    font-size: 20px;
    font-weight: 600;
    transition: all 0.2s ease-in-out !important;
    background: hsla(271, 100%, 50%, 1);
    background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    background: -moz-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    background: -webkit-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    box-shadow:  20px 20px 60px #1F2634,
    -20px -20px 60px #1F2634;
    &:hover {
        transform: scale(1.05);
    transition: all 0.4s ease-in-out;
    box-shadow:  20px 20px 60px #1F2634,
    filter: brightness(1);
}
    @media (max-width: 640px) {
        padding: 12px 0;
        font-size: 18px;
    } 
`

const Description = styled.div`
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary + 99};
    overflow: hidden;
    margin-top: 8px;
    display: -webkit-box;
    max-width: 100%;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
`

const List = styled.ul`
    list-style-type: none;
    padding: 0;
`;

const ListItem = styled.li`
    margin-bottom: 8px;
    display: flex;
    align-items: center;
`;

const CheckmarkIcon = styled.span`
    /* Checkmark icon styles... */
    margin-right: 8px;
    font-weight: 600;
    font-size: 20px;
    color: green; /* Change color as needed */
`;

const PackageCard = ({mypackage,setOpenModal}) => {
    const handleButtonClick = () => {
        alert('View package clicked');
        // You can add further functionality here, such as opening a modal
        // by calling setOpenModal or navigating to a different page
    };

    return (
        <Card>
            <Details>
                <Title>{mypackage.title} {mypackage.price}</Title>
            </Details>
            <Description>
                <List>
                    {mypackage.features.map((feature, index) => (
                        <ListItem key={index}>
                            <CheckmarkIcon>&#10003;</CheckmarkIcon>
                            {feature}
                        </ListItem>
                    ))}
                </List>
            </Description>
        </Card>
    )
}

export default PackageCard