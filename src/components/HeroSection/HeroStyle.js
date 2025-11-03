import styled from "styled-components";

export const HeroContainer = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100vh;
  padding-top: -10px; /* Push content below navbar */
  background: url(${({ bg }) => bg}) center/cover no-repeat;
  background-attachment: fixed;
  color: ${({ theme }) => theme.text_primary};
  margin: 0;
  top: 0;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
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
  background: rgba(0, 0, 0, 0.4);
  padding: 1rem 1.5rem;
  border-radius: 12px;
  margin-top: 1rem;

  @media (max-width: 640px) {
    font-size: 0.95rem;
    padding: 0.8rem 1rem;
  }
`;

export const WorkButton = styled.a`
  margin-top: 2rem;
  background: linear-gradient(225deg, #0040ff 0%, #0066ff 100%);
  color: #fff;
  padding: 16px 38px;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.05rem;
  box-shadow: 0 4px 20px rgba(0, 64, 255, 0.4);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px) scale(1.07);
    box-shadow: 0 6px 25px rgba(0, 102, 255, 0.6);
    background: linear-gradient(225deg, #0066ff 0%, #3399ff 100%);
  }
`;
