import styled from "styled-components";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

interface NavProps {
  $isOpen?: boolean;
}

interface NavLinkProps extends NavProps {
  className?: string;
}

interface SocialIconsProps extends NavProps {
  children?: React.ReactNode;
}

interface MobileActionButtonProps extends NavProps {
  href?: string;
  onClick?: () => void;
  children?: React.ReactNode;
}

const HeaderContainer = styled(motion.header)<{ $isScrolled: boolean }>`
  background: ${props =>
    props.$isScrolled
      ? 'linear-gradient(to bottom, rgba(0,0,0,0.95), rgba(0,0,0,0.85))'
      : 'linear-gradient(to bottom, rgba(0,0,0,0.9), rgba(0,0,0,0.7))'};
  backdrop-filter: blur(12px);
  padding: ${props => (props.$isScrolled ? '0.8rem 0' : '1.2rem 0')};
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  border-bottom: 1px solid rgba(204, 0, 0, 0.2);
  transition: all 0.4s ease;
`;

const HeaderContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media (max-width: 1024px) {
    padding: 0 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 0 1rem;
  }
`;

const LogoContainer = styled(motion.div)`
  z-index: 1001;

  img {
    height: 50px;
    transition: all 0.4s ease;
    filter: drop-shadow(0 2px 10px rgba(204, 0, 0, 0.5));

    &:hover {
      transform: scale(1.1) rotate(-5deg);
      filter: drop-shadow(0 4px 20px rgba(204, 0, 0, 0.7));
    }

    @media (max-width: 768px) {
      height: 40px;
    }

    @media (max-width: 480px) {
      height: 35px;
    }
  }
`;

const Nav = styled.nav<NavProps>`
  display: flex;
  gap: 2rem;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  @media (max-width: 1024px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.98);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transform: ${props => (props.$isOpen ? 'translateX(0)' : 'translateX(100%)')};
    transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    z-index: 999;
    gap: 2.5rem;
    padding: 0;
    margin: 0;
    overflow-y: auto;
  }
`;

const NavLink = styled(motion(Link))<NavLinkProps>`
  color: #ffffff;
  text-decoration: none;
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.3rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  position: relative;
  opacity: 0.8;
  transition: all 0.3s ease;
  padding: 0.5rem 0;

  &:hover {
    opacity: 1;
    color: #fff;
  }

  &.active {
    color: #ff3333;
    opacity: 1;
  }

  &::before {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 0;
    background: linear-gradient(90deg, #cc0000, #ff3333);
    transition: width 0.3s ease;
  }

  &:hover::before,
  &.active::before {
    width: 100%;
  }

  @media (max-width: 1024px) {
    font-size: 2rem;
    padding: 0.5rem 1rem;
    opacity: ${props => (props.$isOpen ? 1 : 0)};
    transform: ${props => (props.$isOpen ? 'translateY(0)' : 'translateY(20px)')};
    transition: all 0.4s ease ${props => props.$isOpen ? '0.2s' : '0s'};
    
    &:nth-child(1) { transition-delay: ${props => props.$isOpen ? '0.1s' : '0s'}; }
    &:nth-child(2) { transition-delay: ${props => props.$isOpen ? '0.15s' : '0s'}; }
    &:nth-child(3) { transition-delay: ${props => props.$isOpen ? '0.2s' : '0s'}; }
    &:nth-child(4) { transition-delay: ${props => props.$isOpen ? '0.25s' : '0s'}; }
    &:nth-child(5) { transition-delay: ${props => props.$isOpen ? '0.3s' : '0s'}; }
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

const MobileMenuButton = styled(motion.button).attrs({
  whileTap: { scale: 0.9 }
})`
  background: none;
  border: none;
  color: white;
  font-size: 1.8rem;
  cursor: pointer;
  z-index: 1001;
  display: none;
  padding: 0.5rem;
  position: relative;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 1025px) {
    display: none;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
    width: 35px;
    height: 35px;
  }
`;

const ActionButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  z-index: 1001;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const Button = styled(motion.a).attrs({
  whileHover: { y: -2 },
  whileTap: { scale: 0.98 }
})`
  background: linear-gradient(135deg, #cc0000, #ff3333);
  color: white;
  padding: 0.8rem 1.6rem;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.9rem;
  font-weight: 600;
  border-radius: 4px;
  text-transform: uppercase;
  text-decoration: none;
  transition: all 0.4s ease;
  box-shadow: 0 4px 15px rgba(204, 0, 0, 0.3);

  &:hover {
    box-shadow: 0 6px 25px rgba(204, 0, 0, 0.5);
    transform: translateY(-3px);
  }
`;

const MobileActionButton = styled(Button)<MobileActionButtonProps>`
  display: none;
  margin-top: 2rem;
  font-size: 1.2rem;
  padding: 1rem 2rem;

  @media (max-width: 1024px) {
    display: block;
    opacity: ${props => (props.$isOpen ? 1 : 0)};
    transform: ${props => (props.$isOpen ? 'translateY(0)' : 'translateY(20px)')};
    transition: all 0.4s ease 0.35s;
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
    padding: 0.9rem 1.8rem;
  }
`;

const SocialIcons = styled.div<SocialIconsProps>`
  display: flex;
  gap: 1rem;

  a {
    color: rgba(255, 255, 255, 0.8);
    font-size: 1.2rem;
    transition: all 0.3s ease;

    &:hover {
      color: #cc0000;
      transform: translateY(-2px);
    }
  }

  @media (max-width: 1024px) {
    gap: 1.5rem;
    margin-top: 1.5rem;
    
    a {
      font-size: 1.8rem;
      opacity: ${props => (props.$isOpen ? 1 : 0)};
      transform: ${props => (props.$isOpen ? 'translateY(0)' : 'translateY(20px)')};
      transition: all 0.4s ease;
      
      &:nth-child(1) { transition-delay: ${props => props.$isOpen ? '0.4s' : '0s'}; }
      &:nth-child(2) { transition-delay: ${props => props.$isOpen ? '0.45s' : '0s'}; }
      &:nth-child(3) { transition-delay: ${props => props.$isOpen ? '0.5s' : '0s'}; }
    }
  }

  @media (max-width: 480px) {
    gap: 1.2rem;
    
    a {
      font-size: 1.5rem;
    }
  }
`;

const CloseButton = styled.div`
  position: absolute;
  top: 30px;
  right: 30px;
  font-size: 2rem;
  color: white;
  cursor: pointer;
  z-index: 1001;
  opacity: 0.8;
  transition: all 0.3s ease;

  &:hover {
    color: #ff3333;
    opacity: 1;
  }

  @media (max-width: 480px) {
    top: 20px;
    right: 20px;
    font-size: 1.8rem;
  }
`;

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(prev => {
      const next = !prev;
      document.body.style.overflow = next ? "hidden" : "auto";
      return next;
    });
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <HeaderContainer
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      $isScrolled={isScrolled}
    >
      <HeaderContent>
        <LogoContainer whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <img src="/logoraff-removebg-preview.png" alt="RAFF Logo" />
        </LogoContainer>

        <MobileMenuButton 
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? (
            <i className="fas fa-times"></i>
          ) : (
            <i className="fas fa-bars"></i>
          )}
        </MobileMenuButton>

        <Nav $isOpen={isMenuOpen}>
          {isMenuOpen && (
            <CloseButton onClick={closeMenu}>
              <i className="fas fa-times"></i>
            </CloseButton>
          )}

          <NavLink 
            to="/" 
            className="active" 
            onClick={closeMenu}
            $isOpen={isMenuOpen}
          >
            Inicio
          </NavLink>

          <NavLink 
            to="/Discografia" 
            onClick={closeMenu}
            $isOpen={isMenuOpen}
          >
            Discografía
          </NavLink>
          
          <NavLink 
            to="/video" 
            onClick={closeMenu}
            $isOpen={isMenuOpen}
          >
            Videos
          </NavLink>
          
          <NavLink 
            to="/Tour" 
            onClick={closeMenu}
            $isOpen={isMenuOpen}
          >
            Tour
          </NavLink>
          
          <NavLink 
            to="/Contacto" 
            onClick={closeMenu}
            $isOpen={isMenuOpen}
          >
            Contacto
          </NavLink>

          <SocialIcons $isOpen={isMenuOpen}>
            <a href="https://instagram.com/raff.band" target="_blank" rel="noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://youtube.com/raff.band" target="_blank" rel="noreferrer">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="https://spotify.com/raff.band" target="_blank" rel="noreferrer">
              <i className="fab fa-spotify"></i>
            </a>
          </SocialIcons>

          <MobileActionButton 
            href="#musica" 
            onClick={closeMenu}
            $isOpen={isMenuOpen}
          >
            Escuchar Música
          </MobileActionButton>
        </Nav>

        <ActionButtons>
          <SocialIcons>
            <a href="https://instagram.com/raff.band" target="_blank" rel="noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://youtube.com/raff.band" target="_blank" rel="noreferrer">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="https://spotify.com/raff.band" target="_blank" rel="noreferrer">
              <i className="fab fa-spotify"></i>
            </a>
          </SocialIcons>
          <Button href="#musica">Escuchar Música</Button>
        </ActionButtons>
      </HeaderContent>
    </HeaderContainer>
  );
}