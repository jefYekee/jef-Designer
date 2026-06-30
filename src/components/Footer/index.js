import React from 'react'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import GitHubIcon from '@mui/icons-material/GitHub'
import {
  FooterContainer,
  GridLines,
  FooterWrapper,
  TopRow,
  LogoBlock,
  Logo,
  LogoTag,
  Nav,
  NavLink,
  SocialMediaIcons,
  SocialMediaIcon,
  Divider,
  BottomRow,
  Copyright,
  BackToTop,
} from './FooterStyle'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <FooterContainer>
      <GridLines />
      <FooterWrapper>
        <TopRow>
          <LogoBlock>
            <Logo>Jef Creative</Logo>
            <LogoTag>Design. Code. Ship.</LogoTag>
          </LogoBlock>

          <Nav>
            <NavLink href="#hero">Home</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#skills">Toolkit</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </Nav>

          <SocialMediaIcons>
            <SocialMediaIcon href="mailto:jefyekee@gmail.com" target="_blank" rel="noreferrer">
              <MailOutlineIcon fontSize="small" />
            </SocialMediaIcon>
            <SocialMediaIcon href="https://wa.me/+256760538849" target="_blank" rel="noreferrer">
              <WhatsAppIcon fontSize="small" />
            </SocialMediaIcon>
            <SocialMediaIcon href="https://github.com/" target="_blank" rel="noreferrer">
              <GitHubIcon fontSize="small" />
            </SocialMediaIcon>
          </SocialMediaIcons>
        </TopRow>

        <Divider />

        <BottomRow>
          <Copyright>&copy; {new Date().getFullYear()} Jef Creative. All rights reserved.</Copyright>
          <BackToTop onClick={scrollToTop}>Back to top ↑</BackToTop>
        </BottomRow>
      </FooterWrapper>
    </FooterContainer>
  )
}

export default Footer