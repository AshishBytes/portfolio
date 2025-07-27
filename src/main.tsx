import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { DarkModeProvider } from './DarkModeContext';
import { HelmetProvider } from 'react-helmet-async';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <DarkModeProvider>
        <App />
      </DarkModeProvider>
    </HelmetProvider>
  </StrictMode>,
);
