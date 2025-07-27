import styled from "styled-components";
import { motion } from "framer-motion";

const AboutSection = styled(motion.section)`
  padding: 6rem 2rem;
  background: linear-gradient(to bottom, #0a0a0a, #000000);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(90deg, transparent, #cc0000, #ff3333, transparent);
  }

  @media (max-width: 768px) {
    padding: 4rem 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 3rem 1rem;
  }
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const Title = styled(motion.h2)`
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(2.5rem, 6vw, 4rem);
  color: #fff;
  text-align: center;
  margin-bottom: 3rem;
  text-transform: uppercase;
  letter-spacing: 3px;
  position: relative;
  text-shadow: 0 0 15px rgba(204, 0, 0, 0.7);

  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 3px;
    background: linear-gradient(90deg, #cc0000, #ff3333);
    border-radius: 2px;
  }
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const StatsContainer = styled(motion.div)`
  background: rgba(30, 30, 30, 0.7);
  padding: 2rem;
  border-radius: 12px;
  backdrop-filter: blur(8px);
  border: 1px solid rgba(204, 0, 0, 0.3);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
  height: fit-content;
`;

const StatItem = styled.div`
  margin-bottom: 1.5rem;
  border-bottom: 1px solid rgba(204, 0, 0, 0.2);
  padding-bottom: 1rem;

  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
  }
`;

const StatTitle = styled.h3`
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.5rem;
  color: #cc0000;
  margin-bottom: 0.5rem;
  letter-spacing: 1px;
`;

const StatValue = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 1.2rem;
  color: #fff;
  font-weight: 500;
`;

const CityList = styled.ul`
  list-style: none;
  padding-left: 0;
  margin-top: 0.5rem;
`;

const CityItem = styled.li`
  font-family: 'Montserrat', sans-serif;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 0.3rem;
  display: flex;
  justify-content: space-between;
`;

const BioContainer = styled(motion.div)`
  background: rgba(30, 30, 30, 0.7);
  padding: 2rem;
  border-radius: 12px;
  backdrop-filter: blur(8px);
  border: 1px solid rgba(204, 0, 0, 0.3);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
`;

const BioText = styled.p`
  font-family: 'Montserrat', sans-serif;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
  margin-bottom: 1.5rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`;

const SocialLink = styled(motion.a).attrs({
  whileHover: { y: -3 }
})`
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.5rem;
  transition: all 0.3s ease;

  &:hover {
    color: #cc0000;
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
          </BioContainer>
        </ContentWrapper>
      </Container>
    </AboutSection>
  );
}