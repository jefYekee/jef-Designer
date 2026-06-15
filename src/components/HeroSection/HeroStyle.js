import styled, { keyframes } from 'styled-components';

// ── Keyframes ──────────────────────────────────────────────────────────────

const fadeSlideDown = keyframes`
  from { opacity: 0; transform: translateY(-12px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const fadeSlideUp = keyframes`
  from { opacity: 0; transform: translateY(18px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const gradientShift = keyframes`
  to { background-position: 200% center; }
`;

const pulse = keyframes`
  0%, 100% { opacity: 1; transform: scale(1); }
  50%       { opacity: 0.4; transform: scale(0.7); }
`;

const blink = keyframes`
  50% { opacity: 0; }
`;

// ── Layout ─────────────────────────────────────────────────────────────────

export const HeroContainer = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 100vh;
  padding-top: 60px;
  background: linear-gradient(135deg, #0a0a1a 0%, #0d0d2b 50%, #0a1628 100%);
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
`;

export const GlowOrb = styled.div`
  position: absolute;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: rgba(93, 0, 255, 0.18);
  filter: blur(90px);
  top: -100px;
  left: -100px;
  z-index: 0;
  pointer-events: none;
`;

export const GlowOrbRight = styled.div`
  position: absolute;
  width: 350px;
  height: 350px;
  border-radius: 50%;
  background: rgba(0, 199, 239, 0.12);
  filter: blur(90px);
  bottom: -80px;
  right: -80px;
  z-index: 0;
  pointer-events: none;
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 780px;
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.1rem;
`;

// ── Badge ──────────────────────────────────────────────────────────────────

export const AvailabilityBadge = styled.div`
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
  animation: ${fadeSlideDown} 0.6s ease forwards;
`;

export const DotPulse = styled.span`
  display: inline-block;
  width: 7px;
  height: 7px;
  background: #00C7EF;
  border-radius: 50%;
  animation: ${pulse} 1.8s ease-in-out infinite;
`;

// ── Heading ────────────────────────────────────────────────────────────────

export const HeroName = styled.h1`
  font-size: 3.2rem;
  font-weight: 800;
  color: #fff;
  line-height: 1.15;
  letter-spacing: -0.02em;
  animation: ${fadeSlideUp} 0.7s ease 0.1s both;

  .accent {
    background: linear-gradient(90deg, #00C7EF, #5d00ff, #00C7EF);
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: ${gradientShift} 4s linear infinite;
  }

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

// ── Typewriter ─────────────────────────────────────────────────────────────

export const TypewriterWrap = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.7);
  min-height: 2rem;
  display: flex;
  align-items: center;
  gap: 2px;
  animation: ${fadeSlideUp} 0.7s ease 0.2s both;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const Cursor = styled.span`
  display: inline-block;
  width: 2px;
  height: 1.1em;
  background: #00C7EF;
  vertical-align: middle;
  animation: ${blink} 1s step-end infinite;
`;

// ── Description ────────────────────────────────────────────────────────────

export const SubTitle = styled.p`
  font-size: 1rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.5);
  max-width: 600px;
  animation: ${fadeSlideUp} 0.7s ease 0.3s both;

  @media (max-width: 640px) {
    font-size: 0.9rem;
  }
`;

// ── Buttons ────────────────────────────────────────────────────────────────

export const HeroCTA = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 0.5rem;
  animation: ${fadeSlideUp} 0.7s ease 0.4s both;
`;

export const WorkButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: linear-gradient(135deg, #00C7EF, #5d00ff);
  color: #fff;
  padding: 13px 34px;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95rem;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  box-shadow: 0 0 28px rgba(0, 199, 239, 0.25);

  &:hover {
    transform: translateY(-3px) scale(1.04);
    box-shadow: 0 0 40px rgba(0, 199, 239, 0.45);
  }

  @media (max-width: 480px) {
    padding: 11px 26px;
    font-size: 0.9rem;
  }
`;

export const ContactButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: transparent;
  color: rgba(255, 255, 255, 0.8);
  padding: 13px 34px;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95rem;
  border: 1px solid rgba(255, 255, 255, 0.18);
  transition: all 0.25s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.07);
    border-color: rgba(255, 255, 255, 0.35);
    transform: translateY(-3px);
  }

  @media (max-width: 480px) {
    padding: 11px 26px;
    font-size: 0.9rem;
  }
`;

// ── Stats ──────────────────────────────────────────────────────────────────

export const StatRow = styled.div`
  display: flex;
  gap: 2.5rem;
  margin-top: 1rem;
  padding-top: 1.2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
  animation: ${fadeSlideUp} 0.7s ease 0.5s both;

  @media (max-width: 480px) {
    gap: 1.5rem;
  }
`;

export const Stat = styled.div`
  text-align: center;
`;

export const StatNum = styled.div`
  font-size: 1.5rem;
  font-weight: 800;
  color: #fff;

  span {
    color: #00C7EF;
  }
`;

export const StatLabel = styled.div`
  font-size: 0.7rem;
  color: rgba(255, 255, 255, 0.4);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-top: 3px;
`;