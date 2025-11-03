import React from 'react';
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';
import {
  HeroContainer,
  HeroContent,
  CompanyName,
  TextLoop,
  SubTitle,
  WorkButton
} from './HeroStyle';
import HeroImg from '../../images/main-wallpaper.png';

const HeroSection = () => {
  return (
    <HeroContainer bg={HeroImg} id="hero">
      <HeroContent>
        {/* <CompanyName>{Bio.name}_designer</CompanyName> */}

        <TextLoop>
          <Typewriter
            options={{
              strings: Bio.roles,
              autoStart: true,
              loop: true,
            }}
          />
        </TextLoop>

        <SubTitle dangerouslySetInnerHTML={{ __html: Bio.description }} />

        <WorkButton href="#projects">View My Work</WorkButton>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
