import React, { useState, useEffect } from 'react';
import { 
  Nav, NavLink, NavbarContainer, NavLogo, NavItems, 
  MobileHireButton , ButtonContainer, MobileIcon, MobileMenu, MobileLink 
} from './NavbarStyledComponent';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../../images/log.png';
import { useTheme } from 'styled-components';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();

  // ✅ Auto-close mobile menu on desktop resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to='/'>
          <a 
            href="/" 
            style={{ display: "flex", alignItems: "center", color: "white", margin: 0, cursor: "pointer" }}
          >
            <img src={logo} width={40} alt='logo' />
          </a>
        </NavLogo>

        {/* Mobile Icon: Hamburger → X toggle */}
        <MobileIcon onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </MobileIcon>

        <NavItems>
          <NavLink href='#skills'>Creative Tools</NavLink>
          <NavLink href='#projects'>Projects</NavLink>
          <NavLink href='#contact'>Contact</NavLink>
        </NavItems>

        <ButtonContainer>
          <MobileHireButton  href="https://wa.me/+2567605388409">Hire Me</MobileHireButton >
        </ButtonContainer>

        {/* Mobile Menu */}
        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            <MobileLink href='#skills' onClick={() => setIsOpen(false)}>Creative Tools</MobileLink>
            <MobileLink href='#projects' onClick={() => setIsOpen(false)}>Projects</MobileLink>
            <MobileLink href='#contact' onClick={() => setIsOpen(false)}>Contact me</MobileLink>
            <MobileHireButton  
              style={{
                padding: '10px 16px',
                color: 'white',
                width: 'max-content'
              }} 
              href="https://wa.me/+256760538849"
            >
              Hire Me
            </MobileHireButton >
          </MobileMenu>
        )}
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
