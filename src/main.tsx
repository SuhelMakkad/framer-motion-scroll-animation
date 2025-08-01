import { createRoot } from 'react-dom/client';

import { StrictMode } from 'react';

import { App } from './App.tsx';
import { ThemeProvider } from './components/theme-provider/index.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <App />
    </ThemeProvider>
  </StrictMode>
);
