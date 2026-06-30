import styled, { keyframes } from 'styled-components';

const fadeSlideUp = keyframes`
  from { opacity: 0; transform: translateY(18px); }
  to   { opacity: 1; transform: translateY(0); }
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #0a0a1a 0%, #0d0d2b 50%, #0a1628 100%);
  padding: 80px 0 100px;
  overflow: hidden;

  /* subtle grid */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(rgba(0, 199, 239, 0.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0, 199, 239, 0.04) 1px, transparent 1px);
    background-size: 50px 50px;
    pointer-events: none;
  }

  /* glow orbs */
  &::after {
    content: '';
    position: absolute;
    width: 400px;
    height: 400px;
    border-radius: 50%;
    background: rgba(93, 0, 255, 0.12);
    filter: blur(100px);
    top: -100px;
    right: -100px;
    pointer-events: none;
  }
`;

export const Wrapper = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1300px;
  padding: 0 20px;
  gap: 16px;
  animation: ${fadeSlideUp} 0.7s ease both;
`;

export const SectionBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(0, 199, 239, 0.08);
  border: 1px solid rgba(0, 199, 239, 0.25);
  border-radius: 50px;
  padding: 6px 18px;
  font-size: 0.75rem;
  color: #00C7EF;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  font-weight: 600;
  font-family: 'Poppins', sans-serif;
`;

export const Title = styled.h2`
  font-size: 2.8rem;
  font-weight: 800;
  text-align: center;
  color: #fff;
  font-family: 'Poppins', sans-serif;
  letter-spacing: -0.02em;
  margin: 0;

  span {
    background: linear-gradient(90deg, #00C7EF, #5d00ff, #00C7EF);
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const Desc = styled.p`
  font-size: 1rem;
  text-align: center;
  max-width: 560px;
  color: rgba(255, 255, 255, 0.5);
  line-height: 1.8;
  font-family: 'Poppins', sans-serif;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 0 12px;
  }
`;

export const ToggleButtonGroup = styled.div`
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(0, 199, 239, 0.2);
  border-radius: 50px;
  padding: 4px;
  margin: 12px 0 24px;
  font-family: 'Poppins', sans-serif;

  @media (max-width: 600px) {
    flex-wrap: wrap;
    border-radius: 16px;
    justify-content: center;
    gap: 4px;
  }
`;

export const ToggleButton = styled.div`
  padding: 8px 20px;
  border-radius: 50px;
  cursor: pointer;
  font-size: 0.82rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: ${({ active }) => active ? '#fff' : 'rgba(255,255,255,0.45)'};
  background: ${({ active }) => active
    ? 'linear-gradient(135deg, #00C7EF, #5d00ff)'
    : 'transparent'};
  box-shadow: ${({ active }) => active ? '0 0 18px rgba(0,199,239,0.3)' : 'none'};
  transition: all 0.25s ease;

  &:hover {
    color: #fff;
    background: ${({ active }) => active
      ? 'linear-gradient(135deg, #00C7EF, #5d00ff)'
      : 'rgba(255,255,255,0.07)'};
  }

  @media (max-width: 600px) {
    font-size: 0.72rem;
    padding: 7px 14px;
  }
`;

export const Divider = styled.div`
  width: 1px;
  height: 20px;
  background: rgba(0, 199, 239, 0.2);
  margin: 0 2px;

  @media (max-width: 600px) {
    display: none;
  }
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  width: 100%;
  margin-top: 8px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;