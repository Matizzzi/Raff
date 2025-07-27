import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import VideoPage from './pages/video'; 
import Contacto from './pages/Contacto';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyles';
import TourPage from './pages/Tour';
import Discografia from './pages/Discografia';
import theme from './styles/theme'; // Assuming you have a theme file

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/video" element={<VideoPage />} />
          <Route path="/tour" element={<TourPage />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/discografia" element={<Discografia />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
