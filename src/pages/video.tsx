import Header from "../components/Header";
import styled from "styled-components";

const VideosPage = () => {
  // Array de videos con sus datos
  const videos = [
    {
      id: "887OGlKdYbQ",
      title: "RAFF - Nombre del Video 1",
      description: "Descripción o detalles del primer video"
    },
    {
      id: "w_fYRAt-ZI8",
      title: "RAFF - Nombre del Video 2",
      description: "Descripción del segundo video"
    },
    {
      id: "XgdXcgpH3YQ",
      title: "RAFF - Nombre del Video 3",
      description: "Descripción del tercer video"
    }
  ];

  return (
    <div>
      <Header />
      
      <VideoSection>
        <SectionTitle>Videos Oficiales</SectionTitle>
        <VideoGrid>
          {videos.map((video) => (
            <VideoCard key={video.id}>
              <YouTubeIframe
                src={`https://www.youtube.com/embed/${video.id}`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <VideoInfo>
                <VideoTitle>{video.title}</VideoTitle>
                <VideoDescription>{video.description}</VideoDescription>
              </VideoInfo>
            </VideoCard>
          ))}
        </VideoGrid>
      </VideoSection>
    </div>
  );
};

// Estilos mejorados
const VideoSection = styled.section`
  min-height: 100vh;
  padding: 2rem;
  padding-top: 100px;
  background: #000;
  color: #fff;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 2rem;
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

const VideoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const VideoCard = styled.div`
  background: #111;
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 4px 8px rgba(204, 0, 0, 0.3);
  border-left: 4px solid #cc0000;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(204, 0, 0, 0.5);
  }
`;

const YouTubeIframe = styled.iframe`
  width: 100%;
  height: 200px;
  border: none;

  @media (min-width: 768px) {
    height: 250px;
  }
`;

const VideoInfo = styled.div`
  padding: 1rem;
`;

const VideoTitle = styled.h3`
  font-size: 1.2rem;
  margin: 0 0 0.5rem 0;
  color: #fff;
`;

const VideoDescription = styled.p`
  color: #aaa;
  font-size: 0.9rem;
  margin: 0;
`;

export default VideosPage;