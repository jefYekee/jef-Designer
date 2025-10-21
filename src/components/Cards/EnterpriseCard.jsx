import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid skyblue;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  background-color: ${({ theme }) => theme.card};
  cursor: pointer;
  border-radius: 10px;
  box-shadow: 0 0 12px 4px rgba(0,0,0,0.4);
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
  margin-bottom: 10px;
`;

const Textonee = styled.h2`
  color: #fff;
  font-size: 26px;

`;
const Textone = styled.h2`
color: gray;
font-size: 16px;
`;

const Title = styled.div`
    -webkit-appearance: button;
    -moz-appearance: button;
    appearance: button;
    text-decoration: none;
    width: 95%;
    max-width: 300px;
    text-align: center;
    padding: 10px 0;
    color:${({ theme }) => theme.white};
    border-radius: 20px;
    cursor: pointer;
    font-size: 25px;
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

const Texttwo = styled.h2`
  color: #666;
  font-size: 16px;
`;

const EnterpriseCard = () => {
  return (
    <Card>
      <Details>
        <Title>Enterprise</Title>
      </Details>
      <Details>
        <Textone>For Enterprise mobile app solutions tailored to your specific needs, please contact me.</Textone>
        {/* <Texttwo>Contact us: [Your contact information]</Texttwo> */}
      </Details>
    </Card>
  );
}

export default EnterpriseCard;
