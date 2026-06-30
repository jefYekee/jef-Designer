import React from 'react'
import styled, { keyframes } from 'styled-components'
import { skills } from '../../data/constants'

// ── Animations ─────────────────────────────────────────────────────────────

const fadeSlideUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
`

const pulse = keyframes`
  0%, 100% { opacity: 1; transform: scale(1); }
  50%       { opacity: 0.4; transform: scale(0.7); }
`

const gradientShift = keyframes`
  to { background-position: 200% center; }
`

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
  background: rgba(0, 199, 239, 0.1);
  filter: blur(100px);
  top: -80px; left: -100px;
  pointer-events: none;
`

const GlowRight = styled.div`
  position: absolute;
  width: 320px; height: 320px;
  border-radius: 50%;
  background: rgba(93, 0, 255, 0.13);
  filter: blur(100px);
  bottom: -80px; right: -100px;
  pointer-events: none;
`

const Wrapper = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  gap: 16px;
  animation: ${fadeSlideUp} 0.7s ease both;
`

const Badge = styled.div`
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
`

const PulseDot = styled.span`
  width: 7px; height: 7px;
  background: #00C7EF;
  border-radius: 50%;
  animation: ${pulse} 1.8s ease-in-out infinite;
  display: inline-block;
`

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
`

export const Desc = styled.p`
  font-size: 1rem;
  text-align: center;
  max-width: 600px;
  color: rgba(255, 255, 255, 0.5);
  line-height: 1.8;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 0 12px;
  }
`

const SkillsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 26px;
  margin-top: 36px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`

const Skill = styled.div`
  position: relative;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 18px;
  padding: 28px 24px;
  transition: all 0.3s ease;
  animation: ${fadeSlideUp} 0.6s ease both;
  animation-delay: ${({ delay }) => delay || '0s'};

  &:hover {
    border-color: rgba(0, 199, 239, 0.3);
    box-shadow: 0 0 40px rgba(0, 199, 239, 0.1);
    transform: translateY(-4px);
  }
`

const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: center;
  margin-bottom: 20px;
`

const CategoryDot = styled.span`
  width: 6px; height: 6px;
  border-radius: 50%;
  background: linear-gradient(135deg, #00C7EF, #5d00ff);
`

const SkillTitle = styled.h3`
  font-size: 1.15rem;
  font-weight: 700;
  color: #fff;
  text-align: center;
  margin: 0;
`

const SkillList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
`

const SkillItem = styled.div`
  font-size: 0.85rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.75);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 50px;
  padding: 9px 16px;
  background: rgba(255, 255, 255, 0.03);
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.25s ease;
  cursor: default;

  &:hover {
    border-color: rgba(0, 199, 239, 0.4);
    background: rgba(0, 199, 239, 0.08);
    color: #fff;
    transform: scale(1.05);
  }

  @media (max-width: 500px) {
    font-size: 0.78rem;
    padding: 7px 12px;
  }
`

const SkillImage = styled.img`
  width: 18px;
  height: 18px;
  /* Most Simple Icons SVGs render dark/black by default.
     This filter forces them to render as soft white so they're visible
     on the dark background regardless of native icon color. */
  filter: brightness(0) invert(1) opacity(0.85);
  transition: filter 0.25s ease;

  ${SkillItem}:hover & {
    filter: brightness(0) invert(1) opacity(1);
  }
`

// ── Component ───────────────────────────────────────────────────────────────

const Skills = () => {
  if (!skills || !Array.isArray(skills)) {
    return <div>Error: Skills data is not available.</div>
  }

  return (
    <Container id="skills">
      <GlowLeft />
      <GlowRight />

      <Wrapper>
        <Badge><PulseDot /> What I Work With</Badge>

        <Title>My Creative <span>Toolkit</span></Title>

        <Desc>
          The tools and technologies I use to take an idea from a sketch to a
          fully shipped, polished product — design, code, and everything in between.
        </Desc>

        <SkillsContainer>
          {skills.map((skillCategory, i) => (
            <Skill key={skillCategory.title} delay={`${i * 0.1}s`}>
              <CategoryHeader>
                <CategoryDot />
                <SkillTitle>{skillCategory.title}</SkillTitle>
              </CategoryHeader>
              <SkillList>
                {skillCategory.skills && Array.isArray(skillCategory.skills) ? (
                  skillCategory.skills.map((item) => (
                    <SkillItem key={item.name}>
                      <SkillImage src={item.image} alt={item.name} />
                      {item.name}
                    </SkillItem>
                  ))
                ) : (
                  <div>Error: Skill data is not available.</div>
                )}
              </SkillList>
            </Skill>
          ))}
        </SkillsContainer>
      </Wrapper>
    </Container>
  )
}

export default Skills