import React from 'react';
import HeroBgAnimation from '../HeroBgAnimation';
import { 
    HeroContainer, 
    HeroBg, 
    HeroLeftContainer, 
    Img, 
    HeroRightContainer, 
    HeroInnerContainer, 
    TextLoop, 
    Title, 
    Span, 
    SubTitle, 
    ResumeButton, 
    CompanyName // Import the updated component
} from './HeroStyle';
import HeroImg from '../../images/hero3.png';
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';

const HeroSection = () => {
    return (
        <div id="hero">
            <HeroContainer>
                <HeroBg>
                    <HeroBgAnimation />
                </HeroBg>
                <HeroInnerContainer>
                    <HeroLeftContainer id="Left">
                        <Title>
                            <CompanyName>{Bio.name}_designer</CompanyName> {/* Updated usage */}
                        </Title>
                        <TextLoop>
                            <Span>
                                <Typewriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>
                        </TextLoop>
                        {/* Use dangerouslySetInnerHTML to render HTML from description */}
                        <SubTitle dangerouslySetInnerHTML={{ __html: Bio.description }} />
                        {/* <ResumeButton 
                            // href={Bio.resume} 
                            href='#projects'
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            View Our Work
                        </ResumeButton> */}
                    </HeroLeftContainer>

                    <HeroRightContainer id="Right">
                        <Img src={HeroImg} alt="Branding and Design Services" />
                    </HeroRightContainer>
                </HeroInnerContainer>
            </HeroContainer>
        </div>
    );
}

export default HeroSection;
