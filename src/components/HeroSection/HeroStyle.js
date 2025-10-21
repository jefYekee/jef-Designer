import styled, { keyframes } from "styled-components"; // Import both `styled` and `keyframes` in one line
import _default from "../../themes/default";

// Keyframes for the animation
const bounceAnimation = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
`;

export const HeroContainer = styled.div`
  background: ${({ theme }) => theme.card_light};
  display: flex;
  justify-content: center;
  position: relative;
  padding: 80px 30px;
  @media (max-width: 960px) {
    padding: 66px 16px;
  }
  @media (max-width: 640px) { /* Fixed missing px */
    padding: 32px 16px;
  }
  z-index: 1;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`;

export const HeroBg = styled.div`
  position: absolute;
  display: flex;
  justify-content: end;
  top: 50%; /* Adjusted position */
  right: 0;
  bottom: 0;
  left: 50%; /* Adjusted position */
  width: 100%;
  height: 100%;
  max-width: 1360px;
  overflow: hidden;
  padding: 0 30px;
  transform: translateX(-50%) translateY(-50%); /* Adjusted transform */

  @media (max-width: 960px) {
    justify-content: center;
    padding: 0;
  }
`;

export const HeroInnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;  /* Slightly bigger container */
  gap: 2rem;

  @media (max-width: 960px) {
    flex-direction: column;
    gap: 3rem; /* More spacing on mobile */
  }
`;


export const HeroLeftContainer = styled.div`
  width: 100%;
  order: 1;
  @media (max-width: 960px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 640px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const HeroRightContainer = styled.div`
  width: 100%; /* Increase width to accommodate a larger image */
  height: auto;
  display: flex;
  order: 2;
  justify-content: center; /* Center image horizontally */
  align-items: center; /* Center image vertically */
  gap: 12px;
  @media (max-width: 960px) {
    order: 1;
    justify-content: center;
    align-items: center;
    margin-bottom: 80px;
  }

  @media (max-width: 640px) {
    width: 100%; /* Full width on small screens */
    height: auto;
    margin-bottom: 30px;
  }
`;

export const Img = styled.img`
  width: 100%;       /* Fill the container */
  max-width: 700px;  /* Increase max width */
  height: auto;
  border-radius: 10%;
  object-fit: cover;

  @media (max-width: 960px) {
    max-width: 600px;
  }

  @media (max-width: 640px) {
    max-width: 450px; /* Ensure it fits small screens */
  }
`;



export const TextLoop = styled.div`
  font-weight: 600;
  font-size: 32px;
  display: flex;
  gap: 12px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
  
  @media (max-width: 960px) {
    text-align: center;
  }
  
  @media (max-width: 640px) {
    font-size: 22px;
    line-height: 48px;
    margin-bottom: 16px;
  }
`;

export const Span = styled.span`
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
`;

export const SubTitle = styled.div`
  font-size: 20px;
  line-height: 32px;
  margin-bottom: 42px;
  color: ${({ theme }) => theme.text_primary + 95};

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 16px;
    line-height: 32px;
  }
`;

export const ResumeButton = styled.a`
  -webkit-appearance: button;
  -moz-appearance: button;
  appearance: button;
  text-decoration: none;
  width: 95%;
  max-width: 300px;
  text-align: center;
  padding: 16px 0;
  color: ${({ theme }) => theme.white};
  border-radius: 20px;
  cursor: pointer;
  font-size: 20px;
  font-weight: 600;
  transition: all 0.2s ease-in-out !important;
  background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
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
export const Title = styled.div`
  font-weight: 700;
  font-size: 25px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
  position: relative;
  display: inline-block;

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 8px;
  }
`;
export const CompanyName = styled.div`  
  display: block;
  font-size: 2.9rem;
  font-weight: bold;
  background: linear-gradient(45deg, #ff0000, #00ff00, #0000ff);
  -webkit-background-clip: text; /* For WebKit browsers */
  background-clip: text; /* For other browsers */
  color: transparent; /* Make the text itself transparent */
  position: relative;
  z-index: 1;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3), 
               -1px -1px 2px rgba(255, 255, 255, 0.7); /* Reduced blur */
  font-family: 'Bank Gothic Regular', sans-serif; /* Apply the font */


  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.1);
    z-index: -1;
    border-radius: 8px;
    transform: scale(1.05);
  }

  animation: ${bounceAnimation} 2s infinite;
`;



