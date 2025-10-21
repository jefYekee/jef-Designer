import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
    width: 330px;
    min-height: 200px;
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
`;

const Details = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const Title = styled.div`
    text-align: center;
    font-size: 20px;
    font-weight: 600;
    color: ${({ theme }) => theme.white};
    background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    padding: 16px;
    border-radius: 20px;
    box-shadow:  20px 20px 60px #1F2634, -20px -20px 60px #1F2634;
    cursor: pointer;
    transition: all 0.4s ease-in-out;
    &:hover {
        transform: scale(1.05);
        box-shadow:  20px 20px 60px #1F2634, filter: brightness(1);
    }
`;

const Period = styled.div`
    text-align: center;
    color: #fff;
    font-size: 12px;
    font-weight: 500;
    padding: 14px 0;
    cursor: pointer;
    transition: all 0.4s ease-in-out;
    box-shadow:  20px 20px 60px #1F2634, -20px -20px 60px #1F2634;
`;

const LineBreak = styled.br``;

const Description = styled.div`
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary};
`;

const List = styled.ul`
    list-style-type: none;
    padding: 0;
`;

const ListItem = styled.li`
    display: flex;
    align-items: center;
    margin-bottom: 8px;
`;

const CheckmarkIcon = styled.span`
    margin-right: 8px;
    font-weight: 600;
    font-size: 20px;
    color: green;
`;

const PackageCard = ({ mobilepackage }) => {
    return (
        <Card>
            <Details>
                <Title>{mobilepackage.title} {mobilepackage.price}</Title>
                <Period>
                    {mobilepackage.period}
                    <LineBreak /> (depending on customization level)
                </Period>
            </Details>
            <Description>
                <List>
                    {mobilepackage.features.map((feature, index) => (
                        <ListItem key={index}>
                            <CheckmarkIcon>&#10003;</CheckmarkIcon>
                            {feature}
                        </ListItem>
                    ))}
                </List>
            </Description>
        </Card>
    );
}

export default PackageCard;
