import styled, { keyframes } from 'styled-components';

const fadeSlideUp = keyframes`
  from { opacity: 0; transform: translateY(22px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 1; transform: scale(1); }
  50%       { opacity: 0.4; transform: scale(0.7); }
`;

const gradientShift = keyframes`
  to { background-position: 200% center; }
`;

const floatY = keyframes`
  0%, 100% { transform: translateY(0px); }
  50%       { transform: translateY(-6px); }
`;

// ── Layout ──────────────────────────────────────────────────────────────────

export const Container = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #0a0a1a 0%, #0d0d2b 50%, #0a1628 100%);
  padding: 100px 20px 110px;
  overflow: hidden;
  font-family: 'Poppins', sans-serif;
`;

export const GridLines = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  background-image:
    linear-gradient(rgba(0, 199, 239, 0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 199, 239, 0.04) 1px, transparent 1px);
  background-size: 50px 50px;
  pointer-events: none;
`;

export const GlowLeft = styled.div`
  position: absolute;
  width: 350px; height: 350px;
  border-radius: 50%;
  background: rgba(0, 199, 239, 0.1);
  filter: blur(100px);
  top: -80px; left: -100px;
  pointer-events: none;
`;

export const GlowRight = styled.div`
  position: absolute;
  width: 320px; height: 320px;
  border-radius: 50%;
  background: rgba(93, 0, 255, 0.13);
  filter: blur(100px);
  bottom: -80px; right: -100px;
  pointer-events: none;
`;

export const Wrapper = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  gap: 16px;
  animation: ${fadeSlideUp} 0.7s ease both;
`;

export const Badge = styled.div`
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
`;

export const DotPulse = styled.span`
  width: 7px; height: 7px;
  background: #00C7EF;
  border-radius: 50%;
  animation: ${pulse} 1.8s ease-in-out infinite;
  display: inline-block;
`;

export const Title = styled.h2`
  font-size: 2.8rem;
  font-weight: 800;
  text-align: center;
  color: #fff;
  letter-spacing: -0.02em;
  margin: 0;

  span {
    background: linear-gradient(90deg, #00C7EF, #5d00ff, #00C7EF);
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: ${gradientShift} 4s linear infinite;
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
  margin: 0;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 0 12px;
  }
`;

// ── Cards ───────────────────────────────────────────────────────────────────

export const CardsRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  width: 100%;
  margin-top: 40px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const TestimonialCard = styled.div`
  position: relative;
  background: ${({ isCTA }) =>
    isCTA
      ? 'linear-gradient(135deg, rgba(0,199,239,0.07), rgba(93,0,255,0.07))'
      : 'rgba(255, 255, 255, 0.03)'};
  border: 1px solid ${({ isCTA }) =>
    isCTA ? 'rgba(0,199,239,0.3)' : 'rgba(255, 255, 255, 0.08)'};
  border-radius: 18px;
  padding: 28px 24px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
  animation: ${({ isCTA }) => isCTA ? floatY : 'none'} 5s ease-in-out infinite;

  &:hover {
    transform: translateY(-6px);
    border-color: rgba(0, 199, 239, 0.35);
    box-shadow: 0 0 40px rgba(0, 199, 239, 0.1);
  }
`;

export const Stars = styled.div`
  color: #00C7EF;
  font-size: 1rem;
  letter-spacing: 2px;
`;

export const QuoteMark = styled.div`
  font-size: 3rem;
  line-height: 1;
  color: #00C7EF;
  font-family: Georgia, serif;
  opacity: 0.6;
  margin-top: -8px;
`;

export const QuoteText = styled.p`
  font-size: 0.95rem;
  line-height: 1.8;
  color: ${({ isCTA }) => isCTA ? 'rgba(255,255,255,0.7)' : 'rgba(255,255,255,0.75)'};
  font-style: ${({ isCTA }) => isCTA ? 'normal' : 'italic'};
  margin: 0;
  flex: 1;
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: rgba(255, 255, 255, 0.07);
`;

export const ClientRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Avatar = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: ${({ isCTA }) =>
    isCTA
      ? 'linear-gradient(135deg, #00C7EF, #5d00ff)'
      : 'rgba(0, 199, 239, 0.15)'};
  border: 1px solid rgba(0, 199, 239, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-weight: 700;
  color: #fff;
  flex-shrink: 0;
`;

export const ClientInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const ClientName = styled.div`
  font-size: 0.9rem;
  font-weight: 700;
  color: #fff;
`;

export const ClientRole = styled.div`
  font-size: 0.75rem;
  color: #00C7EF;
  font-weight: 500;
  letter-spacing: 0.03em;
`;