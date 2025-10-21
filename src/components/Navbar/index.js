import React from 'react'
import { Nav, NavLink, NavbarContainer, NavLogo, NavItems, GitHubButton, ButtonContainer, MobileIcon, MobileMenu, MobileNavLogo, MobileLink } from './NavbarStyledComponent'
import { FaBars } from 'react-icons/fa';
import logo from '../../images/log.png'
import { Bio } from '../../data/constants';
import { Close, CloseRounded } from '@mui/icons-material'; 
import { useTheme } from 'styled-components';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme()
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to='/'>
          <a href="/" style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '20;', cursor: 'pointer' }}>
            <img src={logo} width={10} alt='logo'/>
          </a>
        </NavLogo>
        <MobileIcon>
          <FaBars onClick={() => {
            setIsOpen(!isOpen)
          }} />
        </MobileIcon>
        <NavItems>
          {/* <NavLink href="#about">About</NavLink> */}
          <NavLink href='#skills'>Creative Tools</NavLink>
          {/* <NavLink href='#experience'>Experience</NavLink> */}
          <NavLink href='#projects'>Projects</NavLink>
          {/* <NavLink href='#education'>Education</NavLink> */}
          {/* <NavLink href='#packages'>Packages</NavLink> */}
          <NavLink href='#contact'>contact</NavLink>

        </NavItems>
        <ButtonContainer>
          <GitHubButton href="https://wa.me/+2567605388409">Hire Me</GitHubButton>
        </ButtonContainer>
        {
          isOpen &&
          <MobileMenu isOpen={isOpen}>
            {/* <MobileLink href="#about" onClick={() => {
              setIsOpen(!isOpen)
            }}>About</MobileLink> */}
            <MobileLink href='#skills' onClick={() => {
              setIsOpen(!isOpen)
            }}>Creative Tools</MobileLink>
            {/* <MobileLink href='#experience' onClick={() => {
              setIsOpen(!isOpen)
            }}>Experience</MobileLink> */}
            <MobileLink href='#projects' onClick={() => {
              setIsOpen(!isOpen)
            }}>Projects</MobileLink>
            {/* <MobileLink href='#education' onClick={() => {
              setIsOpen(!isOpen)
            }}>Education</MobileLink> */}
            {/* <MobileLink href='#packages' onClick={() => {
              setIsOpen(!isOpen)
            }}>Packages</MobileLink> */}
            <MobileLink href='#contact' onClick={() => {
              setIsOpen(!isOpen)
            }}>Contact me</MobileLink>
            <GitHubButton style={{padding: '10px 16px',background: `${theme.primary}`, color: 'white',width: 'max-content'}} href="https://wa.me/+256760538849" >Hire Me</GitHubButton>
          </MobileMenu>
        }
      </NavbarContainer>
    </Nav>
  )
}

export default Navbar