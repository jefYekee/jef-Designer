import { Link as LinkR } from 'react-router-dom';
import styled from 'styled-components';

// src/components/Navbar/NavbarStyledComponent.js

export const Nav = styled.nav`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  position: fixed; /* Changed from sticky */
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 95%;
  border-radius: 14px;
  padding: 0 10px;
  margin: 0; /* Remove any vertical spacing */

  /* Glassmorphism effect */
  background: rgba(15, 15, 25, 0.45); /* slightly more transparent */
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);

  /* Subtle glowing border */
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 25px rgba(0, 80, 255, 0.15), 
              0 0 12px rgba(0, 100, 255, 0.12);

  z-index: 999;
  transition: all 0.4s ease-in-out;

  @media (max-width: 960px) {
    width: 92%;
    height: 55px;
    border-radius: 12px;
  }

  @media (max-width: 600px) {
    width: 94%;
    height: 50px;
    border-radius: 10px;
    box-shadow: 0 2px 15px rgba(0, 80, 255, 0.25);
  }
`;



export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    width: 100%;
    max-width: 1200px;
    padding: 0 16px;

`;

export const NavLogo = styled(LinkR)`
    padding: 0 6px;
    display: flex;
    justify-content: start;
    align-items: center;
    text-decoration: none;

    img {
        width: 100px; 
        height: 60px;
        transition: width 0.3s, height 0.3s;
    }

    @media (max-width: 768px) {
        padding: 0;
        img {
            width: 60px; 
            height: 50px; 
        }
    }

    @media (max-width: 480px) {
        padding: 0;
        img {
            width: 50px;
            height: 40px;
        }
    }
`;

export const Span = styled.div`
    padding: 0 4px;
    font-weight: bold;
    font-size: 18px;
`;

export const NavItems = styled.ul`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 32px;
    list-style: none;
    padding: 0;

    @media screen and (max-width: 768px) {
      display: none;
    }
`;


export const NavLink = styled.a`
    // Navigation link color (Dark Indigo)
    color: #0C0763; 
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    
    :hover {
        color: #FFFFFF; // White text on hover
    }
`;

export const MobileHireButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  border-radius: 25px;
  color: #fff;
  background: linear-gradient(135deg, #5d00ff, #1e90ff);
  font-weight: 600;
  font-size: 16px;
  text-decoration: none;
  width: max-content;
  border: 1.8px solid #0C0763;
  transition: all 0.3s ease-in-out;

  :hover {
    background: linear-gradient(135deg, #1e90ff, #5d00ff);
    transform: scale(1.05);
  }

  @media (max-width: 480px) {
    padding: 8px 16px;
    font-size: 15px;
  }
`;

export const ButtonContainer = styled.div`
    width: 80%; 
    height: 100%;
    display: flex;
    justify-content: end;
    align-items: center;
    padding: 0 6px;

    @media screen and (max-width: 768px) {
      display: none;
    }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 18px;
    top: 15px;
    font-size: 1.7rem;
    cursor: pointer;
    color: #0C0763; /* Indigo for consistency */
    transition: color 0.3s ease;

    :hover {
      color: #1e90ff; /* Soft blue on hover */
    }
  }
`;

export const MobileMenu = styled.div`
  position: absolute;
  top: 60px;
  right: 0;
  width: 100%;
  padding: 20px 0 30px 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 18px;

  /* Elegant Glassmorphism */
  background: rgba(15, 15, 25, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.12);

  /* Blue glow for branding */
  box-shadow: 0 0 20px rgba(0, 102, 255, 0.25);

  transition: all 0.5s ease-in-out;
  transform: ${({ isOpen }) => (isOpen ? 'translateY(0)' : 'translateY(-100%)')};
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  border-radius: 0 0 18px 18px;
  z-index: ${({ isOpen }) => (isOpen ? '999' : '-1')};

  @media (max-width: 600px) {
    gap: 14px;
    padding: 16px 0 24px 0;
  }
`;

export const MobileMenuItems = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 32px;
    list-style: none;
    width: 100%;
    height: 100%;
`;

export const MobileMenuLink = styled(LinkR)`
    color: ${({ theme }) => theme.text_primary};
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    :hover {
      color: ${({ theme }) => theme.primary};
    }

    &.active {
      border-bottom: 2px solid ${({ theme }) => theme.primary};
    }
`;

export const MobileLink = styled.a`
  color: #ffffff;
  font-weight: 500;
  font-size: 1.05rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  :hover {
    color: #1e90ff; /* Matches glow */
  }
`;


// Mobile-specific button using the dark indigo style
export const MobileMenuButton = styled.a`
    border: 1.8px solid #0C0763;
    justify-content: center;
    display: flex;
    align-items: center;
    height: 40px;
    border-radius: 20px;
    color: #0C0763;
    cursor: pointer;
    padding: 10px 16px; 
    font-weight: 500;
    text-decoration: none;
    font-size: 16px;
    width: max-content; 
    transition: all 0.6s ease-in-out;

    :hover {
        background: #0C0763;
        color: ${({ theme }) => theme.white};
    }
`;

export const MobileNavLogo = styled(LinkR)`
    width: 80%;
    padding: 0 6px;
    display: flex;
    justify-content: start;
    align-items: center;
    text-decoration: none;

    img {
        width: 120px; 
        height: 100px; 
        transition: width 0.3s, height 0.3s;
    }

    @media (max-width: 480px) {
        padding: 0;
        img {
            width: 100px; 
            height: 80px; 
        }
    }
`;