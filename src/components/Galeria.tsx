import styled from "styled-components";
import { motion } from "framer-motion";

const GallerySection = styled(motion.section)`
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

const Title = styled(motion.h2)`
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(2.5rem, 6vw, 4rem);
  margin-bottom: 3rem;
  color: #fff;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 3px;
  position: relative;
  display: inline-block;
  width: 100%;
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

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const ImgWrapper = styled(motion.div).attrs({
  whileHover: { scale: 1.03 }
})`
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.6);
  aspect-ratio: 1/1;
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  border: 1px solid rgba(204, 0, 0, 0.2);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      135deg, 
      rgba(204, 0, 0, 0.1) 0%, 
      rgba(0, 0, 0, 0.4) 100%
    );
    z-index: 1;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    box-shadow: 0 15px 30px rgba(204, 0, 0, 0.4);
    border-color: rgba(204, 0, 0, 0.4);

    &::before {
      opacity: 1;
    }

    img {
      transform: scale(1.1);
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  }
`;

const Caption = styled(motion.div)`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 1rem;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
  color: white;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.9rem;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.3s ease;
  z-index: 2;

  ${ImgWrapper}:hover & {
    opacity: 1;
    transform: translateY(0);
  }
`;

export default function Galeria() {
  const images = [
    { src: "/galeria1.jpg", alt: "Raff en vivo 1", caption: "Concierto en Rock Fest 2023" },
    { src: "/galeria2.jpg", alt: "Raff en vivo 2", caption: "Directo en Sala Caracol" },
    { src: "/galeria3.jpg", alt: "Raff backstage", caption: "Backstage - Festival Sonorama" },
    { src: "/galeria4.jpg", alt: "Raff sesión de fotos", caption: "Sesión de fotos 'God Save the Rock'" },
    { src: "/galeria5.jpg", alt: "Raff en estudio", caption: "Grabando nuevo material" },
    { src: "/galeria6.jpg", alt: "Raff firma de discos", caption: "Firma de discos en Madrid" }
  ];

  return (
    <GallerySection 
      id="galeria"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Title
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Galería
      </Title>

      <Grid>
        {images.map((image, index) => (
          <ImgWrapper
            key={index}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
          >
            <img src={image.src} alt={image.alt} />
            <Caption>{image.caption}</Caption>
          </ImgWrapper>
        ))}
      </Grid>
    </GallerySection>
  );
}