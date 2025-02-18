import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import React from 'react';

import { miyagi } from 'ldrs';

miyagi.register(); // ✅ Register the loader component globally

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
