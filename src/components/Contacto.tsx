import styled from "styled-components";
import { motion } from "framer-motion";
import { FaInstagram, FaYoutube, FaSpotify } from 'react-icons/fa';



const ContactSection = styled(motion.section)`
  padding: 6rem 2rem;
  background: linear-gradient(to bottom, #000000, #0a0a0a);
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

const Form = styled(motion.form)`
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  background: rgba(30, 30, 30, 0.7);
  padding: 2.5rem;
  border-radius: 12px;
  backdrop-filter: blur(8px);
  border: 1px solid rgba(204, 0, 0, 0.3);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const Input = styled(motion.input).attrs({
  whileFocus: { scale: 1.02 }
})`
  padding: 1rem;
  background: rgba(20, 20, 20, 0.8);
  border: 1px solid rgba(204, 0, 0, 0.3);
  border-radius: 6px;
  font-size: 1rem;
  color: #fff;
  font-family: 'Montserrat', sans-serif;
  transition: all 0.3s ease;

  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }

  &:focus {
    outline: none;
    border-color: #cc0000;
    box-shadow: 0 0 0 2px rgba(204, 0, 0, 0.2);
  }
`;

const Textarea = styled(motion.textarea).attrs({
  whileFocus: { scale: 1.02 }
})`
  padding: 1rem;
  background: rgba(20, 20, 20, 0.8);
  border: 1px solid rgba(204, 0, 0, 0.3);
  border-radius: 6px;
  font-size: 1rem;
  color: #fff;
  resize: vertical;
  min-height: 150px;
  font-family: 'Montserrat', sans-serif;
  transition: all 0.3s ease;

  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }

  &:focus {
    outline: none;
    border-color: #cc0000;
    box-shadow: 0 0 0 2px rgba(204, 0, 0, 0.2);
  }
`;

const Button = styled(motion.button).attrs({
  whileHover: { scale: 1.03 },
  whileTap: { scale: 0.98 }
})`
  background: linear-gradient(135deg, #cc0000, #ff3333);
  color: white;
  padding: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(204, 0, 0, 0.3);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: all 0.6s ease;
  }

  &:hover {
    background: linear-gradient(135deg, #ff3333, #cc0000);
    box-shadow: 0 8px 20px rgba(204, 0, 0, 0.5);

    &::before {
      left: 100%;
    }
  }
`;

const SocialIcons = styled(motion.div)`
  margin-top: 4rem;
  text-align: center;
`;

const SocialLink = styled(motion.a).attrs({
  whileHover: { y: -5, scale: 1.1 }
})`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 0 1.5rem;
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.8rem;
  transition: all 0.3s ease;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: rgba(30, 30, 30, 0.7);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(204, 0, 0, 0.3);

  &:hover {
    color: #fff;
    background: rgba(204, 0, 0, 0.2);
    box-shadow: 0 5px 15px rgba(204, 0, 0, 0.3);
  }

  @media (max-width: 768px) {
    margin: 0 0.8rem;
    width: 50px;
    height: 50px;
    font-size: 1.5rem;
  }
`;



export default function Contacto() {
  return (
    <ContactSection 
      id="contacto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Title
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Contacto
      </Title>

      <Form
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        onSubmit={(e) => e.preventDefault()}
      >
        <Input 
          type="text" 
          placeholder="Tu nombre" 
          required 
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        />
        <Input 
          type="email" 
          placeholder="Tu correo electrónico" 
          required 
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        />
        <Textarea 
          placeholder="Tu mensaje" 
          required 
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        />
        <Button
          type="submit"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          Enviar Mensaje
        </Button>
      </Form>



      <SocialIcons
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.1 }}
      >
        <SocialLink 
          href="https://www.instagram.com/raff.band/?hl=es" 
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram de Raff"
        >
          <FaInstagram />
        </SocialLink>
        <SocialLink 
          href="https://www.youtube.com/channel/UCFykN77BFByaiZY2ftqHM0A" 
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube de Raff"
        >
          <FaYoutube />
        </SocialLink>
        <SocialLink 
          href="https://open.spotify.com/intl-es/artist/0u1MiedU0aI4UqPdUaV9xb" 
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Spotify de Raff"
        >
          <FaSpotify />
        </SocialLink>
      </SocialIcons>
    </ContactSection>
  );
}