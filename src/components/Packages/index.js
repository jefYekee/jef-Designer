import React from 'react';
import { Container, Wrapper, Title, Desc, CardContainer } from './PackagesStyle';
import PackageCard from '../Cards/PackageCard';
import MobilePackages from '../Cards/MobilePackage'
import { mypackages } from '../../data/constants';
import { mobilepackages } from '../../data/constants'; // Updated import
import EnterpriseCard from '../Cards/EnterpriseCard';
import SocialMediaCard from '../Cards/SocialMediaCard';


const Packages = () => {
  return (
    <Container id="packages">
      <Wrapper>
        <Title>Tailored Website Development Packages</Title>
        <Desc>
          Explore website development packages: Basic, Premium. Find the right fit for your online goals and let us bring your vision to life.
        </Desc>
        
        <CardContainer>
          {mypackages.map((mypackage) => (
            <PackageCard key={mypackage.id} mypackage={mypackage} />
          ))}
        </CardContainer>
{/* 
        <CardContainer>
          <SocialMediaCard />
        </CardContainer>

        <Title>Mobile App Development Packages</Title>
        <Desc>
          Begin your app journey with our Basic package. Ideal for startups, it's your essential first step toward success. Let's build something great together.
        </Desc>

        <CardContainer>
          {mobilepackages.map((mobilepackage) => (
            <MobilePackages key={mobilepackage.id} mobilepackage={mobilepackage} />
          ))}
        </CardContainer>

        <CardContainer>
          <EnterpriseCard />
        </CardContainer> */}
        
      </Wrapper>
    </Container>
  )
}

export default Packages;
