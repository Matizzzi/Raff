// src/pages/Discografia.tsx
import Header from "../components/Header";
import styled from "styled-components";
import { motion } from "framer-motion";

const Discografia = () => {
  const albums = [
    {
      id: 1,
      title: "Álbum Inicial (2018)",
      spotifyEmbed: (
        <iframe
          style={{ borderRadius: "12px" }}
          src="https://open.spotify.com/embed/album/15qfjffnfLjwVAhOjlzfMi?utm_source=generator"
          width="100%"
          height="352"
          frameBorder="0"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      ),
      image: "/WhatsApp Image 2025-07-26 at 18.15.25 (1).jpeg",
      credits: "Primer trabajo de estudio"
    },
    {
      id: 2,
      title: "Evolución (2019)",
      spotifyEmbed: (
        <iframe
          style={{ borderRadius: "12px" }}
          src="https://open.spotify.com/embed/album/4YpiBZIKP80jUvRj1NJUxR?utm_source=generator"
          width="100%"
          height="352"
          frameBorder="0"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      ),
      image: "/WhatsApp Image 2025-07-26 at 18.15.25 (2).jpeg",
      credits: "Grabado en Buenos Aires"
    },
    {
      id: 3,
      title: "Consolidación (2020)",
      spotifyEmbed: (
        <iframe
          style={{ borderRadius: "12px" }}
          src="https://open.spotify.com/embed/album/29BnQArkFXrSx2A60PT0el?utm_source=generator"
          width="100%"
          height="352"
          frameBorder="0"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      ),
      image: "/WhatsApp Image 2025-07-26 at 18.15.25 (3).jpeg",
      credits: "Álbum nominado a premios"
    },
    {
      id: 4,
      title: "Experimento (2022)",
      spotifyEmbed: (
        <iframe
          style={{ borderRadius: "12px" }}
          src="https://open.spotify.com/embed/album/6DwE53R0c12SQmYfhD6oOt?utm_source=generator"
          width="100%"
          height="352"
          frameBorder="0"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      ),
      image: "/WhatsApp Image 2025-07-26 at 18.15.25.jpeg",
      credits: "Grabado en vivo"
    },
    {
      id: 5,
      title: "Livin' For Tonight (2023)",
      spotifyEmbed: (
        <iframe
          style={{ borderRadius: "12px" }}
          src="https://open.spotify.com/embed/album/63OcBvryT7vnYauF11VxtC?utm_source=generator"
          width="100%"
          height="352"
          frameBorder="0"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      ),
      image: "/WhatsApp Image 2025-07-26 at 22.22.05.jpeg",
      credits: "Producido por RAFF Music"
    }
  ];

  return (
    <div>
      <Header />
      
      <DiscografiaSection id="discografia">
        <SectionTitle>Nuestra Trayectoria</SectionTitle>
        
        <Timeline>
          {albums.map((album, index) => (
            <AlbumContainer 
              key={album.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <AlbumHeader>
                <AlbumNumber>{index + 1}</AlbumNumber>
                <AlbumTitle>{album.title}</AlbumTitle>
              </AlbumHeader>
              
              <AlbumContent>
                <AlbumImage src={album.image} alt={album.title} />
                <SpotifyEmbed>{album.spotifyEmbed}</SpotifyEmbed>
              </AlbumContent>
              
              <AlbumCredits>
                <h4>Créditos:</h4>
                <p>{album.credits}</p>
              </AlbumCredits>
            </AlbumContainer>
          ))}
        </Timeline>
        
        <BandEvolutionTitle>Evolución de la Banda</BandEvolutionTitle>
        <BandPhotos>
          {albums.map((album) => (
            <BandPhoto 
              key={`photo-${album.id}`}
              src={album.image} 
              alt={`RAFF ${album.title}`}
              whileHover={{ scale: 1.05 }}
            />
          ))}
        </BandPhotos>
      </DiscografiaSection>
    </div>
  );
};

// Estilos
const DiscografiaSection = styled.section`
  min-height: 100vh;
  padding: 2rem;
  padding-top: 100px;
  background: #000;
  color: #fff;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  color: #cc0000;
  font-family: 'Bebas Neue', sans-serif;
  letter-spacing: 2px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background: linear-gradient(90deg, #cc0000, #ff3333);
  }
`;

const Timeline = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const AlbumContainer = styled(motion.div)`
  background: #111;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
  border-left: 4px solid #cc0000;
`;

const AlbumHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 1.5rem;
  background: rgba(204, 0, 0, 0.1);
  border-bottom: 1px solid #333;
`;

const AlbumNumber = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  color: #cc0000;
  margin-right: 1rem;
  font-family: 'Bebas Neue', sans-serif;
`;

const AlbumTitle = styled.h3`
  font-size: 1.5rem;
  margin: 0;
  color: #fff;
`;

const AlbumContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  padding: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const AlbumImage = styled.img`
  width: 100%;
  border-radius: 8px;
  object-fit: cover;
  height: 350px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
`;

const SpotifyEmbed = styled.div`
  iframe {
    width: 100%;
    height: 350px;
  }
`;

const AlbumCredits = styled.div`
  padding: 1rem 1.5rem;
  background: rgba(20, 20, 20, 0.8);
  border-top: 1px solid #333;

  h4 {
    color: #cc0000;
    margin-bottom: 0.5rem;
  }

  p {
    margin: 0;
    color: #aaa;
  }
`;

const BandEvolutionTitle = styled.h3`
  text-align: center;
  font-size: 2rem;
  margin: 4rem 0 2rem;
  color: #fff;
  font-family: 'Bebas Neue', sans-serif;
  letter-spacing: 1px;
`;

const BandPhotos = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const BandPhoto = styled(motion.img)`
  width: 100%;
  border-radius: 8px;
  object-fit: cover;
  height: 250px;
  box-shadow: 0 4px 8px rgba(204, 0, 0, 0.3);
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.03);
  }
`;

export default Discografia;