import styled from "styled-components";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
interface NavProps {
  $isOpen?: boolean;
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
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.95);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transform: ${props => (props.$isOpen ? 'translateX(0)' : 'translateX(100%)')};
    transition: transform 0.4s ease;
    z-index: 999;
    gap: 2rem;
    padding-top: 80px;
  }
`;

const NavLink = styled(motion.a).attrs({
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 }
})`
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
    font-size: 1.8rem;
    padding: 0.5rem 0;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const MobileMenuButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 1.8rem;
  cursor: pointer;
  z-index: 1001;
  display: none;
  padding: 0.5rem;

  @media (max-width: 1024px) {
    display: block;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
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

  @media (max-width: 1024px) {
    font-size: 1.2rem;
    padding: 1rem 2rem;
  }
`;

const SocialIcons = styled.div`
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
    
    a {
      font-size: 1.8rem;
    }
  }

  @media (max-width: 480px) {
    gap: 1.2rem;
    
    a {
      font-size: 1.5rem;
    }
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

        <MobileMenuButton onClick={toggleMenu}>
          {isMenuOpen ? (
            <i className="fas fa-times"></i>
          ) : (
            <i className="fas fa-bars"></i>
          )}
        </MobileMenuButton>

        <Nav $isOpen={isMenuOpen}>
          <NavLink as={Link} to="/" className="active" onClick={closeMenu}>
  Inicio
</NavLink>

          <NavLink as={Link} to="/Discografia" onClick={closeMenu}>
            Discografía
          </NavLink>
  <NavLink as={Link} to="/video" onClick={closeMenu}>
  Videos
</NavLink>
          <NavLink as={Link} to="/Tour" onClick={closeMenu}>
            Tour
          </NavLink>
          <NavLink as={Link} to="/Contacto" onClick={closeMenu}>
            Contacto
          </NavLink>

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