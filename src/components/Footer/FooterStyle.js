import styled from 'styled-components';

export const FooterContainer = styled.div`
  position: relative;
  width: 100%;
  background: linear-gradient(180deg, #0a0a1a 0%, #07070f 100%);
  padding: 56px 24px 28px;
  overflow: hidden;
  font-family: 'Poppins', sans-serif;
`;

export const GridLines = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  background-image:
    linear-gradient(rgba(0, 199, 239, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 199, 239, 0.03) 1px, transparent 1px);
  background-size: 50px 50px;
`;

export const FooterWrapper = styled.footer`
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

export const TopRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const LogoBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const Logo = styled.h2`
  font-size: 1.3rem;
  font-weight: 800;
  color: #fff;
  margin: 0;
  letter-spacing: -0.01em;
`;

export const LogoTag = styled.span`
  font-size: 0.78rem;
  color: #00C7EF;
  font-weight: 500;
  letter-spacing: 0.03em;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 28px;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 600px) {
    gap: 16px;
  }
`;

export const NavLink = styled.a`
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  transition: color 0.2s ease;

  &:hover {
    color: #00C7EF;
  }
`;

export const SocialMediaIcons = styled.div`
  display: flex;
  gap: 10px;
`;

export const SocialMediaIcon = styled.a`
  width: 38px;
  height: 38px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.7);
  transition: all 0.25s ease;

  &:hover {
    border-color: rgba(0, 199, 239, 0.4);
    background: rgba(0, 199, 239, 0.08);
    color: #00C7EF;
    transform: translateY(-2px);
  }
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: rgba(255, 255, 255, 0.07);
`;

export const BottomRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;

  @media (max-width: 600px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const Copyright = styled.p`
  font-size: 0.82rem;
  color: rgba(255, 255, 255, 0.35);
  margin: 0;
`;

export const BackToTop = styled.button`
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.8rem;
  font-weight: 600;
  font-family: 'Poppins', sans-serif;
  padding: 8px 18px;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.25s ease;

  &:hover {
    border-color: rgba(0, 199, 239, 0.4);
    color: #00C7EF;
    background: rgba(0, 199, 239, 0.06);
  }
`;