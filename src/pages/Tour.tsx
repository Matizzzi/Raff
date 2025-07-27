// src/pages/TourPage.tsx
import Header from "../components/Header";
import styled from "styled-components";
import { motion } from "framer-motion";

interface Show {
  id: number;
  date: string;
  city: string;
  venue: string;
  ticketLink: string;
  soldOut?: boolean;
}

interface TicketButtonProps {
  $soldOut?: boolean;
}

const TourPage = () => {
  // Array tipado correctamente (vacío para mostrar el mensaje)
  const tourDates: Show[] = [];

  return (
    <div>
      <Header />
      
      <TourSection id="tour">
        <SectionTitle>Gira de Conciertos</SectionTitle>
        
        {tourDates.length > 0 ? (
          <TourDatesContainer>
            {tourDates.map((show) => (
              <ShowCard key={show.id}>
                <ShowDate>
                  {new Date(show.date).toLocaleDateString('es-AR', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric'
                  })}
                </ShowDate>
                <ShowInfo>
                  <ShowCity>{show.city}</ShowCity>
                  <ShowVenue>{show.venue}</ShowVenue>
                </ShowInfo>
                <TicketButton 
                  href={show.ticketLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  $soldOut={show.soldOut}
                >
                  {show.soldOut ? 'AGOTADO' : 'COMPRAR'}
                </TicketButton>
              </ShowCard>
            ))}
          </TourDatesContainer>
        ) : (
          <NoTourContainer
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <NoTourIcon>
              <i className="fas fa-calendar-times"></i>
            </NoTourIcon>
            <NoTourTitle>Actualmente no estamos de gira</NoTourTitle>
            <NoTourText>
              Estamos trabajando en nuevos shows. ¡Vuelve pronto para descubrir 
              nuestras próximas fechas o suscríbete para recibir notificaciones!
            </NoTourText>
            
            <NewsletterForm>
              <InputGroup>
                <EmailInput 
                  type="email" 
                  placeholder="tu@email.com" 
                />
                <SubscribeButton 
                  as={motion.button}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  NOTIFICARME
                </SubscribeButton>
              </InputGroup>
              <PrivacyText>
                Al suscribirte aceptas nuestras políticas de privacidad
              </PrivacyText>
            </NewsletterForm>
            
            <PastShowsButton
  as={motion.a}
  href="https://www.youtube.com/watch?v=887OGlKdYbQ&t=40s"
  target="_blank"
  rel="noopener noreferrer"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  <i className="fas fa-photo-video"></i> VER SHOWS ANTERIORES
</PastShowsButton>
          </NoTourContainer>
        )}
      </TourSection>
    </div>
  );
};

// Estilos con todos los componentes definidos
const TourSection = styled.section`
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

const TourDatesContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ShowCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #111;
  padding: 1.5rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  border-left: 4px solid #cc0000;

  &:hover {
    transform: translateX(5px);
    box-shadow: 0 4px 12px rgba(204, 0, 0, 0.3);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
`;

const ShowDate = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  min-width: 120px;
  color: #cc0000;
`;

const ShowInfo = styled.div`
  flex-grow: 1;
  padding: 0 1.5rem;

  @media (max-width: 768px) {
    padding: 0;
  }
`;

const ShowCity = styled.h3`
  margin: 0;
  font-size: 1.2rem;
`;

const ShowVenue = styled.p`
  margin: 0.25rem 0 0;
  color: #aaa;
  font-size: 0.9rem;
`;

const TicketButton = styled.a<TicketButtonProps>`
  background: ${props => props.$soldOut ? '#333' : 'linear-gradient(135deg, #cc0000, #ff3333)'};
  color: white;
  padding: 0.6rem 1.5rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 0.8rem;
  letter-spacing: 1px;
  cursor: ${props => props.$soldOut ? 'default' : 'pointer'};
  opacity: ${props => props.$soldOut ? 0.7 : 1};
  pointer-events: ${props => props.$soldOut ? 'none' : 'auto'};
  transition: all 0.3s ease;

  &:hover {
    ${props => !props.$soldOut && `
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(204, 0, 0, 0.4);
    `}
  }
`;

const NoTourContainer = styled(motion.div)`
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  background: rgba(20, 20, 20, 0.8);
  border-radius: 12px;
  border: 1px solid rgba(204, 0, 0, 0.3);
`;

const NoTourIcon = styled.div`
  font-size: 4rem;
  color: #cc0000;
  margin-bottom: 1.5rem;
`;

const NoTourTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: #fff;
  font-family: 'Bebas Neue', sans-serif;
  letter-spacing: 1px;
`;

const NoTourText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #aaa;
  margin-bottom: 2rem;
`;

const NewsletterForm = styled.div`
  margin-top: 2rem;
`;

const InputGroup = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 0.5rem;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const EmailInput = styled.input`
  flex-grow: 1;
  padding: 0.8rem 1.2rem;
  border: none;
  border-radius: 4px;
  background: #222;
  color: #fff;
  font-family: 'Montserrat', sans-serif;

  &::placeholder {
    color: #666;
  }
`;

const SubscribeButton = styled.button`
  background: linear-gradient(135deg, #cc0000, #ff3333);
  color: white;
  padding: 0 1.8rem;
  border: none;
  border-radius: 4px;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
  font-size: 0.9rem;
`;

const PrivacyText = styled.p`
  font-size: 0.7rem;
  color: #666;
  margin-top: 0.5rem;
`;

const PastShowsButton = styled.a`
  margin-top: 2rem;
  background: transparent;
  color: #cc0000;
  border: 1px solid #cc0000;
  padding: 0.8rem 1.5rem;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  text-decoration: none;

  &:hover {
    background: rgba(204, 0, 0, 0.1);
  }

  i {
    font-size: 0.9rem;
  }
`;

export default TourPage;