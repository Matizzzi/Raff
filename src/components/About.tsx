import styled from "styled-components";
import { motion } from "framer-motion";

const AboutSection = styled(motion.section)`
  padding: 8rem 2rem;
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

  @media (max-width: 768px) {
    padding: 5rem 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 4rem 1rem;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
`;

const Title = styled(motion.h2)`
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(3rem, 8vw, 5rem);
  color: #fff;
  text-align: center;
  margin-bottom: 4rem;
  text-transform: uppercase;
  letter-spacing: 5px;
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
    bottom: -20px;
    left: 50%;
    transform: translateX(-50%);
    width: 150px;
    height: 4px;
    background: linear-gradient(90deg, #cc0000, #ff3333, #cc0000);
    border-radius: 2px;
    box-shadow: 0 0 15px rgba(204, 0, 0, 0.6);
  }

  @media (max-width: 768px) {
    margin-bottom: 3rem;
    letter-spacing: 3px;
  }
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 4rem;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const StatsContainer = styled(motion.div)`
  background: rgba(20, 20, 20, 0.8);
  padding: 2.5rem;
  border-radius: 16px;
  backdrop-filter: blur(12px);
  border: 1px solid rgba(204, 0, 0, 0.4);
  box-shadow: 
    0 10px 30px rgba(0, 0, 0, 0.5),
    inset 0 0 15px rgba(204, 0, 0, 0.2);
  height: fit-content;
  position: relative;
  overflow: hidden;

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
`;

const StatItem = styled.div`
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
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
`;

const StatTitle = styled.h3`
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.8rem;
  color: #cc0000;
  margin-bottom: 0.8rem;
  letter-spacing: 2px;
  text-shadow: 0 0 8px rgba(204, 0, 0, 0.4);
  display: flex;
  align-items: center;
  gap: 10px;

  &::before {
    content: '•';
    color: #ff3333;
    font-size: 2rem;
  }
`;

const StatValue = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 1.5rem;
  color: #fff;
  font-weight: 600;
  margin-left: 25px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: -15px;
    top: 50%;
    transform: translateY(-50%);
    width: 5px;
    height: 5px;
    background: #ff3333;
    border-radius: 50%;
  }
`;

const CityList = styled.ul`
  list-style: none;
  padding-left: 0;
  margin-top: 1rem;
`;

const CityItem = styled.li`
  font-family: 'Montserrat', sans-serif;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 0.8rem;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
  position: relative;
  font-size: 1.1rem;

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
`;

const BioContainer = styled(motion.div)`
  background: rgba(20, 20, 20, 0.8);
  padding: 2.5rem;
  border-radius: 16px;
  backdrop-filter: blur(12px);
  border: 1px solid rgba(204, 0, 0, 0.4);
  box-shadow: 
    0 10px 30px rgba(0, 0, 0, 0.5),
    inset 0 0 15px rgba(204, 0, 0, 0.2);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100px;
    height: 100px;
    background: radial-gradient(circle, rgba(204, 0, 0, 0.2) 0%, transparent 70%);
    z-index: -1;
  }
`;

const BioText = styled.p`
  font-family: 'Montserrat', sans-serif;
  color: rgba(255, 255, 255, 0.95);
  line-height: 1.8;
  margin-bottom: 2rem;
  font-size: 1.1rem;
  position: relative;
  padding-left: 20px;

  &::before {
    content: '♪';
    position: absolute;
    left: 0;
    top: 0;
    color: rgba(204, 0, 0, 0.6);
    font-size: 1.2rem;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 3rem;
  justify-content: center;
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
  font-size: 2rem;
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
`;

const VinylRecord = styled.div`
  position: absolute;
  right: -50px;
  bottom: -50px;
  width: 200px;
  height: 200px;
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

  @media (max-width: 768px) {
    display: none;
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