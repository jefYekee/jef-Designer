import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import './styles.css';

// import required modules
import { EffectCards } from 'swiper/modules';
import styled from 'styled-components'




const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    padding: 15px 0px 60px 0px;
    @media (max-width: 960px) {
        padding: 0px;
        padding-bottom: 10px;
    }
`;


const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1350px;
    padding: 1px 0px 0px 0px;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
`;

const Title = styled.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 5px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 32px;
  }
`;



const Image = styled.img`
    height: 240px;
    background-color: #000;
    border-radius: 10px;
    margin-top: 4px;
    @media only screen and (max-width: 768px){
        height: 215px;
        width: 275px;
    }
`

const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        margin-top: 12px;
        margin-left: 10px;
        margin-right: 10px;
        font-size: 16px;
    }
`;


export default function App() {
  const images = [
    'https://docs.vigilantliving.org/wp-content/uploads/2023/11/cisco.png',
    'https://docs.vigilantliving.org/wp-content/uploads/2023/11/freecodecamp.png',
    'https://docs.vigilantliving.org/wp-content/uploads/2023/11/google.png',
    'https://docs.vigilantliving.org/wp-content/uploads/2023/11/react-native-1536x1142.jpg',
  ];

  return (
    <>
        <Container id="education">
            <Wrapper>
                <Title>Certificates</Title>
                <Desc>
                Explore my certified expertise in various technologies and domains i've achieved in the past few years.
                </Desc>
                <Swiper
                    effect={'cards'}
                    grabCursor={true}
                    modules={[EffectCards]}
                    className="swiper"
                >
                    {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <Image className='certImage' src={image} alt={`Slide ${index + 1}`} />
                    </SwiperSlide>
                    ))}
                </Swiper>
            </Wrapper>
        </Container>
    </>
  );
}
