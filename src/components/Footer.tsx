import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #0a0a0a;
  color: #fff;
  text-align: center;
  padding: 2rem 1rem;
  margin-top: 3rem;
  border-top: 2px solid red;
`;

const Socials = styled.div`
  margin: 1rem 0;
  display: flex;
  justify-content: center;
  gap: 1.5rem;

  a {
    color: #fff;
    font-size: 1.5rem;
    transition: color 0.3s;

    &:hover {
      color: red;
    }
  }
`;

const Copy = styled.p`
  font-size: 0.9rem;
  opacity: 0.7;
  margin-top: 1rem;
`;

const Credits = styled.div`
  margin-top: 1.5rem;
  font-size: 0.85rem;
  opacity: 0.8;

  a {
    color: red;
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
      color: #fff;
    }
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <Socials>
        <a
          href="https://www.instagram.com/raff.band/?hl=es"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-instagram"></i>
        </a>
        <a
          href="https://www.youtube.com/@RAFFofficial"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-youtube"></i>
        </a>
        <a
          href="https://open.spotify.com/intl-es/artist/0u1MiedU0aI4UqPdUaV9xb?si=c9Jc44aIQHSKWqxLl3YQAA"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-spotify"></i>
        </a>
      </Socials>

      <Copy>© {new Date().getFullYear()} RAFF - God Save The Rock 🤘</Copy>

      <Credits>
        Hecho por{" "}
        <a
          href="https://www.instagram.com/mati.sneie/?hl=es"
          target="_blank"
          rel="noreferrer"
        >
          Mati Sneie
        </a>{" "}
        | 📧{" "}
        <a href="mailto:mati.santelicess@gmail.com">
          mati.santelicess@gmail.com
        </a>
      </Credits>
    </FooterContainer>
  );
};

export default Footer;
