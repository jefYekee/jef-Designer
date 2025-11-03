import styled from "styled-components";

export const HeroContainer = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 100vh;
  margin: 0;
  padding-top: 60px;
  background: url(${({ bg }) => bg}) center/cover no-repeat;
  background-attachment: fixed;
  overflow: hidden;
  color: ${({ theme }) => theme.text_primary};

  /* --- Animated overlay for depth --- */
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.55) 0%,
      rgba(0, 0, 20, 0.85) 100%
    );
    animation: overlayGlow 8s ease-in-out infinite alternate;
    z-index: 1;
  }

  /* --- Subtle moving glow animation --- */
  @keyframes overlayGlow {
    0% {
      opacity: 0.8;
      filter: brightness(0.9) blur(0px);
    }
    100% {
      opacity: 1;
      filter: brightness(1.1) blur(3px);
    }
  }

  /* --- Optional background blur behind text for legibility --- */
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    backdrop-filter: blur(1.5px);
    z-index: 1;
  }
`;



export const HeroContent = styled.div`
  position: relative;
  z-index: 2; /* ensures text is above overlay */
  max-width: 900px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const CompanyName = styled.h1`
  font-size: 3.5rem;
  font-weight: 800;
  background: linear-gradient(90deg, #0040ff, #0066ff, #3399ff);
  background-size: 200% auto;
  -webkit-background-clip: text;
  color: transparent;
  animation: gradientMove 6s ease infinite;

  @keyframes gradientMove {
    to {
      background-position: 200% center;
    }
  }

  @media (max-width: 768px) {
    font-size: 2.6rem;
  }
`;


export const TextLoop = styled.div`
  font-weight: 700;
  font-size: 1.8rem;
  color: #fff;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

export const SubTitle = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #fff;
  max-width: 720px;
  background: linear-gradient(135deg, rgba(93, 0, 255, 0.6), rgba(30, 144, 255, 0.6));
  padding: 1rem 1.5rem;
  border-radius: 12px;
  margin-top: 1rem;
  box-shadow: 0 4px 20px rgba(93, 0, 255, 0.25);
  backdrop-filter: blur(4px);
  transition: background 0.4s ease-in-out;

  &:hover {
    background: linear-gradient(135deg, rgba(30, 144, 255, 0.7), rgba(93, 0, 255, 0.7));
  }

  @media (max-width: 640px) {
    font-size: 0.95rem;
    padding: 0.8rem 1rem;
  }
`;


export const WorkButton = styled.a`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #5d00ff, #1e90ff);
  color: #fff;
  padding: 16px 38px;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.05rem;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 4px 20px rgba(30, 144, 255, 0.4);

  &:hover {
    background: linear-gradient(135deg, #1e90ff, #5d00ff);
    transform: translateY(-3px) scale(1.07);
    box-shadow: 0 6px 25px rgba(93, 0, 255, 0.6);
  }

  @media (max-width: 480px) {
    padding: 12px 30px;
    font-size: 1rem;
  }
`;
