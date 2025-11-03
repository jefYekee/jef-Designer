import React from 'react';
import styled from 'styled-components';
import { skills } from '../../data/constants';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 700;
  margin-top: 20px;
  background: linear-gradient(90deg, #5d00ff, #1e90ff);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  animation: gradientMove 6s ease infinite;

  @keyframes gradientMove {
    to {
      background-position: 200% center;
    }
  }

  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

export const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  margin-bottom: 100px;
  gap: 30px;
  justify-content: center;
`;

const Skill = styled.div`
  width: 100%;
  max-width: 500px;
  background: ${({ theme }) => theme.card};
  border: 1px solid #5d00ff;
  box-shadow: 0 4px 24px rgba(30, 144, 255, 0.2);
  border-radius: 16px;
  padding: 18px 36px;
  transition: all 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 6px 30px rgba(93, 0, 255, 0.3);
    transform: translateY(-4px);
  }

  @media (max-width: 768px) {
    max-width: 400px;
    padding: 10px 36px;
  }
  @media (max-width: 500px) {
    max-width: 330px;
    padding: 10px 36px;
  }
`;

const SkillTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 20px;
  text-align: center;
`;

const SkillList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
`;

const SkillItem = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #1e90ff;
  border: 1px solid #5d00ff;
  border-radius: 12px;
  padding: 12px 16px;
  background: rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: rgba(93, 0, 255, 0.1);
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }
  @media (max-width: 500px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`;

const SkillImage = styled.img`
  width: 24px;
  height: 24px;
`;

const Skills = () => {
  if (!skills || !Array.isArray(skills)) {
    return <div>Error: Skills data is not available.</div>;
  }

  return (
    <Container id="skills">
      <Wrapper>
      <Title>My Creative Toolkit</Title>
      <Desc>
        Explore the powerful tools and software I use to craft exceptional designs and bring creative visions to life. With years of experience and a passion for design, I leverage these industry-leading resources to deliver high-quality branding and visual solutions.
      </Desc>

        <SkillsContainer>
          {skills.map((skillCategory) => (
            <Skill key={skillCategory.title}>
              <SkillTitle>{skillCategory.title}</SkillTitle>
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
  );
};

export default Skills;
