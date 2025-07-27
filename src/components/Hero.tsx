import styled from "styled-components";
import { motion } from "framer-motion";

const HeroSection = styled(motion.section)`
  background: 
    linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url('/1.png') center/cover no-repeat;
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 1rem;
  position: relative;
  overflow: hidden;
  margin-top: 80px;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 150px;
    background: linear-gradient(transparent, #000);
    z-index: 1;
  }

  @media (max-width: 1024px) {
    margin-top: 70px;
  }

  @media (max-width: 768px) {
    padding: 1rem 0.5rem;
    margin-top: 65px;
  }

  @media (max-width: 480px) {
    min-height: 90vh;
    margin-top: 60px;
  }

  @media (max-height: 700px) {
    min-height: 700px;
  }
`;

const HeroContent = styled(motion.div)`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1rem;

  @media (max-width: 480px) {
    padding: 0 0.5rem;
  }
`;

const Logo = styled(motion.img)`
  width: min(350px, 80vw);
  margin-bottom: 1rem;
  filter: drop-shadow(0 0 15px rgba(204, 0, 0, 0.8));

  @media (max-width: 768px) {
    width: min(220px, 60vw);
    margin-bottom: 0.8rem;
  }

  @media (max-width: 480px) {
    width: min(180px, 50vw);
    margin-bottom: 0.5rem;
  }
`;

const Title = styled(motion.h1)`
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(3rem, 10vw, 7rem);
  letter-spacing: clamp(3px, 2vw, 8px);
  color: #fff;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  text-shadow: 0 0 25px rgba(204, 0, 0, 0.9);
  position: relative;
  display: inline-block;
  line-height: 1;
  background: linear-gradient(90deg, #fff, #eee);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  padding: 0 1rem;

  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: clamp(80px, 20vw, 120px);
    height: 4px;
    background: linear-gradient(90deg, #cc0000, #ff3333);
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    font-size: clamp(2.5rem, 10vw, 5rem);
  }

  @media (max-width: 480px) {
    margin-bottom: 0.3rem;
    font-size: clamp(2rem, 10vw, 4rem);
    
    &::after {
      height: 3px;
      bottom: -10px;
    }
  }
`;

const Subtitle = styled(motion.h2)`
  font-family: 'Montserrat', sans-serif;
  font-weight: 300;
  font-size: clamp(1rem, 4vw, 2.2rem);
  letter-spacing: clamp(4px, 3vw, 10px);
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: clamp(1.5rem, 5vw, 3rem);
  text-transform: uppercase;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
  position: relative;
  padding: 0 1rem;
  line-height: 1.3;

  &::before, &::after {
    content: '✧';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    color: #cc0000;
    font-size: clamp(1rem, 3vw, 1.5rem);
    opacity: 0.7;
  }

  &::before {
    left: -5px;
  }

  &::after {
    right: -5px;
  }

  @media (max-width: 768px) {
    font-size: clamp(0.9rem, 4vw, 1.8rem);
  }

  @media (max-width: 480px) {
    margin-bottom: 1.2rem;
    font-size: clamp(0.8rem, 4vw, 1.5rem);
    
    &::before, &::after {
      font-size: 0.8rem;
    }
  }
`;

const CTAButton = styled(motion.a).attrs({
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 }
})`
  padding: clamp(0.8rem, 3vw, 1.2rem) clamp(1.5rem, 8vw, 3rem);
  background: transparent;
  color: #fff;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: clamp(0.8rem, 3vw, 1.1rem);
  letter-spacing: clamp(1px, 1vw, 3px);
  text-transform: uppercase;
  text-decoration: none;
  border: 2px solid #cc0000;
  border-radius: 50px;
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  position: relative;
  overflow: hidden;
  z-index: 1;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  margin: 0 0.5rem;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(204, 0, 0, 0.6), transparent);
    transition: all 0.7s ease;
    z-index: -1;
  }

  &:hover {
    color: #fff;
    letter-spacing: clamp(2px, 1.2vw, 4px);
    border-color: #ff3333;
    box-shadow: 0 8px 25px rgba(204, 0, 0, 0.5);

    &::before {
      left: 100%;
    }
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #cc0000;
    z-index: -2;
    opacity: 0;
    transition: all 0.4s ease;
  }

  &:hover::after {
    opacity: 1;
  }

  @media (max-width: 768px) {
    padding: 0.8rem 2rem;
  }

  @media (max-width: 480px) {
    padding: 0.7rem 1.8rem;
    font-size: 0.9rem;
  }
`;

export default function Hero() {
  return (
    <HeroSection
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <HeroContent
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <Logo 
          src="/logoraff-removebg-preview.png" 
          alt="RAFF Logo"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6, type: "spring" }}
        />
        
        <Title
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          RAFF
        </Title>
        
        <Subtitle
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          GOD SAVE THE ROCK
        </Subtitle>
        
        <CTAButton
          href="https://open.spotify.com/intl-es/album/63OcBvryT7vnYauF11VxtC" 
          target="_blank"
          rel="noopener noreferrer"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2, type: "spring" }}
        >
          VER ÚLTIMO LANZAMIENTO
        </CTAButton>
      </HeroContent>
    </HeroSection>
  );
}