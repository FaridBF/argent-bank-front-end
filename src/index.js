import React, { StrictMode } from 'react';

import { createRoot } from 'react-dom/client';

import './styles/index.css';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

root.render(<App />);
