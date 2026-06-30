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

// ── Layout ──────────────────────────────────────────────────────────────────

export const Container = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #0a0a1a 0%, #0d0d2b 50%, #0a1628 100%);
  padding: 100px 20px 120px;
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

export const Inner = styled.div`
  display: flex;
  gap: 50px;
  width: 100%;
  margin-top: 40px;
  align-items: flex-start;

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 40px;
  }
`;

// ── Info Side ───────────────────────────────────────────────────────────────

export const InfoSide = styled.div`
  flex: 0 0 38%;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: 900px) {
    flex: 1;
  }
`;

export const InfoHeading = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #fff;
  margin: 0;
`;

export const InfoText = styled.p`
  font-size: 0.92rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.5);
  margin: 0;
`;

export const InfoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-top: 12px;
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

export const InfoIconWrap = styled.div`
  width: 42px;
  height: 42px;
  border-radius: 12px;
  background: rgba(0, 199, 239, 0.08);
  border: 1px solid rgba(0, 199, 239, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  flex-shrink: 0;
`;

export const InfoLabel = styled.div`
  font-size: 0.72rem;
  color: rgba(255, 255, 255, 0.4);
  text-transform: uppercase;
  letter-spacing: 0.06em;
`;

export const InfoValue = styled.div`
  font-size: 0.95rem;
  color: #fff;
  font-weight: 600;
  margin-top: 2px;
`;

// ── Form Side ───────────────────────────────────────────────────────────────

export const ContactForm = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 14px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: 32px;
  transition: border-color 0.3s ease;

  &:hover {
    border-color: rgba(0, 199, 239, 0.2);
  }
`;

export const ContactTitle = styled.div`
  font-size: 1.25rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 6px;
`;

export const InputRow = styled.div`
  display: flex;
  gap: 12px;

  @media (max-width: 520px) {
    flex-direction: column;
  }
`;

const fieldBase = `
  flex: 1;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  outline: none;
  font-size: 0.92rem;
  color: #fff;
  border-radius: 12px;
  padding: 13px 16px;
  font-family: 'Poppins', sans-serif;
  transition: border-color 0.25s ease, background 0.25s ease;

  &::placeholder {
    color: rgba(255, 255, 255, 0.35);
  }

  &:focus {
    border-color: #00C7EF;
    background: rgba(0, 199, 239, 0.04);
  }
`;

export const ContactInput = styled.input`
  ${fieldBase}
`;

export const ContactInputMessage = styled.textarea`
  ${fieldBase}
  resize: vertical;
  min-height: 110px;
`;

export const ContactButton = styled.button`
  width: 100%;
  text-align: center;
  background: linear-gradient(135deg, #00C7EF, #5d00ff);
  padding: 14px 16px;
  margin-top: 4px;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  color: #fff;
  font-size: 0.95rem;
  font-weight: 700;
  font-family: 'Poppins', sans-serif;
  transition: transform 0.25s ease, box-shadow 0.25s ease, opacity 0.25s ease;
  box-shadow: 0 0 30px rgba(0, 199, 239, 0.25);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 0 44px rgba(0, 199, 239, 0.45);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;