import styled from "styled-components";
import { motion } from "framer-motion";

const MusicSection = styled(motion.section)`
  padding: 8rem 2rem;
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
    padding: 5rem 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 4rem 1rem;
  }
`;

const Title = styled(motion.h2)`
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(2.8rem, 7vw, 4.5rem);
  margin-bottom: 4rem;
  color: #fff;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 4px;
  position: relative;
  display: inline-block;
  width: 100%;
  text-shadow: 0 2px 10px rgba(204, 0, 0, 0.5);

  &::after {
    content: '';
    position: absolute;
    bottom: -20px;
    left: 50%;
    transform: translateX(-50%);
    width: 150px;
    height: 4px;
    background: linear-gradient(90deg, #cc0000, #ff3333);
    border-radius: 2px;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled(motion.h3)`
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(2rem, 4.5vw, 3rem);
  color: #fff;
  margin: 5rem 0 2rem;
  text-transform: uppercase;
  letter-spacing: 3px;
  position: relative;
  padding-left: 1.5rem;
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 6px;
    background: linear-gradient(to bottom, #cc0000, #ff3333);
    border-radius: 3px;
  }

  @media (max-width: 768px) {
    margin: 4rem 0 1.5rem;
  }
`;

const SpotifyPlayersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  gap: 3rem;
  margin-bottom: 6rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
    margin-bottom: 4rem;
  }
`;

const SpotifyPlayer = styled(motion.div).attrs({
  whileHover: { y: -5 }
})`
  position: relative;
  overflow: hidden;
  border-radius: 16px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.6);
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(204, 0, 0, 0.1), transparent);
    z-index: 1;
    pointer-events: none;
  }

  iframe {
    border-radius: 16px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    transition: all 0.4s ease;
    display: block;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(204, 0, 0, 0.4);

    iframe {
      box-shadow: 0 10px 25px rgba(204, 0, 0, 0.3);
    }
  }

  @media (max-width: 480px) {
    border-radius: 12px;
    
    iframe {
      border-radius: 12px;
    }
  }
`;





export default function Music() {
  return (
    <MusicSection 
      id="musica"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Title
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Música
      </Title>

      <ContentWrapper>
        <SectionTitle
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Últimos Lanzamientos
        </SectionTitle>

        <SpotifyPlayersGrid>
          <SpotifyPlayer
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <iframe 
              title="Livin' for Tonight"
              src="https://open.spotify.com/embed/track/7c7Wiup28ytfyIHWfWSYiy?utm_source=generator&theme=0" 
              width="100%" 
              height="380"
              frameBorder="0" 
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
              loading="lazy"
            ></iframe>
          </SpotifyPlayer>

          <SpotifyPlayer
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <iframe 
              title="God Save the Rock"
              src="https://open.spotify.com/embed/track/5dZ09VPf412eomXpI6S5Ra?utm_source=generator&theme=0" 
              width="100%" 
              height="380"
              frameBorder="0" 
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
              loading="lazy"
            ></iframe>
          </SpotifyPlayer>

          <SpotifyPlayer
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <iframe 
              title="Canción 3"
              src="https://open.spotify.com/embed/track/7fMLs0LYXaWpYSB251Pof6?utm_source=generator&theme=0" 
              width="100%" 
              height="380"
              frameBorder="0" 
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
              loading="lazy"
            ></iframe>
          </SpotifyPlayer>

          <SpotifyPlayer
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <iframe 
              title="Canción 4"
              src="https://open.spotify.com/embed/track/6eC5Y0Zev5Ze33hLI2kz6L?utm_source=generator&theme=0" 
              width="100%" 
              height="380"
              frameBorder="0" 
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
              loading="lazy"
            ></iframe>
          </SpotifyPlayer>
        </SpotifyPlayersGrid>

      

      
      </ContentWrapper>
    </MusicSection>
  );
}