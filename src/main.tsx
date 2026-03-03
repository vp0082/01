console.log('Main.tsx is executing...');
document.body.style.backgroundColor = 'blue';

import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

console.log('Imports in Main.tsx completed');

const container = document.getElementById('root');
if (container) {
  console.log('Root container found');
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  console.log('React render called');
} else {
  console.error('Root container NOT found');
  document.body.innerHTML = '<h1>ERRO: Container #root não encontrado!</h1>';
}
