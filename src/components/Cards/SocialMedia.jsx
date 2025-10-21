import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid skyblue;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  background-color: ${({ theme }) => theme.card};
  cursor: pointer;
  box-shadow: 0 0 12px 4px rgba(0,0,0,0.4);
  display: flex;
  flex-direction: column;
  gap: 20px;
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 0 50px 4px rgba(0,0,0,0.6);
    filter: brightness(1.1);
  }
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: ${({ theme }) => theme.text_primary};
  font-size: 25px;
  font-weight: 600;
  padding: 10px 0;
  margin: 0;
  background: linear-gradient(225deg, hsla(271, 100%, 50%, 1), hsla(294, 100%, 50%, 1));
  -webkit-background-clip: text; /* Apply gradient to text */
  -webkit-text-fill-color: transparent; /* Hide text fill */
  box-shadow: 20px 20px 60px #1F2634, -20px -20px 60px #1F2634;
  &:hover {
    transform: scale(1.05);
    transition: all 0.4s ease-in-out;
    box-shadow: 20px 20px 60px #1F2634;
    filter: brightness(1);
  }
  @media (max-width: 640px) {
    padding: 12px 0;
    font-size: 18px;
  }
`;

const PackageContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const PackageColumn = styled.div`
  flex: 1;
  padding: 0 20px;
  text-align: center;

  /* Adjust ul styles */
  ul {
    list-style-type: disc; /* Use disc bullets */
    margin: 0; /* Remove default margin */
    padding-left: 20px; /* Add padding to align with text */
  }

  /* Adjust li styles */
  li {
    margin-bottom: 5px; /* Adjust space between list items */
  }
`;

const Textone = styled.p`
  color: ${({ theme }) => theme.text_secondary};
  font-size: 16px;
`;

const ActionButton = styled.a`
  background-color: ${({ theme }) => theme.button_background};
  color: ${({ theme }) => theme.button_text};
  font-size: 16px;
  font-weight: 500;
  padding: 12px 24px;
  border-radius: 8px;
  text-decoration: none;
  margin-top: 20px;
  display: block;
  width: fit-content;
  margin: 0 auto;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.button_hover};
  }
`;


const SocialMediaContainer = () => {
  return (
    <Card>
      <Title>Social Media Management Packages</Title>
      <PackageContainer>
        <PackageColumn>
          <Title>Basic Package</Title>
          <Textone>We offer essential social media management services to get you started.</Textone>
          <ul>
            <li>ACTIVITY: STARTUP</li>
            <li>15% Of The Budget Or $250</li>
            <li>INITIAL REVIEW AND ANALYSIS</li>
            <li>- Identify Business Goals</li>
            <li>- Keywords Analysis</li>
            <li>- Target Audience Analysis</li>
          </ul>
          <ActionButton href="#contact">Contact Support</ActionButton>
        </PackageColumn>
        <PackageColumn>
          <Title>Pro Package</Title>
          <Textone>Upgrade to our advanced package for comprehensive social media strategies.</Textone>
          <ul>
            <li>ACTIVITY: MEDIUM</li>
            <li>13% Of The Budget Or $400</li>
            <li>INITIAL REVIEW AND ANALYSIS</li>
            <li>- Identify Business Goals</li>
            <li>- Keywords Analysis</li>
            <li>- Target Audience Analysis</li>
            <li>FACEBOOK MARKETING</li>
            <li>- Facebook Business Manager Set Up</li>
            <li>- Facebook Pixel Installation</li>
            <li>INSTAGRAM MARKETING</li>
            <li>- Audience Research</li>
            <li>- Ads Creatives & Design</li>
          </ul>
          <ActionButton href="#contact">Contact Support</ActionButton>
        </PackageColumn>
        <PackageColumn>
          <Title>Premium Package</Title>
          <Textone>Our premium package includes personalized social media campaigns tailored for your business.</Textone>
          <ul>
            <li>ACTIVITY: GROWTH</li>
            <li>12% Of The Budget Or $700</li>
            <li>INITIAL REVIEW AND ANALYSIS</li>
            <li>- Identify Business Goals</li>
            <li>- Keywords Analysis</li>
            <li>- Target Audience Analysis</li>
            <li>FACEBOOK MARKETING</li>
            <li>- Facebook Business Manager Set Up</li>
            <li>- Facebook Pixel Installation</li>
            <li>- Remarketing</li>
            <li>YOUTUBE MARKETING</li>
            <li>- Youtube Ads Account Set Up</li>
            <li>- Skippable In-Stream Ads</li>
          </ul>
          <ActionButton href="#contact">Contact Support</ActionButton>
        </PackageColumn>
      </PackageContainer>
    </Card>
  );
}

export default SocialMediaContainer;
