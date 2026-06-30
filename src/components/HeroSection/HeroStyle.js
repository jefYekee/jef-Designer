import styled, { keyframes } from 'styled-components';

// ── Keyframes ──────────────────────────────────────────────────────────────

const fadeSlideUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
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
  padding: 140px 80px 80px;
  background: linear-gradient(135deg, #0a0a1a 0%, #0d0d2b 50%, #0a1628 100%);
  overflow: hidden;
  font-family: 'Poppins', sans-serif;

  @media (max-width: 768px) {
    padding: 120px 24px 60px;
  }
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
  background: rgba(93, 0, 255, 0.16);
  filter: blur(110px);
  top: -100px;
  right: -60px;
  z-index: 0;
  pointer-events: none;
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// ── Badge ──────────────────────────────────────────────────────────────────

export const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  border: 1px solid rgba(0, 199, 239, 0.3);
  border-radius: 50px;
  padding: 6px 18px;
  font-size: 0.75rem;
  color: #00C7EF;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  font-weight: 600;
  width: fit-content;
  margin: 0 auto 28px;
  animation: ${fadeSlideUp} 0.6s ease forwards;
`;

export const DotPulse = styled.span`
  width: 6px;
  height: 6px;
  background: #00C7EF;
  border-radius: 50%;
  animation: ${pulse} 1.8s ease-in-out infinite;
`;

// ── Headline ───────────────────────────────────────────────────────────────

export const HeroHeadline = styled.h1`
  font-size: 5rem;
  font-weight: 900;
  line-height: 1.15;
  letter-spacing: -0.02em;
  color: #fff;
  text-transform: uppercase;
  text-align: center;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 2.6rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const wordFadeUp = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to   { opacity: 1; transform: translateY(0); }
`;

export const Word = styled.span`
  display: inline-block;
  opacity: 0;
  animation: ${wordFadeUp} 0.6s ease forwards;
  animation-delay: ${({ delay }) => delay || '0s'};
  transition: color 0.35s ease, -webkit-text-stroke-color 0.35s ease, filter 0.35s ease;
  cursor: default;

  &.outline {
    color: transparent;
    -webkit-text-stroke: 2px #00C7EF;
    -webkit-text-fill-color: transparent;

    &:hover {
      -webkit-text-fill-color: #00C7EF;
      color: #00C7EF;
      filter: drop-shadow(0 0 18px rgba(0, 199, 239, 0.6));
    }
  }

  &.accent-fill {
    background: linear-gradient(90deg, #00C7EF, #5d00ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

// ── Typewriter ─────────────────────────────────────────────────────────────

export const TypewriterWrap = styled.div`
  font-size: 1.1rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.55);
  min-height: 1.8rem;
  display: flex;
  align-items: center;
  gap: 2px;
  margin-top: 22px;
  animation: ${fadeSlideUp} 0.7s ease 0.2s both;

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
`;

export const Cursor = styled.span`
  display: inline-block;
  width: 2px;
  height: 1.1em;
  background: #00C7EF;
  animation: ${blink} 1s step-end infinite;
`;

// ── Buttons ────────────────────────────────────────────────────────────────

export const HeroCTA = styled.div`
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 38px;
  animation: ${fadeSlideUp} 0.7s ease 0.3s both;
`;

export const WorkButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: linear-gradient(135deg, #00C7EF, #5d00ff);
  color: #fff;
  padding: 15px 36px;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 700;
  font-size: 0.95rem;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  box-shadow: 0 0 30px rgba(0, 199, 239, 0.3);

  &:hover {
    transform: translateY(-3px) scale(1.04);
    box-shadow: 0 0 44px rgba(0, 199, 239, 0.5);
  }

  @media (max-width: 480px) {
    padding: 12px 28px;
    font-size: 0.88rem;
  }
`;

export const ContactButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: transparent;
  color: rgba(255, 255, 255, 0.85);
  padding: 15px 36px;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 700;
  font-size: 0.95rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.25s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.07);
    border-color: rgba(255, 255, 255, 0.4);
    transform: translateY(-3px);
  }

  @media (max-width: 480px) {
    padding: 12px 28px;
    font-size: 0.88rem;
  }
`;

// ── Stats ──────────────────────────────────────────────────────────────────

export const StatRow = styled.div`
  display: flex;
  gap: 2.5rem;
  margin: 50px auto 0;
  padding-top: 22px;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
  width: fit-content;
  animation: ${fadeSlideUp} 0.7s ease 0.4s both;

  @media (max-width: 480px) {
    gap: 1.5rem;
  }
`;

export const Stat = styled.div`
  text-align: center;
`;

export const StatNum = styled.div`
  font-size: 1.4rem;
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
  margin-top: 2px;
`;