// src/pages/Contacto.tsx
import Header from "../components/Header";
import styled from "styled-components";
import { motion } from "framer-motion";

const Contacto = () => {
  const email = "raffbandaoficial@gmail.com";

  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <div>
      <Header />
      
      <ContactSection id="contacto">
        <SectionTitle>Contacto</SectionTitle>
        
        <ContactContainer
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <ContactInfo>
            <ContactIcon>
              <i className="fas fa-envelope"></i>
            </ContactIcon>
            <ContactText>
              <h3>Email Oficial</h3>
              <p>Para bookings, prensa y colaboraciones</p>
            </ContactText>
            <EmailButton
              onClick={handleEmailClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {email}
            </EmailButton>
          </ContactInfo>

          <SocialLinks>
            <SocialTitle>Síguenos en redes</SocialTitle>
            <SocialIcons>
              <SocialIcon 
                href="https://instagram.com/raff.band" 
                target="_blank"
                whileHover={{ y: -3 }}
              >
                <i className="fab fa-instagram"></i>
              </SocialIcon>
              <SocialIcon 
                href="https://youtube.com/raff.band" 
                target="_blank"
                whileHover={{ y: -3 }}
              >
                <i className="fab fa-youtube"></i>
              </SocialIcon>
              <SocialIcon 
                href="https://spotify.com/raff.band" 
                target="_blank"
                whileHover={{ y: -3 }}
              >
                <i className="fab fa-spotify"></i>
              </SocialIcon>
            </SocialIcons>
          </SocialLinks>
        </ContactContainer>
      </ContactSection>
    </div>
  );
};

// Estilos
const ContactSection = styled.section`
  min-height: 100vh;
  padding: 2rem;
  padding-top: 100px;
  background: #000;
  color: #fff;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #cc0000;
  font-family: 'Bebas Neue', sans-serif;
  letter-spacing: 2px;
  position: relative;
  display: inline-block;

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

const ContactContainer = styled(motion.div)`
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  background: rgba(20, 20, 20, 0.8);
  border-radius: 12px;
  border: 1px solid rgba(204, 0, 0, 0.3);
`;

const ContactInfo = styled.div`
  margin-bottom: 2rem;
`;

const ContactIcon = styled.div`
  font-size: 3rem;
  color: #cc0000;
  margin-bottom: 1rem;
`;

const ContactText = styled.div`
  margin-bottom: 1.5rem;
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    color: #fff;
  }
  
  p {
    color: #aaa;
    font-size: 0.9rem;
  }
`;

const EmailButton = styled(motion.button)`
  background: linear-gradient(135deg, #cc0000, #ff3333);
  color: white;
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 8px rgba(204, 0, 0, 0.3);
`;

const SocialLinks = styled.div`
  margin-top: 2rem;
`;

const SocialTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: #fff;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
`;

const SocialIcon = styled(motion.a)`
  color: #fff;
  font-size: 1.8rem;
  transition: all 0.3s ease;
  
  &:hover {
    color: #cc0000;
  }
`;

export default Contacto;