import React from 'react';
import styled from 'styled-components';
import { Container, Wrapper, Title, Desc, CardContainer } from '../Packages/PackagesStyle';
import SocialMedia from '../Cards/SocialMedia';
import { socialmedia } from '../../data/constants'; // Import your updated data array

const SocialMediaContainer = () => {
    return (
      <Container id="socialmedia">
        <Wrapper>
            <CardContainer>
            
                <SocialMedia/>
            </CardContainer>
        </Wrapper>
      </Container>
    );
  };
  
export default SocialMediaContainer;
