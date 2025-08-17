import styled from "styled-components";
import { motion } from "framer-motion";

const AboutSection = styled(motion.section)`
  padding: 6rem 1.5rem;
  background: linear-gradient(to bottom, #0a0a0a, #111111);
  position: relative;
  overflow: hidden;
  border-bottom: 1px solid rgba(204, 0, 0, 0.1);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(90deg, 
      transparent, 
      #cc0000, 
      #ff3333, 
      #cc0000, 
      transparent);
    box-shadow: 0 0 20px rgba(204, 0, 0, 0.6);
    z-index: 2;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
      radial-gradient(circle at 20% 30%, rgba(204, 0, 0, 0.1) 0%, transparent 40%),
      radial-gradient(circle at 80% 70%, rgba(204, 0, 0, 0.1) 0%, transparent 40%);
    pointer-events: none;
  }

  @media (min-width: 768px) {
    padding: 8rem 2rem;
  }

  @media (min-width: 1200px) {
    padding: 10rem 2rem;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  width: 100%;
  padding: 0 1rem;

  @media (min-width: 768px) {
    padding: 0 1.5rem;
  }
`;

const Title = styled(motion.h2)`
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(2.5rem, 8vw, 5rem);
  color: #fff;
  text-align: center;
  margin-bottom: 3rem;
  text-transform: uppercase;
  letter-spacing: 3px;
  position: relative;
  text-shadow: 
    0 0 10px rgba(204, 0, 0, 0.8),
    0 0 20px rgba(204, 0, 0, 0.4);
  
  background: linear-gradient(to right, #fff, #ddd);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;

  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 3px;
    background: linear-gradient(90deg, #cc0000, #ff3333, #cc0000);
    border-radius: 2px;
    box-shadow: 0 0 15px rgba(204, 0, 0, 0.6);
  }

  @media (min-width: 768px) {
    margin-bottom: 4rem;
    letter-spacing: 5px;
    
    &::after {
      width: 150px;
      height: 4px;
      bottom: -20px;
    }
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: stretch;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1.2fr;
    gap: 3rem;
  }

  @media (min-width: 992px) {
    gap: 4rem;
  }
`;

const StatsContainer = styled(motion.div)`
  background: rgba(20, 20, 20, 0.8);
  padding: 1.5rem;
  border-radius: 12px;
  backdrop-filter: blur(12px);
  border: 1px solid rgba(204, 0, 0, 0.4);
  box-shadow: 
    0 10px 30px rgba(0, 0, 0, 0.5),
    inset 0 0 15px rgba(204, 0, 0, 0.2);
  height: fit-content;
  position: relative;
  overflow: hidden;
  order: 2;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: 
      radial-gradient(circle, rgba(204, 0, 0, 0.1) 0%, transparent 70%);
    z-index: -1;
  }

  @media (min-width: 768px) {
    padding: 2rem;
    border-radius: 16px;
    order: 1;
  }

  @media (min-width: 992px) {
    padding: 2.5rem;
  }
`;

const StatItem = styled.div`
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  position: relative;

  &:not(:last-child)::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(90deg, 
      transparent, 
      rgba(204, 0, 0, 0.4), 
      transparent);
  }

  @media (min-width: 768px) {
    margin-bottom: 2rem;
    padding-bottom: 1.5rem;
  }
`;

const StatTitle = styled.h3`
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.5rem;
  color: #cc0000;
  margin-bottom: 0.5rem;
  letter-spacing: 1px;
  text-shadow: 0 0 8px rgba(204, 0, 0, 0.4);
  display: flex;
  align-items: center;
  gap: 8px;

  &::before {
    content: '•';
    color: #ff3333;
    font-size: 1.8rem;
  }

  @media (min-width: 768px) {
    font-size: 1.8rem;
    letter-spacing: 2px;
    gap: 10px;
    margin-bottom: 0.8rem;
  }
`;

const StatValue = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 1.2rem;
  color: #fff;
  font-weight: 600;
  margin-left: 20px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: -12px;
    top: 50%;
    transform: translateY(-50%);
    width: 4px;
    height: 4px;
    background: #ff3333;
    border-radius: 50%;
  }

  @media (min-width: 768px) {
    font-size: 1.5rem;
    margin-left: 25px;

    &::before {
      left: -15px;
      width: 5px;
      height: 5px;
    }
  }
`;

const CityList = styled.ul`
  list-style: none;
  padding-left: 0;
  margin-top: 0.8rem;
`;

const CityItem = styled.li`
  font-family: 'Montserrat', sans-serif;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 0.6rem;
  display: flex;
  justify-content: space-between;
  padding: 0.4rem 0;
  position: relative;
  font-size: 1rem;

  span:first-child {
    font-weight: 500;
  }

  span:last-child {
    color: #ff3333;
    font-weight: 600;
  }

  &::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(90deg, 
      transparent, 
      rgba(255, 255, 255, 0.1), 
      transparent);
  }

  @media (min-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 0.8rem;
    padding: 0.5rem 0;
  }
`;

const BioContainer = styled(motion.div)`
  background: rgba(20, 20, 20, 0.8);
  padding: 1.5rem;
  border-radius: 12px;
  backdrop-filter: blur(12px);
  border: 1px solid rgba(204, 0, 0, 0.4);
  box-shadow: 
    0 10px 30px rgba(0, 0, 0, 0.5),
    inset 0 0 15px rgba(204, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
  order: 1;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 80px;
    height: 80px;
    background: radial-gradient(circle, rgba(204, 0, 0, 0.2) 0%, transparent 70%);
    z-index: -1;
  }

  @media (min-width: 768px) {
    padding: 2rem;
    border-radius: 16px;
    order: 2;

    &::before {
      width: 100px;
      height: 100px;
    }
  }

  @media (min-width: 992px) {
    padding: 2.5rem;
  }
`;

const BioText = styled.p`
  font-family: 'Montserrat', sans-serif;
  color: rgba(255, 255, 255, 0.95);
  line-height: 1.7;
  margin-bottom: 1.5rem;
  font-size: 1rem;
  position: relative;
  padding-left: 20px;

  &::before {
    content: '♪';
    position: absolute;
    left: 0;
    top: 0;
    color: rgba(204, 0, 0, 0.6);
    font-size: 1rem;
  }

  &:last-child {
    margin-bottom: 0;
  }

  @media (min-width: 768px) {
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: 2rem;

    &::before {
      font-size: 1.2rem;
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  justify-content: center;
  flex-wrap: wrap;

  @media (min-width: 768px) {
    gap: 1.5rem;
    margin-top: 3rem;
  }
`;

const SocialLink = styled(motion.a).attrs({
  whileHover: { 
    y: -5,
    scale: 1.1,
    color: "#ff3333"
  },
  whileTap: { scale: 0.9 }
})`
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.5rem;
  transition: all 0.3s ease;
  position: relative;
  padding: 0.5rem;

  &:hover {
    color: #ff3333;
    text-shadow: 0 0 15px rgba(255, 51, 51, 0.7);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 2px;
    background: #ff3333;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

const VinylRecord = styled.div`
  position: absolute;
  right: -30px;
  bottom: -30px;
  width: 120px;
  height: 120px;
  background: 
    radial-gradient(circle, #111 30%, transparent 31%),
    repeating-radial-gradient(circle, #111 0%, #111 1%, #222 2%, #222 3%);
  border-radius: 50%;
  opacity: 0.3;
  z-index: -1;
  animation: spin 20s linear infinite;

  @keyframes spin {
    100% { transform: rotate(360deg); }
  }

  @media (min-width: 768px) {
    width: 150px;
    height: 150px;
    right: -40px;
    bottom: -40px;
  }

  @media (min-width: 992px) {
    width: 200px;
    height: 200px;
    right: -50px;
    bottom: -50px;
  }
`;

export default function About() {
  return (
    <AboutSection 
      id="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Container>
        <Title
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Sobre RAFF
        </Title>

        <ContentWrapper>
          <StatsContainer
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <StatItem>
              <StatTitle>Seguidores</StatTitle>
              <StatValue>633</StatValue>
            </StatItem>

            <StatItem>
              <StatTitle>Oyentes mensuales</StatTitle>
              <StatValue>115</StatValue>
            </StatItem>

            <StatItem>
              <StatTitle>Top Ciudades</StatTitle>
              <CityList>
                <CityItem><span>Santiago, CL</span> <span>72 oyentes</span></CityItem>
                <CityItem><span>Melipilla, CL</span> <span>7 oyentes</span></CityItem>
                <CityItem><span>Valparaíso, CL</span> <span>6 oyentes</span></CityItem>
                <CityItem><span>Concepción, CL</span> <span>5 oyentes</span></CityItem>
              </CityList>
            </StatItem>

            <StatItem>
              <SocialLinks>
                <SocialLink href="https://facebook.com/raff.band" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook"></i>
                </SocialLink>
                <SocialLink href="https://instagram.com/raff.band" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram"></i>
                </SocialLink>
                <SocialLink href="#" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-spotify"></i>
                </SocialLink>
                <SocialLink href="#" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-youtube"></i>
                </SocialLink>
              </SocialLinks>
            </StatItem>
          </StatsContainer>

          <BioContainer
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <BioText>
              RAFF es una banda chilena de Rock ochentero fundada el 2020, bajo la mano de unos jóvenes melipillanos. Su viaje comienza con su primer sencillo "Heartbreaker" ese mismo año, donde conocemos el principal enfoque musical que tendría la banda, con toques de Glam Metal, Hair Metal y varios.
            </BioText>
            
            <BioText>
              En el año 2021 sale a la luz el Álbum "God Save The Rock", donde se remarcan distintas influencias desde los 80 en algunos de sus temas más escuchados como "Devils Boogie", "Nicolle" y "Midnight Case".
            </BioText>
            
            <BioText>
              Durante 2022 comienza una etapa de presentaciones para la banda donde el principal enfoque era tocar y hacerse un espacio en la escena musical, gracias a este proceso, la banda comenzó a tener mayor reconocimiento lo cual les permitió ser finalistas para abrir un show de Motley Crue y Def Leppard.
            </BioText>
            
            <BioText>
              Después de este periodo comienza una reformación de la banda debido a problemas internos y se libera el segundo sencillo "Danger" (2023), que sería la última canción con la formación original. Durante 2024 conocemos "Night After Night", el sencillo que representa una nueva era para la banda, con una nueva formación, y propuesta musical.
            </BioText>

            <VinylRecord />
          </BioContainer>
        </ContentWrapper>
      </Container>
    </AboutSection>
  );
}