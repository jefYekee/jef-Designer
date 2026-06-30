import React from 'react'
import styled, { keyframes } from 'styled-components'
import ProfileImg from '../../assest/j.png'

// ── Animations ─────────────────────────────────────────────────────────────

const fadeSlideUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
`

const rotateBorder = keyframes`
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
`

const rotateBorderReverse = keyframes`
  from { transform: rotate(0deg); }
  to   { transform: rotate(-360deg); }
`

const pulse = keyframes`
  0%, 100% { opacity: 1; transform: scale(1); }
  50%       { opacity: 0.4; transform: scale(0.7); }
`

const floatY = keyframes`
  0%, 100% { transform: translateY(0px); }
  50%       { transform: translateY(-8px); }
`

const gradientShift = keyframes`
  to { background-position: 200% center; }
`

// ── Layout ──────────────────────────────────────────────────────────────────

export const Container = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #0a0a1a 0%, #0d0d2b 50%, #0a1628 100%);
  padding: 100px 20px;
  overflow: hidden;
  font-family: 'Poppins', sans-serif;

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
`

const GlowLeft = styled.div`
  position: absolute;
  width: 350px; height: 350px;
  border-radius: 50%;
  background: rgba(93, 0, 255, 0.14);
  filter: blur(100px);
  bottom: -80px; left: -80px;
  pointer-events: none;
`

const GlowRight = styled.div`
  position: absolute;
  width: 300px; height: 300px;
  border-radius: 50%;
  background: rgba(0, 199, 239, 0.1);
  filter: blur(100px);
  top: -60px; right: -60px;
  pointer-events: none;
`

const Inner = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 80px;
  max-width: 1100px;
  width: 100%;

  @media (max-width: 968px) {
    flex-direction: column;
    gap: 50px;
    text-align: center;
  }
`

// ── Image Side ──────────────────────────────────────────────────────────────

const ImageSide = styled.div`
  position: relative;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 340px;
  height: 420px;

  @media (max-width: 480px) {
    width: 280px;
    height: 360px;
  }
`

const SpinRing = styled.div`
  position: absolute;
  border-radius: 24px;
  border: 1.5px dashed rgba(0, 199, 239, 0.3);
  animation: ${rotateBorder} ${({ speed }) => speed || '14s'} linear infinite;
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
`

const SpinRingReverse = styled(SpinRing)`
  animation: ${rotateBorderReverse} ${({ speed }) => speed || '20s'} linear infinite;
  border-color: rgba(93, 0, 255, 0.2);
  border-radius: 28px;
`

const RingDot = styled.div`
  position: absolute;
  width: 8px; height: 8px;
  border-radius: 50%;
  background: #00C7EF;
  top: -4px; left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 0 10px #00C7EF;
`

const CardWrap = styled.div`
  position: relative;
  z-index: 2;
  width: 280px;
  border-radius: 20px;
  padding: 4px;
  background: linear-gradient(135deg, #00C7EF, #5d00ff);
  box-shadow: 0 0 60px rgba(0, 199, 239, 0.25), 0 0 110px rgba(93, 0, 255, 0.15);
  animation: ${floatY} 5s ease-in-out infinite;

  @media (max-width: 480px) {
    width: 230px;
  }
`

const CardInner = styled.div`
  border-radius: 17px;
  overflow: hidden;
  background: #0a0a1a;
`

const ProfilePhoto = styled.img`
  width: 100%;
  height: 380px;
  object-fit: contain;
  background: #11112a;
  display: block;

  @media (max-width: 480px) {
    height: 320px;
  }
`

const CardLabel = styled.div`
  padding: 12px 16px;
  display: flex;
  flex-direction: column;
  gap: 2px;
  background: rgba(255,255,255,0.03);
`

const CardName = styled.div`
  font-size: 0.85rem;
  font-weight: 700;
  color: #fff;
`

const CardRole = styled.div`
  font-size: 0.7rem;
  color: #00C7EF;
  font-weight: 500;
`

const Chip = styled.div`
  position: absolute;
  background: rgba(10, 10, 26, 0.85);
  border: 1px solid rgba(0,199,239,0.3);
  border-radius: 50px;
  padding: 5px 12px;
  font-size: 0.68rem;
  font-weight: 600;
  color: #00C7EF;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  white-space: nowrap;
  backdrop-filter: blur(6px);
  z-index: 3;

  &.top    { top: -14px;  left: 50%; transform: translateX(-50%); animation: ${floatY} 4.5s ease-in-out infinite; }
  &.bottom { bottom: -14px; left: 50%; transform: translateX(-50%); animation: ${floatY} 5s ease-in-out 0.5s infinite; }
  &.left   { left: -56px; top: 38%; animation: ${floatY} 4s ease-in-out 1s infinite; }
  &.right  { right: -64px; top: 62%; animation: ${floatY} 5.5s ease-in-out 1.5s infinite; }
`

// ── Text Side ───────────────────────────────────────────────────────────────

const TextSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  animation: ${fadeSlideUp} 0.7s ease 0.2s both;
`

const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(0, 199, 239, 0.08);
  border: 1px solid rgba(0, 199, 239, 0.25);
  border-radius: 50px;
  padding: 6px 18px;
  font-size: 0.72rem;
  color: #00C7EF;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  font-weight: 600;
  width: fit-content;

  @media (max-width: 968px) { margin: 0 auto; }
`

const PulseDot = styled.span`
  width: 7px; height: 7px;
  background: #00C7EF;
  border-radius: 50%;
  animation: ${pulse} 1.8s ease-in-out infinite;
  display: inline-block;
`

const Heading = styled.h2`
  font-size: 2.6rem;
  font-weight: 800;
  color: #fff;
  line-height: 1.2;
  letter-spacing: -0.02em;

  span {
    background: linear-gradient(90deg, #00C7EF, #5d00ff, #00C7EF);
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: ${gradientShift} 4s linear infinite;
  }

  @media (max-width: 768px) { font-size: 1.9rem; }
`

const Divider = styled.div`
  width: 60px;
  height: 2px;
  background: linear-gradient(90deg, #00C7EF, #5d00ff);
  border-radius: 2px;

  @media (max-width: 968px) { margin: 0 auto; }
`

const Bio = styled.p`
  font-size: 0.97rem;
  line-height: 1.9;
  color: rgba(255,255,255,0.55);
  max-width: 520px;
`

const PillRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  @media (max-width: 968px) { justify-content: center; }
`

const Pill = styled.div`
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 50px;
  padding: 7px 18px;
  font-size: 0.8rem;
  font-weight: 600;
  color: rgba(255,255,255,0.75);
  transition: all 0.25s ease;

  &:hover {
    border-color: rgba(0,199,239,0.4);
    color: #00C7EF;
    background: rgba(0,199,239,0.07);
  }
`

const StatRow = styled.div`
  display: flex;
  gap: 32px;
  padding-top: 8px;

  @media (max-width: 968px) { justify-content: center; }
  @media (max-width: 400px) { gap: 20px; }
`

const Stat = styled.div`text-align: center;`

const StatNum = styled.div`
  font-size: 1.6rem;
  font-weight: 800;
  color: #fff;
  span { color: #00C7EF; }
`

const StatLabel = styled.div`
  font-size: 0.7rem;
  color: rgba(255,255,255,0.4);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-top: 2px;
`

// ── Component ───────────────────────────────────────────────────────────────

const About = () => {
  return (
    <Container id="about">
      <GlowLeft />
      <GlowRight />

      <Inner>
        {/* ── Image ── */}
        <ImageSide>
          <SpinRing size="370px" speed="18s"><RingDot /></SpinRing>
          <SpinRingReverse size="415px" speed="26s" />

          <CardWrap>
            <CardInner>
              <ProfilePhoto src={ProfileImg} alt="Profile" />
              <CardLabel>
                <CardName>Jeff — Designer &amp; Developer</CardName>
                <CardRole>UI/UX · Front-End · Branding</CardRole>
              </CardLabel>
            </CardInner>
          </CardWrap>

          <Chip className="top">UI / UX</Chip>
          <Chip className="bottom">Branding</Chip>
          <Chip className="left">React</Chip>
          <Chip className="right">Front-End</Chip>
        </ImageSide>

        {/* ── Text ── */}
        <TextSide>
          <Badge><PulseDot /> Self-Taught Designer & Developer</Badge>

          <Heading>
            I design &amp; build<br />
            things that <span>matter</span>
          </Heading>

          <Divider />

          <Bio>
            I'm a UI/UX Designer, Front-End Developer, and Graphic &amp; Brand Designer
            passionate about creating intuitive, engaging, and technically solid digital experiences.
            I handle the full journey —&nbsp;
            <strong style={{ color: '#00C7EF' }}>Idea → Design → Develop</strong>&nbsp;
            — blending creative design with clean, efficient code.
          </Bio>

          <PillRow>
            {['UI / UX Design', 'Front-End Dev', 'Brand Identity', 'React', 'Graphic Design', 'Self-Taught'].map((s) => (
              <Pill key={s}>{s}</Pill>
            ))}
          </PillRow>

          <StatRow>
            <Stat>
              <StatNum>5<span>+</span></StatNum>
              <StatLabel>Years Exp</StatLabel>
            </Stat>
            <Stat>
              <StatNum>20<span>+</span></StatNum>
              <StatLabel>Projects</StatLabel>
            </Stat>
            <Stat>
              <StatNum>5<span>+</span></StatNum>
              <StatLabel>Clients</StatLabel>
            </Stat>
          </StatRow>
        </TextSide>
      </Inner>
    </Container>
  )
}

export default About