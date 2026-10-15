import { createRoot } from 'react-dom/client';
import React from 'react';
import App from './App.tsx';

// Analytics must not prevent the plumbing website from rendering.
createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
